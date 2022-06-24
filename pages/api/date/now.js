export default function New(req, res){
    const date = new Date()
    const format = date.toString();

    res.json({now: format})
}