

export default function Carrito({ carrito, eliminarElemento }) {


    return (
        <div>
            <h1>Mi carrito</h1>

            {carrito.length === 0 ? (
                <p className="text-center">El carrito esta vacio</p>
            ) : (
                <table className="w-100 table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>

                        </tr>
                    </thead>
                    <tbody>
                        {carrito.map(g => (
                            <tr key={g.id}>
                                <td>{g.nombre}</td>
                                <td className="fw-bold">
                                    {g.precio}
                                </td>
                                <td className="flex align-items-start gap-4">
                                    {g.cantidad}
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
            )}


        </div>
    )
}
