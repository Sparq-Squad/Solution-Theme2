import Button from './ui/Button';
import { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import { motion } from 'framer-motion';

const ProductTable = () => {
  const { products, handleDeleteProduct } = useContext(DashboardContext);

  const handleEdit = (id) => {
    console.log('Edit product:', id);
  };

  return (
    <motion.div
      layout
      className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] border border-[#2c2f38] rounded-2xl shadow-xl text-white overflow-hidden transition-all duration-300"
    >
      <div className="px-6 py-4 border-b border-[#3a3a3a] flex justify-between items-center bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a]">
        <h3 className="text-lg font-semibold text-yellow-400">Recent Products</h3>
        <button className="text-yellow-300 hover:text-yellow-200 text-sm font-medium transition-colors">
          View All
        </button>
      </div>

      {/* Mobile View (cards) */}
      <div className="md:hidden space-y-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#161a23] border border-[#2c2f38] rounded-xl p-4 space-y-2 shadow hover:bg-[#1e222d] transition duration-200"
          >
            <div className="flex items-center gap-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover rounded-md border border-[#3a3a3a]"
              />
              <div className="flex-1">
                <p className="text-yellow-200 font-medium text-sm">{product.name}</p>
                <p className="text-gray-400 text-xs">{product.productId}</p>
              </div>
            </div>

            <div className="text-yellow-100 text-sm">
              <p>Platform: {product.platform}</p>
              <p>Price: ₹{product.price}</p>
              <p>
                Status:{' '}
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                    product.status === 'Active'
                      ? 'bg-green-900 text-green-300'
                      : 'bg-gray-800 text-gray-300'
                  }`}
                >
                  {product.status}
                </span>
              </p>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleEdit(product.id)}
                className="text-yellow-300 hover:text-yellow-100 transition"
              >
                Edit
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleDeleteProduct(product.id)}
                className="text-red-400 hover:text-red-300 transition"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-[#2c2f38]">
          <thead className="bg-[#0f1117] text-yellow-300 text-sm uppercase">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Product</th>
              <th className="px-6 py-3 text-left font-semibold">Platform</th>
              <th className="px-6 py-3 text-left font-semibold">Price</th>
              <th className="px-6 py-3 text-left font-semibold">Status</th>
              <th className="px-6 py-3 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#161a23] divide-y divide-[#2c2f38]">
            {products.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-[#1e222d] transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded object-cover border border-[#3a3a3a]"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-yellow-200">{product.name}</div>
                      <div className="text-xs text-gray-400">{product.productId}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-yellow-100">{product.platform}</td>
                <td className="px-6 py-4 text-sm text-yellow-100">₹{product.price}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${
                      product.status === 'Active'
                        ? 'bg-green-900 text-green-300'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-sm space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(product.id)}
                    className="text-yellow-300 hover:text-yellow-100 transition"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteProduct(product.id)}
                    className="text-red-400 hover:text-red-300 transition"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="px-6 py-8 text-center text-gray-400 text-sm">
          No products found. Add your first product using the form above.
        </div>
      )}
    </motion.div>
  );
};

export default ProductTable;
