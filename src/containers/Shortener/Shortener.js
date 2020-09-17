import React, { useState, useEffect, useCallback } from 'react'
import Hero from '../../components/Hero/Hero'
import LinkShortener from '../../components/LinkShortener/LinkShortener'
import ShortenedLinksList from '../../components/ShortenedLinksList/ShortenedLinksList'
import Statistics from '../../components/Statistics/Statistics'
import BoostBanner from '../../components/BoostBanner/BoostBanner'


const Shortener = (props) => {

    const [links, setLinks] = useState([])
    const [error, setError] = useState(null)
    const [link, setLink] = useState('')
    const [loading, setLoading] = useState(false)

    // const oldLinks = [
    //     {
    //         original: "https://www.frontendmentor.io",
    //         shortened: "https://rel.ink/k4lKyk"
    //     },
    //     {
    //         original: "https://www.frontendmentor.io",
    //         shortened: "https://rel.ink/k4lKyk"
    //     },
    //     {
    //         original: "https://www.linkedin.com/company/frontend-mentor",
    //         shortened: "https://rel.ink/k4lKyk"
    //     },
    // ]

    useEffect(() => {
        const getLinks = JSON.parse(localStorage.getItem("Links"))
        console.log(getLinks)
        setLinks(getLinks)
    }, [])

   const setLinksLength = (arr) => {
        let newLinks = [...arr]
        if(arr.length > 5) {
            newLinks.pop()
        }
        setLinks(newLinks)
    }


    useEffect(() => {
        const handleBeforeUnload = () => {
            console.log('fired')
            const uncopiedLinks = links.map(link => {
                return {
                    ...link,
                    copied: false
                }
            })
            localStorage.setItem("Links", JSON.stringify(uncopiedLinks))
        }

        window.addEventListener('beforeunload', handleBeforeUnload)
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload)
        }
    }, [links])

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
                setLinksLength([{original: res.url, shortened: `https://rel.ink/${res.hashid}`, hashid: res.hashid, copied: false}, ...links])
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
        console.log(id)
        const newLinks = links.filter(link => link.hashid !== id)
        setLinks(newLinks)
    }, [links, setLinks])




    return(
        <div>
            <Hero />
            <LinkShortener shortenLink={shortenLink} error={error} setError={setError} link={link} setLink={setLink} loading={loading}/>
            <ShortenedLinksList links={links} setLinks={setLinks} deleteLink={deleteLink}/>
            <Statistics />
            <BoostBanner />
        </div>
    )
}

export default Shortener