import { Twitter, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold">ShadCN Dashboard</h2>
          <p className="text-sm text-muted-foreground">Beautiful UI components for modern applications.</p>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <SocialIcon href="https://twitter.com" icon={<Twitter />} />
          <SocialIcon href="https://github.com" icon={<Github />} />
          <SocialIcon href="https://linkedin.com" icon={<Linkedin />} />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-muted-foreground mt-4">
        &copy; {new Date().getFullYear()} ShadCN Dashboard. All rights reserved.
      </div>
    </footer>
  )
}

// Reusable Footer Link Component
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition">
      {children}
    </Link>
  )
}

// Reusable Social Icon Component
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
      {icon}
    </a>
  )
}
