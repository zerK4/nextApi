export default function New(req, res){
    const date = new Date()
    const format = date.toString();

    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

    res.json({now: format})
}
