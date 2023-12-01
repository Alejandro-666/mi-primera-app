import { useState } from 'react';
import './index.css'
export function TwitterFollowCard( {userName = 'unkanow', name, lsFollowing}){
    const [isFollowing, setIsFollowing] = useState(false)

    const imgsrc = `https://unavatar.io/${userName}`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-card-button is-Following' : 'tw-card-button' 

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    return(
        <article className='tw-card'>
            <header className='tw-card-header'>
                <img className='tw-card-foto' src={imgsrc} alt="Imagen del avatar"/>
                <div className='tw-card-info'>
                    <strong>{name}</strong>
                    <span className='tw-card-infoUser'>@{userName}</span>
                </div>
            </header>
            
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
                
            </aside>
        </article>
    )
}