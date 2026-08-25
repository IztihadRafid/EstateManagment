import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Tailwind,
} from "react-email";

interface InquiryEmailProps {
  senderName: string;
  senderEmail: string;
  senderPhone?: string;
  ownerName: string;
  propertyTitle: string;
  propertyPrice: string;
  message: string;
}
export default function InquiryEmail({
  senderEmail,
  senderName,
  senderPhone,
  ownerName,
  propertyTitle,
  propertyPrice,
  message,
}: InquiryEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-6">
          <Container className="bg-white p-6 rounded-lg max-w-xl mx-auto">
            <Text className="text-lg font-bold m-0 mb-4">
              New inquiry for {propertyTitle}
            </Text>

            <Text className="text-gray-800">Hi {ownerName},</Text>
            <Text className="text-gray-800">
              You&apos;ve received a new inquiry from{" "}
              <strong>{senderName}</strong> about {propertyTitle}
              <strong> Price: {propertyPrice}</strong>.
            </Text>

            <Section className="bg-gray-100 p-4 rounded-md my-4">
              <Text className="m-0 text-gray-800">
                {" "}
                <span className="text-black font-semibold text-lg">
                  Message:
                </span>{" "}
                {message}
              </Text>
            </Section>

            <Hr className="border-gray-200 my-4" />

            <Text className="text-gray-700 text-sm">
              <strong>Email:</strong> {senderEmail}
              {senderPhone && (
                <>
                  <br />
                  <strong>Phone:</strong> {senderPhone}
                </>
              )}
            </Text>

            <Text className="text-xs text-gray-400 mt-4">
              Reply directly to this email to respond to {senderName}.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
