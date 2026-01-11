using Microsoft.EntityFrameworkCore;

namespace Socialreaders.Models;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    { }

    public DbSet<ApplicationUser> Users { get; set; }
}