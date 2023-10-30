import pyodbc
from flask import Flask, request, abort
from json import loads

connection=("DRIVER={SQL Server};"
            "Server=.;"
            "DATABASE=Inventario;"
            "Trusted_Connection=yes;")
app=Flask(__name__)
conn=pyodbc.connect(connection)

@app.route('/buscarNombre/<parametros>', methods=['GET'])
def getNombres(parametros):
    cursor= conn.cursor()
    cursor.execute(f"""dbo.ObtenerPedido {parametros}""")

    return loads(cursor.fetchone()[0])
@app.route('/crear/agregarArticulo', methods=['POST'])
def agregarArticulo():
    nombre = request.json['nombre']
    precio = request.json['precio']
    cantidad = request.json['cantidad']
    tipoArt = request.json['TipoArt']
    if nombre and precio and cantidad and tipoArt:
        cursor = conn.cursor()
        query =f"""dbo.AgregarArticulo {nombre}, {precio}, {cantidad}, {tipoArt}"""
        cursor.execute(query)
        return loads(cursor.fetchone()[0])
    return {'response': '400'}
@app.route('/ConsNombrArt/<nombre>', methods=['GET'])
def ConsultArtNombre(nombre):
    if nombre:
        cursor = conn.cursor()
        query =f"""dbo.ConsultarArticuloPorNombre {nombre}"""
        cursor.execute(query)
        return loads(cursor.fetchone()[0])
    return {'response': '400'}

@app.route('/AgregarPedido', methods=['POST'])
def AgregarPedido():
    descrip = request.json['descripcion']
    nombreClien= request.json['cliente']
    nombreEmpleado = request.json['empleado']
    pagoTotal = request.json['pago']
    tipoPedido= request.json['Tipopedido']
    if descrip and nombreClien and nombreEmpleado and pagoTotal and tipoPedido:
        cursor = conn.cursor()
        query =f"""dbo.AgregarPedidoConEmpleado {descrip}, {nombreClien}, {nombreEmpleado}, GETDATE(), {pagoTotal}, {tipoPedido}"""
        cursor.execute(query)
        return loads(cursor.fetchone()[0])
    return {'response': '400'}

@app.route('/conslPedidoNombreEm/<nombre>', methods=['GET'])
def obtPediEmpleado(nombre):
    if nombre:
        cursor = conn.cursor()
        query =f"""dbo.ConsultarPedidosPorEmpleado {nombre}"""
        cursor.execute(query)
        return loads(cursor.fetchone()[0])
    return {'response': '400'}

@app.route('/conslPedidoNombreClient/<nombre>', methods=['GET'])
def obtPediCliente(nombre):
    if nombre:
        cursor = conn.cursor()
        query =f"""dbo.ConsultarPedidosPorCliente {nombre}"""
        cursor.execute(query)
        return loads(cursor.fetchone()[0])
    return {'response': '400'}

@app.route('/reporte', methods=['GET'])
def reporteInventario():
    cursor = conn.cursor()
    query =f"""dbo.ConsultarArticulosPorCantidad"""
    cursor.execute(query)
    return loads(cursor.fetchone()[0])
@app.route('actualizarArticulo', methods=['PUT'])
def actualizarArticulo():
    nombre = request.json['nombre']
    precio = request.json['precio']
    cantidad = request.json['cantidad']
    if nombre and precio and cantidad:
        cursor = conn.cursor()
        query =f"""dbo.ActualizarArticuloPorNombre {nombre}, {precio}, {cantidad}"""
        cursor.execute(query)
        return loads(cursor.fetchone()[0])
    return {'response': '400'}
@app.route('/error', methods=['GET'])
def pruebaE():
    return {'response': '400'}

if __name__=="__main__":
    app.run(port=5000, host="0.0.0.0", debug=True)
    conn.close()