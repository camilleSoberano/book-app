

export async function fetchBooks() {
    const HEADERS = {
        'X-RapidAPI-Key': 'e345570803msh1314f83b5c871a2p10dc6djsn1c0e4de5cb05',
        'X-RapidAPI-Host': 'goodreads-books.p.rapidapi.com'
      }

    const response = await fetch('https://goodreads-books.p.rapidapi.com/search?page=1', 
    {headers: HEADERS})

    const result = await response.json();
    return result;
}