import Route from '@ember/routing/route';
let summary;
export default Route.extend({
   /* getSum: async function(args) {


        let result = await Ember.$.ajax({
            url: 'http://test.nidan.co.il/buymetest/public/index.php/api/getSummay',
            type: "get",
            data: {

            }
        });

        return result;
    },
    getsummaryData:async function(that){

        await Ember.$.ajax({
            url: 'http://test.nidan.co.il/buymetest/public/index.php/api/getSummay',
            type: "get",
            data: {

            }
        }).then(function(resp){

            that.summary=resp;
        }).catch(function(error){
            // handle errors here
        });
    },*/
    model(){

        return Ember.RSVP.hash({
            tasks:this.store.findAll('task'),
        })

    }
});
