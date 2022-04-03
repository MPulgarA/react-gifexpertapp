export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=hSXJPvkrQZ2MBl21MHgqjoRc9XKAy3An`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            image: img.images?.downsized_medium.url
        }
    })

    // Regresa una promesa con la colección de las imagenes
    return gifs;
}