import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Award, Globe, ArrowRight, Mail, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Innovating Today, Transforming Tomorrow</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Center for Innovation, Technology & Economic Development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Explore Programs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro to CITED */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                CITED is a global center of excellence dedicated to fostering innovation, technology advancement, and
                sustainable economic development through world-class education, research, and partnerships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-6 w-6 text-blue-600" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To build global capacity for innovation-driven economic transformation through cutting-edge
                    education, research, and strategic partnerships that empower individuals, organizations, and nations
                    to thrive in the digital economy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-orange-500" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To be the world's leading institution for innovation and technology education, driving sustainable
                    economic development and creating a more equitable and prosperous future for all.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs & Fellowships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Programs & Fellowships</h2>
            <p className="text-lg text-gray-600">
              Transform your career with our world-class certification programs and fellowships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">Certification</Badge>
                <CardTitle>Certified Innovation & Entrepreneurship Professional (CIEP)</CardTitle>
                <CardDescription>Master the fundamentals of innovation management and entrepreneurship</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Calendar className="h-4 w-4" />6 months • Online & Hybrid
                </div>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-100 text-green-800">Fellowship</Badge>
                <CardTitle>Global Innovation Leadership Fellowship (GILF)</CardTitle>
                <CardDescription>Elite program for emerging innovation leaders worldwide</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Users className="h-4 w-4" />
                  12 months • Global Cohort
                </div>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-purple-100 text-purple-800">Diploma</Badge>
                <CardTitle>Digital Transformation & Technology Management</CardTitle>
                <CardDescription>Comprehensive program for digital transformation leaders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Calendar className="h-4 w-4" />9 months • Flexible Learning
                </div>
                <Button className="w-full">Explore Program</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/programs">
              <Button variant="outline" size="lg" className="group bg-transparent">
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories/Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Hear from our alumni who are transforming industries worldwide</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">CIEP Graduate, Tech Startup Founder</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "CITED's program gave me the tools and network to launch my fintech startup. We've now raised $2M in
                  funding and are expanding across Africa."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dr. Michael Chen</h4>
                    <p className="text-sm text-gray-600">GILF Fellow, Innovation Director</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The Global Innovation Leadership Fellowship transformed my approach to innovation management. I now
                  lead digital transformation initiatives for a Fortune 500 company."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Amara Okafor</h4>
                    <p className="text-sm text-gray-600">WiIT Fellow, Policy Advisor</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Through the Women in Innovation & Technology fellowship, I developed the skills to influence national
                  tech policy. I now advise governments on digital transformation strategies."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events & Announcements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events & Announcements</h2>
            <p className="text-lg text-gray-600">Stay updated with our latest events, webinars, and program launches</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Webinar</Badge>
                  <span className="text-sm text-gray-500">Jan 15, 2025</span>
                </div>
                <CardTitle>AI & Emerging Technologies in Economic Development</CardTitle>
                <CardDescription>
                  Join our experts for insights on leveraging AI for sustainable economic growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Conference</Badge>
                  <span className="text-sm text-gray-500">Feb 20-22, 2025</span>
                </div>
                <CardTitle>Global Innovation Summit 2025</CardTitle>
                <CardDescription>
                  Three-day summit bringing together innovation leaders from around the world
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Program Launch</Badge>
                  <span className="text-sm text-gray-500">Mar 1, 2025</span>
                </div>
                <CardTitle>New Cohort: Smart Cities & Urban Innovation</CardTitle>
                <CardDescription>
                  Applications now open for our comprehensive smart cities diploma program
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Awards</Badge>
                  <span className="text-sm text-gray-500">Apr 10, 2025</span>
                </div>
                <CardTitle>Innovation Excellence Awards 2025</CardTitle>
                <CardDescription>Nominations open for recognizing outstanding innovation achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Nominate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get the latest updates on programs, events, and innovation insights delivered to your inbox
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email address" className="bg-white text-gray-900" />
                <Button className="bg-orange-500 hover:bg-orange-600 whitespace-nowrap">
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-2">Join 10,000+ innovation professionals in our community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">info@citedglobal.org</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">+263 787507669</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">WhatsApp Support Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
