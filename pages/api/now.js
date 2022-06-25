import data from './data.json'
export default function New(req, res){
    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
    res.setHeader("access-control-allow-origin", "*")
    res.setHeader("access-control-allow-headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.json(data)
}
