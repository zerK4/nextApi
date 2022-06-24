import data from './data.json'
export default function New(req, res){
    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate", "Access-Control-Allow-Origin", "*" );
    res.json(data)
}
