import{j as n}from"./iframe-eyZPO-r8.js";import{B as e}from"./BasePdfViewer-bqn1QZKF.js";import"./preload-helper-D1V99eN4.js";import"./index-Gdnr7hdE.js";import"./BasePdfViewer.module.css-BcBA4hyu.js";import"./PdfViewerAnnotationLayer-BmWRKY4s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BRoWAtTv.js";import"./PdfViewerOutlineSidebar-BlGyes8K.js";import"./PdfViewerSidebarHeader-DsEC5c_x.js";import"./useBaseUiId-DuycL1XH.js";import"./useControlled-RnivCiUR.js";import"./CompositeRoot-B-KKg4_Z.js";import"./CompositeItem-D72MffoG.js";import"./ToolbarRootContext-DsL0BSnt.js";import"./composite-BQIBWjV1.js";import"./svgIconContainer-BYYEkT6q.js";import"./PdfViewerSearchBar-DTgEF2l7.js";import"./chevron-up-BhRUrBcF.js";import"./chevron-down-C6BwuTUh.js";import"./cross-BDtR8km0.js";import"./PdfViewerSidebar-BWwLn0Mo.js";import"./index-Dhfw8vgu.js";import"./index-BW1bbNNA.js";import"./index-BSykaiWk.js";import"./PdfViewerToolbar-BrZz7BDY.js";import"./Button-DYsGegFs.js";import"./chevron-right-DpMs_2jB.js";import"./Input-CwJlG5HX.js";import"./search-C_tBHa91.js";import"./spin-DdapRD8l.js";import"./error-vxQVtw9f.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4067/bc5120ba3b39cd327ef466ea60914e02e04c44e5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>`}}}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>\`
      }
    }
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const Y=["CustomAnnotation"];export{o as CustomAnnotation,Y as __namedExportsOrder,F as default};
