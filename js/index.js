let accion = 0; 

let personas = [
    {
        id: "2248469",
        nombres:"Esteban",
        apellidos:"Quito Benabides",
        edad:"32",
        telefono:"975495644",
        correo:"i2248469@continental.edu.pe",
        dni:"77545425"
    },
    {
        id: "2222256",
        nombres:"Zoyla Linda",
        apellidos:"Vaca Gomez",
        edad:"23",
        telefono:"955461548",
        correo:"i2222256@continental.edu.pe",
        dni:"7858456"
    },
    {
        id: "2226978",
        nombres:"Elsa",
        apellidos:"Capunta Fina",
        edad:"21",
        telefono:"954861844",
        correo:"i2226978@continental.edu.pe",
        dni:"74845952"
    },
    {
        id: "2246879",
        nombres:"Armando",
        apellidos:"Paredes de las Casas",
        edad:"34",
        telefono:"945784684",
        correo:"i2246879@continental.edu.pe",
        dni:"78486455"
    },
]


let filaTabla =
    `<tr>
    <td>##contador##</td>
    <td>##CODIGO##</td>
    <td>##NOMBRES##</td>
    <td>##APELLIDOS##</td>
    <td>##EDAD##</td>
    <td>##TELEFONO##</td>
    <td>##CORREO##</td>
    <td>##DNI##</td>
    <td>
        <button onclick="EditarItem(##btnEditarElemento##)" class="btn btn-sm btn-primary">
            <i class="fas fa-edit"></i>
        </button>
        <button onclick="ElimarItem(##btnEliminarElemento##)" class="btn btn-sm btn-danger">
            <i class="fas fa-trash"></i>
        </button>
    </td>
</tr>`;


$(document).ready(function () {
    mostarPersonas();
});


function Guardar() {
    debugger;
    let idCodigo = $("#idCodigo").val();
    let nombres = $("#nombres").val();
    let apellidos = $("#apellidos").val();
    let edad = $("#edad").val();
    let telefono = $("#telefono").val();
    let correo = $("#correo").val();
    let dni = $("#dni").val();

    let valuesForm = {};
    valuesForm.id = idCodigo;
    valuesForm.nombres = nombres;
    valuesForm.apellidos = apellidos;
    valuesForm.edad = edad;
    valuesForm.telefono = telefono;
    valuesForm.correo = correo;
    valuesForm.dni = dni;


    if (accion == 1) {
        debugger;
        personas.push(valuesForm);                                        
        mostarPersonas();
    }
    else if (accion == 2) {
        actualizarRegistro(valuesForm);
    }
}

function actualizarRegistro(persona) {


    personas.forEach(x => {

        if (x.id == persona.id) {
            x.id = persona.id;
            x.nombres = persona.nombres;
            x.apellidos = persona.apellidos;
            x.edad = persona.edad;
            x.telefono = persona.telefono;
            x.correo = persona.correo;
            x.dni = persona.dni;
        }
    });
    mostarPersonas();
}


function nuevoItem() {
    accion = 1;
    $("#idCodigo").val("");
    $("#nombres").val("");
    $("#apellidos").val("");
    $("#edad").val("");
    $("#telefono").val("");
    $("#correo").val("");
    $("#dni").val("");
}


function EditarItem(idpersona) {
    accion = 2;

    personas.forEach(x => {
        if (x.id == idpersona) {
            $("#idCodigo").val(x.id);
            $("#nombres").val(x.nombres);
            $("#apellidos").val(x.apellidos);
            $("#edad").val(x.edad);
            $("#telefono").val(x.telefono);
            $("#correo").val(x.correo);
            $("#dni").val(x.dni);
        }
    });

}

function ElimarItem(idpersona) {

    personas.forEach((x, i) => {

        if (x.id == idpersona) {
            console.log("encontre el persona a eliminar ==> ", x.id, i);

            personas.splice(i, 1);
        }
    });

    console.log("personas restantes ==> ", personas);

    mostarPersonas();


}

function mostarPersonas() {

    let nuevoContenido = "";
    personas.forEach((x, i) => {
        let nuevaFilaTable = filaTabla;
        nuevaFilaTable = nuevaFilaTable.replace("##contador##", i + 1);
        nuevaFilaTable = nuevaFilaTable.replace("##CODIGO##", x.id);
        nuevaFilaTable = nuevaFilaTable.replace("##NOMBRES##", x.nombres);
        nuevaFilaTable = nuevaFilaTable.replace("##APELLIDOS##", x.apellidos);
        nuevaFilaTable = nuevaFilaTable.replace("##EDAD##", x.edad);
        nuevaFilaTable = nuevaFilaTable.replace("##TELEFONO##", x.telefono);
        nuevaFilaTable = nuevaFilaTable.replace("##CORREO##", x.correo);
        nuevaFilaTable = nuevaFilaTable.replace("##DNI##", x.dni);
        nuevaFilaTable = nuevaFilaTable.replace("##btnEditarElemento##", x.id);
        nuevaFilaTable = nuevaFilaTable.replace("##btnEliminarElemento##", x.id);
        nuevoContenido = `${nuevoContenido}${nuevaFilaTable}`;
    });
    $("#contenidoTabla").html(nuevoContenido);
}





