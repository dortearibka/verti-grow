import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import DefinisiPupukHijau from '../Sections/Limbah/PupukHijau/DefinisiPupukHijau'
import AlatPupukHijau from '../Sections/Limbah/PupukHijau/AlatPupukHijau'
import LangkahPupukHijau from '../Sections/Limbah/PupukHijau/LangkahPupukHijau'
import VideoPupukHijau from '../Sections/Limbah/PupukHijau/VideoPupukHijau'
import Footer from '../Components/Footer'

export default function LimbahPupukHijau() {
  return (
    <>
        <NavbarUser/>
        <DefinisiPupukHijau/>
        <LangkahPupukHijau/>
        <AlatPupukHijau/>
        <VideoPupukHijau/>
        <Footer/>
    </>
  )
}
