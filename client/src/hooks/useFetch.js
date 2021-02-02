import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()

        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data....')
                    }
                    return res.json()
                })
                .then((data) => {
                    setData(data)
                    setLoading(false)
                    setError(null)
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch aborted')
                    } else {
                        setLoading(false)
                        setError(err.message)
                    }
                })
        }, 1000)

        //clean up function
        return () => abortController.abort()
    }, [url])
    return { data, loading, error }
}

export default useFetch