import{a7 as T,r as g,R as n,a8 as W,a9 as _,j as i,aa as j}from"./iframe-DdFNuve9.js";import{w as U}from"./withOsdkMetrics-DBiHNDc8.js";import{B as w,u as E}from"./BaseWorkshopModule-Bk_Y6zu4.js";import{u as L}from"./useOsdkClient-DWubOs8f.js";import"./preload-helper-BF0zHEQ9.js";import"./index-COFBYoj0.js";function A(e){return e[T].branch}const x=g.createContext(null);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)({}).hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},m.apply(null,arguments)}function B(e){const r=L(),o=n.useContext(x);return n.createElement(w,m({},e,{foundryUrl:r[W].baseUrl,branchRid:A(r),defaultTheme:o==null?void 0:o.theme}))}const b=U(B,"WorkshopModule"),u="data-bp-color-scheme";function C({theme:e,defaultTheme:r="system",onThemeChanged:o,target:t,children:d}){const[O,P]=n.useState(r),l=e??O,R=E(),a=l==="system"?R:l;n.useLayoutEffect(()=>{const s=t??(typeof document<"u"?document.documentElement:null);if(s==null)return;const y=s.getAttribute(u);return s.setAttribute(u,a),()=>{y==null?s.removeAttribute(u):s.setAttribute(u,y)}},[a,t]);const h=n.useCallback(s=>{e===void 0&&P(s),o==null||o(s)},[e,o]),M=n.useMemo(()=>({theme:l,resolvedTheme:a,setTheme:h}),[l,a,h]);return n.createElement(x.Provider,{value:M},d)}function p({foundryUrl:e,theme:r,...o}){const t=g.useMemo(()=>{try{const d=new URL(e);if(d.protocol!=="https:"&&d.protocol!=="http:")return}catch{return}return _(e,"ri.ontology.main.ontology.example",()=>Promise.resolve(""))},[e]);return i.jsx("div",{style:{height:"24rem"},children:t!=null?i.jsx(j,{client:t,children:i.jsx(C,{theme:r,children:i.jsx(b,{...o},r)})}):i.jsx("p",{children:"Set the provider's Foundry URL and a module RID in the controls below. Rendering requires a signed-in Foundry session."})})}try{p.displayName="WorkshopModuleStory",p.__docgenInfo={description:"",displayName:"WorkshopModuleStory",props:{foundryUrl:{defaultValue:null,description:"",name:"foundryUrl",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"OsdkThemeMode"}}}}}catch{}const V={title:"Components/WorkshopModule",component:b,args:{foundryUrl:"",theme:"light",moduleRid:"ri.workshop.main.module.example",moduleVersion:"published",title:"Workshop module preview"},render:e=>i.jsx(p,{...e}),parameters:{controls:{expanded:!0},docs:{description:{component:"WorkshopModule reads the Foundry URL from OsdkProvider and inherits the initial theme from OsdkThemeProvider. The Provider controls configure this story's providers. No iframe loads until you supply a Foundry URL; rendering requires a signed-in Foundry session. For explicit foundryUrl and defaultTheme props, see Building Blocks / BaseWorkshopModule."}}},argTypes:{foundryUrl:{name:"Provider Foundry URL",control:"text",description:"Base URL for the client passed to OsdkProvider. Leave blank to disable the iframe.",table:{category:"Provider"}},theme:{name:"Provider theme",control:"select",options:["light","dark","system"],description:"Theme supplied by OsdkThemeProvider. Changing this control remounts the module to apply its new initial theme.",table:{category:"Provider"}},moduleRid:{control:"text",description:"RID of a Workshop module you can access."},moduleVersion:{control:"select",options:["latest","published"]},title:{control:"text"},className:{control:"text"},style:{control:"object"}}},c={parameters:{docs:{source:{code:`<OsdkProvider client={client}>
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
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const H=["Default"];export{c as Default,H as __namedExportsOrder,V as default};
