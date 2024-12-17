import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import DefinisiBrokoli from '../Sections/Edukasi/Brokoli/DefinisiBrokoli'
import AlatBrokoli from '../Sections/Edukasi/Brokoli/AlatBrokoli'
import LangkahBrokoli from '../Sections/Edukasi/Brokoli/LangkahBrokoli'
import VideoBrokoli from '../Sections/Edukasi/Brokoli/VideoBrokoli'
import Footer from '../Components/Footer'

export default function EdukasiBrokoli() {
  return (
    <>
        <NavbarUser/>
        <DefinisiBrokoli/>
        <AlatBrokoli/>
        <LangkahBrokoli/>
        <VideoBrokoli/>
        <Footer/>
    </>
  )
}
