export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sobre a ForjaJ</h1>
        <p className="text-xl text-gray-600">
          Transformando ideias em realidade através da impressão 3D
        </p>
      </div>

      <div className="prose prose-lg mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A ForjaJ nasceu da paixão pela tecnologia e pela criação. Fundada em 2020, 
            nossa empresa se especializou em oferecer soluções completas em impressão 3D, 
            desde produtos prontos até peças totalmente personalizadas.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Com anos de experiência no mercado, desenvolvemos expertise em diversas 
            tecnologias de impressão 3D, permitindo atender desde projetos simples 
            até os mais complexos desafios de prototipagem e produção.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
          <p className="text-gray-700 leading-relaxed">
            Democratizar o acesso à tecnologia de impressão 3D, oferecendo produtos 
            de alta qualidade e serviços personalizados que atendam às necessidades 
            específicas de cada cliente, desde entusiastas até empresas.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Qualidade</h3>
              <p className="text-gray-700">
                Utilizamos apenas materiais premium e equipamentos de última geração 
                para garantir a excelência em cada produto.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Inovação</h3>
              <p className="text-gray-700">
                Estamos sempre atualizados com as últimas tecnologias e tendências 
                do mercado de impressão 3D.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Personalização</h3>
              <p className="text-gray-700">
                Cada projeto é único, e trabalhamos para atender às especificações 
                exatas de nossos clientes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Sustentabilidade</h3>
              <p className="text-gray-700">
                Priorizamos materiais eco-friendly e processos que minimizam 
                o impacto ambiental.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Tecnologias Utilizadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">FDM/FFF</h3>
              <p className="text-gray-700 text-sm">
                Ideal para protótipos funcionais e peças de uso geral
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">SLA/DLP</h3>
              <p className="text-gray-700 text-sm">
                Perfeito para detalhes finos e acabamento superior
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">SLS</h3>
              <p className="text-gray-700 text-sm">
                Para peças técnicas com alta resistência mecânica
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}