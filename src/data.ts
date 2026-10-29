
import type { JobRequest } from './types'

// Lista inicial de pedidos fornecidos pela empresa.
// Por enquanto, os dados estão guardados no código.
export const jobs: JobRequest[] = [
  {
    id: '1',
    service: 'Canalização',
    city: 'Porto',
    startsAt: '2026-11-12T10:00:00Z',
    durationMin: 60,
    priceCents: 4500,
    urgent: false,
  },
  {
    id: '2',
    service: 'Eletricidade',
    city: 'Lisboa',
    startsAt: '2026-11-12T14:30:00Z',
    durationMin: 90,
    priceCents: 7000,
    urgent: true,
  },
  {
    id: '3',
    service: 'Pintura',
    city: 'Braga',
    startsAt: '2026-11-13T09:00:00Z',
    durationMin: 240,
    priceCents: 18000,
    urgent: false,
  },
]
