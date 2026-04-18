function Projetos({ abrirModal }) {
  const listaProjetos = [
    {
      id: 1,
      titulo: "Site Institucional",
      descricao: "Landing page responsiva feita com React e CSS puro.",
      img: "https://via.placeholder.com/400x250/242424/FFF?text=Projeto+1"
    },
    {
      id: 2,
      titulo: "Dashboard Admin",
      descricao: "Painel com gráficos e tabelas usando React + Chart.js.",
      img: "https://via.placeholder.com/400x250/242424/FFF?text=Projeto+2"
    },
    {
      id: 3,
      titulo: "E-commerce",
      descricao: "Loja virtual com carrinho e integração de pagamento.",
      img: "https://via.placeholder.com/400x250/242424/FFF?text=Projeto+3"
    }
  ]

  return (
    <section id="projetos" className="projetos">
      <div className="container">
        <h2>Meus Projetos</h2>
        <div className="grid-projetos">
          {listaProjetos.map(projeto => (
            <div key={projeto.id} className="card-projeto">
  <img src={projeto.img} alt={projeto.titulo} />
  <h3>{projeto.titulo}</h3>
  <p>{projeto.descricao}</p>
  <button onClick={() => abrirModal(projeto)}>Ver detalhes</button>
</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos