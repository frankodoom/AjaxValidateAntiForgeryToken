using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AJaxAnitiForgery.Startup))]
namespace AJaxAnitiForgery
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
