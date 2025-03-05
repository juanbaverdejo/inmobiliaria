namespace inmobiliariapi.Models
{
    public class Propiedad
    {
        public int Id { get; set; }
        public string Direccion { get; set; }
        public decimal PrecioAlquiler { get; set; }
        public bool Disponible { get; set; } = true;

        public int PropietarioId { get; set; }
        public Propietario Propietario { get; set; }

        public List<Contrato> Contratos { get; set; }
    }
}
