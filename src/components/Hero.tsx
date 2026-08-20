import Link from "next/link";

const REGISTER_URL = "https://crm-frontend-nine-wheat.vercel.app/register";

export default function Hero() {
  return (
    <section className="bg-white border-b border-gray-100">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-14 px-6">
        <span className="font-semibold text-gray-900 text-[15px]">
          BarberCRM
        </span>
        <div className="hidden sm:flex items-center gap-8 text-sm text-gray-500">
          <a href="#features" className="hover:text-gray-900 transition-colors">
            Xususiyatlar
          </a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">
            Narxlar
          </a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">
            Aloqa
          </a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto text-center px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15]">
          Sartaroshxonangizni
          <br />
          bir joydan boshqaring
        </h1>
        <p className="mt-5 text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
          Mijozlar bazasi, navbat tizimi va hisobotlarni oddiy va qulay tarzda
          boshqaring. Bepul boshlang.
        </p>
        <Link
          href={REGISTER_URL}
          className="mt-8 inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[15px] font-medium px-7 py-3 rounded-md transition-colors"
        >
          Bepul boshlash
        </Link>
      </div>
    </section>
  );
}
