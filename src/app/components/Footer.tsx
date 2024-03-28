"use client"
import React from 'react'

const Footer = () => {
    return (
        <p className="text-muted-foreground font-semibold text-sm">{`© ${(new Date()).getFullYear()} Dallin Romney`}</p>
    )
}

export default Footer