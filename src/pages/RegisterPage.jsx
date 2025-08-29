import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setStatus("⏳ Registrando...");
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) setStatus(`❌ ${error.message}`);
    else {
      setStatus("✅ Registro exitoso. Revisa tu correo para verificar tu cuenta.");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <header className="navbar">
        <h1>📱 Teléfonos Cuba</h1>
      </header>

      <main>
        <section className="card">
          <h2>Crear cuenta</h2>
          <form onSubmit={handleRegister} className="form">
            <input type="email" placeholder="Correo" required value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" required value={password} onChange={e => setPassword(e.target.value)} />
            <button className="btn" type="submit">Registrarse</button>
          </form>
          <Link to="/login" className="btn outline" style={{ marginTop: ".5rem" }}>Volver al login</Link>
          <p className="status" style={{ marginTop: ".5rem" }}>{status}</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RegisterPage;
