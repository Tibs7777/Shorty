import React, { useRef, useEffect } from 'react'
import './ShortenedLink.scss'
import Button from '../UI/Button/Button'
const ShortenedLink = props => {


    const copy = useRef(null)

    useEffect(() => {
        console.log('rendering')
    })

    const copyHandler = () => {
        copy.current.select()
        document.execCommand('copy')
        let newLinks = [...props.links]
        newLinks = newLinks.map(link => {
            if(link.hashid === props.id) {
                return {
                    ...link,
                    copied: true
                }
            } else {
                return {
                    ...link,
                    copied: false
                }
            }
        })
        props.setLinks(newLinks)
    }


    let button = <Button size="link" clickHandler={copyHandler}>Copy</Button>
    if(props.copied) {
        button = <Button size="link" copied={props.copied} clickHandler={copyHandler}>Copied!</Button>
    }


    return(
        <div className="ShortenedLink">
            <div className="ShortenedLink__links">
                <div className="ShortenedLink__close" onClick={props.deleteLink}></div>
                <span className="ShortenedLink__long">{props.original}</span>
                <span className="ShortenedLink__short">{props.shortened}</span>
                <textarea className="ShortenedLink__copy" readOnly value={props.shortened} ref={copy}></textarea>
            </div>
            {button}
        </div>
    )

}

export default React.memo(ShortenedLink, (prevProps, nextProps) => {
    return prevProps.copied === nextProps.copied && prevProps.links.length === nextProps.links.length
})