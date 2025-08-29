import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import Footer from "../components/Footer";

const RevisarPage = () => {
  const [models, setModels] = useState([]);
  const [search, setSearch] = useState("");

  // Cargar datos y Realtime
  useEffect(() => {
    fetchModels();

    const subscription = supabase
      .from("modelos")
      .on("*", payload => fetchModels())
      .subscribe();

    return () => supabase.removeSubscription(subscription);
  }, []);

  const fetchModels = async () => {
    const { data, error } = await supabase.from("modelos").select("*").order("id", { ascending: false });
    if (!error) setModels(data);
  };

  const filteredModels = models.filter(
    m => m.commercial_name.toLowerCase().includes(search.toLowerCase()) ||
         m.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <header className="navbar">
        <h1>📱 Teléfonos Cuba</h1>
        <nav>
          <a href="/dashboard">Panel</a>
          <a className="active" href="/revisar">Revisar</a>
        </nav>
      </header>

      <main>
        <section className="card">
          <h2>Modelos registrados</h2>
          <input
            placeholder="Buscar por nombre o modelo..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search"
          />
          <table className="tabla">
            <thead>
              <tr>
                <th>Nombre comercial</th>
                <th>Modelo</th>
                <th>Bandas</th>
                <th>Provincias</th>
                <th>Subido por</th>
              </tr>
            </thead>
            <tbody>
              {filteredModels.map(m => (
                <tr key={m.id}>
                  <td>{m.commercial_name}</td>
                  <td>{m.model}</td>
                  <td>{m.bands}</td>
                  <td>{m.provinces}</td>
                  <td>{m.tester}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RevisarPage;
