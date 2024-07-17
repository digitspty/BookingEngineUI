import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Image from 'next/image';
import IG from "/images/Logo/Social/instagram.svg";
import Visa from "/images/Logo/PaymentBrands/Visa.svg";
import Paypal from "/images/Logo/PaymentBrands/Paypal.svg";
import Mcard from "/images/Logo/PaymentBrands/Mcard.svg";
import Pci from "/images/Logo/PaymentBrands/pci-security-standards-council.svg";
import PowerTrans from "/images/Logo/PaymentBrands/PowerByFac.svg";
import AExpress from "/images/Logo/PaymentBrands/AExpress.svg";
import VerifyVisa from "/images/Logo/PaymentBrands/Verified_by_Visa_logo.svg";
import Digits from "/images/Logo/PaymentBrands/Digits.svg";
import Yappy from "/images/Logo/PaymentBrands/Yappy.svg";
import MasterCard from "/images/Logo/PaymentBrands/Mastercard_SecureCode.svg";
const inter = Open_Sans({
    subsets: ["latin"],
    weight: ["400"],
});

const Footer = () => {
  return (
    <footer className="col-12 p-0">
        <div className="col-12 p-0 text-center">
            <div className="row m-0">
                    <div className="footer-holder col-12 d-flex justify-content-center">
						<div className="col-12 col-md-6 col-lg-6 col-xl-6">
							<p className="mt-4 pt-4 pb-4">Nos enfocamos en comprender a fondo tus requisitos y objetivos para entregar productos de calidad que superen tus expectativas. Utilizamos las últimas tecnologías y metodologías ágiles para garantizar un desarrollo eficiente y rápido, minimizando los tiempos de entrega. Además, nuestro enfoque en la atención al cliente nos permite brindarte un soporte continuo y actualizaciones según tus necesidades cambiantes.</p>
						</div>
					</div>
                    <div className="footer-holder pt-4 pb-4 col-12 col-md-12 col-lg-7 col-xl-7">
                        <div className="row m-0">
                            <ul className="col-12 col-md-6 col-lg-6 col-xl-4 footer-customerService">
                                <label>Servicio al cliente</label>
                                <li><i className="material-icons">support_agent</i>&nbsp;6521-6666</li>
                                <li><i className="material-icons">mail</i>&nbsp;atencionalcliente@digitspty.com</li>
                                <li><i className="material-icons">explore</i>&nbsp;Ricardo J. Alfaro. PH SpotLight, Panam&aacute;.</li>
                            </ul>
                            <ul className="col-12 col-md-4 col-lg-4 col-xl-4">
                                <label>Legal</label>
                                <li><Link href="#"><i className="material-icons">list</i>&nbsp;T&eacute;rminos y condiciones</Link></li>
                                <li><Link href="#"><i className="material-icons">admin_panel_settings</i>&nbsp;Pol&iacute;ticas de privacidad</Link></li>
                                <li><Link href="#"><i className="material-icons">cookie</i>&nbsp;Pol&iacute;ticas de cookies</Link></li>
                            </ul>
                            <ul className="social-holder col-12 col-md-2 col-lg-2 col-xl-2">
                                <label>Social</label>
                                <li className="d-block text-center">
                                    <Link className="d-block" href="#">
                                        <Image src={IG} alt="Digits Logo" width={28}height={32} alt="Instagram-logo" />
                                    </Link>
                                    <span className="float-left w-100 text-center">Instagram</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                <div className="footer-holder pt-4 col-12 col-md-12 col-lg-5 col-xl-5 pb-3">
                    <Image src={Visa} alt="Visa Logo" width={85}height={40} />
                    <Image src={Paypal} alt="Paypal Logo" width={85}height={40} />
                    <Image src={Mcard} alt="Mcard Logo" width={85}height={40} />
                    <Image src={Pci} alt="Pci Logo" width={85}height={40} />

                    <Image src={PowerTrans} alt="PowerTrans Logo" width={85}height={40} />
                    <Image src={AExpress} alt="AExpress Logo" width={85}height={40} />
                    <Image src={VerifyVisa} alt="VerifyVisa Logo" width={85}height={40} />
                    <Image src={Digits} alt="Digits Logo" width={85}height={40} />

                    <Image src={Yappy} alt="Yappy Logo" width={85}height={40} />
                    <Image src={MasterCard} alt="MasterCard Logo" width={85}height={40} />
                </div>
            </div>
            <small className="pb-2 border-top row m-0 d-flex justify-content-center pt-2">Powered by DIGITS. 2024</small>
        </div>
    </footer>
  )
}

export default Footer