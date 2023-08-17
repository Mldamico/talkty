using API.services;
using Application;
using Domain;

namespace API.Extensions;

public static class IdentityServiceExtensions
{
    public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddIdentityCore<AppUser>(opt => { opt.Password.RequireNonAlphanumeric = false; })
            .AddEntityFrameworkStores<DataContext>();

        services.AddAuthentication();
        services.AddScoped<TokenService>();

        return services;
    }
}