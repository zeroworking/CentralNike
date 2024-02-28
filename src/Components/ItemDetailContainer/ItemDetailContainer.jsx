import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      setError(null);
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setItem({ ...docSnap.data(), id: docSnap.id });
        } else {
          setError("Producto no existe.");
        }
        } catch (error) {
            setError("Error al cargar el producto.");
        } finally {
            setLoading(false);
        }
    };
      fetchItem();
    }, [id]);

    return (
      <div className="contenedor">
        <br />
          {loading && <p>Cargando...</p>}
          {error && <p>{error}</p>}
          {item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;