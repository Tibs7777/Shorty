import React, { useEffect } from 'react'
import ShortenedLink from '../ShortenedLink/ShortenedLink'
import './ShortenedLinksList.scss'


const ShortenedLinksList = props => {


    useEffect(() => {
        console.log('rendering list')
    })

    return(
        <div className="ShortenedLinksList">
            {
                props.links.map(link => {
                    return <ShortenedLink
                            original={link.original}
                            shortened={link.shortened}
                            links={props.links}
                            setLinks={props.setLinks}
                            id={link.hashid}
                            copied={link.copied}
                            deleteLink={() => props.deleteLink(link.hashid)}
                            key={link.hashid}/>
                })
            }
        </div>
    )

}

export default React.memo(ShortenedLinksList)