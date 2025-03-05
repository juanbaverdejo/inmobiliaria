using inmobiliariapi.Models;
using Microsoft.EntityFrameworkCore;

namespace inmobiliariapi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<Contrato> Contrato { get; set; }
        public DbSet<Inquilino> Inquilino { get; set; }
        public DbSet<Propiedad> Propiedad { get; set; }
        public DbSet<Propietario> Propietario { get; set; }
    }
}
