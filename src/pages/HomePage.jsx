import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <header className="navbar">
        <h1>📱 Teléfonos Cuba</h1>
        <nav>
          <Link to="/login">Iniciar sesión</Link>
        </nav>
      </header>

      <main>
        <section className="card">
          <h2>Proyecto colaborativo</h2>
          <p className="lead">
            Centralizamos qué <b>bandas</b> de red funcionan en Cuba para cada modelo.
          </p>

          <div className="grid2" style={{ marginTop: ".8rem" }}>
            <div>
              <h3>¿Qué puedes hacer?</h3>
              <ul style={{ margin: ".6rem 0 0 1rem" }}>
                <li>Revisar modelos reportados por la comunidad.</li>
                <li>Subir nuevos modelos con bandas y provincias probadas.</li>
                <li>Todo gratis, hecho entre todos.</li>
              </ul>
            </div>
            <div>
              <h3>Apoya el proyecto</h3>
              <p style={{ margin: ".4rem 0" }}>Si quieres ayudar:</p>
              <ul style={{ marginLeft: "1rem" }}>
                <li>
                  PayPal: <a href="https://www.paypal.me/MReyesMorales343" target="_blank">paypal.me/MReyesMorales343</a>
                </li>
                <li>Tarjeta cubana: <b>9238 1299 7063 1810</b></li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <Link className="btn" to="/login">Iniciar sesión</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
