import { useState, useEffect } from 'react'
import ProductoCatalogo from './ProductoCatalogo';
import Carrito from './Carrito';


export default function Catalogo() {

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    const carga = async () => {
        const r = await fetch("./articulos.json");
        const d = await r.json();
        setProductos(d);
    }

    useEffect(() => {
        carga();
    }, []);


    function addProducto(item) {
        const itemExist = carrito.findIndex(p => p.id === item.id);
        
        if (itemExist >= 0) {
            const actualizarCarrito = [...carrito];
            actualizarCarrito[itemExist].cantidad++;
            setCarrito(actualizarCarrito);
        } else {
            item.cantidad = 1; 
            setCarrito([...carrito, item])
        }
    }

    function eliminarElemento(id) {
        const nuevoCarrito = carrito.filter(p => p.id !== id);
        setCarrito(nuevoCarrito);
    }


    return (
        <>
        
            <div className='col-6'>
            <h1>Productos</h1>
                <ul className="list-group">
                    {productos.map((pro) => (
                        <ProductoCatalogo
                            key={pro.id}
                            item={pro}
                            addProducto={addProducto}
                        />
                    ))}
                </ul>
            </div>

            <div className='col-6'>
                <ul>
                    <Carrito
                        carrito={carrito}
                        eliminarElemento={eliminarElemento}
                    />
                </ul>
            </div>
        </>
    )
}
