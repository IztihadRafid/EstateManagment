import Footer from "@/components/Footer/Footer";
import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import Navbar from "@/components/Navbar/Navbar";

export default function TermsOfServicePage() {
  return (
    <FrontendLayout>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-slate-950 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <h1 className="text-4xl font-bold mt-10 text-white md:text-5xl lg:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Please read these terms carefully before using Estatemarket
              services.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Last updated: August 26, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600">
                By accessing or using Estatemarket services, you agree to be
                bound by these Terms of Service. If you do not agree to these
                terms, please do not use our services.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                2. Description of Service
              </h2>
              <p className="text-slate-600">
                Estatemarket is a real estate marketplace platform that connects
                buyers, sellers, and renters of residential and commercial
                properties. Our services include property listings, search
                tools, communication features, and transaction facilitation.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                3. User Accounts
              </h2>
              <p className="text-slate-600">
                To access certain features, you must create an account. You are
                responsible for:
              </p>
              <ul className="list-disc pl-6 text-slate-600">
                <li>
                  Maintaining the confidentiality of your account credentials
                </li>
                <li>All activities that occur under your account</li>
                <li>Notifying us of unauthorized access</li>
                <li>Providing accurate and complete information</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                4. Property Listings
              </h2>
              <p className="text-slate-600">
                Users who list properties must:
              </p>
              <ul className="list-disc pl-6 text-slate-600">
                <li>Provide accurate and truthful property information</li>
                <li>Have legal authority to list the property</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respond to inquiries in a timely manner</li>
              </ul>
              <p className="text-slate-600">
                Estatemarket reserves the right to remove any listing that
                violates these terms or applicable laws.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                5. User Conduct
              </h2>
              <p className="text-slate-600">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-slate-600">
                <li>Use the platform for fraudulent purposes</li>
                <li>Post false or misleading information</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the operation of the platform</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                6. Intellectual Property
              </h2>
              <p className="text-slate-600">
                All content on Estatemarket, including text, graphics, logos,
                images, and software, is our property or the property of our
                licensors and is protected by copyright and other intellectual
                property laws.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                7. Privacy
              </h2>
              <p className="text-slate-600">
                Your use of our services is also governed by our Privacy Policy,
                which describes how we collect, use, and protect your personal
                information.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                8. Disclaimers
              </h2>
              <p className="text-slate-600">
                Estatemarket is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
                We make no representations or warranties of any kind, express
                or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-slate-600">
                <li>Accuracy or completeness of property information</li>
                <li>Availability or functionality of the platform</li>
                <li>Quality or suitability of any property</li>
                <li>Compliance with local laws or regulations</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                9. Limitation of Liability
              </h2>
              <p className="text-slate-600">
                To the maximum extent permitted by law, Estatemarket shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of profits,
                data, or other intangible losses.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                10. Indemnification
              </h2>
              <p className="text-slate-600">
                You agree to indemnify and hold Estatemarket harmless from any
                claims, damages, or expenses arising from your use of the
                platform or violation of these terms.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                11. Third-Party Links
              </h2>
              <p className="text-slate-600">
                Our platform may contain links to third-party websites. We are
                not responsible for the content, policies, or practices of
                these external sites.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                12. Termination
              </h2>
              <p className="text-slate-600">
                We reserve the right to suspend or terminate your account at any
                time, with or without cause, with or without notice.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                13. Governing Law
              </h2>
              <p className="text-slate-600">
                These terms shall be governed by and construed in accordance
                with the laws of Bangladesh, without regard to its conflict of
                law provisions.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                14. Dispute Resolution
              </h2>
              <p className="text-slate-600">
                Any disputes arising from these terms or your use of our
                services shall be resolved through binding arbitration in
                Dhaka, Bangladesh.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                15. Modifications to Terms
              </h2>
              <p className="text-slate-600">
                We may modify these terms at any time. Your continued use of the
                platform after such modifications constitutes your acceptance of
                the updated terms.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                16. Severability
              </h2>
              <p className="text-slate-600">
                If any provision of these terms is found to be invalid or
                unenforceable, the remaining provisions shall continue in full
                force and effect.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                17. Entire Agreement
              </h2>
              <p className="text-slate-600">
                These terms constitute the entire agreement between you and
                Estatemarket regarding your use of our services.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                18. Contact Information
              </h2>
              <p className="text-slate-600">
                If you have questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="mt-4 rounded-lg bg-slate-50 p-6">
                <p className="text-slate-600">
                  <strong>Email:</strong> legal@estatemarket.com
                </p>
                <p className="text-slate-600">
                  <strong>Address:</strong> Dhaka, Bangladesh
                </p>
                <p className="text-slate-600">
                  <strong>Phone:</strong> +880 1700 000 000
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </FrontendLayout>
  );
}
