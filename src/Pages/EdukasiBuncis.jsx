import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import DefinisiBuncis from '../Sections/Edukasi/Buncis/DefinisiBuncis'
import AlatBuncis from '../Sections/Edukasi/Buncis/AlatBuncis'
import LangkahBuncis from '../Sections/Edukasi/Buncis/LangkahBuncis'
import VideoBuncis from '../Sections/Edukasi/Buncis/VideoBuncis'
import Footer from '../Components/Footer'

export default function EdukasiBuncis() {
  return (
    <>
        <NavbarUser/>
        <DefinisiBuncis/>
        <AlatBuncis/>
        <LangkahBuncis/>
        <VideoBuncis/>
        <Footer/>
    </>
  )
}
