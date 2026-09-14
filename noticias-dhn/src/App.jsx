import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlAPI = "https://jalejandrojb.github.io/notiticas-api/noticias/noticias.json";

    fetch(urlAPI)
      .then((response) => response.json())
      .then((data) => {
        setNoticias(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener las noticias:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loader">Cargando noticias...</div>;
  }

  return (
    <div className="app-container">
      <h1>📰 Portal de Noticias</h1>
      
      <div className="noticias-grid">
        {noticias.map((noticia) => (
          <article key={noticia.id} className="noticia-card">
            <div className="imagen-contenedor">
              <img src={noticia.imagen_url} alt={noticia.titulo} />
            </div>
            <div className="noticia-contenido">
              <span className="noticia-fecha">{noticia.fecha}</span>
              <h2>{noticia.titulo}</h2>
              <p>{noticia.descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default App;
