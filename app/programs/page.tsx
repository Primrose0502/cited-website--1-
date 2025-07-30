import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, Globe, Award, BookOpen } from "lucide-react"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-blue-100">
              Transform your career with world-class certification programs, diplomas, and fellowships designed for the
              digital economy
            </p>
          </div>
        </div>
      </section>

      {/* Certification Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Certification Programs</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">Certification</Badge>
                  <CardTitle>Certified Innovation & Entrepreneurship Professional (CIEP)</CardTitle>
                  <CardDescription>
                    Master the fundamentals of innovation management, entrepreneurship, and business development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />6 months
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Globe className="h-4 w-4" />
                      Online & Hybrid
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      Professionals & Entrepreneurs
                    </div>
                  </div>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-green-100 text-green-800">Certification</Badge>
                  <CardTitle>Certified Digital Transformation Professional (CDTP)</CardTitle>
                  <CardDescription>
                    Lead digital transformation initiatives with strategic planning and implementation skills
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />8 months
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Globe className="h-4 w-4" />
                      Online & In-person
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      IT Leaders & Managers
                    </div>
                  </div>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-purple-100 text-purple-800">Certification</Badge>
                  <CardTitle>Certificate in Policy Innovation & Economic Resilience</CardTitle>
                  <CardDescription>
                    Develop policy frameworks that drive innovation and economic resilience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />4 months
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Globe className="h-4 w-4" />
                      Online
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      Policy Makers & Analysts
                    </div>
                  </div>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Diploma Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Diploma Programs</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Technology, Innovation & Economic Development",
                  duration: "12 months",
                  mode: "Hybrid",
                  target: "Development Professionals",
                },
                {
                  title: "Innovation & Entrepreneurship",
                  duration: "10 months",
                  mode: "Online",
                  target: "Entrepreneurs & Business Leaders",
                },
                {
                  title: "Digital Transformation & Technology Management",
                  duration: "9 months",
                  mode: "Flexible",
                  target: "Technology Managers",
                },
                {
                  title: "Sustainable Economic Development",
                  duration: "11 months",
                  mode: "Hybrid",
                  target: "Sustainability Professionals",
                },
                {
                  title: "Science, Technology & Innovation Policy",
                  duration: "8 months",
                  mode: "Online",
                  target: "Policy Professionals",
                },
                {
                  title: "Smart Cities & Urban Innovation",
                  duration: "10 months",
                  mode: "Hybrid",
                  target: "Urban Planners",
                },
                {
                  title: "Artificial Intelligence & Emerging Technologies",
                  duration: "12 months",
                  mode: "Online",
                  target: "Tech Professionals",
                },
                {
                  title: "Digital Economy & Platform Innovation",
                  duration: "9 months",
                  mode: "Flexible",
                  target: "Digital Economy Leaders",
                },
                {
                  title: "Women, Innovation & Technology Leadership",
                  duration: "8 months",
                  mode: "Hybrid",
                  target: "Women Leaders",
                },
                {
                  title: "Youth, Innovation & Future Skills",
                  duration: "6 months",
                  mode: "Online",
                  target: "Young Professionals",
                },
                {
                  title: "Public Sector Innovation & E-Governance",
                  duration: "10 months",
                  mode: "Hybrid",
                  target: "Government Officials",
                },
                {
                  title: "Green Innovation & Climate-Tech Entrepreneurship",
                  duration: "11 months",
                  mode: "Flexible",
                  target: "Climate Tech Entrepreneurs",
                },
                {
                  title: "Technology-Enabled Education & EdTech Innovation",
                  duration: "9 months",
                  mode: "Online",
                  target: "Education Professionals",
                },
              ].map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-orange-100 text-orange-800">Diploma</Badge>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        {program.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Globe className="h-4 w-4" />
                        {program.mode}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        {program.target}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fellowships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Fellowships</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-blue-600">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">Fellowship</Badge>
                  <CardTitle>Global Innovation Leadership Fellowship (GILF)</CardTitle>
                  <CardDescription>
                    Elite program for emerging innovation leaders to drive global transformation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      12 months
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Globe className="h-4 w-4" />
                      Global Cohort
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="h-4 w-4" />
                      Highly Competitive
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-pink-600">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-pink-100 text-pink-800">Fellowship</Badge>
                  <CardTitle>Women in Innovation & Technology (WiIT)</CardTitle>
                  <CardDescription>
                    Empowering women leaders to drive innovation and technology advancement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      10 months
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      Women Leaders
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="h-4 w-4" />
                      Scholarship Available
                    </div>
                  </div>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">Apply Now</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-green-600">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-green-100 text-green-800">Fellowship</Badge>
                  <CardTitle>Youth Innovation & Future Skills (YIFS)</CardTitle>
                  <CardDescription>
                    Preparing young innovators for the future economy and emerging technologies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />8 months
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      Ages 18-30
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="h-4 w-4" />
                      Full Scholarship
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Apply Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Makes Our Programs Unique</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">World-Class Curriculum</h3>
                  <p className="text-gray-600 text-sm">
                    Cutting-edge content developed by global experts and industry leaders
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Global Network</h3>
                  <p className="text-gray-600 text-sm">Connect with professionals and leaders from over 50 countries</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Industry Recognition</h3>
                  <p className="text-gray-600 text-sm">Globally recognized certifications valued by top employers</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Flexible Learning</h3>
                  <p className="text-gray-600 text-sm">
                    Multiple delivery modes to fit your schedule and learning style
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of professionals who have advanced their careers through our programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Apply Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  Get More Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
