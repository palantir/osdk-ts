import{j as n}from"./iframe-C8k3uumS.js";import{B as e}from"./BasePdfViewer-D_AoTPxr.js";import"./preload-helper-Dj6SQCER.js";import"./index-Da9JAcME.js";import"./BasePdfViewer.module.css-SRucL4YG.js";import"./PdfViewerAnnotationLayer-CXlmBS5R.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRqn1Ztx.js";import"./PdfViewerOutlineSidebar-DZHO0nQp.js";import"./PdfViewerSidebarHeader-DTd1EmT7.js";import"./useBaseUiId-DFXqCjvq.js";import"./useControlled-C2PJbUNw.js";import"./CompositeRoot-Am1Pq9vl.js";import"./CompositeItem-DZbgQ7y8.js";import"./ToolbarRootContext-BVd3nTMD.js";import"./composite-DxAUAqur.js";import"./svgIconContainer-Dj-Mm7D3.js";import"./PdfViewerSearchBar-3W1fPE50.js";import"./chevron-up-BOBf7BBR.js";import"./chevron-down-Biem--ni.js";import"./cross-Dp2ox1xu.js";import"./PdfViewerSidebar-DnkFHPTn.js";import"./index-CEB9MiMS.js";import"./index-DzwHbvl0.js";import"./index-DjlNroqj.js";import"./PdfViewerToolbar-Y9XsmT9C.js";import"./Button-CBL5cv9S.js";import"./chevron-right-BqR0RiPH.js";import"./Input--AleI5pt.js";import"./search-DKEa9C8l.js";import"./spin-BPJA4GXh.js";import"./error-DgFxq49l.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4274/447eaf9d334942bf30606aff9425dea4be9ffd52/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
