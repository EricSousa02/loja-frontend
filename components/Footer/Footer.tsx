import "./Footer.css";
import logo from "@/public/assets/icons/black-logo.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div className="footer_logo">
        <Image src={logo} width={50} height={50} alt="logo image" />
      </div>

      <div className="footer_informations">
        <ul>
         <span>Explore</span>
          <li><p>Login/</p></li>
          <li><p>Male/</p></li>
          <li><p>Female/</p></li>
        </ul>
        <ul>
         <span>Team</span>
         <li><p>name/</p></li>
         <li><p>name/</p></li>
         <li><p>name/</p></li>
         <li><p>name/</p></li>
        </ul>
        <ul>
            <span>Support</span>
            <li>support@gmail.com</li>
        </ul>
      </div>
      <div className="copy">
        <h3>Copyright &copy;/ modaExpress</h3>
        <a href="#">Back to top</a>
        <p>Have a nice day 🎉</p>
      </div>
    </footer>
  );
}
