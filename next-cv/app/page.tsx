"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import TypeAnimation from "@/components/type-animation"
import CountUp from "@/components/count-up"
import RevealCard from "@/components/reveal-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, MapPin, Phone, Calendar, Briefcase, GraduationCap } from "lucide-react"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import PhotoSlider from "@/components/photo-slider";

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [statsRef, statsInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  })

  const words = ["Developer", "Musician", "Singer", "Traveler"]

  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tinn.Dev</h1>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={scrollToSection("home")}
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={scrollToSection("about")}
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={scrollToSection("skills")}
              >
                Skills
              </a>
              <a
                href="#experience"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={scrollToSection("experience")}
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={scrollToSection("projects")}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={scrollToSection("contact")}
              >
                Contact
              </a>
            </nav>
            <ThemeToggle />
            <button className="md:hidden">
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-16">
        <div
          className="absolute inset-0 z-0 opacity-20 dark:opacity-20"
          style={{
            backgroundImage: "url('/BackGroundPic.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="mb-4 inline-block">
            <Image
              src="/PicProfile.jpg"
              alt="My Profile picture"
              width={200}
              height={200}
              className="rounded-full border-4 border-purple-500"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Natatch Potong</h1>
          <div className="h-16 flex justify-center items-center">
            <span className="text-2xl md:text-4xl mr-2">I am a </span>
            <TypeAnimation
              words={words}
              className="text-2xl md:text-4xl text-purple-600 dark:text-purple-400 font-bold"
            />
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="/TinnResume22.4.25.pdf"
              download
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="border border-purple-600 hover:bg-purple-600/10 dark:hover:bg-purple-600/20 text-purple-600 dark:text-white px-6 py-3 rounded-full transition-colors"
              onClick={scrollToSection("contact")}
            >
              Contact Me
            </a>
          </div>
          <div className="mt-16 flex justify-center space-x-8">
            <a
              href="https://github.com/TinnTinnn"
              className="text-zinc-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.facebook.com/cronostinn.tinn"
              className="text-zinc-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/grittinpotong/"
              className="text-zinc-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors"
            >
              <FaInstagram  size={24} />
            </a>
            <a
              href="https://www.youtube.com/@CroNosArm"
              className="text-zinc-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <a
            href="#about"
            className="text-zinc-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors"
            onClick={scrollToSection("about")}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-100 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <RevealCard>
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image src="/AboutMe.jpg" alt="About Me" fill className="object-cover" />
              </div>
            </RevealCard>
            <RevealCard>
              <div>
                <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
                <p className="text-zinc-700 dark:text-gray-300 mb-6">
                  I am a passionate developer with over 2 years of experience in web development. I specialize in
                  creating responsive, user-friendly websites and applications using modern technologies like Laravel, React,
                  Next.js, and Node.js.
                </p>
                <p className="text-zinc-700 dark:text-gray-300 mb-6">
                  When I'm not coding, I enjoy playing music, singing, and traveling to explore new cultures and gain
                  inspiration for my creative work.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-700 dark:text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="mr-2 text-purple-600 dark:text-purple-400" size={20} />
                    <span>Born: February 1, 1989</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 text-purple-600 dark:text-purple-400" size={20} />
                    <span>Location: Bangken, Bangkok</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 text-purple-600 dark:text-purple-400" size={20} />
                    <span>Email: cronusarm@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 text-purple-600 dark:text-purple-400" size={20} />
                    <span>Phone: +66 860 044 473</span>
                  </div>
                </div>
              </div>
            </RevealCard>
          </div>
            <div className="mt-20">
                <RevealCard>
                    <h3 className="text-3xl font-bold mb-8 text-center">My Journey in Pictures</h3>
                    <PhotoSlider
                        photos={[
                            {
                                src: "/Chillme.jpg",
                                alt: "Chill me",
                                title: "สะพานข้ามทางรถไฟ จ.ปราจีนบุรี",
                            },
                            {
                                src: "/DoiIntanont.jpg",
                                alt: "DoiIntanont",
                                title: "กิ่วแม่ปาน ดอยอินทนนท์ จ.เชียงใหม่",
                            },
                            {
                                src: "/MaeKampong.jpg",
                                alt: "Maekampong",
                                title: "บ้านแม่กำปอง จ.เชียงใหม่",
                            },
                            {
                                src: "/DoiPahtang.jpg",
                                alt: "DoiPahtang",
                                title: "ดอยผาตั้ง จ.เชียงราย",
                            },
                            {
                                src: "/Raicha101.jpg",
                                alt: "Chuifong Tea",
                                title: "ไร่ชาฉุยฟง จ.เชียงราย",
                            },
                            {
                                src: "/Phahee.jpg",
                                alt: "Phahee",
                                title: "ผาฮี้ จ.เชียงราย",
                            },
                            {
                                src: "/Phaheee.jpg",
                                alt: "Phahee",
                                title: "ผาฮี้ จ.เชียงราย",
                            },
                            {
                                src: "/WatPhaSornKaew.jpg",
                                alt: "WatPhathartphasornkeaw",
                                title: "วัดผาซ่อนแก้ว จ.เพชรบูรณ์",
                            },
                            {
                                src: "/Konglek3.jpg",
                                alt: "KongLek3",
                                title: "โค้งเลข 3 จ.น่าน",
                            },
                            {
                                src: "/HinMoh.jpg",
                                alt: "MohHinkaw",
                                title: "มอหินขาว จ.ชัยภูมิ",
                            },
                            {
                                src: "/Hinsamwan.jpg",
                                alt: "Hinsamwan",
                                title: "หินสามวาฬ จ.บึงกาฬ",
                            },
                            {
                                src: "/Phutok.jpg",
                                alt: "Phutok",
                                title: "ภูทอก จ.บึงกาฬ",
                            },
                            {
                                src: "/EsanNorth.jpg",
                                alt: "EsanNorth",
                                title: "ป้ายสุดเขตอีสานเหนือ จ.บึงกาฬ",
                            },
                            {
                                src: "/Dokkrajeaw.jpg",
                                alt: "Dokkrajeaw",
                                title: "ทุ่งดอกกระเจียว อุทธยานแห่งชาติไทรทอง จ.ชัยภูมิ",
                            },
                            {
                                src: "/BohnamphudTablaw.jpg",
                                alt: "BohnamphudTablaw",
                                title: "บ่อน้ำผุดทับลาว จ.ชัยภูมิ",
                            },
                            {
                                src: "/Phahamhod.jpg",
                                alt: "Phahamhod",
                                title: "ผาหำหด จ.ชัยภูมิ",
                            },
                            {
                                src: "/Maehongsorn.jpg",
                                alt: "Maehongsorn",
                                title: "ป้ายผู้พิชิต 1864 โค้ง จ.แม่ฮ่องสอน",
                            },
                            {
                                src: "/HuayMaekamin.jpg",
                                alt: "HuayMaekamin",
                                title: "น้ำตกห้วยแม่ขมิ้น จ.กาญจนบุรี",
                            },
                            {
                                src: "/samednangshe.jpg",
                                alt: "samednangshe",
                                title: "เสม็ดนางชี จ.พังงา",
                            },
                            {
                                src: "/Prajeen.jpg",
                                alt: "Prajeen",
                                title: "น้ำตกสาวน้อย จ.ปราจีนบุรี",
                            },
                            {
                                src: "/Kaowongprajan.jpg",
                                alt: "Kaowongprajan",
                                title: "บันได 3790 ขั้น เขาวงพระจันทร์ จ.ลพบุรี",
                            },
                            {
                                src: "/Prajaob.jpg",
                                alt: "Prajaob",
                                title: "อ่าวมะนาว จ.ประจวบคีรีขันธ์",
                            },
                            {
                                src: "/Samui.jpg",
                                alt: "Samui",
                                title: "เกาะสมุย จ.สุราษฎร์ธานี",
                            },
                        ]}
                        autoPlay={true}
                        interval={5000}
                    />
                </RevealCard>
            </div>
        </div>
      </section>




      {/* Skills & Stats Section */}
      <section id="skills" className="py-20 bg-white dark:bg-black" ref={statsRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Skills & Stats</h2>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <RevealCard>
              <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-none">
                <h3 className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {statsInView ? <CountUp end={2} /> : "0"}+
                </h3>
                <p className="text-zinc-700 dark:text-gray-300">Years Experience</p>
              </div>
            </RevealCard>
            <RevealCard>
              <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-none">
                <h3 className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {statsInView ? <CountUp end={9} /> : "0"}+
                </h3>
                <p className="text-zinc-700 dark:text-gray-300">Projects Completed</p>
              </div>
            </RevealCard>
            <RevealCard>
              <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-none">
                <h3 className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {statsInView ? <CountUp end={275} /> : "0"}+
                </h3>
                <p className="text-zinc-700 dark:text-gray-300">GitHub Contributions</p>
              </div>
            </RevealCard>
            <RevealCard>
              <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-none">
                <h3 className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {statsInView ? <CountUp end={686} /> : "0"} Days
                </h3>
                <p className="text-zinc-700 dark:text-gray-300">Self-Taught Journey</p>
              </div>
            </RevealCard>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <RevealCard>
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Frontend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      React
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Next.js
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      TypeScript
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      JavaScript
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      HTML5
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      CSS3/SCSS
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Bootstrap
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Tailwind CSS
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Mantine UI
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Radix
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Backend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Laravel
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Node.js
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Express
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      RESTful APIs
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      JWT Token
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Bcrypt
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Eloquent
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Database</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      MongoDB
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      MySQL
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      PostgreSQL
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      MariaDB
                    </Badge>
                  </div>
                </div>
              </div>
            </RevealCard>

            <RevealCard>
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">DevOps & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      GitHub
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Docker
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      AWS
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Vercel
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Render
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      CI/CD
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Postman
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Power BI
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Design</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Figma
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Photoshop
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      UI/UX Design
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Responsive Design
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Other Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Critical Thinking
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Collaboration and Teamwork
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Travel Planning
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Time Management
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Adaptability and Flexibility
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Leadership
                    </Badge>
                  </div>
                </div>
              </div>
            </RevealCard>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-zinc-100 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Experience & Education</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Briefcase className="mr-2 text-purple-600 dark:text-purple-400" size={24} />
                Work Experience
              </h3>

              <div className="space-y-12">
                <RevealCard>
                  <div className="relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="mb-1 text-purple-600 dark:text-purple-400">2009 - Present</div>
                    <h4 className="text-xl font-bold mb-2">Singer & Musician</h4>
                    <p className="text-zinc-500 dark:text-gray-400 mb-2">Bar & Restaurant</p>
                    <p className="text-zinc-700 dark:text-gray-300">
                      Performed regularly at various venues, engaging audiences through vocal and emotional expression.
                      Delivering positive experiences through music.
                    </p>
                  </div>
                </RevealCard>

                <RevealCard>
                  <div className="relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="mb-1 text-purple-600 dark:text-purple-400">2023 - current</div>
                    <h4 className="text-xl font-bold mb-2">Web Developer</h4>
                    <p className="text-zinc-500 dark:text-gray-400 mb-2">Self taught</p>
                    <p className="text-zinc-700 dark:text-gray-300">
                      Developed and maintained client websites using JavaScript, HTML, and CSS. Collaborated with
                      designers to implement responsive designs and interactive features.
                    </p>
                  </div>
                </RevealCard>

                <RevealCard>
                  <div className="relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="mb-1 text-purple-600 dark:text-purple-400">2021 - 2023</div>
                    <h4 className="text-xl font-bold mb-2">Sale</h4>
                    <p className="text-zinc-500 dark:text-gray-400 mb-2">Hooth</p>
                    <p className="text-zinc-700 dark:text-gray-300">
                      Presented engaging product information to customers, asked the right questions to understand thier needs and
                      helped guide them to the best solution.
                    </p>
                  </div>
                </RevealCard>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <GraduationCap className="mr-2 text-purple-600 dark:text-purple-400" size={24} />
                Education
              </h3>

              <div className="space-y-12">
                <RevealCard>
                  <div className="relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="mb-1 text-purple-600 dark:text-purple-400">2008 - 2010</div>
                    <h4 className="text-xl font-bold mb-2">Diploma Program Development</h4>
                    <p className="text-zinc-500 dark:text-gray-400 mb-2">Nakorn Si Thammarat VC</p>
                    <p className="text-zinc-700 dark:text-gray-300">
                      Specialized in software development fundamentals and web technologies.
                      Completed a Diploma in Program Development (equivalent to an associate degree) with a
                      strong foundation in programming, database management, and application development.
                    </p>
                  </div>
                </RevealCard>

                <RevealCard>
                  <div className="relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="mb-1 text-purple-600 dark:text-purple-400">2012 - 2016</div>
                    <h4 className="text-xl font-bold mb-2">Bachelor's in Western Music</h4>
                    <p className="text-zinc-500 dark:text-gray-400 mb-2">Chandrakasem Rajabhat University</p>
                    <p className="text-zinc-700 dark:text-gray-300">
                      Specialized in Western music with a major in vocal performance, developing strong
                      skills in live performances and musical interpretation.
                    </p>
                  </div>
                </RevealCard>

                <RevealCard>
                  <div className="relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="mb-1 text-purple-600 dark:text-purple-400">2023 - current</div>
                    <h4 className="text-xl font-bold mb-2">Self-Taught</h4>
                    <p className="text-zinc-500 dark:text-gray-400 mb-2">Independent Learning</p>
                    <p className="text-zinc-700 dark:text-gray-300">
                      Focused on developing programming skills, web development, and backend technologies.
                      Completed various personal projects to strengthen problem-solving, system design, and full-stack development abilities.
                    </p>
                  </div>
                </RevealCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">My Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RevealCard>
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg overflow-hidden shadow-md dark:shadow-none">
                <div className="relative h-48">
                  <Image src="/member-management.png" alt="Project 1" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Member Management</h3>
                  <p className="text-zinc-700 dark:text-gray-300 mb-4">
                    A Laravel and React-based web platform that allows users to authenticate and perform full CRUD operations
                    on their personal member records with an emphasis on security and usability.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Laravel
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      React+Vite
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Mantine
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      PostgreSQL
                    </span>
                  </div>
                  <a
                    href="https://react-la.onrender.com/"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </RevealCard>

            <RevealCard>
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg overflow-hidden shadow-md dark:shadow-none">
                <div className="relative h-48">
                  <Image src="/PortFolio.png" alt="Project 2" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Personal Portfolio</h3>
                  <p className="text-zinc-700 dark:text-gray-300 mb-4">
                    A modern and responsive developer portfolio that highlights my background,
                    technical skills, and past projects. Features smooth scrolling and intuitive
                    layout across multiple sections.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Tailwind
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      ShadCN UI
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </RevealCard>

            <RevealCard>
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg overflow-hidden shadow-md dark:shadow-none">
                <div className="relative h-48">
                  <Image src="/Inventory-pro.png" alt="Project 2" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Inventory Pro</h3>
                  <p className="text-zinc-700 dark:text-gray-300 mb-4">
                    A full-stack inventory system built with Next.js and NestJS, featuring secure authentication,
                    role-based access (Admin/User), and product management with real-time stock tracking.
                    Styled with Tailwind CSS and ShadCN UI for a modern, responsive interface.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Nest.js
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Tailwind
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      ShadCN UI
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      PostgreSQL
                    </span>
                  </div>
                  <a
                      href="https://next-nest-ts-front.vercel.app/dashboard"
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 inline-flex items-center"
                  >
                    View Project
                    <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </RevealCard>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/TinnTinnn"
              className="inline-flex items-center justify-center px-6 py-3 border border-purple-600 rounded-full text-purple-600 dark:text-purple-400 hover:bg-purple-600/10 dark:hover:bg-purple-600/20 transition-colors"
            >
              View All Projects
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-100 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <RevealCard>
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-zinc-700 dark:text-gray-300 mb-8">
                  Feel free to reach out to me for any inquiries, project proposals, or just to say hello! I'm always
                  open to discussing new projects and opportunities.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="mr-4 text-purple-600 dark:text-purple-400 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold">Location</h4>
                      <p className="text-zinc-700 dark:text-gray-300">Bangken, Bangkok</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="mr-4 text-purple-600 dark:text-purple-400 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-zinc-700 dark:text-gray-300">cronusarm@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="mr-4 text-purple-600 dark:text-purple-400 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-zinc-700 dark:text-gray-300">+66 860 044 473</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/TinnTinnn"
                      className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://www.facebook.com/cronostinn.tinn"
                      className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-colors"
                    >
                      <FaFacebook size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/grittinpotong/"
                      className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-colors"
                    >
                      <FaInstagram  size={20} />
                    </a>
                    <a
                      href="https://www.youtube.com/@CroNosArm"
                      className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-colors"
                    >
                      <FaYoutube size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </RevealCard>

            <RevealCard>
              <div>
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Your name here"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </RevealCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Natatch Potong. All rights reserved.
          </p>
          <p className="text-zinc-500 dark:text-gray-500 mt-2">Designed and built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}
