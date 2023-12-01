import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App (){
    return(
        <section className='app'>
            <TwitterFollowCard name={"Alejandro Contreras"} />
            <TwitterFollowCard userName={"Pepsi"} name={"Alejandro "} />
            <TwitterFollowCard userName={"Cocacola"} name={"Contreras"} />

        </section>
    )
}