import Image from "next/image";
import { notFound } from "next/navigation";
import { properties } from "../../../data/properties";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;

  const property = properties.find(
    (item) => item.slug === slug
  );

  if (!property) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Mfalme Living 👋

I am interested in booking:

🏡 Property: ${property.title}
📍 Location: ${property.location}
💰 Price: ${property.price}

📅 Check-in:
📅 Check-out:

Please share availability and booking details.

Thank you.`
  );

  const whatsappLink = `https://wa.me/254737523723?text=${whatsappMessage}`;
  // ⚠️ Replace 254700000000 with your real WhatsApp number

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* IMAGE */}
      <div className="relative h-[420px] w-full rounded-xl overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="mt-10 grid md:grid-cols-2 gap-12">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl font-bold">
            {property.title}
          </h1>

          <p className="text-gray-600 mt-2">
            📍 {property.location}
          </p>

          <p className="text-2xl font-semibold mt-4">
            {property.price}
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Enjoy a premium stay at this carefully selected
            holiday home. Perfect for vacations, business
            travel, and weekend getaways along the Kenyan coast.
          </p>

          {/* URGENCY */}
          <p className="mt-6 text-sm text-gray-600">
            ⚡ Limited availability. High demand during weekends
            and holidays.
          </p>

          {/* WHATSAPP */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Book via WhatsApp
          </a>
        </div>

        {/* RIGHT: BOOKING FORM */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">
            Book This Property
          </h3>

          <form
            action="https://formsubmit.co/businessomega31@gmail.com"
            method="POST"
            className="space-y-4"
          >
            {/* CONFIG */}
            <input
              type="hidden"
              name="_subject"
              value={`New Booking: ${property.title}`}
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full border px-4 py-3 rounded-lg"
            />

            {/* PHONE */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full border px-4 py-3 rounded-lg"
            />

            {/* CHECK-IN */}
            <input
              type="date"
              name="check_in"
              required
              className="w-full border px-4 py-3 rounded-lg"
            />

            {/* CHECK-OUT */}
            <input
              type="date"
              name="check_out"
              required
              className="w-full border px-4 py-3 rounded-lg"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              rows={4}
              placeholder="Any special requests?"
              className="w-full border px-4 py-3 rounded-lg"
            ></textarea>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Send Booking Request
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Prefer instant response? Use WhatsApp booking on the left.
          </p>
        </div>
      </div>
    </main>
  );
}
