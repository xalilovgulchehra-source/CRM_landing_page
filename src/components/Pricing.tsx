import Link from "next/link";

const REGISTER_URL = "https://crm-frontend-nine-wheat.vercel.app/register";

const plans = [
  {
    name: "Boshlang'ich",
    price: "Bepul",
    description: "Kichik sartaroshxonalarni boshlash uchun",
    features: [
      "Bitta sartaroshxona",
      "50 tagacha mijoz",
      "Asosiy navbat tizimi",
      "Kunlik hisobot",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "290 000",
    unit: "so'm/oy",
    description: "To'liq boshqaruv uchun",
    features: [
      "Cheksiz sartaroshxona",
      "Cheksiz mijozlar",
      "Onlayn navbat tizimi",
      "Oylik va kunlik hisobot",
      "SMS bildirishnomalar",
    ],
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 tracking-tight">
          Narxlar
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 max-w-[680px] mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`border rounded-md p-8 flex flex-col ${
                p.featured ? "border-[#2563eb]" : "border-gray-200"
              }`}
            >
              <h3 className="font-semibold text-gray-900 text-[15px]">
                {p.name}
              </h3>
              <div className="mt-3 text-3xl font-bold text-gray-900 tracking-tight">
                {p.price}
                {p.unit && (
                  <span className="text-sm font-normal text-gray-400 ml-1">
                    {p.unit}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-gray-400">{p.description}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="text-sm text-gray-500 border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={REGISTER_URL}
                className={`mt-8 block text-center text-[15px] font-medium py-3 rounded-md transition-colors ${
                  p.featured
                    ? "bg-[#2563eb] hover:bg-[#1d4ed8] text-white"
                    : "border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                }`}
              >
                Boshlash
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
