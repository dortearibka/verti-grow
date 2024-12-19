import React from 'react'
import Air from '../../../assets/EcoLimbah/AlatBahan/Air.jpg'
import Tanah from '../../../assets/EcoLimbah/AlatBahan/Tanah.jpg'
import BotolBekas from '../../../assets/EcoLimbah/AlatBahan/Botol Bekas.jpg'
import Cutter from '../../../assets/EcoLimbah/AlatBahan/Cutter.jpg'
import Bibit from '../../../assets/EcoLimbah/AlatBahan/Bibit.jpg'
import Kerikil from '../../../assets/EcoLimbah/AlatBahan/Kerikil.jpg'

export default function LangkahUpcyclingWadah() {
  return (
    <section className='container flex flex-col gap-10 items-center py-10'>
        <h3 className='text-3xl font-semibold'>
            Alat dan Bahan
        </h3>

        {/* konten */}
        <div className='flex flex-col gap-10 items-center'>

            {/* baris 1 */}
            <div className='flex gap-10'>
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={BotolBekas} 
                    alt="Botol Plastik Bekas"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Botol Plastik Bekas 1 Liter
                        </h3>
                        
                    </div>
                </div>

                {/* card 2 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Cutter} 
                    alt="Cutter"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Cutter
                        </h3>
                        
                    </div>
                </div>

                {/* card 3 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Bibit} 
                    alt="Bibit Tanaman"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Tanah
                        </h3>
                        
                    </div>
                </div>
            </div>

            {/* baris 2 */}
            <div className='flex gap-10'>
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Tanah} 
                    alt="Tanah"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Tanah
                        </h3>
                        
                    </div>
                </div>

                {/* card 2 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Air}
                    alt="Air"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Air
                        </h3>
                        
                    </div>
                </div>

                {/* card 3 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Kerikil}
                    alt="Kerikil" 
                    className='w-60 h-60 object-cover' />

                    {/* Teks */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Kerikil
                        </h3>
                        
                    </div>
                </div>
            </div>
            
        </div>
        
    </section>
  )
}
