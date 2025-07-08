using YourApi;
using Swashbuckle.Application;
using Swashbuckle.Swagger;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;
using WebActivatorEx;

[assembly: PreApplicationStartMethod(typeof(SwaggerConfig), "Register")]

namespace YourApi
{
    public class SwaggerConfig
    {
        public static void Register()
        {
            var thisAssembly = typeof(SwaggerConfig).Assembly;

            GlobalConfiguration.Configuration
                .EnableSwagger(c =>
                    {
                        c.SingleApiVersion("v1", "YourAPI");
                        c.SchemaId(type => type.FullName);
                        c.OperationFilter<Swashbuckle.Examples.ExamplesOperationFilter>();
                    })
                .EnableSwaggerUi(c =>
                    {
                        c.InjectJavaScript(thisAssembly, "YourApi.App_Start.swagger-custom.js");
                    });
        }
    }
}
