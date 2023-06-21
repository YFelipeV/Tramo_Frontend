import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getHistorial } from "../../../Data/Historial";

function HistorialCards() {
  const [Historial, setHistorial] = useState([]);

  useEffect(() => {
    async function loadHistorial() {
      const { data } = await getHistorial();
      setHistorial(data);
    }

    loadHistorial();
  }, []);
 

  return (
    <>
      {Historial.map(({ usuario, pedidoManifesto ,index}) => (
        <tr key={index}>
          <td className="text_movil filas_info_corta text-center pt-4  order-2">
            {usuario.nombrePNA ? usuario.nombrePNA :usuario.nombreEmpresa }
          </td>

          <td className="text_movil filas_info_corta text-center p-4 order-0 ">
            {pedidoManifesto.id_conductor.nombreCON}
          </td>
          <td className="text_movil text-center pt-4">
            {pedidoManifesto.carga.cantidadAproximada} kilos
          </td>
          <td className="text_movil filas_info_larga text-center pt-4">
            {pedidoManifesto.carga.cuidadoCarga}
          </td>
          <td className="text_movil  text-center pt-4">
            ${pedidoManifesto.costosViaje}
          </td>
          <td className="text_movil filas_info_corta text-center pt-4">
            <Link to={`/manifiesto/${pedidoManifesto._id}`} target="blank">
              <button
                className="btn bg-orange-btn px-4"
                style={{ fontSize: "14px"}}
              >
                Ver manifiesto
              </button>
            </Link>
            <Link to={`/remesa/${pedidoManifesto._id}`} target="blank">
              <button
                className="btn bg-blue mt-2 px-4"
                style={{ fontSize: "14px" }}
              >
                Ver Remesa
              </button>
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
}

export default HistorialCards;
