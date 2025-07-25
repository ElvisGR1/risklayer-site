
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="RiskLayer Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">RiskLayer</h1>
        </div>
        <a href="#contact" className="text-sm hover:underline">Contact</a>
      </header>

      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Enterprise Risk Advisory for Growing Businesses</h2>
        <p className="text-lg text-gray-300 mb-6">
          Helping startups and SMEs build with confidence and structure.
        </p>
        <a href="#contact">
          <Button className="bg-white text-black font-semibold px-6 py-2 rounded-full">
            Book a Discovery Call
          </Button>
        </a>
      </section>

      <section className="px-6 py-12 bg-gray-900">
        <h3 className="text-2xl font-bold mb-6 text-center">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gray-800 border border-gray-700">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Risk Readiness – AED 5,000</h4>
              <p className="text-sm text-gray-400">
                Discovery session, startup risk checklist, top 5 risk summary, 7-day follow-up.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Fractional Risk Advisor – AED 15,000</h4>
              <p className="text-sm text-gray-400">
                4 hours/month advisory, monthly reports, WhatsApp support, custom dashboard.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Risk Compliance Kit – AED 25,000</h4>
              <p className="text-sm text-gray-400">
                Full risk register, policy templates, regulatory mapping, implementation support.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 text-center">
        <h3 className="text-2xl font-bold mb-4">Let’s Work Together</h3>
        <p className="text-gray-300 mb-6">
          Email us at <a href="mailto:hello@risklayer.io" className="underline">hello@risklayer.io</a><br />
          or book a free discovery call to discuss your needs.
        </p>
        <a href="mailto:hello@risklayer.io">
          <Button className="border-white text-white hover:bg-white hover:text-black">
            <Mail className="mr-2" /> Send Email
          </Button>
        </a>
      </section>

      <footer className="text-center text-gray-500 py-6 border-t border-gray-800 text-sm">
        © {new Date().getFullYear()} RiskLayer. All rights reserved.
      </footer>
    </main>
  );
}
