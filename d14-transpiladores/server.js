"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http, {
    cors: {
        origin: '*'
    }
});
var archivo = require('./Archivo');
var handlebars = require('express-handlebars');
var productos_module = require('./productos');
var router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("hbs", handlebars({
    extname: ".hbs",
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));
app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.static("public"));
var Archivo = archivo.Archivo;
var mensajes = new Archivo("./mensajes.txt");
app.get("/", function (req, res) {
    var productos = productos_module.index();
    res.render("main", {
        productos: productos,
        existenProductos: productos.length > 0
    });
});
app.get("/productos", function (req, res) {
    var productos = productos_module.index();
    res.render("partials/productos", {
        productos: productos,
        existenProductos: productos.length > 0
    });
});
//////////////////// API /////////////////////
router.get("/productos", function (req, res) {
    res.json(productos_module.index());
});
router.get("/productos/:id", function (req, res) {
    res.json(productos_module.show(req.params.id));
});
router.post("/productos", function (req, res) {
    res.json(productos_module.store(req.body));
    io.emit("actualizarProductos", productos_module.index());
});
router.put("/productos/:id", function (req, res) {
    res.json(productos_module.update(req.params.id, req.body));
    io.emit("actualizarProductos", productos_module.index());
});
router["delete"]("/productos/:id", function (req, res) {
    res.json(productos_module.destroy(req.params.id));
    io.emit("actualizarProductos", productos_module.index());
});
app.use('/api', router);
var server = app.listen(8080, function () {
    console.log("Escuchando en el puerto 8080");
});
server.on("error", function (error) { return console.log("Error en el servidor " + error); });
http.listen(8081, function () {
    console.log("Escuchando en el puerto 8081");
});
io.on('connection', function (socket) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                console.log("Usuario conectado");
                _b = (_a = console).log;
                return [4 /*yield*/, mensajes.leer({ show: false })];
            case 1:
                _b.apply(_a, [_f.sent()]);
                _d = (_c = io).emit;
                _e = ["mensajes"];
                return [4 /*yield*/, mensajes.leer({ show: false })];
            case 2:
                _d.apply(_c, _e.concat([_f.sent()]));
                socket.on('enviarMensaje', function (mensaje) { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, _b, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0: return [4 /*yield*/, mensajes.guardar(mensaje)];
                            case 1:
                                _d.sent();
                                console.log("emit");
                                _b = (_a = io).emit;
                                _c = ["mensajes"];
                                return [4 /*yield*/, mensajes.leer({ show: false })];
                            case 2:
                                _b.apply(_a, _c.concat([_d.sent()]));
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
        }
    });
}); });
