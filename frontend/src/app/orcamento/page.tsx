'use client';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      
      if (file) {
        formDataToSend.append('file', file);
      }

      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/quotes`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success('Solicitação de orçamento enviada com sucesso!');
      setFormData({ name: '', email: '', phone: '', description: '' });
      setFile(null);
    } catch (error) {
      toast.error('Erro ao enviar solicitação');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Solicite seu Orçamento</h1>
        <p className="text-gray-600">
          Envie-nos os detalhes do seu projeto e receba um orçamento personalizado
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nome completo *
              </label>
              <input
                type="text"
                name="name"
                required
                className="input-field"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                className="input-field"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Telefone
            </label>
            <input
              type="tel"
              name="phone"
              className="input-field"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Descrição do projeto *
            </label>
            <textarea
              name="description"
              required
              rows={6}
              className="input-field"
              placeholder="Descreva detalhadamente o que você precisa: dimensões, material, quantidade, prazo, etc."
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Arquivo (STL, OBJ, imagem)
            </label>
            <input
              type="file"
              accept=".stl,.obj,.png,.jpg,.jpeg,.gif"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
            />
            <p className="text-sm text-gray-500 mt-1">
              Formatos aceitos: STL, OBJ, PNG, JPG, JPEG, GIF (máx. 10MB)
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Informações importantes:</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Responderemos em até 24 horas</li>
              <li>• Orçamentos são válidos por 15 dias</li>
              <li>• Prazo de entrega varia conforme complexidade</li>
              <li>• Aceitamos diversos tipos de materiais</li>
            </ul>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary"
          >
            {loading ? 'Enviando...' : 'Solicitar Orçamento'}
          </button>
        </form>
      </div>
    </div>
  );
}