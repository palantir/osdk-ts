import{a8 as T,r as g,R as n,a9 as W,aa as _,j as i,ab as j}from"./iframe-BvgKvBTT.js";import{w as U}from"./withOsdkMetrics-D0FOqMKK.js";import{B as w,u as E}from"./BaseWorkshopModule-Cg3zcxKR.js";import{u as A}from"./useOsdkClient-B-GUKLiD.js";import"./preload-helper-dVfNiIKn.js";import"./index-C6P12W9x.js";import"./ActionButton-Db7nx97v.js";import"./Button-CZUmTkhK.js";import"./useRenderElement-BFIknrE2.js";function F(e){return e[T].branch}const b=g.createContext(null);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)({}).hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},m.apply(null,arguments)}function L(e){const t=A(),o=n.useContext(b);return n.createElement(w,m({},e,{foundryUrl:t[W].baseUrl,branchRid:F(t),defaultTheme:o==null?void 0:o.theme}))}const x=U(L,"WorkshopModule"),u="data-bp-color-scheme";function B({theme:e,defaultTheme:t="system",onThemeChanged:o,target:r,children:l}){const[P,O]=n.useState(t),d=e??P,R=E(),a=d==="system"?R:d;n.useLayoutEffect(()=>{const s=r??(typeof document<"u"?document.documentElement:null);if(s==null)return;const y=s.getAttribute(u);return s.setAttribute(u,a),()=>{y==null?s.removeAttribute(u):s.setAttribute(u,y)}},[a,r]);const h=n.useCallback(s=>{e===void 0&&O(s),o==null||o(s)},[e,o]),M=n.useMemo(()=>({theme:d,resolvedTheme:a,setTheme:h}),[d,a,h]);return n.createElement(b.Provider,{value:M},l)}function p({foundryUrl:e,theme:t,...o}){const r=g.useMemo(()=>{try{const l=new URL(e);if(l.protocol!=="https:"&&l.protocol!=="http:")return}catch{return}return _(e,"ri.ontology.main.ontology.example",()=>Promise.resolve(""))},[e]);return i.jsx("div",{style:{height:"24rem"},children:r!=null?i.jsx(j,{client:r,children:i.jsx(B,{theme:t,children:i.jsx(x,{...o},t)})}):i.jsx("p",{children:"Set the provider's Foundry URL and a module RID in the controls below. Rendering requires a signed-in Foundry session."})})}try{p.displayName="WorkshopModuleStory",p.__docgenInfo={description:"",displayName:"WorkshopModuleStory",props:{foundryUrl:{defaultValue:null,description:"",name:"foundryUrl",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"OsdkThemeMode"}}}}}catch{}const z={title:"Components/WorkshopModule",component:x,args:{foundryUrl:"",theme:"light",moduleRid:"ri.workshop.main.module.example",moduleVersion:"published",enableAuthPopup:!1,title:"Workshop module preview"},render:e=>i.jsx(p,{...e}),parameters:{controls:{expanded:!0},docs:{description:{component:"WorkshopModule reads the Foundry URL from OsdkProvider and inherits the initial theme from OsdkThemeProvider. The Provider controls configure this story's providers. No iframe loads until you supply a Foundry URL; rendering requires a signed-in Foundry session. For explicit foundryUrl and defaultTheme props, see Building Blocks / BaseWorkshopModule."}}},argTypes:{foundryUrl:{name:"Provider Foundry URL",control:"text",description:"Base URL for the client passed to OsdkProvider. Leave blank to disable the iframe.",table:{category:"Provider"}},theme:{name:"Provider theme",control:"select",options:["light","dark","system"],description:"Theme supplied by OsdkThemeProvider. Changing this control remounts the module to apply its new initial theme.",table:{category:"Provider"}},moduleRid:{control:"text",description:"RID of a Workshop module you can access."},moduleVersion:{control:"select",options:["latest","published"]},title:{control:"text"},enableAuthPopup:{control:"boolean",description:"Enable Foundry session checks and sign-in popups. Defaults to false."},className:{control:"text"},style:{control:"object"}}},c={parameters:{docs:{source:{code:`<OsdkProvider client={client}>
  <OsdkThemeProvider theme="light">
    <WorkshopModule
      moduleRid="ri.workshop.main.module.example"
      style={{ height: "24rem" }}
    />
  </OsdkThemeProvider>
</OsdkProvider>`}}}};var f,k,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<OsdkProvider client={client}>
  <OsdkThemeProvider theme="light">
    <WorkshopModule
      moduleRid="ri.workshop.main.module.example"
      style={{ height: "24rem" }}
    />
  </OsdkThemeProvider>
</OsdkProvider>\`
      }
    }
  }
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const G=["Default"];export{c as Default,G as __namedExportsOrder,z as default};
