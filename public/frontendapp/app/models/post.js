import DS from 'ember-data';

export default DS.Model.extend({
    task_name:DS.attr(),
    status:DS.attr(),
    isDeleted:DS.attr(),
    update_date:DS.attr(),
    added_date:DS.attr(),

});
