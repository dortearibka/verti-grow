import React from 'react'
import Air from '../../../assets/EcoLimbah/AlatBahan/Air.jpg'
import Ember from '../../../assets/EcoLimbah/AlatBahan/Ember.jpg'
import GulaPasir from '../../../assets/EcoLimbah/AlatBahan/Gula.jpg'
import Kardus from '../../../assets/EcoLimbah/AlatBahan/Kardus.jpg'
import EM4 from '../../../assets/EcoLimbah/AlatBahan/Larutan EM4.jpg'
import Micin from '../../../assets/EcoLimbah/AlatBahan/Penyedap Makanan.jpg'
import Plastik from '../../../assets/EcoLimbah/AlatBahan/Plastik.jpg'
import Dedak from '../../../assets/EcoLimbah/AlatBahan/Sekam Padi.jpg'
import Triplek from '../../../assets/EcoLimbah/AlatBahan/Triplek.jpg'

export default function LangkahPakanTernak() {
  return (
    <section className='container flex flex-col gap-10 items-center py-16'>
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
                    src={Ember}
                    alt="Ember"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Ember
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
                    src={EM4} 
                    alt="Larutan EM4"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Larutan EM4
                        </h3>
                        
                    </div>
                </div>
            </div>

            {/* baris 2 */}
            <div className='flex gap-10'>
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Plastik} 
                    alt="Kantong Plastik"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Kantong Plastik
                        </h3>
                        
                    </div>
                </div>

                {/* card 2 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Micin} 
                    alt="Penyedap Masakan"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Penyedap Masakan
                        </h3>
                        
                    </div>
                </div>

                {/* card 3 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={GulaPasir} 
                    alt="Gula Pasir" 
                    className='w-60 h-60 object-cover' />

                    {/* Teks */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Gula Pasir
                        </h3>
                        
                    </div>
                </div>
            </div>
            
            {/* baris 3 */}
            <div className='flex gap-10'>
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Dedak} 
                    alt="Dedak"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Dedak
                        </h3>
                        
                    </div>
                </div>

                {/* card 2 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Kardus}
                    alt="Box Kardus Kecil"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Box Kardus Kecil
                        </h3>
                        
                    </div>
                </div>

                {/* card 3 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Triplek} 
                    alt="Triplek" 
                    className='w-60 h-60 object-cover' />

                    {/* Teks */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Triplek
                        </h3>
                        
                    </div>
                </div>
            </div>

        </div>
        
    </section>
  )
}
