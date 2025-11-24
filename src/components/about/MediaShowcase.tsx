import React from "react";

const images = [
    "/assets/brands/hero-1.webp",
    "/assets/brands/hero-2.webp",
    "/assets/brands/medical1.jpg",
    "/assets/brands/presenter1.jpeg",
    "/assets/brands/pilot1.jpeg",
    "/assets/brands/catering2.jpg",
    "/assets/brands/hero-3.jpg",
];

const MediaShowcase: React.FC = () => {
    // duplicate for continuous loop
    const track = [...images, ...images];
    return (
        <section className="about-media landing-root" aria-hidden>
            <div className="media-kicker">
                <div className="kicker">Showcase</div>
                <h3 className="media-title">People, projects and places powered by connectsMe</h3>
            </div>

            <div className="media-marquee" role="list">
                <div className="media-track">
                    {track.map((src, i) => (
                        <div className="media-item" key={`${src}-${i}`}>
                            <img src={src} alt={`showcase ${i}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaShowcase;
