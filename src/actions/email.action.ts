"use server";

import nodemailer from "nodemailer";

const emailReg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  const { name, email, message } = formData;
  if (!name.trim() || !email.trim() || !message.trim()) {
    return {
      success: false,
      messgae: "All Fields Are Required",
    };
  }
  if (!emailReg.test(email)) {
    return {
      success: false,
      message: "Invalid Email Format",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // this must be an App Password
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "🚀 New message from portfolio",
      html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #232530; padding: 40px; color: #ffffff;">
    <table style="max-width: 600px; margin: auto; background-color: #1e1f24; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);">
      <tr>
        <td style="background-color: #ffb86c; padding: 12px;">
          <h2 style="margin: 0; color: #1e1f24; font-size: 18px;">New Message Received</h2>
        </td>
      </tr>
      <tr>
        <td style="padding: 30px;">
          <p style="margin: 0 0 16px 0; font-size: 14px; color: #e0e0e0;">
            <strong style="color: #ffb86c;">Name:</strong> ${name}
          </p>
          <p style="margin: 0 0 16px 0; font-size: 14px; color: #e0e0e0;">
            <strong style="color: #ffb86c;">Email:</strong>
            <a href="mailto:${email}" style="color: #ffb86c; text-decoration: none;">${email}</a>
          </p>
          <div style="margin-top: 24px;">
            <p style="margin-bottom: 8px; font-weight: 600; color: #ffb86c;">Message:</p>
            <div style="background-color: #3b3b3c; padding: 16px 20px; border-left: 4px solid #ffb86c; border-radius: 6px; color: #f1f1f1; line-height: 1.6;">
              <pre style="white-space: pre-wrap; word-break: break-word; font-size: 15px; font-family: inherit; margin: 0;">${message}</pre>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px; text-align: center; background-color: #1e1f24; color: #999999; font-size: 13px;">
          ✨ Sent from your portfolio contact form
        </td>
      </tr>
    </table>
  </div>
`,
    });

    return {
      success: true,
      message: "Email Sent Succesfully",
    };
  } catch (error) {
    console.error("Email error:", error);
    console.log(error);
    return {
      success: false,
      message: "Failed to send email",
    };
  }
};
