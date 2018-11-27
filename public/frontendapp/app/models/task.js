import DS from 'ember-data';

export default DS.Model.extend({
    added_date:DS.attr('date'),
    task_name:DS.attr('string'),
    status:DS.attr('boolean'),
    isDeleted:DS.attr('boolean'),
    update_date:DS.attr('date'),


});