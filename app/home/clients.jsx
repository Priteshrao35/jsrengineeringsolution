'use client';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';


const clients = [
    "/images/clients/modernindiaconstruction.jpg",
    "/images/clients/bhutani.png",
    "/images/clients/antriksh.png",
    "/images/clients/bansalgroup.png",
    "/images/clients/ats.png",
    "/images/clients/acecity-logo.png",
    "/images/clients/ctc.png",
    "/images/clients/capacite.png",
];

export default function ClientsPage() {
    return (
        <section className="py-16 bg-gray-200 text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-600">Our Clients</h2>
            <div className="overflow-hidden">
                <Marquee gradient={false} speed={50} pauseOnHover={true}>
                    {clients.map((logo, index) => (
                        <div key={index} className="mx-6">
                            <Image
                                src={logo}
                                alt={`Client ${index + 1}`}
                                width={150}
                                height={80}
                                className="h-auto w-auto object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
