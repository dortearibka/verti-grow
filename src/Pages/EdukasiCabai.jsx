import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import DefinisiCabai from '../Sections/Edukasi/Cabai/DefinisiCabai'
import AlatCabai from '../Sections/Edukasi/Cabai/AlatCabai'
import LangkahCabai from '../Sections/Edukasi/Cabai/LangkahCabai'
import VideoCabai from '../Sections/Edukasi/Cabai/VideoCabai'
import Footer from '../Components/Footer'

export default function EdukasiCabai() {
  return (
    <>
        <NavbarUser/>
        <DefinisiCabai/>
        <AlatCabai/>
        <LangkahCabai/>
        <VideoCabai/>
        <Footer/>
    </>
  )
}
