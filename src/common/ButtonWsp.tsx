import { FaWhatsapp } from 'react-icons/fa'
import { handleWhatsapp } from '../helpers/handleLinks'

export const ButtonWsp = () => {
    return (
        <button
            onClick={handleWhatsapp}
            className='fixed bottom-4 right-4
         bg-green-500 text-white p-4
          rounded-full shadow-lg hover:bg-green-600
           transition-colors duration-300 z-10'
            title='Ir a WhatsApp'
        >
            <FaWhatsapp size={30} />
        </button>
    )
}
