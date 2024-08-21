"use client"
import React, { useEffect, useMemo, useState } from 'react';
import { GearSet } from '@dromney/gear-gen';
import { PositionedGearSetViewer } from '@dromney/react-gear-gen';
import { TheGears } from './gearSet';

const throttleMs = 25;

export interface GearsProps {
    rot: number
    sensitivity?: number
}

function Gears({ rot, sensitivity = 1 }: GearsProps) {
    const [gearSet, setGearSet] = useState<GearSet>()
    const [mousePos, setMousePos] = useState(0);
    useEffect(() => {
        setGearSet(new GearSet(TheGears()))

        let timeoutId: NodeJS.Timeout | null = null;

        const handleMouseMove = (event: MouseEvent) => {
            if (timeoutId) return
            setMousePos(Math.sqrt(Math.pow(event.clientX, 2) + Math.pow(event.clientY, 2)))
            // setMousePos(event.clientX + event.clientY)
            timeoutId = setTimeout(() => {
                timeoutId = null;
            }, throttleMs);
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (timeoutId) clearTimeout(timeoutId);
        }
    }, [])

    if (!gearSet) return null
    return <PositionedGearSetViewer rot={rot + mousePos * sensitivity} gearSet={gearSet} showGrid={false} padding={3} />
}

export default Gears