webpackJsonp([2],{"8tuP":function(t,e){},E33f:function(t,e){},M9hc:function(t,e){},OdPg:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"RepositoryForm",props:["showSubmit"],methods:{handleSubmit:function(t){t.preventDefault(),this.form.validateFields(function(t,e){t||console.log("Received values of form: ",e)})},validate:function(t,e,a){void 0!==e&&"iczer"!==e&&a("输入'iczer'试下？"),a()}}},o={render:function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("a-form",{staticClass:"form",attrs:{autoFormCreate:function(e){return t.form=e}},on:{submit:e.handleSubmit}},[r("a-row",{staticClass:"form-row"},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:"仓库名",fieldDecoratorId:"repository.name",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入仓库名称",whitespace:!0}]}}},[r("a-input",{attrs:{placeholder:"请输入仓库名称"}})],1)],1),e._v(" "),r("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:"仓库域名",fieldDecoratorId:"repository.domain",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入仓库域名",whitespace:!0},{validator:e.validate}]}}},[r("a-input",{attrs:{addonBefore:"http://",addonAfter:".github.io",placeholder:"请输入"}})],1)],1),e._v(" "),r("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:"仓库管理员",fieldDecoratorId:"repository.manager",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择管理员"}]}}},[r("a-select",{attrs:{placeholder:"请选择管理员"}},[r("a-select-option",{attrs:{value:"王同学"}},[e._v("王同学")]),e._v(" "),r("a-select-option",{attrs:{value:"李同学"}},[e._v("李同学")]),e._v(" "),r("a-select-option",{attrs:{value:"黄同学"}},[e._v("黄同学")])],1)],1)],1)],1),e._v(" "),r("a-row",{staticClass:"form-row"},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:"审批人",fieldDecoratorId:"repository.auditor",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择审批员"}]}}},[r("a-select",{attrs:{placeholder:"请选择审批员"}},[r("a-select-option",{attrs:{value:"王晓丽"}},[e._v("王晓丽")]),e._v(" "),r("a-select-option",{attrs:{value:"李军"}},[e._v("李军")])],1)],1)],1),e._v(" "),r("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:"生效日期",fieldDecoratorId:"repository.effectiveDate",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择生效日期"}]}}},[r("a-range-picker",{staticStyle:{width:"100%"}})],1)],1),e._v(" "),r("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:"仓库类型",fieldDecoratorId:"repository.type",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择仓库类型"}]}}},[r("a-select",{attrs:{placeholder:"请选择仓库类型"}},[r("a-select-option",{attrs:{value:"公开"}},[e._v("公开")]),e._v(" "),r("a-select-option",{attrs:{value:"私密"}},[e._v("私密")])],1)],1)],1)],1),e._v(" "),e.showSubmit?r("a-form-item",[r("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},staticRenderFns:[]};var s=a("VU/8")(r,o,!1,function(t){a("lSwv")},"data-v-d81c57e6",null).exports,i={name:"TaskForm",props:["showSubmit"],methods:{handleSubmit:function(t){t.preventDefault(),this.form.validateFields(function(t,e){t||console.log("Received values of form: ",e)})}}},n={render:function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("a-form",{staticClass:"form",attrs:{autoFormCreate:function(e){return t.form=e}},on:{submit:e.handleSubmit}},[r("a-row",{staticClass:"form-row"},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:"任务名",fieldDecoratorId:"task.name",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入任务名称",whitespace:!0}]}}},[r("a-input",{attrs:{placeholder:"请输入任务名称"}})],1)],1),e._v(" "),r("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:"任务描述",fieldDecoratorId:"task.description",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入任务描述",whitespace:!0}]}}},[r("a-input",{attrs:{placeholder:"请输入任务描述"}})],1)],1),e._v(" "),r("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:"执行人",fieldDecoratorId:"task.executor",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择执行人"}]}}},[r("a-select",{attrs:{placeholder:"请选择执行人"}},[r("a-select-option",{attrs:{value:"黄丽丽"}},[e._v("黄丽丽")]),e._v(" "),r("a-select-option",{attrs:{value:"李大刀"}},[e._v("李大刀")])],1)],1)],1)],1),e._v(" "),r("a-row",{staticClass:"form-row"},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:"责任人",fieldDecoratorId:"task.manager",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择责任人"}]}}},[r("a-select",{attrs:{placeholder:"请选择责任人"}},[r("a-select-option",{attrs:{value:"王伟"}},[e._v("王伟")]),e._v(" "),r("a-select-option",{attrs:{value:"李红军"}},[e._v("李红军")])],1)],1)],1),e._v(" "),r("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:"提醒时间",fieldDecoratorId:"task.time",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择提醒时间"}]}}},[r("a-time-picker",{staticStyle:{width:"100%"}})],1)],1),e._v(" "),r("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:"任务类型",fieldDecoratorId:"task.type",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择任务类型"}]}}},[r("a-select",{attrs:{placeholder:"请选择任务类型"}},[r("a-select-option",{attrs:{value:"定时执行"}},[e._v("定时执行")]),e._v(" "),r("a-select-option",{attrs:{value:"周期执行"}},[e._v("周期执行")])],1)],1)],1)],1),e._v(" "),e.showSubmit?r("a-form-item",[r("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},staticRenderFns:[]};var l=a("VU/8")(i,n,!1,function(t){a("M9hc")},"data-v-57309a6e",null).exports,c=a("Gu7T"),d=a.n(c),u=[{title:"成员姓名",dataIndex:"name",key:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"工号",dataIndex:"workId",key:"workId",width:"20%",scopedSlots:{customRender:"workId"}},{title:"所属部门",dataIndex:"department",key:"department",width:"40%",scopedSlots:{customRender:"department"}},{title:"操作",key:"action",scopedSlots:{customRender:"operation"}}],f=[{key:"1",name:"小明",workId:"001",editable:!1,department:"行政部"},{key:"2",name:"李莉",workId:"002",editable:!1,department:"IT部"},{key:"3",name:"王小帅",workId:"003",editable:!1,department:"财务部"}],m={name:"TableForm",data:function(){return{columns:u,dataSource:f}},methods:{handleSubmit:function(t){t.preventDefault()},newMeber:function(){this.dataSource.push({key:"99",name:"",workId:"",department:"",editable:!0,isNew:!0})},remove:function(t){var e=this.dataSource.filter(function(e){return e.key!==t});this.dataSource=e},saveRow:function(t){var e=this.dataSource.filter(function(e){return e.key===t})[0];e.editable=!1,e.isNew=!1},toggle:function(t){var e=this.dataSource.filter(function(e){return e.key===t})[0];e.editable=!e.editable},getRowByKey:function(t,e){var a=this.dataSource;return(e||a).filter(function(e){return e.key===t})[0]},cancle:function(t){this.dataSource.filter(function(e){return e.key===t})[0].editable=!1},handleChange:function(t,e,a){var r=[].concat(d()(this.dataSource)),o=r.filter(function(t){return e===t.key})[0];o&&(o[a]=t,this.dataSource=r)}}},p={render:function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("form",{attrs:{autoFormCreate:function(e){return t.form=e}}},[r("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1},scopedSlots:e._u([e._l(["name","workId","department"],function(t,a){return{key:t,fn:function(o,s,i){return[s.editable?r("a-input",{key:t,staticStyle:{margin:"-5px 0"},attrs:{value:o,placeholder:e.columns[a].title},on:{change:function(a){return e.handleChange(a.target.value,s.key,t)}}}):[e._v(e._s(o))]]}}}),{key:"operation",fn:function(t,a,o){return[a.editable?[a.isNew?r("span",[r("a",{on:{click:function(t){e.saveRow(a.key)}}},[e._v("添加")]),e._v(" "),r("a-divider",{attrs:{type:"vertical"}}),e._v(" "),r("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(t){e.remove(a.key)}}},[r("a",[e._v("删除")])])],1):r("span",[r("a",{on:{click:function(t){e.saveRow(a.key)}}},[e._v("保存")]),e._v(" "),r("a-divider",{attrs:{type:"vertical"}}),e._v(" "),r("a",{on:{click:function(t){e.cancle(a.key)}}},[e._v("取消")])],1)]:r("span",[r("a",{on:{click:function(t){e.toggle(a.key)}}},[e._v("编辑")]),e._v(" "),r("a-divider",{attrs:{type:"vertical"}}),e._v(" "),r("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(t){e.remove(a.key)}}},[r("a",[e._v("删除")])])],1)]}}])}),e._v(" "),r("a-button",{staticStyle:{width:"100%","margin-top":"16px","margin-bottom":"8px"},attrs:{type:"dashed",icon:"plus"},on:{click:e.newMeber}},[e._v("新增成员")])],1)},staticRenderFns:[]};var v=a("VU/8")(m,p,!1,function(t){a("E33f")},"data-v-f2269760",null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"toolbar"},[e("div",{staticStyle:{float:"left"}},[this._t("extra")],2),this._v(" "),e("div",{staticStyle:{float:"right"}},[this._t("default")],2)])},staticRenderFns:[]};var _={name:"AdvancedForm",components:{FooterToolBar:a("VU/8")({name:"FooterToolBar"},h,!1,function(t){a("dUIM")},"data-v-eff1c5ae",null).exports,TableForm:v,TaskForm:l,RepositoryForm:s},data:function(){return{desc:"高级表单常见于一次性输入和提交大批量数据的场景。",loading:!1}},methods:{validate:function(){this.$refs.repository.form.validateFields(function(t,e){t||console.log("Received values of form: ",e)}),this.$refs.task.form.validateFields(function(t,e){t||console.log("Received values of form: ",e)})}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a-card",{staticClass:"card",attrs:{title:"仓库管理",bordered:!1}},[e("repository-form",{ref:"repository",attrs:{showSubmit:!1}})],1),this._v(" "),e("a-card",{staticClass:"card",attrs:{title:"任务管理",bordered:!1}},[e("task-form",{ref:"task",attrs:{showSubmit:!1}})],1),this._v(" "),e("a-card",{attrs:{title:"用户管理",bordered:!1}},[e("table-form")],1),this._v(" "),e("footer-tool-bar",[e("a-button",{attrs:{type:"primary",loading:this.loading},on:{click:this.validate}},[this._v("提交")])],1)],1)},staticRenderFns:[]};var y=a("VU/8")(_,b,!1,function(t){a("8tuP")},"data-v-65a2dafc",null);e.default=y.exports},dUIM:function(t,e){},lSwv:function(t,e){}});
//# sourceMappingURL=2.a0d8358b2e932d66f13f.js.map