import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  // Validate required fields first
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Server verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email server connection failed' },
        { status: 502 }
      );
    }

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_RECIPIENT || 'juttslacker@gmail.com',
      subject: phone || `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New contact form submission</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          ${phone ? `<p><strong>phone:</strong> ${phone}</p>` : ''}
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="margin-top: 20px; color: #666; font-size: 0.9em;">
            Email from MightyFive contact form.
            <br>
          </p>
        </div>
      `,
    };

    const sendPromise = transporter.sendMail(mailOptions);
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Email sending timeout')), 10000)
    );

    await Promise.race([sendPromise, timeoutPromise]);

    return NextResponse.json({ 
      success: true,
      message: 'Your message has been sent successfully!' 
    });

  } catch (error: any) {// eslint-disable-line
    console.error('Email sending error:', error);
    
    let errorMessage = 'Failed to send email';
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed - check email credentials';
    } else if (error.message.includes('timeout')) {
      errorMessage = 'Email server timeout - please try again later';
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}