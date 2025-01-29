
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as N}from"./index-fd8a5577.js";import{d as R,r,Q as U,x as $,h as s,R as z,o as g,c as J,e,f as a,w as j,I as F,l as u,a as I,W as h,E as m,q as w}from"./index-e656eb90.js";const P={class:"flex justify-end mr-5"},Q=R({__name:"systemapp",setup(T){const M=r(0),d=r(!1),p=r(!1),_=r([]),l=U({id:"",name:"",preset:"",appModel:""});function k(t){t==null||t.resetFields()}const V=r();async function f(){d.value=!0;try{const{data:t}=await h.querySystemApp({});_.value=t.rows,M.value=t.count}catch(t){console.error("查询系统应用失败:",t),m.error("查询失败")}finally{d.value=!1}}function x(t){l.id=t.id,l.name=t.name,l.preset=t.preset,l.appModel=t.appModel,p.value=!0}async function C(){try{await h.updateSystemApp({id:l.id,name:l.name,preset:l.preset,appModel:l.appModel}),m.success("更新成功"),p.value=!1,f()}catch{m.error("更新失败")}}return $(()=>{f()}),(t,o)=>{const A=s("el-alert"),y=N,i=s("el-table-column"),c=s("el-button"),B=s("el-table"),v=s("el-input"),b=s("el-form-item"),D=s("el-form"),S=s("el-dialog"),q=z("loading");return g(),J("div",null,[e(y,{class:"header"},{default:a(()=>[e(A,{"show-icon":"",title:"系统应用配置说明",description:"此处的主要配置系统应用的模型及预设信息, 思维导图用户思维导图页, 提示词优化用于MJ绘画页及对话页MJ开启提示词优化时候使用",type:"success"})]),_:1}),e(y,{style:{width:"100%"}},{default:a(()=>[j((g(),F(B,{border:"",data:_.value,style:{width:"100%"},size:"large"},{default:a(()=>[e(i,{prop:"name",label:"应用名称",width:"150px"}),e(i,{prop:"appModel",label:"使用模型",width:"150px"}),e(i,{prop:"preset",label:"预设信息"}),e(i,{fixed:"right",label:"操作",align:"center",width:"180"},{default:a(n=>[e(c,{link:"",type:"primary",size:"small",onClick:W=>x(n.row)},{default:a(()=>[u(" 变更 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[q,d.value]])]),_:1}),e(S,{modelValue:p.value,"onUpdate:modelValue":o[3]||(o[3]=n=>p.value=n),"close-on-click-modal":!1,title:`修改应用：${l.name||"..."}`,width:"570",onClose:k},{footer:a(()=>[I("span",P,[e(c,{onClick:o[2]||(o[2]=n=>p.value=!1)},{default:a(()=>[u("取消")]),_:1}),e(c,{type:"primary",onClick:C},{default:a(()=>[u("确认")]),_:1})])]),default:a(()=>[e(D,{ref_key:"formRef",ref:V,"label-position":"right","label-width":"70px",model:l},{default:a(()=>[e(b,{label:"使用模型",prop:"appModel"},{default:a(()=>[e(v,{modelValue:l.appModel,"onUpdate:modelValue":o[0]||(o[0]=n=>l.appModel=n)},null,8,["modelValue"])]),_:1}),e(b,{label:"预设信息",prop:"preset"},{default:a(()=>[e(v,{modelValue:l.preset,"onUpdate:modelValue":o[1]||(o[1]=n=>l.preset=n),type:"textarea",rows:6},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});typeof w=="function"&&w(Q);export{Q as default};
