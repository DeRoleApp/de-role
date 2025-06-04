import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import WaveAnimation from './components/wave-animation'

const Footer = () => {
  return (
    <footer className="text-dr-black">
      <WaveAnimation />
      <div className="bg-dr-yellow mx-auto w-full py-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 text-center text-sm md:grid-cols-4 md:text-left [&_h3]:mb-4 [&_h3]:font-semibold [&_ul]:space-y-2">
            <div>
              <h3>De Rolé</h3>
              <ul>
                <li>
                  <a href="#">Fale Conosco</a>
                </li>
                <li>
                  <a href="#">Conta e Segurança</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Politicas</h3>
              <ul>
                <li>
                  <a href="#">Termos e condições de uso</a>
                </li>
                <li>
                  <a href="#">De Rolé para empresas</a>
                </li>
                <li>
                  <a href="#">Código de conduta</a>
                </li>
                <li>
                  <a href="#">Privacidade</a>
                </li>
                <li>
                  <a href="#">Dicas de segurança</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Descubra</h3>
              <ul>
                <li>
                  <a href="#">Cadastre seu estabelecimento</a>
                </li>
                <li>
                  <a href="#">De Rolé para empresas</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Social</h3>
              <div className="flex justify-center space-x-4 md:justify-start">
                <FaFacebook
                  size={22}
                  className="cursor-pointer hover:text-black"
                />
                <FaXTwitter
                  size={22}
                  className="cursor-pointer hover:text-black"
                />
                <FaInstagram
                  size={22}
                  className="cursor-pointer hover:text-black"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 pt-20">
            <Image
              src="logos/preto-amarelo.svg"
              alt="Logo de rolé"
              height={22}
              width={68}
            />
            <div className="flex flex-col text-xs">
              <p>© Copyright 2026 - De Rolé - Todos os direitos reservados.</p>
              <p>
                CNPJ 00.000.000/0000-00 / Endereço da De Rolé, nº 0000, Bairro,
                Rio de Janeiro/RJ - CEP 00.000-000
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
