import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">Alex Johnson</h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
            Full-Stack Developer & UI Designer
          </p>
        </div>

        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          I craft pixel-perfect, accessible web experiences that blend thoughtful design with robust engineering.
          Specializing in building modern applications that users love.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="text-base px-8 group">
            Hire Me
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
