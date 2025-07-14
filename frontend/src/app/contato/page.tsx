export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
        <p className="text-xl text-gray-600">
          Estamos aqui para ajudar com seu projeto de impressão 3D
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Informações de Contato */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Fale Conosco</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">contato@forjaj.com.br</p>
                <p className="text-gray-600">orcamentos@forjaj.com.br</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Telefone</h3>
                <p className="text-gray-600">(11) 99999-9999</p>
                <p className="text-gray-600">WhatsApp disponível</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Endereço</h3>
                <p className="text-gray-600">
                  Rua das Impressões, 123<br />
                  Bairro Tecnológico<br />
                  São Paulo - SP, 01234-567
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Horário de Funcionamento</h3>
                <p className="text-gray-600">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome *</label>
              <input
                type="text"
                required
                className="input-field"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                required
                className="input-field"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Telefone</label>
              <input
                type="tel"
                className="input-field"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Assunto *</label>
              <select required className="input-field">
                <option value="">Selecione um assunto</option>
                <option value="orcamento">Solicitação de Orçamento</option>
                <option value="duvida">Dúvida sobre Produto</option>
                <option value="suporte">Suporte Técnico</option>
                <option value="parceria">Parceria</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mensagem *</label>
              <textarea
                required
                rows={5}
                className="input-field"
                placeholder="Descreva sua necessidade ou dúvida..."
              />
            </div>

            <button type="submit" className="w-full btn-primary">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h2>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Qual o prazo de entrega?</h3>
              <p className="text-gray-700">
                O prazo varia conforme a complexidade do projeto. Produtos em estoque são enviados em 1-2 dias úteis. 
                Peças personalizadas podem levar de 3 a 15 dias úteis.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Quais materiais vocês utilizam?</h3>
              <p className="text-gray-700">
                Trabalhamos com PLA, ABS, PETG, TPU, resinas fotopoliméricas e materiais técnicos como 
                nylon e fibra de carbono, dependendo da aplicação.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Fazem protótipos funcionais?</h3>
              <p className="text-gray-700">
                Sim! Especializamo-nos em protótipos funcionais para testes e validação de conceitos, 
                utilizando materiais adequados para cada aplicação.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Como solicitar um orçamento?</h3>
              <p className="text-gray-700">
                Você pode usar nossa página de orçamento online, enviar um email ou entrar em contato 
                por telefone. Inclua detalhes do projeto e arquivos quando possível.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}