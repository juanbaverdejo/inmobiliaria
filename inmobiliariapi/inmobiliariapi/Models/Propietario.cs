namespace inmobiliariapi.Models
{
    public class Propietario
    {
        public int Id { get; set; }
        public string Nombre {  get; set; }
        public string DNI {  get; set; }
        public string Telefono { get; set; }
        public List<Propiedad> Propiedades { get; set; }
        
    }
}
