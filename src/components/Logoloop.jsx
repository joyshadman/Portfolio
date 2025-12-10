import React, { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
};

const toCssLength = (value) => (typeof value === 'number' ? `${value}px` : value ?? undefined);
const cx = (...parts) => parts.filter(Boolean).join(' ');

// Resize Observer Hook
const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map((ref) => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => observers.forEach((obs) => obs?.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

// Image Loader Hook
const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];
    if (!images.length) {
      onLoad();
      return;
    }

    let remaining = images.length;
    const handleLoad = () => {
      remaining -= 1;
      if (remaining === 0) onLoad();
    };

    images.forEach((img) => {
      if (img.complete) handleLoad();
      else {
        img.addEventListener('load', handleLoad, { once: true });
        img.addEventListener('error', handleLoad, { once: true });
      }
    });

    return () =>
      images.forEach((img) => {
        img.removeEventListener('load', handleLoad);
        img.removeEventListener('error', handleLoad);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

// Smooth Animation Loop Hook
const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || seqWidth === 0) return;

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReduced) {
      track.style.transform = 'translate3d(0,0,0)';
      return;
    }

    const animate = (timestamp) => {
      if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;
      const delta = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const desiredVelocity = pauseOnHover && isHovered ? 0 : targetVelocity;
      velocityRef.current += (desiredVelocity - velocityRef.current) * 0.1; // smooth easing

      offsetRef.current = (offsetRef.current + velocityRef.current * delta) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px,0,0)`; // GPU-friendly

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimestampRef.current = null;
    };
  }, [seqWidth, targetVelocity, isHovered, pauseOnHover]);
};

// LogoLoop Component
const LogoLoop = memo(({
  logos,
  speed = 120,
  direction = 'left',
  width = '100%',
  logoHeight = 28,
  gap = 32,
  pauseOnHover = true,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = true,
  ariaLabel = 'Partner logos',
  className,
  style,
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const seqRef = useRef(null);

  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    const dir = direction === 'left' ? 1 : -1;
    return magnitude * dir * (speed < 0 ? -1 : 1);
  }, [speed, direction]);

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, []);

  useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);
  useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
  useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

  const cssVars = useMemo(() => ({
    '--logoloop-gap': `${gap}px`,
    '--logoloop-logoHeight': `${logoHeight}px`,
    ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor }),
  }), [gap, logoHeight, fadeOutColor]);

  const rootClasses = useMemo(() =>
    cx(
      'relative overflow-x-hidden group cursor-none', // ← hide cursor on entire carousel
      scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
      className
    ), [scaleOnHover, className]);

  const handleMouseEnter = useCallback(() => { if (pauseOnHover) setIsHovered(true); }, [pauseOnHover]);
  const handleMouseLeave = useCallback(() => { if (pauseOnHover) setIsHovered(false); }, [pauseOnHover]);

  const renderLogoItem = useCallback((item, key) => {
    const isNode = 'node' in item;
    const content = isNode ? item.node : (
      <img
        data-hoverable
        src={item.src}
        alt={item.alt ?? ''}
        title={item.title}
        className={cx('h-[var(--logoloop-logoHeight)] w-auto block object-contain cursor-none pointer-events-none transition-transform duration-400 ease-out')}
        loading="lazy"
        draggable={false}
      />
    );

    return (
      <li key={key} className="flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1] cursor-none">
        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="cursor-none pointer-events-auto" // clickable but cursor hidden
          >
            {content}
          </a>
        ) : content}
      </li>
    );
  }, []);

  const logoLists = useMemo(() => Array.from({ length: copyCount }, (_, i) => (
    <ul
      key={i}
      ref={i === 0 ? seqRef : undefined}
      className="flex items-center"
      role="list"
      aria-hidden={i > 0}
    >
      {logos.map((logo, idx) => renderLogoItem(logo, `${i}-${idx}`))}
    </ul>
  )), [copyCount, logos, renderLogoItem]);

  return (
    <div
      ref={containerRef}
      className={rootClasses}
      style={{ width: toCssLength(width), ...cssVars, ...style }}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {fadeOut && (
        <>
          <div className="absolute inset-y-0 left-0 z-[1] pointer-events-none w-[clamp(24px,8%,120px)] bg-gradient-to-r from-[var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))] to-transparent" />
          <div className="absolute inset-y-0 right-0 z-[1] pointer-events-none w-[clamp(24px,8%,120px)] bg-gradient-to-l from-[var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))] to-transparent" />
        </>
      )}

      <div className="flex w-max will-change-transform select-none" ref={trackRef}>
        {logoLists}
      </div>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;
