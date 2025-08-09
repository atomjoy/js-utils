export function addSchema(url = 'https://api.example.com/recipes/123') {
    if(url) {
        fetch(url).then((res) => res.text()).then((schema) => {
            const script = document.createElement('script');
            script.setAttribute('type', 'application/ld+json');
            script.textContent = schema;
            document.head.appendChild(script);
        }).catch((err) => {
            console.log('Schema url error', url, err);
        })
    }
}
