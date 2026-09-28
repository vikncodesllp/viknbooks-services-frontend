import { HeaderNavSection } from "@/components/landing-page/sections/HeaderNavSection/HeaderNavSection";
import { FooterSection } from "@/components/landing-page/sections/FooterSection";

export default function TermsPage() {
  return (
    <main className="relative w-full bg-white">
      <HeaderNavSection />
      <section className="relative w-full px-4 pt-16 pb-20 sm:px-6 lg:px-8 max-w-[800px] mx-auto font-['Inter',Helvetica,sans-serif]">
        <h1 className="mb-8 text-[32px] font-black leading-[1.1] text-black sm:text-[40px] lg:text-[48px] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
          Terms of Service
        </h1>
        <div className="text-[17px] leading-[1.6] text-[#4D4D4D] space-y-6">
          <p>Last updated: June 2025</p>
          <p>Welcome to ViksApp. These Terms of Service govern your use of our platform, services, and website.</p>
          <h2 className="pt-4 text-[24px] font-bold text-black">1. Acceptance of Terms</h2>
          <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>
          <h2 className="pt-4 text-[24px] font-bold text-black">2. Use of Service</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
          <h2 className="pt-4 text-[24px] font-bold text-black">3. Account Responsibilities</h2>
          <p>You are responsible for safeguarding your account password and for any activities or actions under your password.</p>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
