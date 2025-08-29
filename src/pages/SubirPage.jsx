import { useState } from "react";
import { supabase } from "../supabaseClient";
import Footer from "../components/Footer";

const SubirPage = () => {
  const [formData, setFormData] = useState({
    commercial_name: "",
    model: "",
    bands: "",
    provinces: "",
    tester: "",
    email_tester: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("modelos").insert([formData]);
    if (error) setStatus(`❌ ${error.message}`);
    else {
      setStatus("✅ Modelo subido con éxito");
      setFormData({
        commercial_name: "",
        model: "",
        bands: "",
        provinces: "",
        tester: "",
        email_tester: ""
      });
    }
  };

  return (
    <>
      <header className="navbar">
        <h1>📱 Teléfonos Cuba</h1>
        <nav>
          <a href="/dashboard">Panel</a>
          <a href="/subir" className="active">Subir</a>
        </nav>
      </header>

      <main>
        <section className="card" style={{ maxWidth: "720px" }}>
          <h2>Subir modelo</h2>
          <p className="lead">Completa los campos obligatorios</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="row">
              <input id="commercial_name" placeholder="Nombre comercial" required value={formData.commercial_name} onChange={handleChange} />
              <input id="model" placeholder="Modelo" required value={formData.model} onChange={handleChange} />
            </div>
            <input id="bands" placeholder="Bandas (ej: 3G 900/2100, 4G 1800/2600)" required value={formData.bands} onChange={handleChange} />
            <input id="provinces" placeholder="Provincias testeadas (opcional)" value={formData.provinces} onChange={handleChange} />
            <div className="row">
              <input id="tester" placeholder="Tu nombre (opcional)" value={formData.tester} onChange={handleChange} />
              <input id="email_tester" type="email" placeholder="Correo (obligatorio)" required value={formData.email_tester} onChange={handleChange} />
            </div>
            <button className="btn" type="submit">Guardar</button>
          </form>
          <p className="status" style={{ marginTop: ".6rem" }}>{status}</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SubirPage;
