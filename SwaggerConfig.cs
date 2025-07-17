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
                        c.OperationFilter<TagByAttributeFilter>();
                        c.OperationFilter<Swashbuckle.Examples.ExamplesOperationFilter>();
                    })
                .EnableSwaggerUi(c =>
                    {
                        c.InjectJavaScript(thisAssembly, "YourApi.App_Start.swagger-custom.js");
                    });
        }
    }

    [AttributeUsage(AttributeTargets.Method, AllowMultiple = false)]
    public class SwaggerTagAttribute : Attribute
    {
        public string Tag { get; }
        public SwaggerTagAttribute(string tag)
        {
            Tag = tag;
        }
    }

    public class TagByAttributeFilter : IOperationFilter
    {
        public void Apply(Operation operation, SchemaRegistry schemaRegistry, ApiDescription apiDescription)
        {
            var attr = apiDescription.ActionDescriptor.GetCustomAttributes<SwaggerTagAttribute>();
            if (attr != null && attr.Any())
            {
                operation.tags = new List<string> { attr.First().Tag };
            }
        }
    }

     //[SwaggerTag("TEST TAG 1")]
     //[SwaggerTag("TEST TAG 2")]
}
