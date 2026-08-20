const features = [
  {
    title: "Mijozlar bazasi",
    description:
      "Barcha mijozlaringizni bir joyda saqlang. Ularning ismlari, aloqa ma'lumotlari va tashrif tarixini osongina boshqaring.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Onlayn navbat tizimi",
    description:
      "Mijozlar onlayn navbatga yozilishlari mumkin. Navbatni real vaqtda kuzating va boshqaring.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "Kunlik va oylik hisobot",
    description:
      "Tushumlaringiz, xizmatlar soni va mijozlar statistikasini kunlik hamda oylik ko'rinishda ko'ring.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-gray-50 border-y border-gray-100 py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 tracking-tight">
          Asosiy xususiyatlar
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-gray-200 rounded-md p-8"
            >
              <div className="text-[#2563eb] mb-5">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 text-[15px]">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
