import { useEffect, useState } from "react";

export default function Carrito({ carrito, eliminarElemento, vaciarCarrito, comprar, aumentarCantidad, disminuirCantidad }) {


    const [precioTotal, setprecioTotal] = useState(0);

    function carritoTotal() {
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            total += carrito[i].cantidad * carrito[i].precio;
        }
        return total;
    }

    useEffect(() => {
       setprecioTotal(carritoTotal()),
       precioTotalProductoPorCantidad()
    }, [carrito]);



    
    function precioTotalProductoPorCantidad(precio, cantidad) {
        const total = precio * cantidad;
        return total;
    }
    

    return (
        <div>
            <h1>Mi carrito</h1>

            {carrito.length === 0 ? (
                <p className="text-center">El carrito esta vacio</p>
            ) : (
                <>
                    <table className="w-100 table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Restar</th>   
                                <th>Cantidad</th>
                                <th>Sumar</th>
                                <th>Total</th>
                                <th>Elimnar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map(g => (
                                <tr key={g.id}>
                                    <td>{g.nombre}</td>
                                    <td className="fw-bold">
                                        {g.precio}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-dark"
                                            type="button"
                                            onClick={() => disminuirCantidad(g.id)}
                                        >
                                            -
                                        </button>
                                    </td>

                                    <td className="flex align-items-start gap-4">
                                        {g.cantidad}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-info"
                                            type="button"
                                            onClick={() => aumentarCantidad(g.id)}
                                        >
                                            +
                                        </button>
                                    </td>

                                    <td className="flex align-items-start gap-4">
                                        <p>{precioTotalProductoPorCantidad(g.precio, g.cantidad).toFixed(2)}</p>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            type="button"
                                            onClick={() => eliminarElemento(g.id)}
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <p className="text-end">Total pagar: <span className="fw-bold">{precioTotal.toFixed(2)}€</span></p>

                    <button
                        className="btn btn-dark w-100 mt-3 p-2"
                        onClick={vaciarCarrito}
                    >
                        Vaciar Carrito</button>

                        <button
                        className="btn btn-warning w-100 mt-3 p-2"
                        onClick={()=>comprar()}
                    >
                        Comprar Carrito</button>
                </>

            )}


        </div>
    )
}
