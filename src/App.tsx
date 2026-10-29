
import { useEffect, useState } from 'react'
import { jobs } from './data'
import './App.css'

// Componente principal da aplicação.
function App() {
  // Controla o carregamento inicial.
  const [isLoading, setIsLoading] = useState(true)

  // Guarda a cidade selecionada no filtro.
  const [selectedCity, setSelectedCity] = useState('Todas')

  // Guarda os identificadores dos pedidos aceites.
  const [acceptedJobs, setAcceptedJobs] = useState<string[]>([])

  // Simula um carregamento inicial de um segundo.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Ao aceitar um pedido, guarda o seu ID.
  const handleAccept = (id: string) => {
    setAcceptedJobs((previousJobs) => [...previousJobs, id])
  }

  // Filtra os pedidos pela cidade e remove os já aceites.
  const filteredJobs = jobs.filter((job) => {
    const matchesCity =
      selectedCity === 'Todas' || job.city === selectedCity

    const isAvailable = !acceptedJobs.includes(job.id)

    return matchesCity && isAvailable
  })

  return (
    <main className="app-container">

      {/* Cabeçalho da aplicação */}
      <header className="app-header">
        <div className="brand">
          <div className="brand-icon" aria-hidden="true">
            🔧
          </div>

          <div className="brand-text">
            <h1>
              Vivências<span>.</span>
            </h1>
            <p>PLATAFORMA DE SERVIÇOS</p>
          </div>
        </div>
      </header>
      {/* Título da lista e filtro */}
      <div className="list-toolbar">
        <h3>Pedidos disponíveis</h3>

        <div className="filter-container">
          <label htmlFor="city">Filtrar por cidade</label>

          <select
            id="city"
            value={selectedCity}
            onChange={(event) => setSelectedCity(event.target.value)}
          >
            <option value="Todas">Todas as cidades</option>
            <option value="Porto">Porto</option>
            <option value="Lisboa">Lisboa</option>
            <option value="Braga">Braga</option>
            <option value="Coimbra">Coimbra</option>
          </select>
        </div>
      </div>

      {/* Lista dos pedidos */}
      <section className="jobs-list" aria-label="Pedidos de serviços">
        {isLoading ? (
          <p role="status">A carregar pedidos...</p>
        ) : (
          <>
            {/* Mensagem quando não existem pedidos disponíveis */}
            {filteredJobs.length === 0 && (
              <p className="empty-message">
                Não existem pedidos disponíveis.
              </p>
            )}

            {/* Cartões dos pedidos */}
            {filteredJobs.map((job) => (
              <article className="job-card" key={job.id}>

                <div className="job-info">
                  <h3>
                    {job.service}

                    {job.urgent && (
                      <span className="urgent-badge">
                        ⚠ Urgente
                      </span>
                    )}
                  </h3>

                  <p>📍 {job.city}</p>

                  <p>
                    📅 {new Date(job.startsAt).toLocaleString(
                      'pt-PT',
                      { timeZone: 'Europe/Lisbon' }
                    )}
                  </p>

                  <p>⏱ {job.durationMin} minutos</p>

                  <strong className="job-price">
                    {(job.priceCents / 100).toLocaleString(
                      'pt-PT',
                      {
                        style: 'currency',
                        currency: 'EUR',
                      }
                    )}
                  </strong>
                </div>

                {/* Botão à direita do cartão */}
                <button
                  className="accept-button"
                  type="button"
                  onClick={() => handleAccept(job.id)}
                >
                  Aceitar pedido
                </button>

              </article>
            ))}
          </>
        )}
      </section>
    </main>
  )
}

export default App
