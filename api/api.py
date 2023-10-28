import pyodbc
from flask import Flask
from json import loads

connection=("DRIVER={SQL Server};"
            "Server=.;"
            "DATABASE=PRUEBAS;"
            "Trusted_Connection=yes;")
app=Flask(__name__)
conn=pyodbc.connect(connection)

@app.route('/buscarNombre/<parametros>', methods=['GET'])
def getNombres(parametros):
    cursor= conn.cursor()
    cursor.execute(f"""dbo.ObtenerPedido {parametros}""")

    return loads(cursor.fetchone()[0])

if __name__=="__main__":
    app.run(port=5000, host="0.0.0.0", debug=True)