using Autofac;
using FluentValidation;
using MongoDbNotes.Models;
using MongoDbNotes.Models.Entities;
using MongoDbNotes.Models.Validators;
using Norm;

namespace MongoDbNotes {
    public class ContainerRegistrations : Module {
        protected override void Load(ContainerBuilder builder) {
            builder.Register(c => MvcApplication.ConnectMongoDb()).InstancePerLifetimeScope();

            // Register validators
            AssemblyScanner
                .FindValidatorsInAssemblyContaining<NoteValidator>()
                .ForEach(result => 
                    builder.RegisterType(result.ValidatorType)
                        .As(result.InterfaceType)
                        .SingleInstance()
                );
        }
    }
}