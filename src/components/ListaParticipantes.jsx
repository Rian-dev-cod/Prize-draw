import {
  motion,
  AnimatePresence
} from 'framer-motion'

import {
  FaTrash
} from 'react-icons/fa'

function ListaParticipantes({
  participantes,
  removerParticipante
}) {

  return (

    <div className="lista">

      <div className="topo-lista">

        <h2>
          Participantes
        </h2>

        <span className="badge-total">
          {participantes.length} cadastrados
        </span>

      </div>

      <AnimatePresence>

        {participantes.map(participante => (

          <motion.div
            key={participante.id}
            className="card-participante"

            initial={{
              opacity: 0,
              y: 10
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            exit={{
              opacity: 0
            }}
          >

            <div className="dados">

              <div className="item-dado">
                <strong>ID:</strong>
                <span>
                  {participante.id}
                </span>
              </div>

              <div className="item-dado">
                <strong>Nome:</strong>
                <span>
                  {participante.nome}
                </span>
              </div>

              <div className="item-dado">
                <strong>Telefone:</strong>
                <span>
                  {participante.telefone}
                </span>
              </div>

            </div>

            <button
              className="btn-remover"
              onClick={() =>
                removerParticipante(
                  participante.id
                )
              }
            >
              <FaTrash />
            </button>

          </motion.div>

        ))}

      </AnimatePresence>

    </div>
  )
}

export default ListaParticipantes