import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Target, Heart, Users, Award, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CITED</h1>
            <p className="text-xl text-blue-100">
              Leading the global transformation through innovation, technology, and sustainable economic development
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              The Center for Innovation, Technology & Economic Development (CITED) is a premier global institution
              dedicated to fostering innovation-driven economic transformation. We bridge the gap between cutting-edge
              research, practical education, and real-world application to create sustainable impact across communities,
              organizations, and nations.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Vision, Mission & Core Values</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-t-4 border-t-blue-600">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    To be the world's leading institution for innovation and technology education, driving sustainable
                    economic development and creating a more equitable and prosperous future for all.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-orange-500">
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    To build global capacity for innovation-driven economic transformation through cutting-edge
                    education, research, and strategic partnerships that empower individuals, organizations, and nations
                    to thrive in the digital economy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-green-600">
                <CardHeader className="text-center">
                  <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Core Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Excellence in Education</li>
                    <li>• Innovation & Creativity</li>
                    <li>• Global Collaboration</li>
                    <li>• Sustainable Impact</li>
                    <li>• Inclusive Development</li>
                    <li>• Ethical Leadership</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Strategic Objectives</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-800">1</Badge>
                    Capacity Building
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Develop world-class educational programs that build innovation and technology capabilities across
                    individuals, organizations, and nations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800">2</Badge>
                    Research & Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Conduct cutting-edge research that addresses global challenges and drives technological advancement
                    for sustainable development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge className="bg-orange-100 text-orange-800">3</Badge>
                    Strategic Partnerships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Foster global partnerships with academic institutions, governments, and industry leaders to amplify
                    impact and reach.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge className="bg-purple-100 text-purple-800">4</Badge>
                    Policy Influence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Influence policy development and implementation to create enabling environments for innovation and
                    economic transformation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Board */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Leadership & Advisory Board</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Dr. Sarah Johnson</h3>
                  <p className="text-gray-600 text-sm mb-2">Chief Executive Officer</p>
                  <p className="text-gray-500 text-xs">
                    Former World Bank Innovation Director with 20+ years in economic development
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Prof. Michael Chen</h3>
                  <p className="text-gray-600 text-sm mb-2">Chief Academic Officer</p>
                  <p className="text-gray-500 text-xs">
                    MIT Technology Policy Professor and former UN Technology Advisor
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-12 w-12 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Dr. Amara Okafor</h3>
                  <p className="text-gray-600 text-sm mb-2">Director of Global Programs</p>
                  <p className="text-gray-500 text-xs">
                    Former African Development Bank Innovation Lead and policy expert
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Affiliates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Partners & Affiliates</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <div className="h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">UN</span>
                </div>
                <p className="text-sm text-gray-600">United Nations</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">WB</span>
                </div>
                <p className="text-sm text-gray-600">World Bank</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">MIT</span>
                </div>
                <p className="text-sm text-gray-600">MIT</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">AfDB</span>
                </div>
                <p className="text-sm text-gray-600">African Development Bank</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Global Presence</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    Headquarters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our global headquarters serves as the central hub for strategic planning, program development, and
                    international partnerships.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Location:</strong> Global Innovation District
                    </p>
                    <p className="text-sm">
                      <strong>Established:</strong> 2020
                    </p>
                    <p className="text-sm">
                      <strong>Focus:</strong> Strategic Leadership & Global Coordination
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-6 w-6 text-green-600" />
                    Regional Hubs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our regional hubs provide localized support and culturally relevant programming across key markets.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      • <strong>Africa Hub:</strong> Nairobi, Kenya
                    </p>
                    <p className="text-sm">
                      • <strong>Asia-Pacific Hub:</strong> Singapore
                    </p>
                    <p className="text-sm">
                      • <strong>Americas Hub:</strong> São Paulo, Brazil
                    </p>
                    <p className="text-sm">
                      • <strong>Europe Hub:</strong> London, UK
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
