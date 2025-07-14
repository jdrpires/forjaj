'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function AdminPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<{
    totalProducts: number;
    totalOrders: number;
    pendingQuotes: number;
    totalRevenue: number;
  }>({
    totalProducts: 0,
    totalOrders: 0,
    pendingQuotes: 0,
    totalRevenue: 0
  });

  useEffect(() => {
    if (!user?.is_admin) {
      router.push('/');
      return;
    }
    fetchStats();
  }, [user, router]);

  const fetchStats = async () => {
    try {
      // Buscar estatísticas básicas
      const [productsRes, ordersRes, quotesRes] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/orders`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/quotes`)
      ]);

      const totalRevenue = ordersRes.data
        .filter((order: any) => order.status === 'paid')
        .reduce((sum: number, order: any) => sum + order.total, 0);

      setStats({
        totalProducts: productsRes.data.total || productsRes.data.products?.length || 0,
        totalOrders: ordersRes.data.length,
        pendingQuotes: quotesRes.data.filter((q: any) => q.status === 'pending').length,
        totalRevenue
      });
    } catch (error) {
      console.error('Erro ao buscar estatísticas:', error);
    }
  };

  if (!user?.is_admin) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Painel Administrativo</h1>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Total de Produtos</h3>
          <p className="text-3xl font-bold text-primary-600">{stats.totalProducts}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Total de Pedidos</h3>
          <p className="text-3xl font-bold text-green-600">{stats.totalOrders}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Orçamentos Pendentes</h3>
          <p className="text-3xl font-bold text-yellow-600">{stats.pendingQuotes}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Receita Total</h3>
          <p className="text-3xl font-bold text-purple-600">R$ {stats.totalRevenue.toFixed(2)}</p>
        </div>
      </div>

      {/* Menu de Navegação */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Gerenciar Produtos</h3>
          <p className="text-gray-600 mb-4">Adicionar, editar e remover produtos do catálogo</p>
          <button
            onClick={() => router.push('/admin/produtos')}
            className="btn-primary w-full"
          >
            Acessar
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Gerenciar Pedidos</h3>
          <p className="text-gray-600 mb-4">Visualizar e atualizar status dos pedidos</p>
          <button
            onClick={() => router.push('/admin/pedidos')}
            className="btn-primary w-full"
          >
            Acessar
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Gerenciar Orçamentos</h3>
          <p className="text-gray-600 mb-4">Responder solicitações de orçamentos personalizados</p>
          <button
            onClick={() => router.push('/admin/orcamentos')}
            className="btn-primary w-full"
          >
            Acessar
          </button>
        </div>
      </div>
    </div>
  );
}