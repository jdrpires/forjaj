import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Impressões 3D de Alta Qualidade
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Transformamos suas ideias em realidade com tecnologia de ponta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/produtos" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Ver Produtos
            </Link>
            <Link href="/orcamento" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}