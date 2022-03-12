export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: req.query.codigo,
        nome: `dkahut${codigo}`,
        email: `dkahut.code${codigo}@gdd.com.br`
    })
}