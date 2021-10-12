
module.exports = {
    verifyUsuario: async(req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol == 'Vendedor' || response.rol == 'Almacenero') {
            next();
        } else {
            return res.status(401).send({
                message: 'No autorizado'
            });
        }
    },
    verifyAdministrador: async(req, res, next) => {
        if (!req.user) {
            return res.status(404).send({
                message: 'Debe iniciar sesión'
            });
        }
        if (req.user._doc.rol == 'Administrador') {
            next();
        } else {
            return res.status(401).send({
                message: 'No autorizado'
            });
        }
    },
    verifyAlmacenero: async(req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol == 'Almacenero') {
            next();
        } else {
            return res.status(401).send({
                message: 'No autorizado'
            });
        }
    },
    verifyVendedor: async(req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol == 'Vendedor') {
            next();
        } else {
            return res.status(401).send({
                message: 'No autorizado'
            });
        }
    }
}