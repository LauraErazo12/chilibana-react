import React from "react";

/**
 * Componente encargado de mostrar los pedidos registrados.
 * También permite actualizar y eliminar pedidos.
 */
function ListaPedidos({ pedidos, onActualizarPedido, onEliminarPedido }) {

    /**
     * Actualiza la cantidad de un pedido.
     */
    const actualizarCantidad = (pedido) => {
        const nuevaCantidad = prompt(
            "Ingrese la nueva cantidad:",
            pedido.cantidad
        );

        if (nuevaCantidad === null) {
            return;
        }

        if (Number(nuevaCantidad) < 1 || nuevaCantidad === "") {
            alert("La cantidad debe ser mínimo 1.");
            return;
        }

        onActualizarPedido(pedido.id, Number(nuevaCantidad));
    };

    return (
        <div>
            <h2>Pedidos registrados</h2>

            {pedidos.length === 0 ? (
                <p>No hay pedidos registrados.</p>
            ) : (
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Tipo</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Actualizar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pedidos.map((pedido) => (
                            <tr key={pedido.id}>
                                <td>{pedido.id}</td>
                                <td>{pedido.cliente}</td>
                                <td>{pedido.tipoPedido}</td>
                                <td>{pedido.producto}</td>
                                <td>{pedido.cantidad}</td>

                                <td>
                                    <button
                                        onClick={() =>
                                            actualizarCantidad(pedido)
                                        }
                                    >
                                        Actualizar
                                    </button>
                                </td>

                                <td>
                                    <button
                                        onClick={() =>
                                            onEliminarPedido(pedido.id)
                                        }
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ListaPedidos;