import React, { useEffect } from 'react';
import { Sparkles, Gem, Phone, Mail, MapPin, Clock, Instagram, UserCircle } from 'lucide-react';

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
      "Board Certified in Cosmetic Dermatology",
      "Advanced Training in Permanent Makeup",
      "Specialist in Korean Skincare Techniques"
    ],
    image: "/api/placeholder/300/300"
  };

  const treatments = [
    {
      name: "Hydra Facial Treatment",
      description: "Advanced facial treatment that cleanses, exfoliates, and hydrates your skin using innovative technology for a radiant glow.",
      duration: "60 mins",
      price: "₹3,500"
    },
    {
      name: "Lip Pigmentation - Lip Blush - Lip Tattooing",
      description: "Semi-permanent makeup technique to enhance lip color and shape, creating naturally beautiful and fuller-looking lips.",
      duration: "90 mins",
      price: "₹4,500"
    },
    {
      name: "Eyebrow Microblading",
      description: "Precise, hair-like strokes created manually to achieve natural-looking, perfectly shaped eyebrows that last.",
      duration: "120 mins",
      price: "₹5,000"
    },
    // Add the rest of the treatments with duration and price...
    // You should add duration and price for all treatments
  ];

  // const treatments = [
  //   {
  //     name: "Hydra Facial Treatment",
  //     description: "Advanced facial treatment that cleanses, exfoliates, and hydrates your skin using innovative technology for a radiant glow."
  //   },
  //   {
  //     name: "Lip Pigmentation - Lip Blush - Lip Tattooing",
  //     description: "Semi-permanent makeup technique to enhance lip color and shape, creating naturally beautiful and fuller-looking lips."
  //   },
  //   {
  //     name: "Eyebrow Microblading",
  //     description: "Precise, hair-like strokes created manually to achieve natural-looking, perfectly shaped eyebrows that last."
  //   },
  //   {
  //     name: "Eyebrow Micropigmentation",
  //     description: "Advanced permanent makeup technique for defined, perfectly shaped eyebrows using state-of-the-art equipment."
  //   },
  //   {
  //     name: "Ombra Eyebrow Style",
  //     description: "Gradient brow effect that creates a soft, powdered look, perfect for those seeking a bold yet natural appearance."
  //   },
  //   {
  //     name: "Korean Skin Facial",
  //     description: "Multi-step facial treatment inspired by Korean beauty rituals, focusing on achieving clear, glowing skin."
  //   },
  //   {
  //     name: "BB Glow Treatment",
  //     description: "Semi-permanent foundation treatment that evens out skin tone and provides a natural, dewy finish."
  //   },
  //   {
  //     name: "Face and Neck Cupping Therapy",
  //     description: "Traditional therapy using suction cups to improve blood flow, reduce tension, and promote skin rejuvenation."
  //   },
  //   {
  //     name: "Wart Removal - Skin Tag Removal",
  //     description: "Safe and effective removal of skin irregularities using advanced medical techniques."
  //   },
  //   {
  //     name: "Microdermabrasion",
  //     description: "Non-invasive exfoliation treatment that removes dead skin cells and stimulates collagen production."
  //   },
  //   {
  //     name: "Dermaplaning",
  //     description: "Physical exfoliation technique that removes dead skin cells and peach fuzz for smoother, brighter skin."
  //   },
  //   {
  //     name: "Medifacial",
  //     description: "Medical-grade facial treatment combining multiple techniques for maximum skin improvement."
  //   },
  //   {
  //     name: "Chemical Peel",
  //     description: "Controlled exfoliation using chemical solutions to improve skin texture, tone, and overall appearance."
  //   },
  //   {
  //     name: "Body Chemical Peels",
  //     description: "Specialized chemical treatments for body skin concerns, targeting issues like acne, scarring, and pigmentation."
  //   },
  //   {
  //     name: "Facial Treatments for All Skin Types",
  //     description: "Customized facial treatments designed to address specific skin concerns and types."
  //   },
  //   {
  //     name: "Face, Lips, Undereye Pigmentation Treatment",
  //     description: "Targeted treatments to address uneven pigmentation in sensitive facial areas."
  //   },
  //   {
  //     name: "Beauty Spot Creation",
  //     description: "Artistic creation of permanent beauty marks to enhance facial features and add character."
  //   },
  //   {
  //     name: "Permanent Laser Hair Removal",
  //     description: "Long-lasting hair removal solution using advanced laser technology for smooth, hair-free skin."
  //   },
  //   {
  //     name: "Photo Facial",
  //     description: "Light-based treatment that addresses various skin concerns including sun damage and age spots."
  //   },
  //   {
  //     name: "Laser Tattoo Removal",
  //     description: "Advanced laser technology to safely remove unwanted tattoos of all colors and sizes."
  //   },
  //   {
  //     name: "Laser Treatment for Skin Conditions",
  //     description: "Specialized laser treatments targeting acne, stretch marks, age spots, and other skin concerns."
  //   }
  // ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80"
            alt="Spa background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sky-900/40"></div>
        </div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-7xl mb-6">OM MURUGA COSMETICS PERMANENT MAKEUP STUDIO</h1>
          <p className="text-xl md:text-2xl font-light mb-8">Discover your natural beauty</p>
          <a href="mailto:ommurugabeautyclinic@gmail.com">
            <button className="bg-sky-400/20 hover:bg-sky-400/30 text-white px-8 py-3 rounded-full backdrop-blur-sm transition-all">
              Book Now
            </button>
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-on-scroll opacity-0">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-24 h-24 animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-4xl mb-8">WELCOME TO OM MURUGA COSMETICS AND LASER TREATMENT</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of traditional techniques and modern technology.
              Our expertise dedicated to helping you achieve your beauty and wellness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Added Practitioner Section */}
      <section className="py-20 px-4 md:px-8 bg-sky-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <UserCircle className="w-12 h-12 mx-auto mb-6 text-sky-900" />
            <h2 className="text-4xl md:text-4xl mb-8">Meet Our Expert</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 animate-on-scroll opacity-0">
            <div className="md:w-1/3">
              <img
                src={practitioner.image}
                alt={practitioner.name}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-2xl font-medium text-sky-900">{practitioner.name}</h3>
              <p className="text-xl text-sky-700">{practitioner.title}</p>
              <p className="text-gray-600">{practitioner.experience}</p>
              <div className="space-y-2">
                <h4 className="text-lg font-medium text-sky-900">Qualifications</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {practitioner.qualifications.map((qual, index) => (
                    <li key={index}>{qual}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-4xl text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-lg bg-sky-200 hover:shadow-xl transition-all duration-200 
                          animate-on-scroll opacity-0 transform hover:-translate-y-2 hover:scale-105
                          cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <h3 className="text-lg font-medium mb-2 text-sky-900 group-hover:text-black 
                               transition-colors duration-200">
                    {treatment.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 
                               transition-colors duration-200">
                    {treatment.description}
                  </p>

                  {/* Additional info that appears on hover */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform 
                                translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex justify-between text-md">
                      <span>{treatment.duration}</span>
                      <span>{treatment.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Contact Us Section*/}
      <section className="py-20 px-4 md:px-8 bg-sky-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-4xl text-center mb-16">Contact Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://instagram.com/OM_MURU_GA/"
              className="group flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2"
            >
              <Instagram className="w-16 h-16 text-sky-400 group-hover:text-sky-600 transition-colors mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">Follow Us</h3>
              <p className="text-gray-600 text-center">Stay updated with our latest treatments and offers</p>
            </a>
            <a
              href="https://g.co/kgs/DT8jP9i"
              className="group flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2"
            >
              <MapPin className="w-16 h-16 text-sky-400 group-hover:text-sky-600 transition-colors mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-center">25A, 2nd Floor, SVS Nagar, 2nd Street, Valasaravakkam, Chennai 600087</p>
            </a>
            <a
              href="mailto:ommurugabeautyclinic@gmail.com"
              className="group flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2"
            >
              <Mail className="w-16 h-16 text-sky-400 group-hover:text-sky-600 transition-colors mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 text-center">ommurugabeautyclinic@gmail.com</p>
            </a>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-12 flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-sky-400" />
              <span className="text-gray-800">+91 86100 90040</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-sky-400" />
              <span className="text-gray-800">Mon-Sun: 9AM-10PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Sparkles className="w-6 h-6 text-sky-400 mr-2" />
            <span className="text-gray-600">Om Muruga Cosmetics</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://instagram.com/OM_MURU_GA/" className="text-gray-600 hover:text-sky-600">
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