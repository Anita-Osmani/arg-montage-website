import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Facebook,
  Instagram,
} from 'lucide-react';
import ProjectsPage from './ProjectsPage.jsx';
import {Home, Boxes, DoorOpen } from 'lucide-react';
import { RiTiktokFill } from "react-icons/ri";




function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

  window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Initialize the active section based on the current scroll position

  return (
    <div className="font-['Inter'] text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold" style={{ color: '#492D25' }}>
                ARG Montage
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Accueil', 'À propos de nous', 'Services', 'Réalisations', 'Contact'].map((item, index) => {
                  const sectionId = ['home', 'about', 'services', 'projects', 'contact'][index];

                  return (
                    <button
                      key={item}
                      onClick={() => scrollToSection(sectionId)}
                      className={`px-3 py-2 text-base font-medium transition-colors hover:text-opacity-80 ${
                        activeSection === sectionId 
                          ? 'border-b-2' 
                          : 'hover:border-b-2 hover:border-opacity-50'
                      }`}
                      style={{ 
                        color: activeSection === sectionId ? '#492D25' : '#724935',
                        borderColor: '#EABF7C'
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md"
                style={{ color: '#492D25' }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Accueil', 'À propos de nous', 'Services', 'Réalisations', 'Contact'].map((item, index) => {
  const sectionId = ['home', 'about', 'services', 'projects', 'contact'][index]; // EMRA TË SAKTË

                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className="block px-3 py-2 text-base font-medium w-full text-left transition-colors"
                    style={{ color: '#724935' }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

    {/* HERO SECTION */}
<section id="home" className="relative w-full h-screen">
  {/* Background image full screen */}
  <div
    className="w-full h-full bg-cover bg-center"
    style={{
      backgroundImage: "url('/assets/hero5.jpg')",
    }}
  >
    {/* Overlay në anën e majtë me gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
      <div className="pl-16 text-white max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase text-gray-100 tracking-wider mb-2">
          VIE SIGNATURE ARG
        </h1>
        <p className="text-lg tracking-widest text-gray-300 mb-2">
          Des intérieurs contemporains qui respirent l’élégance.
        </p>
      </div>
    </div>
  </div>
</section>




      {/* About Section */}
<section id="about" className="py-20" style={{ backgroundColor: '#E8E3DD' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#492D25' }}>
          À propos de ARG Montage
        </h2>
        <p className="text-lg mb-6 leading-relaxed" style={{ color: '#724935' }}>
          Fondée à l'origine en Italie où elle a exercé pendant plus de 20 ans, ARG Montage est aujourd’hui une référence incontournable en Suisse dans le domaine de l'aménagement intérieur et de la finition haut de gamme. Depuis 8 ans, notre présence sur le territoire suisse reflète notre engagement envers la précision, l'élégance et l'efficacité.
        </p>
        <p className="text-lg mb-8 leading-relaxed" style={{ color: '#724935' }}>
          Chaque projet est mené avec rigueur et souci du détail, en intégrant les dernières technologies pour garantir un résultat à la hauteur des attentes les plus élevées.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#492D25' }}>500+</div>
            <div className="text-sm" style={{ color: '#724935' }}>Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#492D25' }}>25+</div>
            <div className="text-sm" style={{ color: '#724935' }}>Années d'expérience</div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Équipe ARG Montage"
          className="rounded-lg shadow-xl w-full"
        />
      </div>
    </div>
  </div>
</section>



     {/* Section Services */}
<section id="services" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4" style={{ color: '#492D25' }}>
        Nos Services
      </h2>
      <p className="text-xl max-w-3xl mx-auto" style={{ color: '#724935' }}>
        De l'idée initiale à la réalisation finale – nous vous accompagnons à chaque étape de votre projet d'intérieur.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Kitchen */}
      <div className="border border-gray-200 rounded-xl px-6 py-6 bg-white shadow-sm hover:shadow-md transition text-left max-w-sm mx-auto">
        <div className="mb-4 text-[#EABF7C]">
          <Home className="w-10 h-10" />
        </div>
        <h3 className="text-lg font-semibold text-[#492D25] mb-2">
          Installation de cuisines
        </h3>
        <p className="text-sm text-[#724935] leading-relaxed">
          Nous concevons et installons des cuisines modernes et fonctionnelles, parfaitement adaptées à votre espace, vos besoins et votre style de vie.
        </p>
      </div>

      {/* Wardrobes */}
      <div className="border border-gray-200 rounded-xl px-6 py-6 bg-white shadow-sm hover:shadow-md transition text-left max-w-sm mx-auto">
        <div className="mb-4 text-[#EABF7C]">
          <Boxes className="w-10 h-10" />
        </div>
        <h3 className="text-lg font-semibold text-[#492D25] mb-2">
          Armoires & rangements
        </h3>
        <p className="text-sm text-[#724935] leading-relaxed">
          Nous fabriquons et montons des armoires et rangements sur mesure, en optimisant chaque centimètre pour un intérieur ordonné, pratique et élégant.
        </p>
      </div>

      {/* Doors */}
      <div className="border border-gray-200 rounded-xl px-6 py-6 bg-white shadow-sm hover:shadow-md transition text-left max-w-sm mx-auto">
        <div className="mb-4 text-[#EABF7C]">
          <DoorOpen className="w-10 h-10" />
        </div>
        <h3 className="text-lg font-semibold text-[#492D25] mb-2">
          Portes & séparations
        </h3>
        <p className="text-sm text-[#724935] leading-relaxed">
          Nous installons des portes intérieures et cloisons modernes qui garantissent une séparation fluide, discrète et esthétique de vos espaces.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Projects Section */}
<section id="projects" className="py-20" style={{ backgroundColor: '#F7F4F1' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <ProjectsPage />
  </div>
</section>

    
      {/* Contact Section */}
<section id="contact" className="bg-[#f6f4f2] py-20 px-6 md:px-32">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Ana e majtë */}
    <div>
      <h2 className="text-5xl md:text-6xl font-bold text-[#492D25] mb-6">CONTACT</h2>
      <p className="text-[#724935] text-lg max-w-md mb-8">
        Pour toute demande ou simplement pour dire bonjour,<br />
        n'hésitez pas à nous contacter.
      </p>
      <p className="italic text-[#492D25]">
        "Chaque espace mérite une touche d'élégance – et nous savons comment la lui offrir."
      </p>
    </div>

    {/* Ana e djathtë */}
    <div className="grid md:grid-cols-2 gap-10 text-sm text-[#2e2e2e]">

      <div>
        <h4 className="uppercase text-[#492D25] font-semibold mb-1">Email</h4>
        <p>contact@argmontage.ch</p>

        <h4 className="uppercase text-[#492D25] font-semibold mt-6 mb-1">Téléphone</h4>
        <p>+41 79 559 08 92<br />+41 78 739 88 62</p>
      </div>

      <div>
        <h4 className="uppercase text-[#492D25] font-semibold mb-1">Adresse</h4>
        <p>Nous opérons dans toute la Suisse.</p>

        <h4 className="uppercase text-[#492D25] font-semibold mt-6 mb-1">Suivez-nous</h4>
        <p>Instagram, Facebook, TikTok, WhatsApp</p> {/* thjeshtë për stil, ikonat i ke në footer */}
      </div>

    </div>
  </div>
</section>
{/* End of Contact Section */}




      {/* Footer */}

      <footer className="py-8 bg-[#492D25]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h3 className="text-white text-2xl font-semibold mb-4 tracking-wide">
      ARG Montage
    </h3>

    <p className="text-gray-300 mb-6">
      Construire avec précision. Rénover avec passion.
    </p>

    {/* Ikonat e rrjeteve sociale */}
    <div className="flex justify-center space-x-6 mb-6">
      <a
        href="https://www.facebook.com/people/Isuf-Mehmeti/100006361482847/"  // zëvendëso me linkun tënd real
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <Facebook className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
      </a>

      <a
        href="https://www.instagram.com/arg_montage"  // zëvendëso me linkun tënd real
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
      </a>

      <a
  href="https://www.tiktok.com/@arg.montage" // zëvendëso me linkun real kur ta krijosh
  target="_blank"
  rel="noopener noreferrer"
  aria-label="TikTok"
>
  <RiTiktokFill className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
</a>
    </div>

    <p className="text-sm text-gray-400">
      &copy; 2025 ARG Montage. Tous droits réservés.
    </p>
  </div>
</footer>

    </div>
  );
}

export default App;