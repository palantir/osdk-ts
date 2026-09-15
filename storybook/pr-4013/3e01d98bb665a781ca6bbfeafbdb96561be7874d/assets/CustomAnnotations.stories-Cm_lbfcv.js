import{j as n}from"./iframe-BlKCTUed.js";import{B as e}from"./BasePdfViewer-DWTmTDNO.js";import"./preload-helper-BUGYiWCP.js";import"./index-CI0skb4B.js";import"./BasePdfViewer.module.css-BPCnBBoN.js";import"./PdfViewerAnnotationLayer-CehjDM1c.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2T79Y5t.js";import"./PdfViewerOutlineSidebar-BOpOMxLQ.js";import"./PdfViewerSidebarHeader-BYkEST8M.js";import"./useBaseUiId-DkP_imTM.js";import"./useControlled-7Fk4n3DI.js";import"./CompositeRoot-CHoCXPs8.js";import"./CompositeItem-CV5UwX2b.js";import"./ToolbarRootContext-BHdJXOoh.js";import"./composite-DiiB6odo.js";import"./svgIconContainer-1UB6FZGc.js";import"./PdfViewerSearchBar-BgV2oTjG.js";import"./chevron-up-CgpGYa5r.js";import"./chevron-down-FWs3P9jd.js";import"./cross-CqaO5DBE.js";import"./PdfViewerSidebar-1ulrz3TU.js";import"./index-Cg0fRxTo.js";import"./index-DxXrW0wp.js";import"./index-DDp_OGDu.js";import"./PdfViewerToolbar-DTsn6SOR.js";import"./Button-3Efar3GG.js";import"./chevron-right-Cfa0ujWn.js";import"./Input-B33yNZZn.js";import"./search-CVcVTR0T.js";import"./spin-ews_yTqW.js";import"./error-D-1ezCIE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4013/3e01d98bb665a781ca6bbfeafbdb96561be7874d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
