using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Timely.Models
{
    public class ProjectContext : DbContext
    {
        public ProjectContext(DbContextOptions<ProjectContext> options)
            : base(options)
        { }

        public DbSet<Project> Projects { get; set; }
    }

    public class Project
    {
        public int? ProjectId { get; set; }
        public string Name { get; set; }
        public string Note { get; set; }
        public string Tag { get; set; }
        
    }
    
}