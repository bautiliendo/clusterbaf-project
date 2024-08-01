
export const JoinTeam = () => {
    return (
        <div className="mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-3xl font-semibold mb-6">Sumate a nuestro equipos</h3>
            <form action="#" method="POST" className="space-y-6" encType="multipart/form-data">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                    <div>
                        <label htmlFor="join-name" className="block text-sm font-medium text-gray-700">Tu nombre</label>
                        <input type="text" name="join-name" id="join-name" placeholder="Ingresa tu nombre" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                    </div>
                    <div>
                        <label htmlFor="join-email" className="block text-sm font-medium text-gray-700">Tu email</label>
                        <input type="email" name="join-email" id="join-email" placeholder="Ingresa tu email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                    </div>
                    <div>
                        <label htmlFor="join-phone" className="block text-sm font-medium text-gray-700">Número de teléfono</label>
                        <input type="tel" name="join-phone" id="join-phone" placeholder="Ingresa tu teléfono" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                    </div>
                    <div>
                        <label htmlFor="cv" className="block text-sm font-medium text-gray-700">Adjunta tu CV</label>
                        <input type="file" name="cv" id="cv" accept=".pdf,.doc,.docx" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                    </div>
                </div>
                <div>
                    <label htmlFor="join-message" className="block text-sm font-medium text-gray-700">Mensaje (opcional)</label>
                    <textarea
                        name="join-message"
                        id="join-message"
                        placeholder="Cuéntanos un poco sobre ti"
                        rows={4}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent resize-none"
                    ></textarea>
                </div>
                <div>
                    <button type="submit" className="btn-custom">
                        Enviar solicitud
                    </button>
                </div>
            </form>
        </div>
    )
}
