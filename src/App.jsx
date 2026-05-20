import { useState } from 'react'
import { motion } from 'framer-motion'

import Header from './components/Header'
import Formulario from './components/Formulario'
import ListaParticipantes from './components/ListaParticipantes'
import Resultado from './components/Resultado'

function App() {

  const [participantes, setParticipantes] = useState([])
  const [resultado, setResultado] = useState(null)
  const [sorteando, setSorteando] = useState(false)

  function adicionarParticipante(nome, telefone) {

    const nomeFormatado = nome.trim()
    const telefoneFormatado = telefone.trim()

    if (!nomeFormatado || !telefoneFormatado) {
      alert('Preencha todos os campos!')
      return
    }

    const nomeExiste = participantes.some(
      participante =>
        participante.nome.toLowerCase() ===
        nomeFormatado.toLowerCase()
    )

    if (nomeExiste) {
      alert('Esse participante já existe!')
      return
    }

    const telefoneExiste = participantes.some(
      participante =>
        participante.telefone === telefoneFormatado
    )

    if (telefoneExiste) {
      alert('Esse telefone já está cadastrado!')
      return
    }

    const novoParticipante = {
      id: participantes.length + 1,
      nome: nomeFormatado,
      telefone: telefoneFormatado
    }

    setParticipantes(prev =>
      [...prev, novoParticipante]
    )
  }

  function removerParticipante(id) {

    const novaLista = participantes.filter(
      participante => participante.id !== id
    )

    setParticipantes(novaLista)
  }

  function sortear() {

    if (participantes.length < 2) {
      alert('Adicione pelo menos 2 participantes!')
      return
    }

    setResultado(null)
    setSorteando(true)

    setTimeout(() => {

      const indice = Math.floor(
        Math.random() * participantes.length
      )

      setResultado(participantes[indice])

      setSorteando(false)

    }, 3000)
  }

  function resetarTudo() {
    setParticipantes([])
    setResultado(null)
  }

  return (

    <div className="pagina">

      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <Header />

        <Formulario
          adicionarParticipante={
            adicionarParticipante
          }
        />

        <ListaParticipantes
          participantes={participantes}
          removerParticipante={
            removerParticipante
          }
        />

        <div className="acoes">

          <button
            className="btn-sortear"
            onClick={sortear}
          >
            Sortear Nome
          </button>

          <button
            className="btn-reset"
            onClick={resetarTudo}
          >
            Resetar
          </button>

        </div>

        <Resultado
          resultado={resultado}
          sorteando={sorteando}
          fecharResultado={() =>
            setResultado(null)
          }
        />

      </motion.div>

    </div>
  )
}

export default App