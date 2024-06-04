import "./Footer.css"
import logo from "@/public/assets/icons/black-logo.svg"
import Image from 'next/image'
export default function Footer(){
    return(
        <footer>
            <div className="footer_logo">
                <Image
                src={logo}
                width={50}
                height={50}
                alt="logo image"
            />
            </div>
             
            <div className="footer_informations">
                <ul className="developers">
                    <li>
                        Development by <span>name</span>/
                    </li>
                    <li>
                    <span>name</span>/
                    </li>
                    <li>
                        <span>name</span>/
                    </li>
                    <li>
                       <span>name</span>
                    </li>
                </ul>
            </div>
            <div className="copy"> <h3>Copyright &copy; 2024</h3></div>
           
        </footer>
    )
}