import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

type GetRoomsAPIResponse = Array<{
    id: string,
    name: string
}>

export function CreateRoom() {
    const { data, isLoading } = useQuery({
        queryKey: ['get-rooms'], // Identificador unico para essa chamada http
        queryFn: async () => { // Qual função vou chamar para esse requisição http
            const response = await fetch('http://localhost:3333/rooms')

            const result: GetRoomsAPIResponse = await response.json()

            return result;
        }
    })


    return (
        <div>
            <div>Criar sala</div>

            {isLoading && <p>Carregando...</p>}

            <div className='flex flex-col gap-1'>
                {data?.map((room) => {
                    return (
                        <Link key={room.id} to={`/room/${room.id}`}>
                            {room.name}
                        </Link>
                    )
                })}
            </div>

            <Link to="/room">Acessar sala</Link>
        </div>
    )
}