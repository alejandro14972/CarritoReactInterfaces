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

    function vaciarCarrito() {
        setCarrito([])
    }

    function comprar() {
        let frase = "";
        for (let i = 0; i < carrito.length; i++) {
            frase += carrito[i].nombre + " " + carrito[i].cantidad + "\n";
        }

        alert(frase)
        vaciarCarrito();
    }

    function aumentarCantidad(id) {
        const itemExist = carrito.findIndex(p => p.id === id);
        if (itemExist >= 0) {
            const actualizarCarrito = [...carrito];
            actualizarCarrito[itemExist].cantidad++;
            setCarrito(actualizarCarrito);
        }
    }

    function disminuirCantidad(id) {
        const itemExist = carrito.findIndex(p => p.id === id);
        if (itemExist >= 0) {
            const actualizarCarrito = [...carrito];
            actualizarCarrito[itemExist].cantidad--;
            setCarrito(actualizarCarrito);
        }
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
                        vaciarCarrito={vaciarCarrito}
                        comprar={comprar}
                        aumentarCantidad={aumentarCantidad}
                        disminuirCantidad={disminuirCantidad}
                    />
                </ul>
            </div>
        </>
    )
}
