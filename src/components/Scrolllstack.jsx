import React, { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div
    className={`scroll-stack-card relative w-full h-80 my-8 p-12 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete,
}) => {
  const scrollerRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const animationFrameRef = useRef(null);

  // ---- Utility Functions ----
  const parsePercentage = (value, height) =>
    typeof value === "string" && value.includes("%")
      ? (parseFloat(value) / 100) * height
      : parseFloat(value);

  const calculateProgress = (scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  };

  const getScrollData = () => ({
    scrollTop: window.scrollY,
    containerHeight: window.innerHeight,
  });

  const getOffset = (el) => el.getBoundingClientRect().top + window.scrollY;

  // ---- Transform Updates ----
  const updateTransforms = useCallback(() => {
    const { scrollTop, containerHeight } = getScrollData();
    const stackPos = parsePercentage(stackPosition, containerHeight);
    const scaleEnd = parsePercentage(scaleEndPosition, containerHeight);

    cardsRef.current.forEach((card, i) => {
      const cardTop = getOffset(card);
      const start = cardTop - stackPos - itemStackDistance * i;
      const end = cardTop - scaleEnd;

      const progress = calculateProgress(scrollTop, start, end);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - progress * (1 - targetScale);
      const translateY = Math.max(0, scrollTop - start);
      const rotation = rotationAmount * i * progress;
      const blur = blurAmount * progress;

      const transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      const filter = blur ? `blur(${blur}px)` : "";

      card.style.transform = transform;
      card.style.filter = filter;
    });
  }, [
    baseScale,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    rotationAmount,
    blurAmount,
  ]);

  // ---- Lenis Setup ----
  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", updateTransforms);

    const raf = (time) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };

    animationFrameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;

    cardsRef.current = Array.from(document.querySelectorAll(".scroll-stack-card"));
    updateTransforms();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      lenis.destroy();
    };
  }, [updateTransforms]);

  return (
    <div className={`scroll-stack-container ${className}`} ref={scrollerRef}>
      <div className="scroll-stack-inner pt-[20vh] px-20 pb-[50rem] min-h-screen">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
