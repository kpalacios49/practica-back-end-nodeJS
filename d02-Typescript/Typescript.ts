
const operacion = (a: number, b: number, ope: string)=>{

    if (ope == "suma") return import(`./operaciones/suma`).then( response => new response.Suma(a, b).resultado());
    if (ope == "resta") return import(`./operaciones/resta`).then( response => new response.Resta(a, b).resultado());

}; 

const operaciones = async ()=>{
    console.log("/----------------------------------------------------/")
    console.log(`\t Resultado de la suma de 5 + 5 =  ${await operacion(5,5,"suma")}`);
    console.log(`\t Resultado de la suma de 5 - 5 =  ${await operacion(5,5,"resta")}`);
    console.log(`\t Resultado de la suma de 8 + 5 =  ${await operacion(8,5,"suma")}`);
    console.log(`\t Resultado de la suma de 8 - 15 =  ${await operacion(8,15,"resta")}`);
    console.log("/----------------------------------------------------/")

}; 

operaciones();
