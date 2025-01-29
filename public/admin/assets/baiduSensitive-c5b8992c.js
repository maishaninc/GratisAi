
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as C}from"./index-fd8a5577.js";import{a as m}from"./config-e611a8d0.js";import{d as k,Q as q,r as f,x as U,h as o,o as j,c as B,e,f as t,a as y,l as E,E as b,q as x}from"./index-e656eb90.js";const N={class:"flex justify-between"},I=y("b",null,"百度文本审核参数设置",-1),M=k({__name:"baiduSensitive",setup(O){const a=q({baiduTextStatus:"",baiduTextApiKey:"",baiduTextSecretKey:""}),g=f({baiduTextStatus:[{required:!0,trigger:"blur",message:"请选择是否启用百度文本审核"}],baiduTextSecretKey:[{required:!0,trigger:"blur",message:"请填写百度文本审核SecretKey"}],baiduTextApiKey:[{required:!0,trigger:"blur",message:"请填写百度文本审核APIKey"}]}),c=f();async function d(){const n=await m.queryConfig({keys:["baiduTextStatus","baiduTextSecretKey","baiduTextApiKey"]});Object.assign(a,n.data)}function K(){var n;(n=c.value)==null||n.validate(async l=>{if(l){try{await m.setConfig({settings:T(a)}),b.success("变更配置信息成功")}catch{}d()}else b.error("请填写完整信息")})}function T(n){return Object.keys(n).map(l=>({configKey:l,configVal:n[l]}))}return U(()=>{d()}),(n,l)=>{const _=o("el-alert"),S=C,v=o("el-button"),V=o("el-switch"),w=o("el-tooltip"),i=o("el-form-item"),r=o("el-col"),s=o("el-row"),p=o("el-input"),h=o("el-form"),A=o("el-card");return j(),B("div",null,[e(S,null,{default:t(()=>[e(_,{closable:!1,"show-icon":"",title:"百度文本审核参数说明",description:"接入原因、当前百度云免费5万条，申请文档地址：https://console.bce.baidu.com/ai/#/ai/antiporn/overview/index 、如果百度云敏感词与自定义敏感词都配置的情况、会先检测百度云后检测自定义的敏感词！",type:"success"})]),_:1}),e(A,{style:{margin:"20px"}},{header:t(()=>[y("div",N,[I,e(v,{class:"button",text:"",onClick:K},{default:t(()=>[E(" 保存设置 ")]),_:1})])]),default:t(()=>[e(h,{ref_key:"formRef",ref:c,rules:g.value,model:a,"label-width":"150px"},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(i,{label:"开启此敏感词设置",prop:"baiduTextStatus"},{default:t(()=>[e(w,{content:"开启将打开敏感词检测、如果同时开启其他敏感词将会通过菜单顺序仅同时开启一个！",placement:"top","show-after":500},{default:t(()=>[e(V,{modelValue:a.baiduTextStatus,"onUpdate:modelValue":l[0]||(l[0]=u=>a.baiduTextStatus=u),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,null,{default:t(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(i,{label:"文本审核ApiKey",prop:"baiduTextApiKey"},{default:t(()=>[e(p,{modelValue:a.baiduTextApiKey,"onUpdate:modelValue":l[1]||(l[1]=u=>a.baiduTextApiKey=u),placeholder:"请填写百度文本审核ApiKey",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,null,{default:t(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(i,{label:"文本审核SecretKey",prop:"baiduTextSecretKey"},{default:t(()=>[e(p,{modelValue:a.baiduTextSecretKey,"onUpdate:modelValue":l[2]||(l[2]=u=>a.baiduTextSecretKey=u),placeholder:"请填写百度文本审核SecretKey",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof x=="function"&&x(M);export{M as default};
