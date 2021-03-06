import {useEffect, useState} from 'react';

export const useHttp = (url) => {
    const [isLoading, setLoading] = useState(false);
    const [fetchedData, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        console.log("Sending HTTP request to: " + url);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch.');
                }
                return response.json();
            })
            .then(data => {
                // console.log(data);
                setData(data);
                setLoading(false);
            })
            .catch(reason => {
                console.log(reason);
                setLoading(false);
            });

        return () => {
            setData(null);
        }
    }, [url]);

    return [fetchedData, isLoading];
}
