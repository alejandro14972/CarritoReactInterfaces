

export default function ProductoCatalogo({ item, addProducto }) {

    const { nombre, descripcion, categoria, precio, id } = item;


    return (
        <>
            <div className="card mt-3">
                <div className="card-body">
                    <li className="list-group-item border-0">
                        <h2 className="card-title">{nombre}</h2>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text">
                            <span className="badge bg-primary">{categoria}</span>
                        </p>
                        <p className="card-text fw-bold text-success">
                            {precio}€
                        </p>
                    </li>
                    <button
                        type="button"
                        className="btn btn-dark w-100 mt-2"
                        onClick={() => addProducto(item)}
                    >
                        Agregar producto
                    </button>
                </div>
            </div>
        </>

    );
}
