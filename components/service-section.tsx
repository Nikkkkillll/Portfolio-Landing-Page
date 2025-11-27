import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Plug } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive, performant web applications using modern frameworks like React, Next.js, and TypeScript. Clean code and best practices guaranteed.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive user interfaces with a focus on accessibility and user experience. From wireframes to high-fidelity prototypes.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "Seamlessly connecting your applications with third-party services and APIs. RESTful and GraphQL expertise for robust data handling.",
  },
]

export function ServicesSection() {
  return (
    <section className="px-4 py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
