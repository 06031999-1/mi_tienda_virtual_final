// --- Clase Base: Producto ---
class Producto {
    #id;
    #nombre;
    #precio;
    #categoria;

    constructor(id, nombre, precio, categoria) {
        this.#id = id;
        this.#nombre = nombre;
        this.#precio = precio;
        this.#categoria = categoria;
    }

    getId() { return this.#id; }
    getNombre() { return this.#nombre; }
    getPrecio() { return this.#precio; }
    getCategoria() { return this.#categoria; }

    calcularImpuesto() {
        return this.#precio * 0.10; // Impuesto base del 10%
    }

    mostrarInformacion() {
        const impuesto = this.calcularImpuesto();
        const precioFinal = this.#precio + impuesto;
        return `
            <h2>${this.#nombre}</h2>
            <p>ID: ${this.#id}</p>
            <p>Precio: $${this.#precio.toFixed(2)}</p>
            <p class="categoria">Categoría: ${this.#categoria}</p>
            <p class="impuesto">Impuesto (10%): $${impuesto.toFixed(2)}</p>
            <p>Precio Final: $${precioFinal.toFixed(2)}</p>
        `;
    }
}

// --- Clase Electrónico ---
class Electronico extends Producto {
    #marca;
    #modelo;

    constructor(id, nombre, precio, marca, modelo) {
        super(id, nombre, precio, "Electrónicos");
        this.#marca = marca;
        this.#modelo = modelo;
    }

    calcularImpuesto() {
        return this.getPrecio() * 0.15; // 15% de impuesto
    }

    mostrarInformacion() {
        const impuesto = this.calcularImpuesto();
        const precioFinal = this.getPrecio() + impuesto;
        return `
            <h2>${this.getNombre()}</h2>
            <p>ID: ${this.getId()}</p>
            <p>Precio: $${this.getPrecio().toFixed(2)}</p>
            <p class="categoria">Categoría: ${this.getCategoria()}</p>
            <p class="impuesto">Impuesto (15%): $${impuesto.toFixed(2)}</p>
            <p>Precio Final: $${precioFinal.toFixed(2)}</p>
            <p>Marca: ${this.#marca}</p>
            <p>Modelo: ${this.#modelo}</p>
        `;
    }
}

// --- Clase Ropa ---
class Ropa extends Producto {
    #talla;
    #material;

    constructor(id, nombre, precio, talla, material) {
        super(id, nombre, precio, "Ropa");
        this.#talla = talla;
        this.#material = material;
    }

    calcularImpuesto() {
        return this.getPrecio() * 0.08; // 8% de impuesto
    }

    mostrarInformacion() {
        const impuesto = this.calcularImpuesto();
        const precioFinal = this.getPrecio() + impuesto;
        return `
            <h2>${this.getNombre()}</h2>
            <p>ID: ${this.getId()}</p>
            <p>Precio: $${this.getPrecio().toFixed(2)}</p>
            <p class="categoria">Categoría: ${this.getCategoria()}</p>
            <p class="impuesto">Impuesto (8%): $${impuesto.toFixed(2)}</p>
            <p>Precio Final: $${precioFinal.toFixed(2)}</p>
            <p>Talla: ${this.#talla}</p>
            <p>Material: ${this.#material}</p>
        `;
    }
}

// --- Clase Alimento ---
class Alimento extends Producto {
    #fechaCaducidad;
    #esOrganico;

    constructor(id, nombre, precio, fechaCaducidad, esOrganico) {
        super(id, nombre, precio, "Alimentos");
        this.#fechaCaducidad = fechaCaducidad;
        this.#esOrganico = esOrganico;
    }

    calcularImpuesto() {
        return this.#esOrganico ? 0 : this.getPrecio() * 0.05;
    }

    mostrarInformacion() {
        const impuesto = this.calcularImpuesto();
        const precioFinal = this.getPrecio() + impuesto;
        return `
            <h2>${this.getNombre()}</h2>
            <p>ID: ${this.getId()}</p>
            <p>Precio: $${this.getPrecio().toFixed(2)}</p>
            <p class="categoria">Categoría: ${this.getCategoria()}</p>
            <p class="impuesto">Impuesto (5% o 0%): $${impuesto.toFixed(2)}</p>
            <p>Precio Final: $${precioFinal.toFixed(2)}</p>
            <p>Fecha de Caducidad: ${this.#fechaCaducidad}</p>
            <p>Orgánico: ${this.#esOrganico ? "Sí" : "No"}</p>
        `;
    }
}

// --- Mostrar los productos ---
const productosTienda = [
    new Electronico(101, "Smartphone X", 800, "TechBrand", "X-Pro"),
    new Ropa(201, "Camiseta Algodón", 25, "M", "Algodón"),
    new Alimento(301, "Manzanas Orgánicas", 3.50, "2025-07-25", true),
    new Electronico(102, "Auriculares Bluetooth", 99.99, "AudioPro", "HP-200"),
    new Ropa(202, "Jeans Slim Fit", 59.99, "L", "Mezclilla"),
    new Alimento(302, "Pan Integral", 4.20, "2025-07-20", false)
];

const contenedor = document.getElementById("productos-container");

productosTienda.forEach(producto => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("producto-card");
    tarjeta.innerHTML = producto.mostrarInformacion();
    contenedor.appendChild(tarjeta);
});
