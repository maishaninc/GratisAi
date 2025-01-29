
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as de}from"./index-fd8a5577.js";import{A as V}from"./package-c2d59ee2.js";import{m as ie,I as pe,n as me}from"./index-d5406c70.js";import{u as ce}from"./utcformatTime-e76e5157.js";import{d as fe,r as f,Q as M,B as S,x as ge,h as u,R as _e,o as C,c as D,e,f as l,S as be,U as ve,b as h,l as p,w as ye,I as $,t as k,a as we,E as v,X as Ve,q as B}from"./index-e656eb90.js";const Ce={class:"flex justify-end mr-5"},he=fe({__name:"package",setup(ke){const N=f("/api/upload/file"),P=f(),x=f(0),b=f(!1),y=f(!1),m=M({name:"",page:1,size:10}),w=f(),g=f(0),o=M({name:null,des:null,coverImg:null,price:null,order:null,status:null,weight:null,days:null,model3Count:null,model4Count:null,drawMjCount:null}),R=M({name:[{required:!0,message:"请填写套餐名称",trigger:"blur"}],des:[{required:!0,message:"请填写套餐的详细描述",trigger:"blur"}],deductionType:[{required:!0,message:"请选择扣费形式",trigger:"change"}],coverImg:[{required:!0,message:"请填写或上传封面图地址",trigger:"blur"}],price:[{required:!0,message:"请填写套餐价格",trigger:"blur"}],order:[{required:!0,message:"请填写套餐排序",trigger:"blur"}],status:[{required:!0,message:"请选择套餐开启状态",trigger:"change"}],days:[{required:!0,message:"请填写套餐有效期天数",trigger:"blur"}],model3Count:[{required:!0,message:"请填写套餐中基础模型可使用次数",trigger:"blur"}],model4Count:[{required:!0,message:"请填写套餐中高级模型可使用次数",trigger:"blur"}],drawMjCount:[{required:!0,message:"请填写套餐中抽奖次数",trigger:"blur"}]}),q=f([]);async function _(){try{y.value=!0;const n=await V.queryAllPackage(m);y.value=!1;const{rows:a,count:U}=n.data;x.value=U,q.value=a}catch{y.value=!1}}function Y(n){n==null||n.resetFields(),_()}const F=n=>{if(["image/png","image/jpeg","image/gif","image/webp"].includes(n.type)){if(n.size/1024>2e3)return v.error("当前限制文件最大不超过 2000KB!"),!1}else return v.error("当前系统仅支持 PNG、JPEG、GIF、和 WebP 格式的图片!"),!1;return!0},O=(n,a)=>{o.coverImg=n.data};async function G({id:n}){await V.delPackage({id:n}),v({type:"success",message:"删除套餐成功！"}),_()}function K(n){g.value=n.id,Ve(()=>{Object.assign(o,n),o==null||delete o.createdAt,o==null||delete o.updatedAt,o==null||delete o.deletedAt,o==null||delete o.id}),b.value=!0}const L=S(()=>g.value?"更新套餐":"新增套餐"),J=S(()=>g.value?"确认更新":"确认新增");function Q(){var n;g.value=0,b.value=!0,(n=w.value)==null||n.resetFields()}function W(n){g.value=0,n==null||n.resetFields()}async function X(n){n==null||n.validate(async a=>{a&&(g.value?(await V.updatePackage({id:g.value,...o}),v({type:"success",message:"更新套餐成功！"})):(await V.createPackage(o),v({type:"success",message:"创建新的套餐成功！"})),b.value=!1,_())})}return ge(()=>{_()}),(n,a)=>{const U=u("el-option"),H=u("el-select"),r=u("el-form-item"),c=u("el-button"),A=u("Plus"),z=u("el-icon"),T=u("el-form"),I=de,Z=u("el-alert"),s=u("el-table-column"),E=u("el-image"),ee=u("el-tag"),le=u("el-popconfirm"),te=u("el-table"),ae=u("el-pagination"),j=u("el-row"),d=u("el-input"),i=u("el-col"),oe=u("el-switch"),ne=u("el-upload"),ue=u("el-dialog"),re=_e("loading");return C(),D("div",null,[e(I,null,{default:l(()=>[e(T,{ref_key:"formRef",ref:P,inline:!0,model:m},{default:l(()=>[e(r,{label:"套餐状态",prop:"status"},{default:l(()=>[e(H,{modelValue:m.status,"onUpdate:modelValue":a[0]||(a[0]=t=>m.status=t),placeholder:"请选择套餐状态",clearable:""},{default:l(()=>[(C(!0),D(be,null,ve(h(ie),t=>(C(),$(U,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(c,{type:"primary",onClick:_},{default:l(()=>[p(" 查询 ")]),_:1}),e(c,{onClick:a[1]||(a[1]=t=>Y(P.value))},{default:l(()=>[p(" 重置 ")]),_:1})]),_:1}),e(c,{type:"success",style:{float:"right"},onClick:Q},{default:l(()=>[p(" 创建套餐 "),e(z,{class:"ml-3"},{default:l(()=>[e(A)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(I,null,{default:l(()=>[e(Z,{closable:!1,"show-icon":"",title:"新版套餐说明",description:"新版本套餐分为不限时套餐和限时套餐、不限时充值次数永不过期、限时套餐在规定时间未使用完毕将清空、套餐等级为套餐优先级、等级越高价值越高、充值非永久套餐的限时套餐将成为会员、当已经是会员资格的情况下、充值低于自身等级的套餐仅添加自身余额不更新日期、充值大于等于自生等级的套餐的时候、将叠加余额与时间（请仔细阅读）,套餐有效时间设为-1即为永久不过期！",type:"success"})]),_:1}),e(I,{style:{width:"100%"}},{default:l(()=>[ye((C(),$(te,{border:"",data:q.value,style:{width:"100%"},size:"large"},{default:l(()=>[e(s,{fixed:"",prop:"name",label:"套餐名称",width:"150"}),e(s,{prop:"order",label:"排序ID",align:"center",width:"100"}),e(s,{prop:"coverImg",label:"套餐封面",width:"150",align:"center"},{default:l(t=>[e(E,{style:{height:"50px"},src:t.row.coverImg,fit:"fill"},null,8,["src"])]),_:1}),e(s,{prop:"price",label:"套餐价格",width:"100",align:"center"}),e(s,{prop:"weight",label:"套餐等级",width:"100",align:"center"}),e(s,{prop:"status",label:"套餐状态",width:"100"},{default:l(t=>[e(ee,{type:h(pe)[t.row.status]},{default:l(()=>[p(k(h(me)[t.row.status]),1)]),_:2},1032,["type"])]),_:1}),e(s,{prop:"days",label:"套餐有效期",width:"120"},{default:l(t=>[p(k(t.row.days>0?`${t.row.days}天`:"永久"),1)]),_:1}),e(s,{prop:"model3Count",label:"基础模型额度",width:"100"}),e(s,{prop:"model4Count",label:"高级模型额度",width:"100"}),e(s,{prop:"drawMjCount",label:"绘画额度",width:"100"}),e(s,{prop:"des",label:"套餐描述",width:"300"}),e(s,{prop:"createdAt",label:"创建时间",width:"200"},{default:l(t=>[p(k(h(ce)(t.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)]),_:1}),e(s,{fixed:"right",label:"操作",width:"200"},{default:l(t=>[e(c,{link:"",type:"primary",size:"small",onClick:se=>K(t.row)},{default:l(()=>[p(" 修改套餐 ")]),_:2},1032,["onClick"]),e(le,{title:"确认删除此套餐么?",width:"200","icon-color":"red",onConfirm:se=>G(t.row)},{reference:l(()=>[e(c,{link:"",type:"danger",size:"small"},{default:l(()=>[p(" 删除套餐 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[re,y.value]]),e(j,{class:"flex justify-end mt-5"},{default:l(()=>[e(ae,{"current-page":m.page,"onUpdate:currentPage":a[2]||(a[2]=t=>m.page=t),"page-size":m.size,"onUpdate:pageSize":a[3]||(a[3]=t=>m.size=t),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:x.value,onSizeChange:_,onCurrentChange:_},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),e(ue,{modelValue:b.value,"onUpdate:modelValue":a[17]||(a[17]=t=>b.value=t),"close-on-click-modal":!1,title:L.value,width:"970",onClose:a[18]||(a[18]=t=>W(w.value))},{footer:l(()=>[we("span",Ce,[e(c,{onClick:a[15]||(a[15]=t=>b.value=!1)},{default:l(()=>[p("取消")]),_:1}),e(c,{type:"primary",onClick:a[16]||(a[16]=t=>X(w.value))},{default:l(()=>[p(k(J.value),1)]),_:1})])]),default:l(()=>[e(T,{ref_key:"formPackageRef",ref:w,"label-position":"right","label-width":"120px",model:o,rules:R},{default:l(()=>[e(j,null,{default:l(()=>[e(i,{span:11},{default:l(()=>[e(r,{label:"套餐详细名称",prop:"name"},{default:l(()=>[e(d,{modelValue:o.name,"onUpdate:modelValue":a[4]||(a[4]=t=>o.name=t),placeholder:"请填写套餐名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{span:3,offset:2},{default:l(()=>[e(r,{label:"套餐开启状态",prop:"status"},{default:l(()=>[e(oe,{modelValue:o.status,"onUpdate:modelValue":a[5]||(a[5]=t=>o.status=t),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{span:7,offset:1},{default:l(()=>[e(r,{label:"套餐等级",prop:"status"},{default:l(()=>[e(d,{modelValue:o.weight,"onUpdate:modelValue":a[6]||(a[6]=t=>o.weight=t),modelModifiers:{number:!0},type:"number",placeholder:"设置套餐等级"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{span:11},{default:l(()=>[e(r,{label:"设置套餐价格",prop:"price"},{default:l(()=>[e(d,{modelValue:o.price,"onUpdate:modelValue":a[7]||(a[7]=t=>o.price=t),modelModifiers:{number:!0},placeholder:"请填写套餐价格(￥)最多两位小数",type:"number"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{span:11,offset:2},{default:l(()=>[e(r,{label:"套餐有效时间",prop:"days"},{default:l(()=>[e(d,{modelValue:o.days,"onUpdate:modelValue":a[8]||(a[8]=t=>o.days=t),modelModifiers:{number:!0},type:"number",placeholder:"自卡密生成之日有效天数、-1为永久"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{span:9},{default:l(()=>[e(r,{label:"设置套餐封面",prop:"coverImg"},{default:l(()=>[e(d,{modelValue:o.coverImg,"onUpdate:modelValue":a[9]||(a[9]=t=>o.coverImg=t),class:"flex-1",placeholder:"填写封面地址或点击上传"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{span:2},{default:l(()=>[e(ne,{class:"avatar-uploader",action:N.value,"show-file-list":!1,"on-success":O,"before-upload":F},{default:l(()=>[e(c,null,{default:l(()=>[e(z,null,{default:l(()=>[e(A)]),_:1})]),_:1})]),_:1},8,["action"])]),_:1}),e(i,{span:11,offset:2},{default:l(()=>[e(r,{label:"设置套餐排序",prop:"order"},{default:l(()=>[e(d,{modelValue:o.order,"onUpdate:modelValue":a[10]||(a[10]=t=>o.order=t),modelModifiers:{number:!0},type:"number",placeholder:"排序数字越大越靠前|套餐权重等级则反之"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{span:11},{default:l(()=>[e(r,{label:"设置套餐描述",prop:"des"},{default:l(()=>[e(d,{modelValue:o.des,"onUpdate:modelValue":a[11]||(a[11]=t=>o.des=t),type:"textarea",placeholder:"请填写套餐详细介绍信息、用于对外展示、建议控制套餐价格字数以便于用户端对齐格式...",rows:6},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{span:11,offset:2},{default:l(()=>[e(r,{label:"基础模型积分",prop:"model3Count"},{default:l(()=>[e(d,{modelValue:o.model3Count,"onUpdate:modelValue":a[12]||(a[12]=t=>o.model3Count=t),modelModifiers:{number:!0},type:"number",placeholder:"基础模型积分"},null,8,["modelValue"])]),_:1}),e(r,{label:"高级模型积分",prop:"model4Count"},{default:l(()=>[e(d,{modelValue:o.model4Count,"onUpdate:modelValue":a[13]||(a[13]=t=>o.model4Count=t),modelModifiers:{number:!0},type:"number",placeholder:"高级模型积分"},null,8,["modelValue"])]),_:1}),e(r,{label:"绘画模型积分",prop:"drawMjCount"},{default:l(()=>[e(d,{modelValue:o.drawMjCount,"onUpdate:modelValue":a[14]||(a[14]=t=>o.drawMjCount=t),modelModifiers:{number:!0},type:"number",placeholder:"绘画模型积分"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});typeof B=="function"&&B(he);export{he as default};
