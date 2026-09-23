import{j as n}from"./iframe-D9P9JPnE.js";import{B as e}from"./BasePdfViewer-qZJjejnK.js";import"./preload-helper-CSJ4fD8P.js";import"./index-B0GYFgPw.js";import"./BasePdfViewer.module.css-BPlOFjhY.js";import"./PdfViewerAnnotationLayer-73TiWs7i.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-COs11H4W.js";import"./PdfViewerOutlineSidebar-BQHABCTN.js";import"./PdfViewerSidebarHeader-D4OER690.js";import"./useBaseUiId-LUhCiIEN.js";import"./useControlled-D8iAD7lp.js";import"./CompositeRoot-DXMfdk6L.js";import"./CompositeItem-Cn9ylTax.js";import"./ToolbarRootContext-D2FTFjj2.js";import"./composite-CwGSSnNe.js";import"./svgIconContainer-DE8FpRUq.js";import"./PdfViewerSearchBar-Bj8pBk7R.js";import"./chevron-up-CximDJv9.js";import"./chevron-down-aDiXlal5.js";import"./cross-Bk7QQAW7.js";import"./PdfViewerSidebar-DrOFVe_5.js";import"./index-CeKLzZT1.js";import"./index-BLSs3q_T.js";import"./index--Qtm9bZ-.js";import"./PdfViewerToolbar-DpHddylw.js";import"./Button-DQyP3ss1.js";import"./chevron-right-CVH7KDPv.js";import"./Input-BAe5Vta8.js";import"./search-DVgZ7um_.js";import"./spin-BV2Kk2Rb.js";import"./error-CRea6GYa.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4054/d0b3e37b5ee0a8cbb6181b4a0324e43be9607410/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
