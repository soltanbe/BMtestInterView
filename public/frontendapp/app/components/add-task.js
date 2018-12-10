import Component from '@ember/component';

export default Component.extend({

    store: Ember.inject.service(),

    actions:{

        add_new_task:function(){
            let that=this;
            if(this.get('task_name')!=''){
                Ember.$.ajax({
                    url: 'http://localhost/api/add_new_task',
                    type: "POST",
                    data: {
                        task_name: this.get('task_name'),
                    }
                }).then(function(resp){
                    that.set('task_name','')
                    switch (resp.status){
                        case true:
                            location.reload();
                            break;
                        case 'is_exist':
                            swal(
                                'שגיאה',
                                'שם משימה קיים במערכת , נא לבחור אחר',
                                'error'
                            )
                            break;
                        default :
                            swal(
                                'שגיאה',
                                resp.status,
                                'error'
                            )
                            break;
                    }


                }).catch(function(error){
                    // handle errors here
                });
            }else{
                swal(
                    'שגיאה',
                    'שדה הינו חובה',
                    'error'
                )
            }


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
