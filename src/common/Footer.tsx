import Logo from '../assets/logo.jpg'

export const Footer = () => {
    return (
        <footer className="py-10 bg-rich_black sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
                    <div>
                        <p className="font-bold text-white">Companía</p>

                        <ul className="mt-8 space-y-4">
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> About </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Features </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Works </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Career </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-bold text-white">Navegación</p>

                        <ul className="mt-8 space-y-4">
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Customer Support </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Delivery Details </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Terms & Conditions </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Privacy Policy </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-bold text-white">Horarios de atención</p>

                        <ul className="mt-8 space-y-4">
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Free eBooks </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Development Tutorial </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> How to - Blog </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> YouTube Playlist </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-bold text-white">Links</p>

                        <ul className="mt-8 space-y-4">
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Customer Support </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Delivery Details </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Terms & Conditions </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Privacy Policy </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-jonquil" />

                <div className="flex flex-wrap items-center justify-between">
                    <img className="h-20 auto md:order-1" src={Logo} alt="" />

                    <ul className="flex items-center space-x-3 md:order-3">
                        <li>
                            <a href="#" title="LinkedIn" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 hover:bg-blue-600 hover:border-blue-600 focus:bg-blue-600 focus:border-blue-600">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="#" title="Instagram" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 hover:bg-pink-500 hover:border-pink-500 focus:bg-pink-500 focus:border-pink-500">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="#" title="WhatsApp" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 hover:bg-green-500 hover:border-green-500 focus:bg-green-500 focus:border-green-500">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="#" title="Gmail" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 hover:bg-red-500 hover:border-red-500 focus:bg-red-500 focus:border-red-500">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                                </svg>
                            </a>
                        </li>
                    </ul>

                    <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">© Copyright 2024, All Rights Reserved by Clusterbaf - (Created by)</p>
                </div>
            </div>
        </footer>

    )
}
