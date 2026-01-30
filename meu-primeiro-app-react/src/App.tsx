import { Dados } from "./components/dados";

export function App () {

    return (
<>
<Dados nome= "Sofia"
sobrenone= "Melo"
cidade= "cataguases"
idade= "16"/>
<Dados+nome=""+sobrenome=""+cidade=""+idade=""/>
</>
    )

}