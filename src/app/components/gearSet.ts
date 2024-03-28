import { Gear } from "@dromney/gear-gen";

export function TheGears() {
    const gear1 = new Gear({
        scale: 120,
        N: 8,
        P: 8,
        PADeg: 25,
    })
    const gear2 = new Gear({
        N: 19,
        parent: gear1
    });
    const gear3 = new Gear({
        N: 11,
        parent: gear2,
        jointAngleDeg: 10
    });
    const gear4 = new Gear({
        N: 8,
        parent: gear3,
        jointAngleDeg: 60
    });
    const gear5 = new Gear({
        N: 9,
        parent: gear2,
        jointAngleDeg: 70
    });
    const gear6 = new Gear({
        N: 11,
        parent: gear2,
        jointAngleDeg: -60
    });
    const gear7 = new Gear({
        N: 14,
        parent: gear3,
        jointAngleDeg: -40
    });
    const gear8 = new Gear({
        N: 14,
        P: 20,
        parent: gear2,
        axleJoint: true
    });
    const gear9 = new Gear({
        N: 25,
        parent: gear8,
        jointAngleDeg: -150
    });
    const gear10 = new Gear({
        N: 20,
        parent: gear7,
        jointAngleDeg: 180,
        internal: true,
        layer: 0
    });
    const gear11 = new Gear({
        N: 25,
        parent: gear4,
        jointAngleDeg: 17,
        layer: 20
    });
    const gear12 = new Gear({
        N: 22,
        parent: gear6,
        jointAngleDeg: 270,
        layer: 20
    });
    const gear13 = new Gear({
        N: 40,
        parent: gear12,
        jointAngleDeg: -10,
        layer: 20
    });
    const gear14 = new Gear({
        N: 20,
        jointAngleDeg: 40,
        parent: gear13,
    });
    const gear15 = new Gear({
        N: 30,
        P: 20,
        parent: gear14,
        axleJoint: true
    });
    const gear16 = new Gear({
        N: 8,
        P: 20,
        parent: gear15,
        axleJoint: true
    });
    const gear17 = new Gear({
        N: 10,
        parent: gear12,
        jointAngleDeg: 165
    });
    return [gear1, gear2, gear3, gear4, gear5, gear6, gear7, gear8, gear9, gear10, gear11, gear12, gear13, gear14, gear15, gear16, gear17];
} 