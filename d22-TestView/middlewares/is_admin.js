const admin = true

exports.is_admin = (req, res, next) => {

    if(!admin){
        res.status(401).json(
            {
                error: -1,
                descripcion: `ruta ${req.originalUrl} método no autorizado`
    
            }
        )
    }

    next()
}