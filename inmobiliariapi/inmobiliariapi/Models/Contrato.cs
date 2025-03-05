using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace inmobiliariapi.Models
{
    public class Contrato
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public DateTime FechaInicio { get; set; }

        [Required]
        public DateTime FechaFin { get; set; }

        [Required]
        public decimal MontoMensual { get; set; }

        public bool Activo { get; set; } = true;

        // Relación con Inquilino
        [ForeignKey("Inquilino")]
        public int InquilinoId { get; set; }
        public Inquilino Inquilino { get; set; }

        // Relación con Propiedad
        [ForeignKey("Propiedad")]
        public int PropiedadId { get; set; }
        public Propiedad Propiedad { get; set; }
    }
}
