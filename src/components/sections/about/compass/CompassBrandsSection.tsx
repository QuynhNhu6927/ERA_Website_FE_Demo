"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { colors } from "@/lib/theme";
import { ROUTES } from "@/lib/routes";

const brands = [
  { name: "ERA", logo: "/about/compass_b1.svg" },
  { name: "Compass", logo: "/about/compass_b2.svg" },
  { name: "Century 21", logo: "/about/compass_b3.svg" },
  { name: "Coldwell Banker", logo: "/about/compass_b4.svg" },
  { name: "Coldwell Banker Commercial", logo: "/about/compass_b5.svg" },
  { name: "Sotheby's", logo: "/about/compass_b6.svg" },
  { name: "Corcoran", logo: "/about/compass_b7.svg" },
  { name: "Better Homes", logo: "/about/compass_b8.svg" },
  { name: "Christie's", logo: "/about/compass_b9.svg" },
];

export function CompassBrandsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="px-4">
          {/* Section Title */}
          <h2
            className="text-center text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-12"
            style={{ color: colors.primary.DEFAULT }}
          >
            DANH MỤC THƯƠNG HIỆU TOÀN CẦU
          </h2>

          {/* Brand Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white h-[160px] sm:h-[180px] md:h-[190px] w-full flex items-center justify-center shadow-sm p-4 sm:p-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="relative w-[70%] h-[70%]">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              asChild
              variant="primary"
              className="py-4 px-8 md:px-12 rounded-xl w-full sm:w-auto"
            >
              <Link href={`${ROUTES.aboutUs}/era-real-estate`}>Về ERA Real Estate</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="py-4 px-8 md:px-12 rounded-xl w-full sm:w-auto"
            >
              <Link href="/">Về ERA Vietnam</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
