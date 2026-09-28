import { HeaderNavSection } from "@/components/landing-page/sections/HeaderNavSection/HeaderNavSection";
import { FooterSection } from "@/components/landing-page/sections/FooterSection";

export default function PrivacyPage() {
  return (
    <main className="relative w-full bg-white">
      <HeaderNavSection />
      <section className="relative w-full px-4 pt-16 pb-20 sm:px-6 lg:px-8 max-w-[800px] mx-auto font-['Inter',Helvetica,sans-serif]">
        <h1 className="mb-8 text-[32px] font-black leading-[1.1] text-black sm:text-[40px] lg:text-[48px] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
          Privacy Policy
        </h1>
        <div className="text-[17px] leading-[1.6] text-[#4D4D4D] space-y-6">
          <p>Last updated: June 2025</p>
          <p>This Privacy Policy describes how ViksApp collects, uses, and discloses your personal information when you use our services.</p>
          <h2 className="pt-4 text-[24px] font-bold text-black">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, subscribe to our services, or contact customer support.</p>
          <h2 className="pt-4 text-[24px] font-bold text-black">2. How We Use Your Information</h2>
          <p>We use the information we collect to operate, maintain, and improve our services, as well as to communicate with you about updates and offers.</p>
          <h2 className="pt-4 text-[24px] font-bold text-black">3. Information Sharing</h2>
          <p>We do not share your personal information with third parties except as necessary to provide our services or as required by law.</p>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
