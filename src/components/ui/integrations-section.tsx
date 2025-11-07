"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const integrations = [
  {
    name: "Make",
    logo: "/images to use/Make-Logo-RGB@2x-1.webp",
    description: "אוטומציה חזקה",
  },
  {
    name: "Zapier",
    logo: "/images to use/Zapier_Company_Logo_2022.png",
    description: "חיבור אפליקציות",
  },
  {
    name: "n8n",
    logo: "/images to use/N8n-logo-new.svg.png",
    description: "אוטומציה פתוחה",
  },
  {
    name: "Airtable",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg",
    description: "ניהול נתונים",
  },
  {
    name: "Notion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    description: "מרחב עבודה",
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    description: "תקשורת צוות",
  },
];

export default function IntegrationsSection() {
  return (
    <section className="relative bg-[#0f0f0f] py-20 px-6">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10">
            <span className="text-[#FF7742] text-sm font-medium">אינטגרציות</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            התחבר לכלים שאתה כבר משתמש
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            חבר את הסוכני AI שלך לכל הפלטפורמות האהובות עליך ליצירת זרימות עבודה אוטומטיות
          </p>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration) => (
            <Card
              key={integration.name}
              className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="flex items-center gap-4 p-6">
                {/* Logo Container */}
                <div className="relative w-16 h-16 flex-shrink-0 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="relative w-12 h-12">
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-right">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {integration.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {integration.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            ועוד מאות אינטגרציות נוספות זמינות
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#FF7742]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#1A3A52]/5 rounded-full blur-3xl" />
    </section>
  );
}
