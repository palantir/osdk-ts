import{r as g,R as n,a7 as T,a8 as W,j as i,a9 as _}from"./iframe-BMT91W1Z.js";import{w as j}from"./withOsdkMetrics-DgSik2_o.js";import{B as U,u as w}from"./BaseWorkshopModule-DxfsEKEd.js";import{u as E}from"./useOsdkClient-CBtweC4d.js";import"./preload-helper-rvXeaCGs.js";import"./index-Bx6Ivmjs.js";const x=g.createContext(null);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)({}).hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},m.apply(null,arguments)}function L(e){const r=E(),o=n.useContext(x);return n.createElement(U,m({},e,{foundryUrl:r[T].baseUrl,defaultTheme:o==null?void 0:o.theme}))}const O=j(L,"WorkshopModule"),u="data-bp-color-scheme";function A({theme:e,defaultTheme:r="system",onThemeChanged:o,target:t,children:l}){const[P,b]=n.useState(r),d=e??P,M=w(),a=d==="system"?M:d;n.useLayoutEffect(()=>{const s=t??(typeof document<"u"?document.documentElement:null);if(s==null)return;const y=s.getAttribute(u);return s.setAttribute(u,a),()=>{y==null?s.removeAttribute(u):s.setAttribute(u,y)}},[a,t]);const h=n.useCallback(s=>{e===void 0&&b(s),o==null||o(s)},[e,o]),R=n.useMemo(()=>({theme:d,resolvedTheme:a,setTheme:h}),[d,a,h]);return n.createElement(x.Provider,{value:R},l)}function p({foundryUrl:e,theme:r,...o}){const t=g.useMemo(()=>{try{const l=new URL(e);if(l.protocol!=="https:"&&l.protocol!=="http:")return}catch{return}return W(e,"ri.ontology.main.ontology.example",()=>Promise.resolve(""))},[e]);return i.jsx("div",{style:{height:"24rem"},children:t!=null?i.jsx(_,{client:t,children:i.jsx(A,{theme:r,children:i.jsx(O,{...o},r)})}):i.jsx("p",{children:"Set the provider's Foundry URL and a module RID in the controls below. Rendering requires a signed-in Foundry session."})})}try{p.displayName="WorkshopModuleStory",p.__docgenInfo={description:"",displayName:"WorkshopModuleStory",props:{foundryUrl:{defaultValue:null,description:"",name:"foundryUrl",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"OsdkThemeMode"}}}}}catch{}const I={title:"Components/WorkshopModule",component:O,args:{foundryUrl:"",theme:"light",moduleRid:"ri.workshop.main.module.example",moduleVersion:"published",title:"Workshop module preview"},render:e=>i.jsx(p,{...e}),parameters:{controls:{expanded:!0},docs:{description:{component:"WorkshopModule reads the Foundry URL from OsdkProvider and inherits the initial theme from OsdkThemeProvider. The Provider controls configure this story's providers. No iframe loads until you supply a Foundry URL; rendering requires a signed-in Foundry session. For explicit foundryUrl and defaultTheme props, see Building Blocks / BaseWorkshopModule."}}},argTypes:{foundryUrl:{name:"Provider Foundry URL",control:"text",description:"Base URL for the client passed to OsdkProvider. Leave blank to disable the iframe.",table:{category:"Provider"}},theme:{name:"Provider theme",control:"select",options:["light","dark","system"],description:"Theme supplied by OsdkThemeProvider. Changing this control remounts the module to apply its new initial theme.",table:{category:"Provider"}},moduleRid:{control:"text",description:"RID of a Workshop module you can access."},moduleVersion:{control:"select",options:["latest","published"]},title:{control:"text"},className:{control:"text"},style:{control:"object"}}},c={parameters:{docs:{source:{code:`<OsdkProvider client={client}>
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
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const N=["Default"];export{c as Default,N as __namedExportsOrder,I as default};
