export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-0">
        <div className="grid gap-10 sm:grid-cols-[2fr_1fr_1fr] pb-12">
          <div>
            <span className="font-semibold text-gray-900 text-[15px]">
              BarberCRM
            </span>
            <p className="mt-2 text-sm text-gray-400 max-w-[280px] leading-relaxed">
              Sartaroshxonalarni zamonaviy boshqarish tizimi.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-3">
              Aloqa
            </h4>
            <p className="text-sm text-gray-400 mb-1">info@barbercrm.uz</p>
            <p className="text-sm text-gray-400">+998 90 123 45 67</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-3">
              Sahifalar
            </h4>
            <a
              href="#features"
              className="block text-sm text-gray-400 hover:text-gray-900 transition-colors mb-1"
            >
              Xususiyatlar
            </a>
            <a
              href="#pricing"
              className="block text-sm text-gray-400 hover:text-gray-900 transition-colors"
            >
              Narxlar
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 py-5">
          <p className="text-xs text-gray-400">
            &copy; 2026 BarberCRM. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
