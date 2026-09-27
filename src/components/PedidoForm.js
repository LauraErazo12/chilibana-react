import React, { useState } from "react";

/**
 * Componente encargado de registrar nuevos pedidos.
 * Permite ingresar los datos básicos del pedido
 * y enviarlos al componente principal.
 */
function PedidoForm({ onAgregarPedido }) {
    // Estados para almacenar los datos ingresados en el formulario.
    const [cliente, setCliente] = useState("");
    const [tipoPedido, setTipoPedido] = useState("Domicilio");
    const [producto, setProducto] = useState("Gomitas enchiladas");
    const [cantidad, setCantidad] = useState(1);

    /**
     * Maneja el envío del formulario.
     */
    const manejarEnvio = (evento) => {
        evento.preventDefault();

        // Validar que el nombre del cliente no esté vacío.
        if (cliente.trim() === "") {
            alert("El cliente es obligatorio.");
            return;
        }

        // Validar que la cantidad sea mínimo 1.
        if (cantidad < 1) {
            alert("La cantidad debe ser mínimo 1.");
            return;
        }

        // Crear el objeto con la información del pedido.
        const nuevoPedido = {
            cliente: cliente,
            tipoPedido: tipoPedido,
            producto: producto,
            cantidad: Number(cantidad)
        };

        // Enviar el pedido al componente principal.
        onAgregarPedido(nuevoPedido);

        // Limpiar el formulario después de registrar el pedido.
        setCliente("");
        setTipoPedido("Domicilio");
        setProducto("Gomitas enchiladas");
        setCantidad(1);
    };

    return (
        <div>
            <h2>Registrar pedido</h2>

            <form onSubmit={manejarEnvio}>
                <label>Cliente:</label>
                <br />
                <input
                    type="text"
                    value={cliente}
                    onChange={(evento) => setCliente(evento.target.value)}
                    required
                />

                <br />
                <br />

                <label>Tipo de pedido:</label>
                <br />
                <select
                    value={tipoPedido}
                    onChange={(evento) => setTipoPedido(evento.target.value)}
                >
                    <option value="Domicilio">Domicilio</option>
                    <option value="En sitio">En sitio</option>
                </select>

                <br />
                <br />

                <label>Producto:</label>
                <br />
                <select
                    value={producto}
                    onChange={(evento) => setProducto(evento.target.value)}
                >
                    <option value="Gomitas enchiladas">
                        Gomitas enchiladas
                    </option>
                    <option value="Granizado enchilado">
                        Granizado enchilado
                    </option>
                    <option value="Chamoy">
                        Chamoy
                    </option>
                </select>

                <br />
                <br />

                <label>Cantidad:</label>
                <br />
                <input
                    type="number"
                    min="1"
                    value={cantidad}
                    onChange={(evento) => setCantidad(evento.target.value)}
                    required
                />

                <br />
                <br />

                <button type="submit">
                    Registrar pedido
                </button>
            </form>
        </div>
    );
}

export default PedidoForm;