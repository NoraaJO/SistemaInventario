CREATE PROCEDURE ActualizarArticuloPorNombre
    @nombre NVARCHAR(128),
    @nuevoPrecio FLOAT,
    @nuevaCantidad INT
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE Articulo
    SET cantidad = @nuevaCantidad
    WHERE nombre = @nombre;
END;
