import { useAuth } from "../contexts/AuthContext";
import { supabase } from "../supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <>
      <header className="navbar">
        <h1>📱 Teléfonos Cuba</h1>
        <nav>
          <button className="btn outline" onClick={handleLogout}>Cerrar sesión</button>
        </nav>
      </header>

      <main>
        <section className="card">
          <h2>Bienvenido, {user?.email}</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <Link className="btn" to="/revisar">Revisar modelos</Link>
            <Link className="btn" to="/subir">Subir modelos</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DashboardPage;
