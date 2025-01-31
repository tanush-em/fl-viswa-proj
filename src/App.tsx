import React, { useEffect } from 'react';
import { Sparkles, Gem, Phone, Mail, MapPin, Clock, Instagram, UserCircle, PhoneCall } from 'lucide-react';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const practitioner = {
    name: "Dr R. Kowsalya",
    title: "Permanent Makeup Artist",
    experience: "3+ years of experience",
    qualifications: [
      "BDS, PMU, FMC"
    ]
  };


  const treatments = [
    {
      name: "Hydra Facial Treatment",
      description: "Advanced facial treatment that cleanses, exfoliates, and hydrates your skin using innovative technology for a radiant glow.",
      duration: "60 mins",
      price: "₹1,450"
    },
    {
      name: "Lip Pigmentation - Lip Blush - Lip Tattooing",
      description: "Semi-permanent makeup technique to enhance lip color and shape, creating naturally beautiful and fuller-looking lips.",
      price: "₹12,999"
    },
    {
      name: "Eyebrow Microblading",
      description: "Precise, hair-like strokes created manually to achieve natural-looking, perfectly shaped eyebrows that last.",
      price: "₹5,999"
    },
    {
      name: "Korean Skin Facial",
      description: "Multi-step facial treatment inspired by Korean beauty rituals, focusing on achieving clear, glowing skin.",
      price: "₹1,250"
    },
    {
      name: "BB Glow Treatment",
      description: "Semi-permanent foundation treatment that evens out skin tone and provides a natural, dewy finish.",
      price: "₹4,999"
    },
    {
      name: "Eyebrow Micropigmentation",
      description: "Advanced permanent makeup technique for defined, perfectly shaped eyebrows using state-of-the-art equipment.",
      price: "₹5,999"
    },
    {
      name: "Ombra Eyebrow Style",
      description: "Gradient brow effect that creates a soft, powdered look, perfect for those seeking a bold yet natural appearance.",
      price: "₹5,999"
    },
    {
      name: "Face and Neck Cupping Therapy",
      description: "Traditional therapy using suction cups to improve blood flow, reduce tension, and promote skin rejuvenation.",
      price: "₹450"
    },
    {
      name: "Wart Removal - Skin Tag Removal",
      description: "Safe and effective removal of skin irregularities using advanced medical techniques.",
      price: "₹150"
    },
    {
      name: "Microdermabrasion",
      description: "Non-invasive exfoliation treatment that removes dead skin cells and stimulates collagen production.",
      price: "₹450"
    },
    {
      name: "Dermaplaning",
      description: "Physical exfoliation technique that removes dead skin cells and peach fuzz for smoother, brighter skin.",
      price: "₹350"
    },
    {
      name: "Medifacial",
      description: "Medical-grade facial treatment combining multiple techniques for maximum skin improvement.",
      price: "₹999"
    },
    {
      name: "Chemical Peel",
      description: "Controlled exfoliation using chemical solutions to improve skin texture, tone, and overall appearance.",
      price: "₹1,500"
    },
    {
      name: "Body Chemical Peels",
      description: "Specialized chemical treatments for body skin concerns, targeting issues like acne, scarring, and pigmentation.",
      price: "₹950"
    },
    {
      name: "Facial Treatments for All Skin Types",
      description: "Customized facial treatments designed to address specific skin concerns and types.",
      price: "₹450"
    },
    {
      name: "Face, Lips, Undereye Pigmentation Treatment",
      description: "Targeted treatments to address uneven pigmentation in sensitive facial areas.",
      price: "₹499"
    },
    {
      name: "Beauty Spot Creation",
      description: "Artistic creation of permanent beauty marks to enhance facial features and add character.",
      price: "₹499"
    },
    {
      name: "Permanent Laser Hair Removal",
      description: "Long-lasting hair removal solution using advanced laser technology for smooth, hair-free skin.",
      price: "₹1,499"
    },
    {
      name: "IPL Photo Facial",
      description: "Light-based treatment that addresses various skin concerns including sun damage and age spots.",
      price: "₹999"
    },
    {
      name: "Laser Tattoo Removal",
      description: "Advanced laser technology to safely remove unwanted tattoos of all colors and sizes.",
      price: "₹1,299"
    },
    {
      name: "Laser Treatment for Skin Conditions",
      description: "Specialized laser treatments targeting acne, stretch marks, age spots, and other skin concerns.",
      price: "₹1,299"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Improved mobile responsiveness */}
      <header className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="assets/hero-bg.png"
            alt="Spa background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sky-900/40"></div>
        </div>

        <div className="relative text-center text-white px-4 max-w-[90%] md:max-w-none">
          <h1 className="text-2xl sm:text-3xl md:text-7xl mb-4 md:mb-6 font-medium leading-tight">
            OM MURUGA COSMETICS & MAKEUP STUDIO
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 md:mb-8">
            Discover your natural beauty
          </p>
          <a href="mailto:ommurugabeautyclinic@gmail.com">
            <button className="bg-blue-700 hover:bg-sky-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full backdrop-blur-sm transition-all text-sm md:text-base">
              Book Now
            </button>
          </a>
        </div>
      </header>

      {/* About Section - Improved spacing for mobile */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-on-scroll opacity-0">
            <div className="flex justify-center mb-4 md:mb-6">
              <Sparkles className="w-16 md:w-24 h-16 md:h-24 animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl mb-6 md:mb-8 leading-tight">
              WELCOME TO OM MURUGA COSMETICS AND LASER TREATMENT
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Experience the perfect blend of traditional techniques and modern technology.
              Our expertise dedicated to helping you achieve your beauty and wellness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Practitioner Section - Improved mobile layout */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-sky-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8 animate-on-scroll opacity-0">
            <UserCircle className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 md:mb-6 text-sky-900" />
            <h2 className="text-3xl md:text-4xl mb-2">Meet Our Expert</h2>
          </div>
          <div className="animate-on-scroll opacity-0 max-w-2xl mx-auto text-center px-4">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-sky-900">{practitioner.name}</h3>
              <p className="text-lg md:text-xl text-sky-700">{practitioner.title}</p>
              <p className="text-gray-600">{practitioner.experience}</p>
              <div className="space-y-1">
                <h3 className="list-none text-gray-600">
                  {practitioner.qualifications.map((qual, index) => (
                    <div key={index} className="text-sm md:text-base">{qual}</div>
                  ))}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Improved card layout for mobile */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="group relative p-4 md:p-6 rounded-lg bg-sky-200 hover:shadow-xl transition-all duration-200
                     animate-on-scroll opacity-0 transform hover:-translate-y-2 hover:scale-105
                     cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-medium mb-2 text-black group-hover:text-sky-900
                          transition-colors duration-200">
                    {treatment.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 group-hover:text-gray-700
                          transition-colors duration-200">
                    {treatment.description}
                  </p>
                  <div className="mt-4 opacity-100 md:opacity-0 group-hover:opacity-100 transform
                           translate-y-0 md:translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                    <div className="text-center text-base md:text-lg">
                      <span>{treatment.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section - Improved mobile grid */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-sky-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-16">Contact Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <a
              href="https://www.instagram.com/om__muruga_cosmetics_pmustudio?igsh=MTAwNncxNmtlMmV6eg=="
              className="group flex flex-col items-center p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2"
            >
              <Instagram className="w-12 h-12 md:w-16 md:h-16 text-sky-400 group-hover:text-sky-600 transition-colors mb-4" />
              <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">Follow Us</h3>
              <p className="text-sm md:text-base text-gray-600 text-center">Stay updated with our latest treatments and offers</p>
            </a>
            <a
              href="https://g.co/kgs/DT8jP9i"
              className="group flex flex-col items-center p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2"
            >
              <MapPin className="w-12 h-12 md:w-16 md:h-16 text-sky-400 group-hover:text-sky-600 transition-colors mb-4" />
              <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">Visit Us</h3>
              <p className="text-sm md:text-base text-gray-600 text-center">25A, 2nd Floor, SVS Nagar, 2nd Street, Valasaravakkam, Chennai 600087</p>
            </a>
            <a
              href="https://wa.me/message/2M2RUNHV3UVDO1"
              className="group flex flex-col items-center p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2"
            >
              <PhoneCall className="w-12 h-12 md:w-16 md:h-16 text-sky-400 group-hover:text-sky-600 transition-colors mb-4" />
              <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">Join Whatsapp Us</h3>
              <p className="text-sm md:text-base text-gray-600 text-center">Join our Whatsapp group to know more</p>
            </a>
          </div>

          {/* Additional Contact Info - Improved mobile layout */}
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-sky-900" />
              <span className="text-sm md:text-base text-gray-800">+91 86100 90040</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-sky-900" />
              <span className="text-sm md:text-base text-gray-800">Mon-Sun: 9AM-10PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Improved mobile layout */}
      <footer className="py-6 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-sky-400 mr-2" />
            <span className="text-sm md:text-base text-gray-600">Om Muruga Cosmetics</span>
          </div>
          <div className="flex space-x-6 md:space-x-4">
            <a href="https://wa.me/message/2M2RUNHV3UVDO1" className="text-gray-600 hover:text-sky-600">
              <PhoneCall className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/om__muruga_cosmetics_pmustudio?igsh=MTAwNncxNmtlMmV6eg==" className="text-gray-600 hover:text-sky-600">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:ommurugabeautyclinic@gmail.com" className="text-gray-600 hover:text-sky-600">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://g.co/kgs/DT8jP9i" className="text-gray-600 hover:text-sky-400">
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
