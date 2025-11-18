import React from "react";

const brandLogos = [
    "/assets/brands/company-1.webp",
    "/assets/brands/company-2.webp",
    "/assets/brands/company-3.webp",
    "/assets/brands/company-4.webp",
    "/assets/brands/company-5.webp"
];

const BrandsMarquee: React.FC = () => {
    // Duplicate track for continuous loop
    const track = [...brandLogos, ...brandLogos];
    return (
        <div className="landing-root">
            <div className="brands-marquee" aria-hidden>
                <div className="marquee-track">
                    {track.map((src, i) => (
                        <div key={`${src}-${i}`} className="marquee-item" style={{ flex: "0 0 auto" }}>
                            <img src={src} alt={`brand ${i}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandsMarquee;
