
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as V}from"./index-fd8a5577.js";import{a as _}from"./config-e611a8d0.js";import{d as k,Q as q,r as i,x as j,h as o,o as B,c as E,e,f as s,a as f,l as N,E as m,q as u}from"./index-e656eb90.js";const A={class:"flex justify-between"},O=f("b",null,"模型系统消息预设",-1),R=k({__name:"index",setup(U){const l=q({systemPreMessage:""}),d=i({systemPreMessage:[{required:!0,trigger:"blur",message:"请填写全局预设信息、用于模型预设词"}]}),a=i();async function r(){const t=await _.queryConfig({keys:["systemPreMessage"]});Object.assign(l,t.data)}function p(){var t;(t=a.value)==null||t.validate(async n=>{if(n){try{await _.setConfig({settings:g(l)}),m.success("变更配置信息成功")}catch{}r()}else m.error("请填写完整信息")})}function g(t){return Object.keys(t).map(n=>({configKey:n,configVal:t[n]}))}return j(()=>{r()}),(t,n)=>{const c=o("el-alert"),y=V,b=o("el-button"),x=o("el-input"),h=o("el-form-item"),w=o("el-col"),C=o("el-row"),M=o("el-form"),P=o("el-card");return B(),E("div",null,[e(y,null,{default:s(()=>[e(c,{closable:!1,"show-icon":"",title:"模型全局头部预设说明",description:"当前消息将会被追加到对话模型的全局预设当中、对应用APP无效、对其他所有绘画生效！",type:"success"})]),_:1}),e(P,{style:{margin:"20px"}},{header:s(()=>[f("div",A,[O,e(b,{class:"button",text:"",onClick:p},{default:s(()=>[N(" 保存设置 ")]),_:1})])]),default:s(()=>[e(M,{ref_key:"formRef",ref:a,rules:d.value,model:l,"label-width":"140px"},{default:s(()=>[e(C,null,{default:s(()=>[e(w,{xs:24,md:20,lg:15,xl:12},{default:s(()=>[e(h,{label:"模型全局头部预设",prop:"systemPreMessage"},{default:s(()=>[e(x,{modelValue:l.systemPreMessage,"onUpdate:modelValue":n[0]||(n[0]=v=>l.systemPreMessage=v),type:"textarea",rows:5,placeholder:"请填写模型全局头部预设信息！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof u=="function"&&u(R);export{R as default};
