using Application;
using Application.Activities;
using Application.Core;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        
        services.AddDbContext<DataContext>(opt =>
        {
            opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
    
        });
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
        services.AddCors(opt =>
        {
            opt.AddPolicy("CorsPolicy", policy =>
            {
                policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:5173");
            });
        });
        services.AddMediatR(cfg=> cfg.RegisterServicesFromAssemblyContaining<List.Handler>());
        services.AddAutoMapper(typeof(MappingProfiles).Assembly);

        return services;
    }
}