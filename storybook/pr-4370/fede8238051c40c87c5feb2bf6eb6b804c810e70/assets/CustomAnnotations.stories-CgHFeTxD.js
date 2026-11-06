import{j as n}from"./iframe-DNO5nHhn.js";import{B as e}from"./BasePdfViewer-CIOuUVZo.js";import"./preload-helper-DmJRiiyv.js";import"./index-B1zYgGoG.js";import"./BasePdfViewer.module.css-BX0YhVLm.js";import"./PdfViewerAnnotationLayer-I0zsGlTb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwNXWBle.js";import"./PdfViewerOutlineSidebar-CnLRW-Oj.js";import"./PdfViewerSidebarHeader-C6ct0Zy7.js";import"./useBaseUiId-VJjRPmeN.js";import"./useControlled-DFdql7xi.js";import"./CompositeRoot-BFIbpMYC.js";import"./CompositeItem-50twUNd1.js";import"./ToolbarRootContext-XjIA09C4.js";import"./composite-BaAus-sy.js";import"./svgIconContainer-CrvnRU9F.js";import"./PdfViewerSearchBar-BYhbe8Ve.js";import"./chevron-up-BcMW1dnv.js";import"./chevron-down-CoqE-c4D.js";import"./cross-DkGiXpSw.js";import"./PdfViewerSidebar-CT75TUou.js";import"./index-CXgAIFbB.js";import"./index-DoyQeAs3.js";import"./index-GqFGt6-k.js";import"./PdfViewerToolbar--JMXTJvf.js";import"./Button-RvpRTGgQ.js";import"./chevron-right-BnSi-PwH.js";import"./Input-DLMSp_LN.js";import"./search-D7RgJWVi.js";import"./spin-CHecdjBF.js";import"./error-BkrZNArB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4370/fede8238051c40c87c5feb2bf6eb6b804c810e70/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
