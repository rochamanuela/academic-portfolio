import React, { useEffect, useState, useRef } from "react"
import "animate.css"

function AnimatedSection({ children, animation = "animate__fadeInUp" }) {
    const [hasAnimated, setHasAnimated] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                }
            },
            {
                threshold: 0.5,
                rootMargin: "0px 0px -10% 0px",
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [hasAnimated])

    return (
        <div
            ref={sectionRef}
            className={`animate__animated ${hasAnimated ? animation : ""}`}
            style={{
                opacity: hasAnimated ? 1 : 0,
                transition: "opacity 0.3s ease",
            }}
        >
            {children}
        </div>
    )
}

export default AnimatedSection
