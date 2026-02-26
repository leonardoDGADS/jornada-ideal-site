/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import BirdFollower from './components/BirdFollower';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="antialiased overflow-x-hidden bg-black text-white font-sans">
      {/* Animated Rocket Background */}
      <div className="rocket-background hidden lg:block">
        <svg width="600" height="500" viewBox="0 0 427 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="rocket-asa">
            <path d="M129.733 176.733C120.533 186.067 108.667 209.267 105.867 223.4C104.667 229.133 104 234.067 104.4 234.467C105.6 235.667 127.067 232.2 135.6 229.4C140.667 227.667 146.8 224.333 151.467 220.467C158 215.267 159.467 213 162.4 205.133L165.733 195.933L155.867 186.867C150.4 181.8 143.867 175.933 141.2 173.667L136.4 169.8L129.733 176.733Z" fill="currentColor"/>
          </g>
          <path d="M284.8 19.8C248.133 26.4666 206.667 49.8 179.6 79L170.8 88.6L152.933 87.6666C132 86.4666 125.333 88.0666 116.133 95.8C107.867 102.867 95.0667 121.8 87.2 138.467L80.2667 153.267L89.7333 154.2C95.0667 154.6 107.467 155.4 117.333 155.8L135.333 156.733L142.667 163.667C146.667 167.4 159.333 179.133 170.667 189.667L191.333 208.733L192 231.133C192.4 243.4 193.067 253.8 193.467 254.2C194.4 255.133 221.333 245.8 229.333 241.667C245.733 233.4 249.867 226.333 252.267 201.933C253.6 187.933 254.133 185.667 256.533 184.6C262.933 181.667 282.267 165.933 293.733 154.467C300.4 147.667 309.867 136.733 314.4 130.2C325.2 115.133 336.4 92.2 339.867 78.3333C343.6 63.5333 346.667 30.8666 345.067 24.3333C343.867 19.6666 343.333 19.2666 337.733 18.4666C327.2 17 295.733 17.8 284.8 19.8ZM262.667 93C266.8 95.1333 270.667 99.8 270.667 102.6C270.667 103.533 268.667 105.533 266.4 107C257.6 112.333 243.467 109.133 239.733 100.867C238.267 97.6666 238.533 97 241.733 94.2C246.133 90.3333 256.533 89.8 262.667 93Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 glass border-b border-white-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="https://i.im.ge/2026/02/26/e301wy.WhatsApp-Image-2026-02-26-at-14-47-45.jpeg" alt="Jornada Ideal Logo" className="logo-img" />
            <span className="text-xl font-black tracking-tighter text-white uppercase">Jornada <span className="font-light">Ideal</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em]">
            <a href="#servicos" className="text-gray-400 hover:text-white transition">Serviços</a>
            <a href="#quem-somos" className="text-gray-400 hover:text-white transition">Quem Somos</a>
            <a href="https://wa.me/5527992584148?text=Olá!%20Vim%20pelo%20site%20da%20Jornada%20Ideal%20e%20tenho%20interesse%20em%20escalar%20meu%20negócio.%20Gostaria%20de%20entender%20como%20vocês%20podem%20me%20ajudar." target="_blank" rel="noopener noreferrer" className="btn-white px-6 py-2.5 rounded-full text-black transition">Diagnóstico</a>
          </div>
          <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass border-b border-white-10 absolute w-full">
            <div className="flex flex-col items-center py-4 space-y-4 text-[11px] font-bold uppercase tracking-[0.2em]">
              <a href="#servicos" className="text-gray-400 hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Serviços</a>
              <a href="#quem-somos" className="text-gray-400 hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Quem Somos</a>
              <a href="https://wa.me/5527992584148?text=Olá!%20Vim%20pelo%20site%20da%20Jornada%20Ideal%20e%20tenho%20interesse%20em%20escalar%20meu%20negócio.%20Gostaria%20de%20entender%20como%20vocês%20podem%20me%20ajudar." target="_blank" rel="noopener noreferrer" className="btn-white px-6 py-2.5 rounded-full text-black transition" onClick={() => setIsMenuOpen(false)}>Diagnóstico</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white opacity-[0.03] blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-white-10 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 mb-10 bg-white/5">
              <span className="text-white">Performance & Lucro</span>
              <span className="w-1 h-1 bg-white/30 rounded-full"></span>
              <span>Hub de Crescimento</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-10 tracking-tighter uppercase text-glow">
              Escalar é uma <br /> <span className="text-gray-600 italic font-light">decisão estratégica.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              Transformamos marketing em faturamento previsível com decisões baseadas em dados para gerar impacto direto no seu caixa.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center items-center">
              <a href="https://wa.me/5527992584148?text=Olá!%20Vim%20pelo%20site%20da%20Jornada%20Ideal%20e%20tenho%20interesse%20em%20escalar%20meu%20negócio.%20Gostaria%20de%20entender%20como%20vocês%20podem%20me%20ajudar." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto btn-white px-10 py-5 font-black rounded-full text-[12px] uppercase tracking-widest">
                Quero Um Diagnóstico Rápido
              </a>
              <a href="#servicos" className="w-full sm:w-auto btn-outline px-10 py-5 font-bold rounded-full text-[12px] uppercase tracking-widest">
                Ver Soluções
              </a>
            </div>

            <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white-10 pt-20">
              <div className="group">
                <p className="text-3xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-gray-400 transition-colors">ROI</p>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Foco em Retorno</p>
              </div>
              <div className="group">
                <p className="text-3xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-gray-400 transition-colors">Dados</p>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Decisões Reais</p>
              </div>
              <div className="group">
                <p className="text-3xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-gray-400 transition-colors">Escala</p>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Crescimento Puro</p>
              </div>
              <div className="group">
                <p className="text-3xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-gray-400 transition-colors">Hub</p>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Gestão 360º</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-32 section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">Nossos <br />Serviços</h2>
              <p className="text-gray-400 font-light text-xl leading-relaxed">
                Soluções completas de ponta a ponta. Da estratégia à execução, montamos a estrutura de aquisição e conversão para você crescer.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white-10 rounded-[40px] overflow-hidden">
            <div className="bg-black p-12 md:p-16 card-hover border-r border-b border-white-10">
              <span className="text-gray-600 font-bold mb-6 block text-sm tracking-widest">01 /</span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-6 tracking-tight">Conteúdo Estratégico</h3>
              <p className="text-gray-500 font-light leading-relaxed text-lg">Conteúdo que posiciona, educa e prepara o lead para comprar sem “post por postar”. Foco em autoridade real.</p>
            </div>
            <div className="bg-black p-12 md:p-16 card-hover border-b border-white-10">
              <span className="text-gray-600 font-bold mb-6 block text-sm tracking-widest">02 /</span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-6 tracking-tight">Tráfego Pago</h3>
              <p className="text-gray-500 font-light leading-relaxed text-lg">Metas claras e investimento tratado como ativo. Rastreamento total para saber exatamente o que gera lucro.</p>
            </div>
            <div className="bg-black p-12 md:p-16 card-hover border-r border-white-10">
              <span className="text-gray-600 font-bold mb-6 block text-sm tracking-widest">03 /</span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-6 tracking-tight">Landing Pages</h3>
              <p className="text-gray-500 font-light leading-relaxed text-lg">Páginas criadas com foco em psicologia de vendas e clareza de oferta. Design a serviço do faturamento.</p>
            </div>
            <div className="bg-black p-12 md:p-16 card-hover">
              <span className="text-gray-600 font-bold mb-6 block text-sm tracking-widest">04 /</span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-6 tracking-tight">Funil de Vendas</h3>
              <p className="text-gray-500 font-light leading-relaxed text-lg">Estruturamos o caminho: lead → qualificação → fechamento. Método validado para gerar previsibilidade.</p>
            </div>
          </div>

          <div className="mt-24 text-center">
            <p className="text-xl md:text-2xl font-medium uppercase tracking-[0.2em] text-white">"Marketing não é sobre movimento. <span className="text-gray-600 italic">É sobre lucro.</span>"</p>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section id="quem-somos" className="py-40 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
                A Jornada <br />Ideal é <br /><span className="text-gray-400">direção.</span>
              </h2>
              <p className="text-xl font-light mb-12 leading-relaxed text-gray-800">
                Somos um hub de crescimento para negócios que querem escalar com clareza, consistência e previsibilidade. Unimos estratégia, dados e execução rápida.
              </p>
              <div className="grid grid-cols-2 gap-10 mb-14">
                <div className="border-l-2 border-black pl-6">
                  <h4 className="font-black uppercase text-[10px] tracking-widest mb-3">Estratégia</h4>
                  <p className="text-sm text-gray-500 font-medium">Pensamos no jogo longo antes de cada clique.</p>
                </div>
                <div className="border-l-2 border-black pl-6">
                  <h4 className="font-black uppercase text-[10px] tracking-widest mb-3">Parceria</h4>
                  <p className="text-sm text-gray-500 font-medium">Atuamos como uma extensão do seu time interno.</p>
                </div>
              </div>
              <a href="https://wa.me/5527992584148?text=Olá!%20Vim%20pelo%20site%20da%20Jornada%20Ideal%20e%20tenho%20interesse%20em%20escalar%20meu%20negócio.%20Gostaria%20de%20entender%20como%20vocês%20podem%20me%20ajudar." target="_blank" rel="noopener noreferrer" className="bg-black text-white px-12 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.3em] inline-block hover:bg-gray-900 transition-all">
                Quero Escalar com Estrutura
              </a>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square bg-gray-50 rounded-[40px] flex items-center justify-center p-12 md:p-24 overflow-hidden border border-gray-100 shadow-sm">
                <BirdFollower />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 rounded-3xl shadow-2xl hidden md:block">
                <p className="text-4xl font-black italic tracking-tighter">B&L</p>
                <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-40 mt-1">Methodology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Quote Section */}
      <section className="py-52 text-center bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-14 leading-tight">
            "Se você busca um parceiro que pensa como dono, executa com método e entrega com consistência..."
          </h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto mb-14"></div>
          <p className="text-lg md:text-xl uppercase tracking-[0.4em] text-gray-500 font-bold">A Jornada Ideal é sua decisão certa.</p>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-40 border-t border-white-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-12 leading-[0.9]">Escalar com <br /><span className="text-gray-600">previsibilidade.</span></h2>
          <p className="text-gray-400 text-xl mb-20 max-w-2xl mx-auto font-light">Pronto para conversar sobre como a Jornada Ideal pode ser a extensão estratégica que seu negócio precisa?</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a href="https://wa.me/5527992584148?text=Olá!%20Vim%20pelo%20site%20da%20Jornada%20Ideal%20e%20tenho%20interesse%20em%20escalar%20meu%20negócio.%20Gostaria%20de%20entender%20como%20vocês%20podem%20me%20ajudar." target="_blank" rel="noopener noreferrer" className="btn-white p-12 rounded-[32px] flex flex-col items-center justify-center group">
              <i className="fab fa-whatsapp text-4xl mb-6 group-hover:scale-110 transition-transform"></i>
              <span class="font-black uppercase text-[12px] tracking-[0.2em]">Falar no WhatsApp</span>
            </a>
            <a href="https://wa.me/5527992584148?text=Olá!%20Vim%20pelo%20site%20da%20Jornada%20Ideal%20e%20quero%20agendar%20uma%20consultoria%20estratégica.%0A%0AMeu%20objetivo%20é%20entender%20como%20posso%20escalar%20meu%20negócio%20com%20previsibilidade%20e%20melhorar%20meus%20resultados%20de%20marketing." target="_blank" rel="noopener noreferrer" className="btn-outline p-12 rounded-[32px] flex flex-col items-center justify-center group">
              <i className="fas fa-calendar-check text-4xl mb-6 group-hover:scale-110 transition-transform"></i>
              <span class="font-black uppercase text-[12px] tracking-[0.2em]">Agendar Consultoria</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white-10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="max-w-sm">
              <div className="flex items-center space-x-3 mb-8">
                <img src="https://i.im.ge/2026/02/26/e301wy.WhatsApp-Image-2026-02-26-at-14-47-45.jpeg" alt="Logo" className="logo-img" />
                <span className="text-2xl font-black uppercase tracking-tighter">Jornada <span className="font-light text-gray-400">Ideal</span></span>
              </div>
              <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.2em] leading-loose">
                Hub de performance e crescimento estratégico para negócios de alto nível. Focado em resultados reais e escala previsível.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 gap-20 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
              <div className="flex flex-col space-y-5">
                <span className="text-white mb-2">Social</span>
                <a href="https://www.instagram.com/jornadaidealoficial?igsh=MW9sNDFpb3Z3eTR4cQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
                <a href="https://wa.me/5527992584148?text=Olá!%20Vim%20pelo%20site%20da%20Jornada%20Ideal%20e%20tenho%20interesse%20em%20escalar%20meu%20negócio.%20Gostaria%20de%20entender%20como%20vocês%20podem%20me%20ajudar." target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="text-white mb-2">Links</span>
                <a href="#servicos" className="hover:text-white transition">Serviços</a>
                <a href="#quem-somos" className="hover:text-white transition">Quem Somos</a>
              </div>
            </div>
          </div>
          
          <div className="mt-32 flex flex-col md:flex-row justify-between items-center border-t border-white-10 pt-10 text-[9px] text-gray-600 font-bold uppercase tracking-[0.3em] gap-6">
            <p>&copy; 2024 Jornada Ideal Agency. Todos os direitos reservados.</p>
            <div className="flex items-center space-x-8">
              <span>Built for Scale</span>
              <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
              <span>Performance Hub</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
