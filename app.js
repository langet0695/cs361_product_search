// import cors from "cors";
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 3001;

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
    const source = req.query['source']
    const item = req.query['item']

    const sources = {
        'amazon':`https://www.amazon.com/s?k=${item}`,
        'kroger':`https://www.kroger.com/search?query=${item}&searchType=default_search&fulfillment=all`,
        'walmart':`https://www.walmart.com/search?q=${item}`,
        'target':`https://www.target.com/s?searchTerm=${item}`,
        'albertsons':`https://www.albertsons.com/shop/search-results.html?q=${item}`,
        'loblaw':`https://www.loblaws.ca/search?search-bar=${item}`,
        'publix':`https://www.publix.com/search?searchTerm=${item}&srt=products`,
        'costco':`https://www.costco.com/CatalogSearch?dept=All&keyword=${item}`

    }
    if(source in sources){
        res.send(
            {'source': source,
             'item': item,
             'link': sources[source]}
             )
    }
    else{
        res.send('The store you have provided cannot be searched. Please try again with a differnt store.')
    }


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})