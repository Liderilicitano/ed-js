class Autobus{
    constructor(capacidad, pasajeros, matricula, listadoConductores){
        this.capacidad =capacidad;
        this.pasajeros=pasajeros;
        this.matricula= matricula;
        this.listadoConductores = listadoConductores;
    }
    getCapacidad(){
        return this.capacidad;
    }
    setCapacidad(nuevaCapacidad){
        this.capacidad = nuevaCapacidad;
    }
    getPasajeros(){
        return this.pasajeros;
    }
    setPasajeros(nuevospasajeros){
        this.pasajeros = nuevospasajeros;
    }
    getMatricula(){
        return this.matricula;
    }
    setMatricula(nuevamatricula){
        this.matricula = nuevamatricula;
    }
    getListadoConductores(){
        return this.listadoConductores;
    }
    setListadoConductores(nuevoconductor){
        this.listadoConductores=nuevoconductor;
    }
    mostrarDatosAutobus(){
        console.log("La capacidad del autobus con matricula " + this.matricula + " es de " + 
        this.capacidad + " lleva " + this.pasajeros + " pasajeros.")
        for (let i = 0; i < this.listadoConductores.length; i++) {            
            console.log(this.listadoConductores[i].mostrarDatosConductor()); 
        }
    }
    subir(numPasajeros){
        if((this.pasajeros+numPasajeros) < this.capacidad){
        this.pasajeros += numPasajeros;
            console.log("Han subido " + numPasajeros + " pasajeros.");
        }else{
            let maximo = this.capacidad - this.pasajeros;
            this.pasajeros += maximo;
            console.log("No pueden subir tantos pasajeros, el autobús no tiene tanta capacidad. Solo pueden subir " + maximo + " pasajeros.");
        }
    }
    bajar(numPasajeros){
        if(numPasajeros < this.pasajeros){
        this.pasajeros-= numPasajeros;
    }else{
        console.log("Solo pueden bajar " + this.pasajeros + " porque no hay mas gente en el autobús");
        this.pasajeros = 0
    }
}
    buscarConductor(licencia){
        for(let i = 0; i<this.listadoConductores.length; i++){
            if(licencia === this.listadoConductores[i].getLicencia()){
                return true;
            }       
        }return false;
    }
}
class Conductor{
    constructor(nombre, licencia){
        this.nombre= nombre;
        this.licencia=licencia;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(nuevonombre){
        this.nombre = nuevonombre;
    }
    getLicencia(){
        return this.licencia;
    }
    setLicencia(nuevalicencia){
        this.licencia = nuevalicencia;
    }
    mostrarDatosConductor(){
        return "Nombre del conductor: " + this.nombre + " Licencia del Conductor: " + this.licencia;
    }
}
function main() {
    //1️ Crear conductores
    let conductor1 = new Conductor("Juan Pérez", "A123");
    let conductor2 = new Conductor("María López", "B456");

    //2️ Crear un autobús con capacidad 50, 10 pasajeros y los conductores creados
    let autobus = new Autobus(50, 10, "XYZ-123", [conductor1, conductor2]);

    //3️ Mostrar datos del autobús y de los conductores
    console.log("Datos iniciales del autobús");
    autobus.mostrarDatosAutobus();

    //4 Subir pasajeros
    console.log("Subir 30 pasajeros");
    autobus.subir(30);
    autobus.mostrarDatosAutobus();

    console.log("Intentar subir 15 pasajeros (excediendo capacidad)");
    autobus.subir(15);  // Debe limitar al máximo permitido
    autobus.mostrarDatosAutobus();

    //5 Bajar pasajeros
    console.log("Bajar 20 pasajeros");
    autobus.bajar(20);
    autobus.mostrarDatosAutobus();

    console.log("Intentar bajar 40 pasajeros (más de los que hay)");
    autobus.bajar(40);
    autobus.mostrarDatosAutobus();

    //6️ Buscar conductores por licencia
    console.log("Buscar conductores");
    console.log("¿Conductor con licencia A123? ->", autobus.buscarConductor("A123"));
    console.log("¿Conductor con licencia C789? ->", autobus.buscarConductor("C789"));
}

main();


