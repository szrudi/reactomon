import {useEffect, useState} from 'react';

export const useHttp = (url) => {
    const [isLoading, setLoading] = useState(false);
    const [fetchedData, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        console.log("Sending HTTP request to: " + url);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setData(data);
                setLoading(false);
            });
    }, [url]);

    return [fetchedData, isLoading];
}
