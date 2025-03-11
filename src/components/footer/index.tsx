import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* maria: primeira coluna footer*/}
          <div>
            <h3 className="font-semibold mb-4">De Rolé</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Conta e Segurança</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-4">Descubra</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Cadastre seu estabelecimento</a></li>
              <li><a href="#">De Rolé para empresas</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              
              <FaFacebook size={22} className="hover:text-black cursor-pointer" />
              <FaXTwitter  size={22} className="hover:text-black cursor-pointer"/>
              <FaInstagram size={22} className="hover:text-black cursor-pointer"/>
              
            </div>
          </div>
        </div>

        {/* linhazinha */}
        <hr className="my-8 border-gray-300" />

   
  <div className="text-left">
          
  <div className="flex items-center">
    <Image
      src="logos/preto-amarelo.svg"
      alt="Logo de rolé"
      height={15}
      width={60}
    />
    <p className="text-[11px] ml-5">© Copyright 2026 - De Rolé - Todos os direitos reservados.</p>
  </div>
  <p className="text-[11px] ml-20">CNPJ 00.000.000/0000-00 / Endereço da De Rolé, nº 0000, Bairro,</p>
  <p className="text-[11px] ml-20">Rio de Janeiro/RJ - CEP 00.000-000</p>


  <div className="mt-6 space-x-4 text-gray-500 font-semibold mb-4 text-[13px]" >
    <a href="#">Termos e condições de uso</a>
    <a href="#">Código de conduta</a>
    <a href="#">Privacidade</a>
    <a href="#">Dicas de segurança</a>
  </div>
</div>
      </div>
    </footer>
  );
}
