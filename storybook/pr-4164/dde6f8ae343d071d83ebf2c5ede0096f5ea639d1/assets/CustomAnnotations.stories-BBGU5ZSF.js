import{j as n}from"./iframe-BmAfqmVA.js";import{B as e}from"./BasePdfViewer-BrEBbW93.js";import"./preload-helper-Dw8BIZgV.js";import"./index-B62tNakJ.js";import"./BasePdfViewer.module.css-Da6BQw_i.js";import"./PdfViewerAnnotationLayer-iTZhbBO3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQR1-Oyn.js";import"./PdfViewerOutlineSidebar-rq2mXwDZ.js";import"./PdfViewerSidebarHeader-hX2pUJGp.js";import"./useBaseUiId-Ve_Ndjtk.js";import"./useControlled-DnfhwrQ9.js";import"./CompositeRoot-B18AJa_f.js";import"./CompositeItem-DXCwTfSl.js";import"./ToolbarRootContext-BGE7RlZq.js";import"./composite-D_ZO_GVZ.js";import"./svgIconContainer-DmqE13LP.js";import"./PdfViewerSearchBar-CZ-BU9B-.js";import"./chevron-up-ClOJJEG1.js";import"./chevron-down-BlYRgYBH.js";import"./cross-CIbg1fnp.js";import"./PdfViewerSidebar-iXLhMH8G.js";import"./index-K0yxoLEe.js";import"./index-dHY7n0A_.js";import"./index-fK0RIQv7.js";import"./PdfViewerToolbar-SFsk5xls.js";import"./Button-B6o09hJ9.js";import"./chevron-right-CbzOeMx-.js";import"./Input-Nk05MRQJ.js";import"./search-CXOC_cUa.js";import"./spin-CKOzbNiY.js";import"./error-Dmi1futd.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4164/dde6f8ae343d071d83ebf2c5ede0096f5ea639d1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
