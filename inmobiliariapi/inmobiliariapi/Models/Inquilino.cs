using System.ComponentModel.DataAnnotations;

namespace inmobiliariapi.Models
{
    public class Inquilino
    {
        [Key]
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string DNI { get; set; }
        public string Telefono { get; set; }
        public List<Contrato> Contratos { get; set; }
    }
}
