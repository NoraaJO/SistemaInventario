import pyodbc
from flask import Flask, request, abort
from json import loads
import datetime

connection=("DRIVER={SQL Server};"
            "Server=ERRON\SQLEXPRESS;"
            "DATABASE=Inventario;"
            "Trusted_Connection=yes;")
app=Flask(__name__)
conn=pyodbc.connect(connection)

@app.route('/iniciarSesion', methods=['GET'])
def iniciarSesion():
    username = request.json['username']
    password = request.json['password']
    respond = "-1"
    if username and password:        
        cursor= conn.cursor()
        cursor.execute("{CALL dbo.IniciarSesion (?, ?, ?)}", username, password, respond)
        respond = cursor.fetchval()
        return {'Result': respond}
    else:
        return {'Result': -1}

@app.route('/obtenerArticulo', methods=['GET'])
def getArticulos():
    cursor= conn.cursor()
    cursor.execute("{CALL dbo.ObtenerArticulos}")
    jsonObject = loads(cursor.fetchone()[0])
    return jsonObject
@app.route('/obtenerPedidos', methods=['GET'])
def getPedidos():
    cursor= conn.cursor()
    cursor.execute("{CALL dbo.ObtenerPedidos}")
    jsonObject = loads(cursor.fetchone()[0])
    return jsonObject
@app.route('/agregarArticulo', methods=['POST'])
def agregarArticulo():
    nombre = request.json['nombre']
    precio = request.json['precio']
    cantidad = request.json['cantidad']
    tipoArt = request.json['TipoArt']
    respond = -1
    if nombre and precio and cantidad and tipoArt:
        cursor = conn.cursor()
        cursor.execute("{CALL dbo.AgregarArticulo (?, ?, ?, ?)}", nombre, precio, cantidad, tipoArt)
        respond = cursor.fetchval()
        cursor.commit() 
        cursor.close()
        return {'Result': respond}
    return {'Result': -1}
@app.route('/ConsNombrArt/<nombre>', methods=['GET'])
def ConsultArtNombre(nombre):
    if nombre:
        cursor = conn.cursor()
        cursor.execute(f"EXEC dbo.ConsultarArticuloPorNombre '{nombre}'")
        return loads(cursor.fetchone()[0])
    return {'Result': -1}

@app.route('/AgregarPedido', methods=['POST'])
def AgregarPedido():
    descrip = request.json['descripcion']
    nombreClien= request.json['cliente']
    nombreEmpleado = request.json['empleado']
    pagoTotal = request.json['pago']
    Estado= request.json['estado']
    if descrip and nombreClien and nombreEmpleado and pagoTotal and Estado:
        cursor = conn.cursor()
        cursor.execute("{CALL dbo.AgregarPedido(?, ?, ?, ?, ?)}", descrip, nombreClien, nombreEmpleado, pagoTotal, Estado)
        respond = cursor.fetchval()
        cursor.commit() 
        cursor.close()
        return {'Result': respond}
    else:
        return {'Result': -1}

@app.route('/consultaArtTipo/<nombre>', methods=['GET'])
def obtPediEmpleado(nombre):
    if nombre:
        cursor = conn.cursor()
        query =f"""EXEC dbo.ConsultarArticuloPorTipo '{nombre}'"""
        cursor.execute(query)
        return loads(cursor.fetchone()[0])
    return {'response': -1}

@app.route('/consultaPedidoEstado/<nombre>', methods=['GET'])
def getPedidoEstado(nombre):
    if nombre:
        cursor = conn.cursor()
        query =f"""EXEC dbo.ConsltPedidosPorEstado '{nombre}'"""
        cursor.execute(query)
        return loads(cursor.fetchone()[0])
    return {'Result': -1}
@app.route('/ConsultPedidoCliente/<nombre>', methods=['GET'])
def getPedidosCliente(nombre):
    if nombre:
        cursor = conn.cursor()
        query =f"""EXEC dbo.ConsultarPedidosPorCliente '{nombre}'"""
        cursor.execute(query)
        return loads(cursor.fetchone()[0]) 
    return {'Result': -1}
@app.route('/consultPedidosEmpleado/<nombre>', methods=['GET'])
def getPedidosEmpleados(nombre):
    try:
        if nombre:
            cursor = conn.cursor()
            query =f"""EXEC dbo.CosultPediNombrEmplea '{nombre}'"""
            cursor.execute(query)
            return loads(cursor.fetchone()[0])
        return {'Result': -1}
    except:
        cursor.close()
        return {'Result': -1}
@app.route('/reporte', methods=['GET'])
def reporteInventario():
    cursor = conn.cursor()
    query =f"""dbo.ConsultarArticulosPorCantidad"""
    cursor.execute(query)
    return loads(cursor.fetchone()[0])
@app.route('/actualizarArticulo', methods=['PUT'])
def actualizarArticulo():
    idArt = request.json['id'] 
    nombre = request.json['nombre']
    precio = request.json['precio']
    cantidad = request.json['cantidad']
    if nombre and precio and cantidad and idArt:
        cursor = conn.cursor()
        #query =f"""EXEC dbo.ActualizarArticuloPorNombre {idArt}, '{nombre}', {precio}, {cantidad}"""
        cursor.execute("{CALL dbo.ActualizarArticuloPorNombre (?, ?, ?, ? )}", idArt, nombre, precio, cantidad)
        respond = cursor.fetchval()
        cursor.commit()
        return {'Result': respond}
    return {'Result': -1}
@app.route('/actualizarPedido', methods=['PUT'])
def actualizarPedido():
    idPed = request.json['id']
    estado = request.json['estado']
    descrip = request.json['descripcion']
    cliente = request.json['cliente']
    pagototal = request.json['pagoTotal']
    if idPed and estado and descrip and cliente:
       cursor = conn.cursor()
       cursor.execute("{CALL dbo.ActualizarPedido (?, ?, ?, ?, ? )}", idPed, estado, descrip, cliente, pagototal)
       respond = cursor.fetchval()
       cursor.commit()
       cursor.close() 
       return {'Result': respond}
    return {'Result': -1}
@app.route('/crearUsuario', methods=['POST'])
def crearUsuario():
    nombre = request.json['nombre']
    apellido = request.json['apellido']
    password = request.json['password']
    username = request.json['username']
    if nombre and apellido and password and username:
       cursor = conn.cursor()
       cursor.execute("{CALL dbo.CrearUsuario (?, ?, ?, ?)}", nombre, apellido, username, password)
       respond = cursor.fetchval()
       cursor.commit()
       cursor.close() 
       return {'Result': respond}
    return {'Result': -1}
if __name__=="__main__":
    app.run(port=5000, host="0.0.0.0", debug=True)
    conn.close()