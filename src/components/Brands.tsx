import React from 'react';
import Marquee from "react-fast-marquee";

// Import all images
import Iveco from '../assets/iveco.jpg';
import Paolucci from '../assets/paolucci.png';
import Autoneum from '../assets/autoneum.png';
import Volkswagen from '../assets/volkswagen.png';
import Volt from '../assets/volt.png';
import Magnetti from '../assets/magneti.png';
import Sps from '../assets/sps.png';
import Xl from '../assets/xl.png';
import Zl from '../assets/zl.jpeg';
import Iraola from '../assets/iraola.png';
import Entech from '../assets/entech.png';
import Ame from '../assets/ame.png';
import Eslava from '../assets/eslava.png';
import { BrandLogoProps } from '../types';

const brandData = [
    { name: 'Iveco', logo: Iveco },
    { name: 'Paolucci', logo: Paolucci },
    { name: 'Autoneum', logo: Autoneum },
    { name: 'Volkswagen', logo: Volkswagen },
    { name: 'Volt', logo: Volt },
    { name: 'Magnetti', logo: Magnetti },
    { name: 'Sps', logo: Sps },
    { name: 'Xl', logo: Xl },
    { name: 'Zl', logo: Zl },
    { name: 'Iraola', logo: Iraola },
    { name: 'Entech', logo: Entech },
    { name: 'Ame', logo: Ame },
    { name: 'Eslava', logo: Eslava },
];

const BrandLogo: React.FC<BrandLogoProps> = ({ name, logo }) => (
    <div className="px-4">
        <img
            className="object-contain w-auto mx-auto h-14"
            style={{ maxWidth: 100, minWidth: 100 }}
            src={logo}
            alt={`logo ${name}`}
        />
    </div>
);

export const Brands = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <h2 className="mb-8 text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
                    Confían en nosotros
                </h2>
                <Marquee className="py-4" gradient={false} speed={40}>
                    <div className="flex items-center space-x-8">
                        {brandData.map((brand) => (
                            <BrandLogo key={brand.name} {...brand} />
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default Brands;