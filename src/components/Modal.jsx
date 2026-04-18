function Modal({ projeto, fecharModal }) {
  if (!projeto) return null

  return (
    <div className="modal-fundo" onClick={fecharModal}>
      <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
        <button className="fechar" onClick={fecharModal}>X</button>
        <img src={projeto.img} alt={projeto.titulo} />
        <h2>{projeto.titulo}</h2>
        <p>{projeto.descricao}</p>
      </div>
    </div>
  )
}

export default Modal