import React, { useState, useEffect, useCallback, useReducer } from 'react'
import Hero from '../../components/Hero/Hero'
import LinkShortener from '../../components/LinkShortener/LinkShortener'
import ShortenedLinksList from '../../components/ShortenedLinksList/ShortenedLinksList'
import Statistics from '../../components/Statistics/Statistics'
import BoostBanner from '../../components/BoostBanner/BoostBanner'


const initialState = []

const linkReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_LINK':
            let addedLinks = [...state]
            if(addedLinks.length > 5) {
                addedLinks.pop()
            }
            return [{original: action.original, shortened: action.shortened, hashid: action.hashid, copied: action.copied}, ...addedLinks]
        case 'REMOVE_LINK':
            let removedLinks = [...state]
            return removedLinks.filter(link => link.hashid !== action.id)
        case 'UPDATE_COPIED_LINKS':
            let updatedLinks = [...state]
            return updatedLinks.map(link => {
                if(link.hashid === action.id) {
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
        case 'INIT_LINKS':
            return action.links
        default:
            throw new Error('shouldnt get here')
    }
}


const Shortener = (props) => {


    const [links, dispatch] = useReducer(linkReducer, initialState)


    // const [links, setLinks] = useState([])
    const [error, setError] = useState(null)
    const [link, setLink] = useState('')
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        let getLinks;
        if (!localStorage.getItem("Links") || localStorage.getItem("Links") === "undefined"){
            const getLinks = []
            dispatch({type: 'INIT_LINKS', links: getLinks})
            return
        } else {
            const getLinks = JSON.parse(localStorage.getItem("Links"))
            // setLinks(getLinks)
            dispatch({type: 'INIT_LINKS', links: getLinks})
        }

    }, [])

//    const setLinksLength = (arr) => {
//         let newLinks = [...arr]
//         if(arr.length > 5) {
//             newLinks.pop()
//         }
//         setLinks(newLinks)
//     }



    //Don't like this solution. Updates localstorage more often than below it but also fires on every copy
    useEffect(() => {
        console.log('firing')
        const uncopiedLinks = links.map(link => {
            return {
                ...link,
                copied: false
            }
        })
        window.localStorage.setItem("Links", JSON.stringify(uncopiedLinks))
    }, [links])


    // useEffect(() => {
    //     const handleBeforeUnload = () => {
    //         const uncopiedLinks = links.map(link => {
    //             return {
    //                 ...link,
    //                 copied: false
    //             }
    //         })
    //         localStorage.setItem("Links", JSON.stringify(uncopiedLinks))
    //     }

    //     window.addEventListener('beforeunload', handleBeforeUnload)
    //     return () => {
    //         window.removeEventListener('beforeunload', handleBeforeUnload)
    //     }
    // }, [links])




    const shortenLink = (url) => {
        if(url[0] === "w" && url[1] === "w" && url[2] === "w") {
            url = `https://${url}`
        }
        if(links.find(link => link.original === url)){
            return setError("Link already shortened below")
        }
        setLoading(true)
        const shortenedLink = fetch('https://rel.ink/api/links/', {
            method: 'POST',
            body: JSON.stringify({
                url: url
            }),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(res => res.json())
        .then(res => {
            if (res.hashid) {
                // setLinksLength([{original: res.url, shortened: `https://rel.ink/${res.hashid}`, hashid: res.hashid, copied: false}, ...links])
                dispatch({type: 'ADD_LINK', original: res.url, shortened: `https://rel.ink/${res.hashid}`, hashid: res.hashid, copied: false})
                setLink('')
                setLoading(false)
            } else {
                throw new Error('Please enter a valid url')
            }   
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })

        return shortenedLink
    }

    const deleteLink = useCallback((id) => {
        // const newLinks = links.filter(link => link.hashid !== id)
        // setLinks(newLinks)
        dispatch({type: 'REMOVE_LINK', id: id})
    }, [dispatch])






    return(
        <div>
            <Hero />
            <LinkShortener shortenLink={shortenLink} error={error} setError={setError} link={link.toLowerCase()} setLink={setLink} loading={loading}/>
            <ShortenedLinksList links={links} dispatch={dispatch} deleteLink={deleteLink}/>
            <Statistics />
            <BoostBanner />
        </div>
    )
}

export default Shortener