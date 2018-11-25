import Route from '@ember/routing/route';
var test={name:'soltan'};
export default Route.extend({
    model(){
        return test;
    }
});
