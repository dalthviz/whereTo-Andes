//Muy bueno que hayan creado archivos independeintes para la gestion de las diferentes colecciones
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Historias = new Mongo.Collection('historias', {idGeneration: 'MONGO'});

Historias.schema = new SimpleSchema({
    nombre: { type: String },
    fecha: { type: Date },
    usuario: { type: String },
    pasos: { type: [Object], optional: true }
});

//Historias.attachSchema(Historias.schema);

/*
if (Meteor.isServer) {
  Meteor.publish('resultados', function resultadosPublication() {
    return resultados.find();
  });
}
*/

Meteor.methods({
    'historias.insert'(historia) {

        // Verificacion de logeo y rol
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        return Historias.insert(historia);
    },
    'historias.remove'(historiaId) {
        if (!Meteor.user()) {
            throw new Meteor.Error('not-authorized');
        }
        Historias.remove(historiaId);
    },

});
