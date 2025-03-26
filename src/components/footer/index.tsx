import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image'

const WaveAnimation = () => {
  return (
    <div>
      <svg
        className="relative max-h-32 w-full bg-transparent"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,178,0,0.7)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,178,0,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,178,0,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,178,0,1)" />
        </g>
      </svg>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="text-dr-black">
      <WaveAnimation />
      <div className="bg-dr-yellow mx-auto w-full py-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
            <div>
              <h3 className="mb-4 font-semibold">De Rolé</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Fale Conosco</a>
                </li>
                <li>
                  <a href="#">Conta e Segurança</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Descubra</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Cadastre seu estabelecimento</a>
                </li>
                <li>
                  <a href="#">De Rolé para empresas</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Social</h3>
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
          <hr className="my-8 border-gray-300" />
          <div className="text-left">
            <div className="flex items-center">
              <Image
                src="logos/preto-amarelo.svg"
                alt="Logo de rolé"
                height={15}
                width={60}
              />
              <p className="ml-5 text-[11px]">
                © Copyright 2026 - De Rolé - Todos os direitos reservados.
              </p>
            </div>
            <p className="ml-20 text-[11px]">
              CNPJ 00.000.000/0000-00 / Endereço da De Rolé, nº 0000, Bairro,
            </p>
            <p className="ml-20 text-[11px]">
              Rio de Janeiro/RJ - CEP 00.000-000
            </p>
            <div className="mt-6 mb-4 space-x-4 text-[13px] font-semibold text-gray-500">
              <a href="#">Termos e condições de uso</a>
              <a href="#">Código de conduta</a>
              <a href="#">Privacidade</a>
              <a href="#">Dicas de segurança</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
