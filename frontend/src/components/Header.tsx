'use client';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ForjaJ
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600">
              Início
            </Link>
            <Link href="/produtos" className="text-gray-700 hover:text-primary-600">
              Produtos
            </Link>
            <Link href="/orcamento" className="text-gray-700 hover:text-primary-600">
              Orçamento
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-primary-600">
              Sobre
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-primary-600">
              Contato
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/carrinho" className="relative">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700">
                  <UserIcon className="h-6 w-6" />
                  <span>{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  <Link href="/meus-pedidos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Meus Pedidos
                  </Link>
                  {user.is_admin && (
                    <Link href="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Administração
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sair
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/login" className="btn-primary">
                Entrar
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}