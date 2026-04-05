import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, phone, property_type, budget, room_count, preferred_date, message } = await req.json();

    const dateText = preferred_date
      ? `Your preferred date is ${new Date(preferred_date).toLocaleDateString("en-SG", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}. We'll do our best to accommodate this.`
      : "We'll reach out to find a date and time that works best for you.";

    // 1. Send confirmation email to customer
    const customerEmail = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Sora Studios <hello@sorastudios.sg>",
        to: [email],
        subject: "Your Consultation Booking — Sora Studios",
        html: `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #361e0f;">
            <div style="text-align: center; margin-bottom: 32px;">
              <h1 style="font-size: 28px; font-weight: 600; color: #974200; margin: 0;">Sora Studios</h1>
            </div>

            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
              Hi ${name},
            </p>

            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
              Thank you for booking a consultation with Sora Studios. We've received your details and our team will be in touch within 24 hours to confirm your appointment.
            </p>

            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
              ${dateText}
            </p>

            <div style="background: #fff1e5; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
              <p style="font-size: 14px; color: #974200; font-weight: 600; margin: 0 0 8px 0;">What happens next?</p>
              <ul style="font-size: 14px; line-height: 1.8; color: #361e0f; margin: 0; padding-left: 20px;">
                <li>Our team will review your project details</li>
                <li>We'll call or email you to confirm the consultation date</li>
                <li>During the consultation, we'll discuss your vision, budget, and timeline</li>
              </ul>
            </div>

            <p style="font-size: 14px; line-height: 1.6; color: #6f7470;">
              If you have any questions in the meantime, feel free to reply to this email or reach us at hello@sorastudios.sg.
            </p>

            <hr style="border: none; border-top: 1px solid #e8e6de; margin: 32px 0;" />

            <p style="font-size: 12px; color: #999; text-align: center;">
              Sora Studios &bull; Vertex, 33 Ubi Ave 3 #01-53, Singapore 408868
            </p>
          </div>
        `,
      }),
    });

    // 2. Send notification email to Sora Studios team
    const dateDisplay = preferred_date
      ? new Date(preferred_date).toLocaleDateString("en-SG", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
      : "Not specified";

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Sora Studios <hello@sorastudios.sg>",
        to: ["Daryl.sorastudios@gmail.com"],
        subject: `New Consultation Booking — ${name}`,
        html: `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #333;">
            <h2 style="font-size: 22px; color: #974200; margin-bottom: 24px;">New Consultation Booking</h2>

            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; font-weight: 600; color: #666; width: 160px;">Name</td>
                <td style="padding: 12px 0;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; font-weight: 600; color: #666;">Email</td>
                <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #974200;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; font-weight: 600; color: #666;">Phone</td>
                <td style="padding: 12px 0;">${phone || "Not provided"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; font-weight: 600; color: #666;">Property Type</td>
                <td style="padding: 12px 0;">${property_type}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; font-weight: 600; color: #666;">Budget</td>
                <td style="padding: 12px 0;">${budget || "Not specified"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; font-weight: 600; color: #666;">Rooms</td>
                <td style="padding: 12px 0;">${room_count || "Not specified"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; font-weight: 600; color: #666;">Preferred Date</td>
                <td style="padding: 12px 0;">${dateDisplay}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #666; vertical-align: top;">Message</td>
                <td style="padding: 12px 0;">${message}</td>
              </tr>
              ` : ""}
            </table>

            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
            <p style="font-size: 12px; color: #999;">This booking was submitted via the Sora Studios website.</p>
          </div>
        `,
      }),
    });

    const data = await customerEmail.json();

    if (!customerEmail.ok) {
      return new Response(JSON.stringify({ error: data }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
