import Component from '@ember/component';

export default Component.extend({

    init() {

        this._super(...arguments);
        this.getsummaryData(this);
    },
    getsummaryData:function(that){

        Ember.$.ajax({
            url: 'http://test.nidan.co.il/buymetest/public/index.php/api/getSummay',
            type: "get",
            data: {

            }
        }).then(function(resp){
            let summary=resp.summary;
            that.set('completed',summary[0].completed)
            that.set('uncompleted',summary[0].uncompleted)
            that.set('total',summary[0].total)
            that.set('deleted',summary[0].deleted)
        }).catch(function(error){
            // handle errors here
        });
    },


});
