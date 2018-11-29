'use strict';



;define("buymeapp/adapters/post", ["exports", "ember-data"], function (exports, _emberData) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONAPIAdapter.extend({
        host: "http://test.nidan.co.il/buymetest/public/index.php/api"
    });
});
;define("buymeapp/adapters/task", ["exports", "ember-data"], function (exports, _emberData) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONAPIAdapter.extend({
        host: "http://test.nidan.co.il/buymetest/public/index.php/api"
    });
});
;define('buymeapp/app', ['exports', 'buymeapp/resolver', 'ember-load-initializers', 'buymeapp/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('buymeapp/components/add-task', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        store: Ember.inject.service(),

        actions: {

            add_new_task: function () {
                let that = this;
                Ember.$.ajax({
                    url: 'http://test.nidan.co.il/buymetest/public/index.php/api/add_new_task',
                    type: "POST",
                    data: {
                        task_name: this.get('task_name')
                    }
                }).then(function (resp) {
                    that.set('task_name', '');
                    location.reload();
                }).catch(function (error) {
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
});
;define('buymeapp/components/summary-task', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        init() {

            this._super(...arguments);
            this.getsummaryData(this);
        },
        getsummaryData: function (that) {

            Ember.$.ajax({
                url: 'http://test.nidan.co.il/buymetest/public/index.php/api/getSummay',
                type: "get",
                data: {}
            }).then(function (resp) {
                let summary = resp.summary;
                that.set('completed', summary[0].completed);
                that.set('uncompleted', summary[0].uncompleted);
                that.set('total', summary[0].total);
                that.set('deleted', summary[0].deleted);
            }).catch(function (error) {
                // handle errors here
            });
        }

    });
});
;define('buymeapp/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('buymeapp/helpers/app-version', ['exports', 'buymeapp/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('buymeapp/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('buymeapp/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('buymeapp/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'buymeapp/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('buymeapp/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('buymeapp/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('buymeapp/initializers/export-application-global', ['exports', 'buymeapp/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('buymeapp/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('buymeapp/models/post', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        task_name: _emberData.default.attr(),
        status: _emberData.default.attr(),
        isDeleted: _emberData.default.attr(),
        update_date: _emberData.default.attr(),
        added_date: _emberData.default.attr()

    });
});
;define('buymeapp/models/task', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        added_date: _emberData.default.attr('string'),
        task_name: _emberData.default.attr('string'),
        status: _emberData.default.attr('boolean'),
        isDeleted: _emberData.default.attr('boolean'),
        update_date: _emberData.default.attr('string')

    });
});
;define('buymeapp/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('buymeapp/router', ['exports', 'buymeapp/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('posts');
    this.route('tasks', { path: '/' });
  });

  exports.default = Router;
});
;define('buymeapp/routes/posts', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model() {
            return this.store.findAll('post');
        }
    });
});
;define('buymeapp/routes/tasks', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    let that = null;
    exports.default = Ember.Route.extend({
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
        init() {},
        model() {
            this.that = this;
            return Ember.RSVP.hash({
                tasks: this.store.findAll('task')
            });
        },
        actions: {
            editTask(id, task_name, status) {

                swal({
                    title: 'Edit Task ' + '<b>' + task_name + '</b>',
                    html: this.buildHtmlForm(id, task_name, status),
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Update',
                    onOpen: function () {
                        document.getElementById("status").value = status == true ? 1 : 0;
                    }
                }).then(result => {
                    if (result.value) {
                        this.doActionInServer(id, 'edit', document.getElementById("task_name").value, document.getElementById("status").value);
                        swal('updated!', 'Your task has been updated successfully.', 'success').then(function () {
                            //יש דרך אחרת לטעון את המודל שוב אבל נגמר הזמן לא הספקתי כרגע שם את זה על רגיל עם טעינת דף ואני אחקור את הנושא בנמשך לצורך לצידה ושיפור
                            location.reload();
                            //this.get('target.router').refresh();
                        });
                    }
                });
            },
            deleteTask(id) {
                swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then(result => {
                    if (result.value) {
                        this.doActionInServer(id, 'delete');
                        swal('deleted!', 'Your task has been deleted successfully.', 'success').then(function () {
                            //יש דרך אחרת לטעון את המודל שוב אבל נגמר הזמן לא הספקתי כרגע שם את זה על רגיל עם טעינת דף ואני אחקור את הנושא בנמשך לצורך לצידה ושיפור
                            location.reload();
                            //this.get('target.router').refresh();
                        });
                    }
                });
            }
        },
        doActionInServer(id, action, task_name, status) {
            let dataSend = {
                action: action,
                id: id
            };
            if (typeof task_name != 'undefined') {
                dataSend.task_name = task_name;
            }
            if (typeof status != 'undefined') {
                dataSend.status = status;
            }
            console.log(dataSend);
            Ember.$.ajax({
                url: 'http://test.nidan.co.il/buymetest/public/index.php/api/' + action,
                type: "POST",
                data: dataSend
            }).then(function (resp) {}).catch(function (error) {
                // handle errors here
            });
        },
        convertToDate: function (d) {
            return moment(d).format("DD/MM/YY HH:mm:ss");
        },
        buildHtmlForm: function (id, task_name, status) {
            let html = '<hr><form>';
            html += '' + '<div class="form-group row">' + '<label class="col-md-4">Task Name</label>' + '<div class="col-md-8">' + '<input type="text" class="form-control" id="task_name" value="' + task_name + '">' + '</div>' + '</div>' + '<div class="form-group row">' + '<label class="col-md-4">Status</label>' + '<div class="col-md-8">' + '<select class="form-control" id="status">' + '<option value="1">Completed</option>' + '<option value="0">UnCompleted</option>' + '</select>';
            '</div>';
            '</div>';
            html += '<form>';

            return html;
        }

    });
});
;define('buymeapp/serializers/post', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.RESTSerializer.extend({
        normalizeResponse: function (store, primaryModelClass, payload, id, requestType) {

            payload = { posts: payload.data };
            return this._super(store, primaryModelClass, payload, id, requestType);
        }
    });
});
;define('buymeapp/serializers/task', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.RESTSerializer.extend({
        normalizeResponse: function (store, primaryModelClass, payload, id, requestType) {

            payload = { tasks: payload.data };
            return this._super(store, primaryModelClass, payload, id, requestType);
        }
    });
});
;define('buymeapp/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("buymeapp/templates/components/add-task", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MPnpiB57", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row mb-2\"],[9],[7,\"button\"],[11,\"class\",\"btn btn-info\"],[11,\"style\",\"margin-right: 10px;\"],[3,\"action\",[[22,0,[]],\"add_new_task\"]],[9],[0,\" add new task\"],[10],[0,\" \"],[1,[27,\"input\",null,[[\"value\",\"type\"],[[23,[\"task_name\"]],\"text\"]]],false],[10]],\"hasEval\":false}", "meta": { "moduleName": "buymeapp/templates/components/add-task.hbs" } });
});
;define("buymeapp/templates/components/summary-task", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NjIoI9by", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-md-4 text-center-in-div taskCompleted\"],[9],[0,\"\\n        completed : \"],[7,\"b\"],[9],[1,[21,\"completed\"],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-md-4 text-center-in-div taskUnCompleted\"],[9],[0,\"\\n        uncompleted : \"],[7,\"b\"],[9],[1,[21,\"uncompleted\"],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-md-4 text-center-in-div\"],[9],[0,\"\\n        total : \"],[7,\"b\"],[9],[1,[21,\"total\"],false],[10],[0,\"\\n    \"],[10],[0,\"\\n   \"],[2,\" <div class=\\\"col-md-3 taskDeleted\\\">\\n        deleted : <b>{{deleted}}</b>\\n    </div>\"],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "buymeapp/templates/components/summary-task.hbs" } });
});
;define("buymeapp/templates/posts", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "T5bb5jR9", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"post\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "buymeapp/templates/posts.hbs" } });
});
;define("buymeapp/templates/tasks", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aJj+rXPX", "block": "{\"symbols\":[\"task\"],\"statements\":[[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"h1\"],[9],[0,\" Tasks \"],[10],[0,\"\\n    \"],[1,[21,\"add-task\"],false],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"ul\"],[11,\"class\",\"list-group list-grpuo-custom\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"model\",\"tasks\"]]],null,{\"statements\":[[0,\"                \"],[7,\"li\"],[11,\"class\",\"list-group-item\"],[9],[0,\"\\n\"],[4,\"if\",[[22,1,[\"status\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"span\"],[11,\"class\",\"taskCompleted font-size-task\"],[9],[1,[22,1,[\"task_name\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                        \"],[7,\"span\"],[11,\"class\",\"taskUnCompleted font-size-task\"],[9],[1,[22,1,[\"task_name\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                    \"],[7,\"span\"],[9],[1,[22,1,[\"added_date\"]],false],[10],[0,\"\\n                    \"],[7,\"span\"],[11,\"class\",\"pull-right custom-icon-edit\"],[3,\"action\",[[22,0,[]],\"editTask\",[22,1,[\"id\"]],[22,1,[\"task_name\"]],[22,1,[\"status\"]]]],[9],[0,\" \"],[7,\"i\"],[11,\"class\",\"fa fa-edit\"],[9],[10],[10],[0,\"\\n                    \"],[7,\"span\"],[11,\"class\",\"pull-right custom-icon-trash\"],[3,\"action\",[[22,0,[]],\"deleteTask\",[22,1,[\"id\"]]]],[9],[0,\" \"],[7,\"i\"],[11,\"class\",\"fa fa-trash\"],[9],[10],[10],[0,\"\\n                \"],[10],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[21,\"summary-task\"],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[2,\"\\n$scope.prev_time = moment().format(\\\"HH:mm:ss\\\");\\n$scope.prev_date = moment().format(\\\"DD/MM/YY\\\");\"],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "buymeapp/templates/tasks.hbs" } });
});
;

;define('buymeapp/config/environment', [], function() {
  var prefix = 'buymeapp';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("buymeapp/app")["default"].create({"name":"buymeapp","version":"0.0.0+bf6c097c"});
          }
        
//# sourceMappingURL=buymeapp.map
