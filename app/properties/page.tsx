import Link from "next/link";
import Image from "next/image";
import { properties } from "../../data/properties";
export default function HomePage() {
  const featured = properties.slice(0, 3);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Luxury Holiday Homes <br /> Along the Kenyan Coast
            </h1>

            <p className="mt-6 text-lg text-gray-700">
              Handpicked beachfront apartments, villas & stays in Shanzu,
              Nyali, Bamburi, Diani & beyond.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/properties"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
              >
                View Properties
              </Link>

              <a
                href="https://wa.me/254700000000"
                className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src="/images/shanzu.jpg"
              alt="Luxury beachfront apartment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((property) => (
            <Link
              key={property.slug}
              href={`/properties/${property.slug}`}
              className="border rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-56">
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

                <p className="text-gray-600">
                  {property.location}
                </p>

                <p className="font-bold mt-2">
                  {property.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/properties"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800"
          >
            View All Properties
          </Link>
        </div>
      </section>
    </main>
  );
}
