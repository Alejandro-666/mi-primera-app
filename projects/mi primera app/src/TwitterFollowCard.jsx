import './index.css'
export function TwitterFollowCard( {userName, name, lsFollowing}){
    const imgsrc = 'https://unavatar.io/${userName}'
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
                <button className='tw-card-button'>Seguir</button>
            </aside>
        </article>
    )
}