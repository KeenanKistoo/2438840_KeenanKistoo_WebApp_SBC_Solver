import './InfoHome.css';
import {Link} from 'react-router-dom'

function InfoHome(){

    return(
        <>
            <article className='textbox'>
                <p className='intro-text'>Complete SBCs efficiently without wasting your high rated cards. 
                    Use the Assistant to build teams based on the player 
                    ratings available in your club.
                </p>
                <Link className='link-home' to='/sbc-solver'>Go To Assistant→</Link>
            </article>
        </>
    )
}

export default InfoHome;