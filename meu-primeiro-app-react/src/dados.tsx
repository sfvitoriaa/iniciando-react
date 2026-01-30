interface IDados {
   nome: string
   idade: string
   cidade: string
   sobrenome: string
}

export function Dados(props: IDados) {
    return (
        <>
            <p>{props.nome}</p>
            <p>{props.idade}</p>
            <p>{props.cidade}</p>
            <p>{props.sobrenome}</p>
        </>
    )
}