import{j as n}from"./iframe-J30hPVdk.js";import{B as e}from"./BasePdfViewer-JJHvgmpg.js";import"./preload-helper-21pBjwGc.js";import"./index-DzFJcvqE.js";import"./BasePdfViewer.module.css-eTEN7cF7.js";import"./PdfViewerAnnotationLayer-BWWg0QHR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-L-ntsw2x.js";import"./PdfViewerOutlineSidebar-Co-uCZYa.js";import"./PdfViewerSidebarHeader-CIcbzJT4.js";import"./useBaseUiId-BPzj-rci.js";import"./useControlled-CGDYKM6L.js";import"./CompositeRoot-BbFAycp0.js";import"./CompositeItem-Jmu2r9JC.js";import"./ToolbarRootContext-ClVL2vmD.js";import"./composite-BMEMfwlO.js";import"./svgIconContainer-Bmpr-YG-.js";import"./PdfViewerSearchBar-C13kQkA4.js";import"./chevron-up-B4H5o32y.js";import"./chevron-down-CdNGoo9Q.js";import"./cross-1ilXjfTr.js";import"./PdfViewerSidebar-BtELUx5w.js";import"./index-BLPazZJs.js";import"./index-B1uCCcyj.js";import"./index-D8MmmnXz.js";import"./PdfViewerToolbar-8LlcW6xw.js";import"./Button-9RAeKDxl.js";import"./chevron-right-DG3Myan2.js";import"./Input-DW9kemBa.js";import"./search-CBu-pF0G.js";import"./spin-DFo3tP3u.js";import"./error-BSLpMKqj.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4287/52f0a52b8008366b0affd7a03e7c1a17c9d0a418/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
