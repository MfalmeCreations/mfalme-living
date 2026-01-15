"use client";

import React from "react";

type Props = {
  title: string;
  location: string;
  whatsapp: string;
};

export default function BookingForm({
  title,
  location,
  whatsapp,
}: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const checkin = (form.elements.namedItem("checkin") as HTMLInputElement).value;
    const checkout = (form.elements.namedItem("checkout") as HTMLInputElement).value;

    const message = `
Hello, I would like to book:

🏠 Property: ${title}
📍 Location: ${location}

👤 Name: ${name}
📞 Phone: ${phone}
📅 Check-in: ${checkin}
📅 Check-out: ${checkout}
    `;

    const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <section className="border rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-semibold mb-4">
        Book This Property
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          name="name"
          required
          placeholder="Your Name"
          className="border p-3 rounded"
        />

        <input
          name="phone"
          required
          placeholder="Phone Number"
          className="border p-3 rounded"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="checkin"
            type="date"
            required
            className="border p-3 rounded"
          />
          <input
            name="checkout"
            type="date"
            required
            className="border p-3 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700 transition"
        >
          Check Availability on WhatsApp
        </button>
      </form>
    </section>
  );
}
