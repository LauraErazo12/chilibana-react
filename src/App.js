import React, { useState } from "react";
import PedidoForm from "./components/PedidoForm";
import ListaPedidos from "./components/ListaPedidos";
import "./App.css";

/**
 * Componente principal de la aplicación ChiliBana.
 * Administra los pedidos y conecta los componentes
 * de registro y listado.
 */
function App() {
    // Estado que almacena los pedidos registrados.
    const [pedidos, setPedidos] = useState([]);

    /**
     * Registra un nuevo pedido.
     */
    const agregarPedido = (nuevoPedido) => {
        const pedido = {
            id: pedidos.length + 1,
            ...nuevoPedido
        };

        setPedidos([...pedidos, pedido]);
    };

    /**
     * Actualiza la cantidad de un pedido.
     */
    const actualizarPedido = (id, nuevaCantidad) => {
        const pedidosActualizados = pedidos.map((pedido) =>
            pedido.id === id
                ? { ...pedido, cantidad: nuevaCantidad }
                : pedido
        );

        setPedidos(pedidosActualizados);
    };

    /**
     * Elimina un pedido.
     */
    const eliminarPedido = (id) => {
        const pedidosActualizados = pedidos.filter(
            (pedido) => pedido.id !== id
        );

        setPedidos(pedidosActualizados);
    };

    return (
        <div className="App">
            <h1>ChiliBana</h1>

            <p>Gestión de pedidos</p>

            <PedidoForm
                onAgregarPedido={agregarPedido}
            />

            <hr />

            <ListaPedidos
                pedidos={pedidos}
                onActualizarPedido={actualizarPedido}
                onEliminarPedido={eliminarPedido}
            />
        </div>
    );
}

export default App;