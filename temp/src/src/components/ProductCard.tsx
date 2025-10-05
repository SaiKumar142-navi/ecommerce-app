import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product, useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const rating = 4.5; // Mock rating
  const isOnSale = Math.random() > 0.7; // Random sale status

  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isOnSale && (
            <Badge className="absolute top-3 left-3 bg-sale hover:bg-sale">
              SALE
            </Badge>
          )}
          {product.stock <= 5 && product.stock > 0 && (
            <Badge variant="outline" className="absolute top-3 right-3 bg-background/80">
              Only {product.stock} left
            </Badge>
          )}
        </div>
        
        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            <p className="text-muted-foreground text-sm line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
              <span className="text-sm text-muted-foreground ml-2">({rating})</span>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-price">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {isOnSale && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{(product.price * 1.2).toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              
              <Button 
                size="sm" 
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="bg-primary hover:bg-primary-hover transition-colors"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {product.stock === 0 ? 'Out of Stock' : 'Add'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;