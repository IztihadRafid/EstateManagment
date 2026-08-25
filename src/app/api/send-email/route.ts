import InquiryEmail from "@/components/emails/InquiryEmail";
import { resend } from "@/lib/resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      ownerName,
      propertyTitle,
      propertyPrice,
      message,
      senderEmail,
      senderName,
      senderPhone,
    } = body;

    resend.emails.send({
      from: process.env.EMAIL_FROM!,
      subject: `Property Inquiry from ${senderName}`,
      react: InquiryEmail({
        senderEmail,
        senderName,
        senderPhone,
        ownerName,
        propertyTitle,
        propertyPrice,
        message,
      }),
      to: "iztihadrafid10@gmail.com",
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Failed to Send Email. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}
