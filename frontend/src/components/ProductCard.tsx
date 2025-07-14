import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, 1);
    toast.success('Produto adicionado ao carrinho!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/produtos/${product.id}`}>
        <div className="relative h-48">
          <Image
            src={product.images?.[0] || '/placeholder.jpg'}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/produtos/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-primary-600">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-2">{product.category}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary-600">
            R$ {product.price.toFixed(2)}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="btn-primary text-sm"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}