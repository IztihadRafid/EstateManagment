import Footer from "@/components/Footer/Footer";
import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import Navbar from "@/components/Navbar/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <FrontendLayout>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-slate-950 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <h1 className="text-4xl mt-10 font-bold text-white md:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Last updated: August 26, 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">
                1. Information We Collect
              </h2>
              <p className="text-slate-600">
                We collect information you provide directly to us, such as
                when you create an account, list a property, or contact us. This
                includes:
              </p>
              <ul className="list-disc pl-6 text-slate-600">
                <li>Name and contact information (email, phone number)</li>
                <li>Account credentials (username, password)</li>
                <li>Property information and listing details</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                2. How We Use Your Information
              </h2>
              <p className="text-slate-600">
                We use the information we collect to provide, maintain, and
                improve our services, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600">
                <li>Processing property listings and transactions</li>
                <li>Facilitating communication between buyers and sellers</li>
                <li>Sending you notifications and updates</li>
                <li>Providing customer support</li>
                <li>Analyzing usage patterns to improve our platform</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                3. Information Sharing
              </h2>
              <p className="text-slate-600">
                We do not sell your personal information. We may share your
                information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-slate-600">
                <li>
                  With other users when you engage in property transactions
                </li>
                <li>With service providers who assist our operations</li>
                <li>When required by law or to protect our rights</li>
                <li>With your consent for specific purposes</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                4. Data Security
              </h2>
              <p className="text-slate-600">
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the internet is 100% secure.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                5. Your Rights
              </h2>
              <p className="text-slate-600">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-600">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                6. Cookies and Tracking
              </h2>
              <p className="text-slate-600">
                We use cookies and similar technologies to improve your
                experience, analyze usage, and assist in marketing efforts. You
                can control cookie settings through your browser preferences.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                7. Third-Party Services
              </h2>
              <p className="text-slate-600">
                Our platform may integrate with third-party services such as
                payment processors, mapping services, and analytics tools. These
                services have their own privacy policies, and we encourage you
                to review them.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                8. Children's Privacy
              </h2>
              <p className="text-slate-600">
                Our services are not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                9. International Data Transfers
              </h2>
              <p className="text-slate-600">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place to protect your information.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                10. Changes to This Policy
              </h2>
              <p className="text-slate-600">
                We may update this privacy policy from time to time. We will
                notify you of any material changes by posting the new policy on
                our platform and updating the "Last updated" date.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-slate-900">
                11. Contact Us
              </h2>
              <p className="text-slate-600">
                If you have questions about this privacy policy or our data
                practices, please contact us at:
              </p>
              <div className="mt-4 rounded-lg bg-slate-50 p-6">
                <p className="text-slate-600">
                  <strong>Email:</strong> privacy@estatemarket.com
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
