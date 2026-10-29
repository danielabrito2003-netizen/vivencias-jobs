// Define a estrutura de um pedido de serviço. 
// Cada pedido deve ter todos estes campos. 
export type JobRequest = {
    id: string
    service: string
    city: string
    startsAt: string
    durationMin: number
    priceCents: number
    urgent: boolean
}