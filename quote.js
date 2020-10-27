const simpsonsQuote = () => {

    const url='https://simpsons-quotes-api.herokuapp.com/quotes';

    axios.get(url)
    .then(function(response) {
        return response.data[0];
    })

    .then(function(quote){
        console.log('quote from JSON:', quote)



        const quoteHtml = `
        <p><strong>${quote.character}</strong></p>
        <img src=${quote.image}/>
        <h3>${quote.quote}</h3>
        `;
        document.querySelector('#simpson').innerHTML = quoteHtml;
         
    })

    
}
document.querySelector('#get-quote').addEventListener("click",simpsonsQuote)
simpsonsQuote();