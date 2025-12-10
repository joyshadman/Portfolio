import React from 'react'
import ScrollStack, { ScrollStackItem } from './Scrolllstack'

const Animatedpart1 = () => {
    return (
        <div>
            <ScrollStack>
                <ScrollStackItem itemClassName="bg-white">Card 1</ScrollStackItem>
                <ScrollStackItem itemClassName="bg-blue-200">Card 2</ScrollStackItem>
                <ScrollStackItem itemClassName="bg-green-200">Card 3</ScrollStackItem>
                <ScrollStackItem itemClassName="bg-yellow-200">Card 4</ScrollStackItem>
            </ScrollStack>
        </div>
    )
}

export default Animatedpart1