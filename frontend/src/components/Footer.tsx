export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ForjaJ</h3>
            <p className="text-gray-300">
              Especialistas em impressões 3D e peças personalizadas.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/produtos" className="hover:text-white">Produtos</a></li>
              <li><a href="/orcamento" className="hover:text-white">Orçamento</a></li>
              <li><a href="/sobre" className="hover:text-white">Sobre Nós</a></li>
              <li><a href="/contato" className="hover:text-white">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/produtos?categoria=decoracao" className="hover:text-white">Decoração</a></li>
              <li><a href="/produtos?categoria=utilitarios" className="hover:text-white">Utilitários</a></li>
              <li><a href="/produtos?categoria=brinquedos" className="hover:text-white">Brinquedos</a></li>
              <li><a href="/produtos?categoria=pecas-tecnicas" className="hover:text-white">Peças Técnicas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="text-gray-300 space-y-2">
              <p>contato@forjaj.com.br</p>
              <p>(11) 99999-9999</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 ForjaJ. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}