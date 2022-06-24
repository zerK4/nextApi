import data from './data.json'
export default function New(req, res){
    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.json(data)
}
