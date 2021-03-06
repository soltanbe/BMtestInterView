import Route from '@ember/routing/route';
let that=null;
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
   init(){


   },
    model(){
        this.that=this;
        return Ember.RSVP.hash({
            tasks:this.store.findAll('task'),
        })

    },
    actions:{
        editTask(id,task_name,status){

            swal({
                title: 'עריכה משימה '+'<b>'+task_name+'</b>'  ,
                html: this.buildHtmlForm(id,task_name,status),
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'עדכן',
                cancelButtonText: 'סגור',
                onOpen:function(){
                    document.getElementById("status").value=status==true?1:0;
                }
            }).then((result) => {
                if (result.value) {
                    this.doActionInServer(id,'edit',document.getElementById("task_name").value,document.getElementById("status").value)
                    swal(
                        'עריכה',
                        'המשימה עודכנה בהצלחה',
                        'success'
                    ).then(function(){
                        //יש דרך אחרת לטעון את המודל שוב אבל נגמר הזמן לא הספקתי כרגע שם את זה על רגיל עם טעינת דף ואני אחקור את הנושא בנמשך לצורך לצידה ושיפור
                        location.reload();
                        //this.get('target.router').refresh();

                    })

                }
            })
        },
        deleteTask(id){
            swal({
                title: 'האם אתה בטוח?',
                text: "מחיקת משימה",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'כן',
                cancelButtonText: 'לא',
            }).then((result) => {
                if (result.value) {
                    this.doActionInServer(id,'delete');
                    swal(
                        'מחיקה',
                        'המשימה נמחקה בהצלה',
                        'success'
                    ).then(function(){
                        //יש דרך אחרת לטעון את המודל שוב אבל נגמר הזמן לא הספקתי כרגע שם את זה על רגיל עם טעינת דף ואני אחקור את הנושא בנמשך לצורך לצידה ושיפור
                        location.reload();
                        //this.get('target.router').refresh();

                    })

                }
            })
        }
    },
    doActionInServer(id,action,task_name,status){
       let dataSend={
           action:action,
           id:id,
       }
       if(typeof task_name !='undefined'){
            dataSend.task_name= task_name;
        }
        if(typeof status !='undefined'){
            dataSend.status= status;
        }
        console.log(dataSend)
        Ember.$.ajax({
            url: 'http://localhost/api/'+action,
            type: "POST",
            data: dataSend
        }).then(function(resp){


        }).catch(function(error){
            // handle errors here
        });
    },
    convertToDate:function(d){
        return moment(d).format("DD/MM/YY HH:mm:ss")
    },
    buildHtmlForm:function(id,task_name,status){
       let html='<hr><form style="text-align: right">';
        html+='' +
            '<div class="form-group row">' +
            '<label class="col-md-4 ">שם</label>' +
            '<div class="col-md-8 ">' +
            '<input type="text" class="form-control" id="task_name" value="'+task_name+'">' +
            '</div>' +
            '</div>' +
            '<div class="form-group row">' +
            '<label class="col-md-4">סטאטוס</label>' +
            '<div class="col-md-8">' +
            '<select class="form-control" id="status">' +
            '<option value="1">הושלם</option>' +
            '<option value="0">לא הושלם</option>' +
            '</select>'+
            '</div>'+
            '</div>';
        html+='<form>';

        return html;
    }


});
