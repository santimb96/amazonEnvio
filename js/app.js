class Envio {
    constructor(num, articulo, fecha) {
        this.num = num;
        this.articulo = articulo.toUpperCase();
        this.fecha = fecha;
        this.pagado = false;
        this.enviado = false;
        this.reparto = false;
        this.recibido = false;
    }

    pagar() {
        this.pagado === false ? (this.pagado = true, alert("Pagado")) : alert("Ya está pagado");
    }

    enviar() {
        if (this.enviado === false && this.pagado === true) {
            alert("Enviado");
            this.enviado = true;
        } else if (this.enviado === true) {
            alert("Ha sido enviado con anterioridad");
        } else {
            alert("No se ha recibido pago");
        }
    }

    repartir() {
        if (this.reparto === false && this.enviado === true) {
            alert("En reparto");
            this.reparto = true;
        } else if (this.reparto === true) {
            alert("Ya está en reparto");
        } else {
            alert("No se ha enviado");
        }
    }

    recibir() {
        if (this.recibido === false && this.reparto === true) {
            alert("Recibido");
            this.recibido = true;
        } else if (this.recibido === true) {
            alert("Ha sido recibido con anterioridad");
        } else {
            alert("No se ha repartido aún");
        }
    }

    mostrarEstadoPedido() {
        return `ID: <b>${this.num}</b><br>
        ARTÍCULO: <b>${this.articulo}</b><br>
        FECHA PEDIDO: <b>${this.fecha}</b><br>
        PAGADO: <b>${this.pagado}</b><br>
        ENVIADO: <b>${this.enviado}</b><br>
        REPARTO: <b>${this.reparto}</b><br>
        ENTREGADO: <b>${this.recibido}</b><br>`;
    }

    testApp() {
        envio1.pagar();
        envio1.enviar();
        envio1.repartir();
        envio1.recibir();

        this.printarHTML();
    }

    printarHTML() {
        let div = document.getElementById("envios");
        div.innerHTML = `${envio1.mostrarEstadoPedido()}`
    }
}

const generarItem = () => {
    envio1 = new Envio("01", "pesa", fecha = new Date());
    envio1.testApp();
}


/*envio1 = new Envio("01", "pesa", fecha = new Date());

envio1.testApp();



let div = document.getElementById("envios");
div.innerHTML = `${envio1.mostrarEstadoPedido()}`*/

/*document.write(`${envio.mostrarEstadoPedido()}`);*/
