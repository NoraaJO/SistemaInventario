CREATE PROCEDURE ConsultarArticuloPorTipo
    @id_TipoArticulo INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT A.nombre, T.nombre as TipoArticulo, A.cantidad
    FROM Articulo A
    INNER JOIN TipoArticulo T ON A.id_TipoArticulo = T.id_TipoArticulo
    WHERE A.id_TipoArticulo = @id_TipoArticulo;
END;
