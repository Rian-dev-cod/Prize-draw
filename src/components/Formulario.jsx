import { useState } from 'react'

function Formulario({ adicionarParticipante }) {

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')

  function formatarTelefone(valor) {

    valor = valor.replace(/\D/g, '')

    valor = valor.replace(
      /^(\d{2})(\d)/g,
      '($1) $2'
    )

    valor = valor.replace(
      /(\d{5})(\d)/,
      '$1-$2'
    )

    return valor.slice(0, 15)
  }

  function enviar(e) {

    e.preventDefault()

    adicionarParticipante(nome, telefone)

    setNome('')
    setTelefone('')
  }

  return (

    <form
      className="formulario"
      onSubmit={enviar}
    >

      <div className="campo">

        <label>Nome</label>

        <input
          type="text"
          placeholder="Digite o nome"
          value={nome}
          onChange={(e) =>
            setNome(e.target.value)
          }
        />

      </div>

      <div className="campo">

        <label>Telefone</label>

        <input
          type="text"
          placeholder="(00) 00000-0000"
          value={telefone}
          onChange={(e) =>
            setTelefone(
              formatarTelefone(
                e.target.value
              )
            )
          }
        />

      </div>

      <button type="submit">
        Adicionar
      </button>

    </form>
  )
}

export default Formulario