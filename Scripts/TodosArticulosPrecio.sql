CREATE PROCEDURE ConsultarTodosLosArticulos
AS
BEGIN
    SET NOCOUNT ON;

    SELECT nombre, precio
    FROM Articulo;
END;


