import Component from '@ember/component';

export default Component.extend({

    store: Ember.inject.service(),

    actions:{

        add_new_task:function(){
            let that=this;
            Ember.$.ajax({
                url: 'http://test.nidan.co.il/buymetest/public/index.php/api/add_new_task',
                type: "POST",
                data: {
                task_name: this.get('task_name'),
                    }
        }).then(function(resp){
                that.set('task_name','')
                location.reload();

            }).catch(function(error){
                // handle errors here
            });

           /* this.get('store').query('task', {
                filter: {
                    id: '5'
                }
            }).then(function(peters) {
                console.log(peters)
            });*/
        }
    }
});
