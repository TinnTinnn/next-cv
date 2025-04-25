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
import { Github, Linkedin, Mail, Twitter, MapPin, Phone, Calendar, Briefcase, GraduationCap } from "lucide-react"

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
          <h1 className="text-2xl font-bold">John.Dev</h1>
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
          className="absolute inset-0 z-0 opacity-5 dark:opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="mb-4 inline-block">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-purple-500"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">John Doe</h1>
          <div className="h-16 flex justify-center items-center">
            <span className="text-2xl md:text-4xl mr-2">I am a </span>
            <TypeAnimation
              words={words}
              className="text-2xl md:text-4xl text-purple-600 dark:text-purple-400 font-bold"
            />
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="#"
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
              href="#"
              className="text-zinc-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-zinc-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-zinc-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="text-zinc-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
                <Image src="/placeholder.svg?height=800&width=600" alt="About Me" fill className="object-cover" />
              </div>
            </RevealCard>
            <RevealCard>
              <div>
                <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
                <p className="text-zinc-700 dark:text-gray-300 mb-6">
                  I am a passionate developer with over 5 years of experience in web development. I specialize in
                  creating responsive, user-friendly websites and applications using modern technologies like React,
                  Next.js, and Node.js.
                </p>
                <p className="text-zinc-700 dark:text-gray-300 mb-6">
                  When I'm not coding, I enjoy making music, singing, and traveling to explore new cultures and gain
                  inspiration for my creative work.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-700 dark:text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="mr-2 text-purple-600 dark:text-purple-400" size={20} />
                    <span>Born: January 1, 1990</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 text-purple-600 dark:text-purple-400" size={20} />
                    <span>Location: Bangkok, Thailand</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 text-purple-600 dark:text-purple-400" size={20} />
                    <span>Email: john@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 text-purple-600 dark:text-purple-400" size={20} />
                    <span>Phone: +66 123 456 789</span>
                  </div>
                </div>
              </div>
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
                  {statsInView ? <CountUp end={5} /> : "0"}+
                </h3>
                <p className="text-zinc-700 dark:text-gray-300">Years Experience</p>
              </div>
            </RevealCard>
            <RevealCard>
              <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-none">
                <h3 className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {statsInView ? <CountUp end={50} /> : "0"}+
                </h3>
                <p className="text-zinc-700 dark:text-gray-300">Projects Completed</p>
              </div>
            </RevealCard>
            <RevealCard>
              <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-none">
                <h3 className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {statsInView ? <CountUp end={20} /> : "0"}+
                </h3>
                <p className="text-zinc-700 dark:text-gray-300">Happy Clients</p>
              </div>
            </RevealCard>
            <RevealCard>
              <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-none">
                <h3 className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {statsInView ? <CountUp end={205} /> : "0"}
                </h3>
                <p className="text-zinc-700 dark:text-gray-300">GitHub Contributions</p>
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
                      Vue.js
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
                      Tailwind CSS
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Material UI
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Redux
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Backend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Node.js
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Express
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Python
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Django
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      RESTful APIs
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      GraphQL
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Firebase
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
                      Redis
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Firestore
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
                      Git
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      GitHub Actions
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
                      Netlify
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      CI/CD
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
                      Adobe XD
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Photoshop
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Illustrator
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
                      Problem Solving
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Music Production
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Photography
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Travel Planning
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Language Learning
                    </Badge>
                    <Badge className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                      Data Analysis
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
                    <div className="mb-1 text-purple-600 dark:text-purple-400">2020 - Present</div>
                    <h4 className="text-xl font-bold mb-2">Senior Frontend Developer</h4>
                    <p className="text-zinc-500 dark:text-gray-400 mb-2">Tech Solutions Co., Ltd.</p>
                    <p className="text-zinc-700 dark:text-gray-300">
                      Lead the frontend development team in creating responsive web applications using React, Next.js,
                      and Tailwind CSS. Implemented CI/CD pipelines and improved performance by 40%.
                    </p>
                  </div>
                </RevealCard>

                <RevealCard>
                  <div className="relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="mb-1 text-purple-600 dark:text-purple-400">2018 - 2020</div>
                    <h4 className="text-xl font-bold mb-2">Web Developer</h4>
                    <p className="text-zinc-500 dark:text-gray-400 mb-2">Digital Agency Co., Ltd.</p>
                    <p className="text-zinc-700 dark:text-gray-300">
                      Developed and maintained client websites using JavaScript, HTML, and CSS. Collaborated with
                      designers to implement responsive designs and interactive features.
                    </p>
                  </div>
                </RevealCard>

                <RevealCard>
                  <div className="relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="mb-1 text-purple-600 dark:text-purple-400">2016 - 2018</div>
                    <h4 className="text-xl font-bold mb-2">Junior Developer</h4>
                    <p className="text-zinc-500 dark:text-gray-400 mb-2">Startup Inc.</p>
                    <p className="text-zinc-700 dark:text-gray-300">
                      Assisted in developing web applications and implementing new features. Learned modern web
                      development practices and collaborated with senior developers.
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
                    <div className="mb-1 text-purple-600 dark:text-purple-400">2014 - 2016</div>
                    <h4 className="text-xl font-bold mb-2">Master's in Computer Science</h4>
                    <p className="text-zinc-500 dark:text-gray-400 mb-2">University of Technology</p>
                    <p className="text-zinc-700 dark:text-gray-300">
                      Specialized in web technologies and software engineering. Graduated with honors and completed a
                      thesis on optimizing web application performance.
                    </p>
                  </div>
                </RevealCard>

                <RevealCard>
                  <div className="relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="mb-1 text-purple-600 dark:text-purple-400">2010 - 2014</div>
                    <h4 className="text-xl font-bold mb-2">Bachelor's in Computer Engineering</h4>
                    <p className="text-zinc-500 dark:text-gray-400 mb-2">National University</p>
                    <p className="text-zinc-700 dark:text-gray-300">
                      Studied programming fundamentals, data structures, algorithms, and web development. Participated
                      in coding competitions and hackathons.
                    </p>
                  </div>
                </RevealCard>

                <RevealCard>
                  <div className="relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="mb-1 text-purple-600 dark:text-purple-400">2018 - 2019</div>
                    <h4 className="text-xl font-bold mb-2">Certification in UX Design</h4>
                    <p className="text-zinc-500 dark:text-gray-400 mb-2">Design Institute</p>
                    <p className="text-zinc-700 dark:text-gray-300">
                      Learned user experience principles, interface design, and usability testing. Completed projects
                      focusing on creating intuitive and accessible interfaces.
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
                  <Image src="/placeholder.svg?height=400&width=600" alt="Project 1" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                  <p className="text-zinc-700 dark:text-gray-300 mb-4">
                    A full-featured online store built with Next.js, featuring product listings, cart functionality, and
                    payment processing.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Tailwind
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
                  <Image src="/placeholder.svg?height=400&width=600" alt="Project 2" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Music Streaming App</h3>
                  <p className="text-zinc-700 dark:text-gray-300 mb-4">
                    A web application for streaming music, featuring playlists, artist profiles, and personalized
                    recommendations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      MongoDB
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
                  <Image src="/placeholder.svg?height=400&width=600" alt="Project 3" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Travel Blog</h3>
                  <p className="text-zinc-700 dark:text-gray-300 mb-4">
                    A personal travel blog showcasing destinations, photos, and travel tips from around the world.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Tailwind
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Sanity CMS
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
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
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
                      <p className="text-zinc-700 dark:text-gray-300">Bangkok, Thailand</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="mr-4 text-purple-600 dark:text-purple-400 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-zinc-700 dark:text-gray-300">john@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="mr-4 text-purple-600 dark:text-purple-400 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-zinc-700 dark:text-gray-300">+66 123 456 789</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-colors"
                    >
                      <Mail size={20} />
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
                        placeholder="John Doe"
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
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="text-zinc-500 dark:text-gray-500 mt-2">Designed and built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}
