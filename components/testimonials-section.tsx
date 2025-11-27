import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    avatar: "/professional-woman-diverse.png",
    initials: "SC",
    content:
      "Alex transformed our vision into reality with exceptional attention to detail. The website exceeded our expectations in both design and performance.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager, Innovate Labs",
    avatar: "/professional-man.jpg",
    initials: "MR",
    content:
      "Working with Alex was seamless. His technical expertise and communication skills made the entire development process smooth and efficient.",
    rating: 5,
  },
  {
    name: "Emily Thompson",
    role: "Founder, DesignCo",
    avatar: "/professional-designer.png",
    initials: "ET",
    content:
      "The API integration work was flawless. Alex delivered a robust solution that scaled perfectly with our growing user base.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="px-4 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            What people say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border/50">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-pretty">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
