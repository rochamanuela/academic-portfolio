import React, { useEffect, useState, useRef } from "react";
import "animate.css"; // Importa as animações do Animate.css

function AnimatedSection({ children, animation = "animate__fadeInUp" }) {
    const [hasAnimated, setHasAnimated] = useState(false); // Controla se já foi animado
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true); // Marca como animado para não repetir
                }
            },
            {
                threshold: 0.5, // Ativa quando 50% da seção estiver visível
                rootMargin: "0px 0px -10% 0px", // Antecipação da animação
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div
            ref={sectionRef}
            className={`animate__animated ${hasAnimated ? animation : ""}`}
            style={{
                opacity: hasAnimated ? 1 : 0, // Evita "piscar" antes da animação
                transition: "opacity 0.3s ease", // Suaviza o início
                // margin: "50px 0",
                // background: "#d0d0d0",
                // height: "200px",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // fontSize: "1.5rem",
                // color: "#333",
            }}
        >
            {children}
        </div>
    );
}

export default AnimatedSection;
