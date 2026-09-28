import { HeaderNavSection } from "@/components/landing-page/sections/HeaderNavSection/HeaderNavSection";
import { FooterSection } from "@/components/landing-page/sections/FooterSection";

export default function SecurityPage() {
  return (
    <main className="relative w-full bg-white">
      <HeaderNavSection />
      <section className="relative w-full px-4 pt-16 pb-20 sm:px-6 lg:px-8 max-w-[800px] mx-auto font-['Inter',Helvetica,sans-serif]">
        <h1 className="mb-8 text-[32px] font-black leading-[1.1] text-black sm:text-[40px] lg:text-[48px] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
          Security
        </h1>
        <div className="text-[17px] leading-[1.6] text-[#4D4D4D] space-y-6">
          <p>Last updated: June 2025</p>
          <p>At ViksApp, the security of your data is our top priority. We implement industry-leading security measures to ensure your information is protected.</p>
          <h2 className="pt-4 text-[24px] font-bold text-black">1. Data Encryption</h2>
          <p>All data transmitted between your browser and our servers is encrypted using industry-standard TLS. Your data is also encrypted at rest in our secure databases.</p>
          <h2 className="pt-4 text-[24px] font-bold text-black">2. Access Control</h2>
          <p>We enforce strict role-based access control (RBAC) across our platform. Internal access to customer data is tightly restricted and monitored.</p>
          <h2 className="pt-4 text-[24px] font-bold text-black">3. Compliance</h2>
          <p>We are continuously working to meet and exceed global compliance standards to ensure your business operations remain secure and uninterrupted.</p>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
