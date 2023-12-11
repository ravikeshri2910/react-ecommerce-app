import { Navbar } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import NavbarComponent from "../Components/Navbar/NavbarComponent"
import FooterComponet from "../Components/Footer/FooterComponet"


const RootLayout = ( ) =>{

    return <>
        <NavbarComponent/>
        <Outlet/>
        <FooterComponet/>
    </>
}

export default RootLayout