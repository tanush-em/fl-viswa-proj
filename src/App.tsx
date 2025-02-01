import React, { useEffect } from 'react';
import { Sparkles, Phone, Mail, MapPin, Clock, Instagram, UserCircle, PhoneCall } from 'lucide-react';

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
    experience: "5+ years of experience",
    qualifications: [
      "BDS, PMU, FMC"
    ]
  };


  const treatments = [
    {
      name: "Hydra Facial Treatment",
      description: "Advanced facial treatment that cleanses, exfoliates, and hydrates your skin using innovative technology for a radiant glow.",
      imageUrl: ""
    },
    {
      name: "Lip Pigmentation - Lip Blush - Lip Tattooing",
      description: "Semi-permanent makeup technique to enhance lip color and shape, creating naturally beautiful and fuller-looking lips.",
      imageUrl: ""
    },
    {
      name: "Eyebrow Microblading",
      description: "Precise, hair-like strokes created manually to achieve natural-looking, perfectly shaped eyebrows that last.",
      imageUrl: ""
    },
    {
      name: "Korean Skin Facial",
      description: "Multi-step facial treatment inspired by Korean beauty rituals, focusing on achieving clear, glowing skin.",
      imageUrl: ""
    },
    {
      name: "BB Glow Treatment",
      description: "Semi-permanent foundation treatment that evens out skin tone and provides a natural, dewy finish.",
      imageUrl: ""
    },
    {
      name: "Eyebrow Micropigmentation",
      description: "Advanced permanent makeup technique for defined, perfectly shaped eyebrows using state-of-the-art equipment.",
      imageUrl: ""
    },
    {
      name: "Ombra Eyebrow Style",
      description: "Gradient brow effect that creates a soft, powdered look, perfect for those seeking a bold yet natural appearance.",
      imageUrl: ""
    },
    {
      name: "Face and Neck Cupping Therapy",
      description: "Traditional therapy using suction cups to improve blood flow, reduce tension, and promote skin rejuvenation.",
      imageUrl: ""
    },
    {
      name: "Wart Removal - Skin Tag Removal",
      description: "Safe and effective removal of skin irregularities using advanced medical techniques.",
      imageUrl: ""
    },
    {
      name: "Microdermabrasion",
      description: "Non-invasive exfoliation treatment that removes dead skin cells and stimulates collagen production.",
      imageUrl: ""
    },
    {
      name: "Dermaplaning",
      description: "Physical exfoliation technique that removes dead skin cells and peach fuzz for smoother, brighter skin.",
      imageUrl: ""
    },
    {
      name: "Medifacial",
      description: "Medical-grade facial treatment combining multiple techniques for maximum skin improvement.",
      imageUrl: ""
    },
    {
      name: "Chemical Peel",
      description: "Controlled exfoliation using chemical solutions to improve skin texture, tone, and overall appearance.",
      imageUrl: ""
    },
    {
      name: "Body Chemical Peels",
      description: "Specialized chemical treatments for body skin concerns, targeting issues like acne, scarring, and pigmentation.",
      imageUrl: ""
    },
    {
      name: "Facial Treatments for All Skin Types",
      description: "Customized facial treatments designed to address specific skin concerns and types.",
      imageUrl: ""
    },
    {
      name: "Face, Lips, Undereye Pigmentation Treatment",
      description: "Targeted treatments to address uneven pigmentation in sensitive facial areas.",
      imageUrl: ""
    },
    {
      name: "Beauty Spot Creation",
      description: "Artistic creation of permanent beauty marks to enhance facial features and add character.",
      imageUrl: ""
    },
    {
      name: "Permanent Laser Hair Removal",
      description: "Long-lasting hair removal solution using advanced laser technology for smooth, hair-free skin.",
      imageUrl: ""
    },
    {
      name: "IPL Photo Facial",
      description: "Light-based treatment that addresses various skin concerns including sun damage and age spots.",
      imageUrl: ""
    },
    {
      name: "Laser Tattoo Removal",
      description: "Advanced laser technology to safely remove unwanted tattoos of all colors and sizes.",
      imageUrl: ""
    },
    {
      name: "Laser Treatment for Skin Conditions",
      description: "Specialized laser treatments targeting acne, stretch marks, age spots, and other skin concerns.",
      imageUrl: ""
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://isyaderm.com/storage/2023/12/Laser-Hair-Removal-by-Isya-Aesthetics-in-Delhi-1024x683.webp"
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

      {/* About Section */}
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

      {/* Practitioner Section */}
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

      {/* Services Section */}
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div key={index} className="group h-96 [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="h-full w-full rounded-lg shadow-lg overflow-hidden bg-white">
                    <img
                      src={treatment.imageUrl}
                      alt={treatment.name}
                      className="w-full h-2/3 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-semibold">{treatment.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="h-full w-full rounded-lg shadow-lg bg-sky-50 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">{treatment.name}</h3>
                      <p className="text-gray-600 mb-4">{treatment.description}</p>
                    </div>
                    <a href="https://wa.me/message/2M2RUNHV3UVDO1">
                      <button
                        className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-md transition-colors duration-200"
                      >
                        Book Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
