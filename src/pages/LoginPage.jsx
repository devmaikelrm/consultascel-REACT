import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus("⏳ Iniciando sesión...");
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) setStatus(`❌ ${error.message}`);
    else setStatus("✅ ¡Bienvenido!");
    if (user) navigate("/dashboard");
  };

  const handleOAuth = async (provider) => {
    const { error } = await supabase.auth.signIn({ provider });
    if (error) setStatus(`❌ ${error.message}`);
  };

  return (
    <>
      <header className="navbar">
        <h1>📱 Teléfonos Cuba</h1>
      </header>

      <main>
        <section className="card">
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleLogin} className="form">
            <input type="email" placeholder="Correo" required value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" required value={password} onChange={e => setPassword(e.target.value)} />
            <button className="btn" type="submit">Entrar</button>
          </form>

          <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
            <Link className="btn outline" to="/register">Registrarse</Link>
            <Link className="btn outline" to="/recovery">Olvidé mi contraseña</Link>
          </div>

          <div style={{ display: "flex", gap: ".5rem", marginTop: "1rem" }}>
            <button className="btn" onClick={() => handleOAuth("google")}>Google</button>
            <button className="btn" onClick={() => handleOAuth("github")}>GitHub</button>
          </div>

          <p className="status" style={{ marginTop: ".5rem" }}>{status}</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;

