import{j as n}from"./iframe-hXrfBBL8.js";import{B as e}from"./BasePdfViewer-BFPxnxB-.js";import"./preload-helper-Bqy1uZtT.js";import"./index-uBLz7gbD.js";import"./BasePdfViewer.module.css-Cw2Axy0f.js";import"./PdfViewerAnnotationLayer-C45PoEI1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHA6a79e.js";import"./PdfViewerOutlineSidebar-CuIQage_.js";import"./PdfViewerSidebarHeader-DVDfs0A9.js";import"./useBaseUiId-DXzMJ9Pu.js";import"./useControlled-BMHl3Ney.js";import"./CompositeRoot-ZTNjzHOg.js";import"./CompositeItem-CXVgDan9.js";import"./ToolbarRootContext-emE-minV.js";import"./composite-rXoGJEtm.js";import"./svgIconContainer-DT9-fJuD.js";import"./PdfViewerSearchBar-ox5VODlZ.js";import"./chevron-up-BjBS-LsO.js";import"./chevron-down-CbQ2WyOf.js";import"./cross-EKOWl3qR.js";import"./PdfViewerSidebar-DhjecNkJ.js";import"./index-DJPBx90d.js";import"./index-B5iR3PxV.js";import"./index-BwEWCMrj.js";import"./PdfViewerToolbar-CjS6iZrW.js";import"./Button-DA1M1QLW.js";import"./chevron-right-C2qqnwOI.js";import"./Input-DskUev2S.js";import"./search-ClLVbiXV.js";import"./spin-bRAnd_6F.js";import"./error-TXsyVqhB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4290/e7cb144ee3e8f962af7eab41f1e7fdf04b8f2ca3/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
