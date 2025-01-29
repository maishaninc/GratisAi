
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as A}from"./index-fd8a5577.js";import{a as O}from"./config-e611a8d0.js";import{d as v,Q as B,r as C,B as I,x as R,h as o,o as U,c as q,e,f as l,a as b,l as N,b as m,E as g,q as y}from"./index-e656eb90.js";const j={class:"flex justify-between"},E=b("b",null,"阿里云OSS参数设置",-1),M=v({__name:"ali",setup(Q){const a=B({aliOssStatus:"",aliOssAccessKeyId:"",aliOssAccessKeySecret:"",aliOssRegion:"",aliOssBucket:""}),p=C();async function _(){const n=await O.queryConfig({keys:["aliOssAccessKeySecret","aliOssRegion","aliOssBucket","aliOssAccessKeyId","aliOssStatus"]});Object.assign(a,n.data)}function x(){var n;(n=p.value)==null||n.validate(async s=>{if(s){try{await O.setConfig({settings:V(a)}),g.success("变更配置信息成功")}catch{}_()}else g.error("请填写完整信息")})}function V(n){return Object.keys(n).map(s=>({configKey:s,configVal:n[s]}))}const i=I(()=>[{required:Number(a.aliOssStatus)===1,message:"开启配置后请填写此项",trigger:"change"}]);return R(()=>{_()}),(n,s)=>{const f=o("el-alert"),S=A,w=o("el-button"),K=o("el-switch"),c=o("el-form-item"),u=o("el-col"),r=o("el-row"),d=o("el-input"),h=o("el-form"),k=o("el-card");return U(),q("div",null,[e(S,null,{default:l(()=>[e(f,{closable:!1,"show-icon":"",title:"阿里云COS参数说明",description:"阿里云的对象存储oss服务、前往阿里云申请oss服务 https://oss.console.aliyun.com/ 、如果同时开启多个存储服务、腾讯云高于阿里云优先级！",type:"success"})]),_:1}),e(k,{style:{margin:"20px"}},{header:l(()=>[b("div",j,[E,e(w,{class:"button",text:"",onClick:x},{default:l(()=>[N(" 保存设置 ")]),_:1})])]),default:l(()=>[e(h,{ref_key:"formRef",ref:p,model:a,"label-width":"120px"},{default:l(()=>[e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"服务启用状态",prop:"aliOssStatus"},{default:l(()=>[e(K,{modelValue:a.aliOssStatus,"onUpdate:modelValue":s[0]||(s[0]=t=>a.aliOssStatus=t),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"accessKeyId",prop:"aliOssAccessKeyId",rules:m(i)},{default:l(()=>[e(d,{modelValue:a.aliOssAccessKeyId,"onUpdate:modelValue":s[1]||(s[1]=t=>a.aliOssAccessKeyId=t),placeholder:"请填写SecretId",clearable:"",type:"password","show-password":""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"keySecret",prop:"aliOssAccessKeySecret",rules:m(i)},{default:l(()=>[e(d,{modelValue:a.aliOssAccessKeySecret,"onUpdate:modelValue":s[2]||(s[2]=t=>a.aliOssAccessKeySecret=t),placeholder:"请填写SecretKey",clearable:"",type:"password","show-password":""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"存储桶名称",prop:"aliOssBucket",rules:m(i)},{default:l(()=>[e(d,{modelValue:a.aliOssBucket,"onUpdate:modelValue":s[3]||(s[3]=t=>a.aliOssBucket=t),placeholder:"请填写存储桶名称",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"所属地域",prop:"aliOssRegion",rules:m(i)},{default:l(()=>[e(d,{modelValue:a.aliOssRegion,"onUpdate:modelValue":s[4]||(s[4]=t=>a.aliOssRegion=t),placeholder:"请填写所属地域(oss-cn-shanghai)",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})])}}});typeof y=="function"&&y(M);export{M as default};
