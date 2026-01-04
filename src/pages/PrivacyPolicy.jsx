import { useEffect } from "react";
import Container from "../components/Shared/Container";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "EducareHub | Privacy Policy";
  }, []);

  return (
    <div className="bg-base-100 min-h-screen py-10">
      <Container>
        <div className="max-w-4xl mx-auto bg-base-200 p-10 rounded-xl shadow-sm">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <p><strong>Last Updated: January 2026</strong></p>
            
            <h2 className="text-2xl font-bold text-base-content">1. Introduction</h2>
            <p>
              Welcome to EducareHub. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at privacy@educarehub.com.
            </p>

            <h2 className="text-2xl font-bold text-base-content">2. What Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Names, phone numbers, email addresses, mailing addresses.</li>
              <li>Passwords and security data.</li>
              <li>Payment Data (we store limited data, most is handled by payment processors).</li>
            </ul>

            <h2 className="text-2xl font-bold text-base-content">3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            
            <h2 className="text-2xl font-bold text-base-content">4. Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may email us at support@educarehub.com.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;