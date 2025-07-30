import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <div>
                <div className="font-bold text-lg">CITED</div>
                <div className="text-xs text-gray-400 -mt-1">Global Innovation Hub</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Center for Innovation, Technology & Economic Development - Innovating Today, Transforming Tomorrow
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-800">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-800">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-800">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/programs" className="block text-gray-300 hover:text-white transition-colors">
                Programs
              </Link>
              <Link href="/labs" className="block text-gray-300 hover:text-white transition-colors">
                Labs & Hubs
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/admissions" className="block text-gray-300 hover:text-white transition-colors">
                Apply
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Popular Programs</h3>
            <div className="space-y-2">
              <Link href="/programs/ciep" className="block text-gray-300 hover:text-white transition-colors">
                CIEP Certification
              </Link>
              <Link href="/programs/cdtp" className="block text-gray-300 hover:text-white transition-colors">
                CDTP Certification
              </Link>
              <Link href="/programs/gilf" className="block text-gray-300 hover:text-white transition-colors">
                GILF Fellowship
              </Link>
              <Link href="/programs/wiit" className="block text-gray-300 hover:text-white transition-colors">
                WiIT Fellowship
              </Link>
              <Link href="/programs/yifs" className="block text-gray-300 hover:text-white transition-colors">
                YIFS Fellowship
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">info@citedglobal.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">admissions@citedglobal.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">+263 787507669</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">Global HQ & Regional Hubs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Center for Innovation, Technology & Economic Development (CITED). All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility Statement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
