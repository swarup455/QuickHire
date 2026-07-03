import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { companies } from "@/data/companies";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const CompanyCarousel = () => {
    const plugin = React.useRef(
        Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    return (
        <section className="w-full py-10">
            <h2 className="mb-8 text-center text-lg font-medium text-zinc-400">
                Trusted by professionals from
            </h2>

            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {companies.map((company) => (
                        <CarouselItem
                            key={company.id}
                            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                        >
                            <div className="flex h-32 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-indigo-500/10">
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="max-h-12 w-auto object-contain transition-all duration-300 hover:scale-110"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
};

export default CompanyCarousel;