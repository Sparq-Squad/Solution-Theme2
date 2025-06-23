import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const handleAddProduct = (newProduct) => {
        setProducts((prev) => [...prev,newProduct]);
    };

    const handleDeleteProduct = (id) => {
        setProducts((prev) => prev.filter((p)=> p.id !== id));
    };

    return (
        <DashboardContext.Provider value={{ products, handleAddProduct, handleDeleteProduct}}>
            {children}
        </DashboardContext.Provider>
    );
}