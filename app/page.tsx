import Image from "next/image";
import Link from "next/link";
import { properties } from "../data/properties";

export default function HomePage() {
  const featuredProperties = properties.filter(
    (property) => property.featured
  );

  return (
    <main className="bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Luxury Holiday Homes Along the Kenyan Coast
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Handpicked beachfront apartments, villas, and stays
            for unforgettable coastal experiences.
          </p>

          <Link
            href="/properties"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg text-lg"
          >
            View Properties
          </Link>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">
          Featured Stays
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  {property.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {property.location}
                </p>

                <p className="font-bold mt-2">
                  {property.price}
                </p>

                <a
                  href={`https://wa.me/${property.whatsapp}?text=Hello,%20I%20am%20interested%20in%20${encodeURIComponent(
                    property.title
                  )}`}
                  target="_blank"
                  className="block mt-4 text-center bg-green-600 text-white py-2 rounded-lg"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
