import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaRegGem } from "react-icons/fa";
import { GiCrystalBall } from "react-icons/gi";
import { MdOutlineHomeWork } from "react-icons/md";
import { Phone, Sparkles } from "lucide-react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { TiAdjustBrightness } from "react-icons/ti";
import { CiStar } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import Link from "next/link";



export default function Hero({ hero }: { hero: any }) {
  const stats = [
    {
      value: "1B+",
      label: "Followers social media",
    },
    {
      value: "800k",
      label: "Registration booked",
    },
    {
      value: "25y",
      label: "Year of experience",
    },
  ];

  const services = [
    {
      title: "Birth Chart Analysis",
      description:
        "Complete personality analysis and life path guidance through your cosmic blueprint",
      icon: <GiCrystalBall className="text-2xl md:text-3xl text-purple-500" />,
      bg: "bg-purple-100",
      border: "border-purple-200",
    },
    {
      title: "Gemstone Therapy",
      description:
        "Personalized gemstone recommendations to enhance positive energies and well-being",
      icon: <FaRegGem className="text-2xl md:text-3xl text-blue-500" />,
      bg: "bg-blue-100",
      border: "border-blue-200",
    },
    {
      title: "Vastu Consultation",
      description:
        "Harmonize your living spaces with ancient principles for prosperity and peace",
      icon: (
        <MdOutlineHomeWork className="text-2xl md:text-3xl text-green-500" />
      ),
      bg: "bg-green-100",
      border: "border-green-200",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-pink-200 via-orange-100 to-blue-200 relative overflow-hidden">
      {/* Decorative elements - Made responsive with conditional display and adjusted positioning */}
      <Container className="px-4 md:px-8 lg:px-25">
        <div className="hidden md:block absolute top-20 left-15">
          <Sparkles className="text-[20px] md:text-[23px] text-[#FE9803]" />
        </div>

        <div className="hidden md:block absolute bottom-32 left-12">
          <div className="w-2 h-2 bg-purple-400 rounded-full" />
        </div>

        <div className="hidden lg:block absolute top-32 z-1 right-37">
          <div className="w-[45px] h-[45px] md:w-[57px] md:h-[57px] bg-[#FFE271E3] flex justify-center items-center rounded-full">
            <TiAdjustBrightness className="text-[20px] md:text-[25px]" />
          </div>
        </div>

        <div className="hidden lg:block absolute top-53 z-1 right-34">
          <CiStar className="text-[20px] md:text-[25px]" />
        </div>

        <div className="hidden lg:block absolute top-[480px] right-[455px] z-10">
          <div className="w-[45px] h-[45px] md:w-[57px] md:h-[57px] bg-[#AD46FF] flex justify-center items-center rounded-full">
            <FaMoon className="text-[20px] md:text-[25px] text-yellow-400 transform -rotate-120" />
          </div>
        </div>

        <div className="container mx-auto px-4 py-3 md:py-12 lg:py-16 relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="md:flex max-md:flex-col gap-x-5">
                {hero[0].badges?.map((badge: any, index: number) => (
                  <div
                    key={index}
                    className="inline-flex items-center max-md:mb-5 gap-2 bg-white/80 backdrop-blur-sm rounded-md px-3 md:px-4 py-2 text-xs md:text-sm"
                  >
                    <IoIosStar className="text-[12px] md:text-[15px]" />
                    <span className="text-[#8200DB] font-medium">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Main Heading - Made text responsive with smaller sizes for mobile */}
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
                  {(() => {
                    const heroData = hero?.[0];
                    const parts = heroData?.title?.split("Cosmic") || ["", ""];
                    return (
                      <>
                        {parts[0]}
                        <span className="text-purple-600">Cosmic</span>
                        <br />
                        {parts[1]}
                      </>
                    );
                  })()}
                </h1>

                <p className="text-base md:text-lg text-[#4A5565] leading-relaxed max-w-md mx-auto lg:mx-0">
                  {hero[0].subtitle}
                </p>
              </div>

              {/* CTA Buttons - Made buttons stack on mobile and responsive sizing */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  className="bg-blue-700 text-white px-6 md:px-8 py-3 hover:bg-blue-700 rounded-sm w-full sm:w-[120px] md:w-[140px] h-[50px] md:h-[60px] text-sm md:text-base font-medium"
                >
                  <Link href={hero[0].ctaLink}>
                    <CiCalendarDate className="text-[18px] md:text-[20px]" />
                    {hero[0].ctaText}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#4F46E5] text-[#111827] hover: px-6 md:px-8 py-3 rounded-sm text-sm md:text-base w-full sm:w-[120px] md:w-[140px] h-[50px] md:h-[60px] font-medium flex items-center gap-2 bg-transparent"
                >
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  Call now
                </Button>
              </div>

              {/* Stats - Made stats responsive with better mobile layout */}
              <div className="flex flex-col sm:flex-row gap-6 md:gap-10 pt-6 md:pt-8 justify-center lg:justify-start">
                {stats.map((item, index) => (
                  <div key={index} className="text-center lg:text-left">
                    {/* Empty purple square */}
                    <div className="flex items-center gap-x-2 md:gap-x-3 justify-center lg:justify-start">
                      <div className="w-[30px] h-[32px] md:w-[37px] md:h-[39px] bg-[#4624D6] rounded-sm"></div>

                      {/* Text section */}
                      <div>
                        <p className="font-bold text-[#4624D6] -mt-1 text-[24px] md:text-[32px]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    <p className="text-[13px] md:text-[15px] font-semibold text-[#111827] mt-1">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image - Made image responsive and centered on mobile */}
            <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative w-[250px] md:w-[300px] lg:w-[320px] xl:w-[400px] aspect-[3/4]">
                <Image
                  src={hero[0].imageUrl}
                  alt="Professional astrologer"
                  fill
                  className="object-content"
                  priority
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>

          {/* Service Cards - Made cards responsive with single column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`p-4 md:p-6 bg-white/80 backdrop-blur-sm shadow-lg border ${service.border}`}
              >
                <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 ${service.bg} rounded-lg flex items-center justify-center`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
