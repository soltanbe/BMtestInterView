import DS from 'ember-data';

export default DS.Model.extend({
    task_name:DS.attr('string'),
    status:DS.attr('string'),
    isDeleted:DS.attr('string'),
    update_date:DS.attr('string'),
    added_date:DS.attr('string'),


});
