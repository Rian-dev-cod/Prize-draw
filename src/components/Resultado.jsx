import { motion, AnimatePresence } from 'framer-motion'

import {
  FaTrophy,
  FaTimes
} from 'react-icons/fa'

function Resultado({
  resultado,
  sorteando,
  fecharResultado
}) {

  return (

    <AnimatePresence>

      {(sorteando || resultado) && (

        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.div
            className="modal-resultado"
            initial={{
              scale: 0.5,
              opacity: 0,
              y: 100
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0
            }}
            exit={{
              scale: 0.5,
              opacity: 0
            }}
            transition={{
              duration: 0.4
            }}
          >

            {!sorteando && (

              <button
                className="btn-fechar"
                onClick={fecharResultado}
              >
                <FaTimes />
              </button>

            )}

            {sorteando && (

              <div className="animacao-sorteio">

                <motion.div
                  className="icone-loading"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1
                  }}
                >
                  🎲
                </motion.div>

                <h2>
                  Realizando Sorteio...
                </h2>

                <p>
                  Aguarde alguns segundos
                </p>

              </div>

            )}

            {!sorteando && resultado && (

              <motion.div
                className="resultado-final"
                initial={{
                  scale: 0
                }}
                animate={{
                  scale: 1
                }}
              >

                <div className="confete"></div>

                <FaTrophy className="trofeu" />

                <h2>
                  PARTICIPANTE SORTEADO
                </h2>

                <h1>
                  {resultado.nome}
                </h1>

                <div className="info-ganhador">

                  <div>
                    <span>ID</span>
                    <strong>
                      #{resultado.id}
                    </strong>
                  </div>

                  <div>
                    <span>Telefone</span>
                    <strong>
                      {resultado.telefone}
                    </strong>
                  </div>

                </div>

              </motion.div>

            )}

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  )
}

export default Resultado