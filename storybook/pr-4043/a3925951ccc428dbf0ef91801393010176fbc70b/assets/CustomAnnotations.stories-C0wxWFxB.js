import{j as n}from"./iframe-DRBbLQEP.js";import{B as e}from"./BasePdfViewer-Dor6xLYu.js";import"./preload-helper-Bt1-OzgM.js";import"./index-DKGchVF5.js";import"./BasePdfViewer.module.css-B0WfrqKM.js";import"./PdfViewerAnnotationLayer-DHUw7zJi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DCzb_tQZ.js";import"./PdfViewerOutlineSidebar-CTAm9wea.js";import"./PdfViewerSidebarHeader-C09__M-4.js";import"./useBaseUiId-0Fcyn-Yx.js";import"./useControlled-D-0ahwbd.js";import"./CompositeRoot-B4P7Z91p.js";import"./CompositeItem-DHU6LUkY.js";import"./ToolbarRootContext-Dq5VhD1u.js";import"./composite-BQ1GsMvw.js";import"./svgIconContainer-DUoraq0-.js";import"./PdfViewerSearchBar-CL9t3vpB.js";import"./chevron-up-MpGDbAku.js";import"./chevron-down-D9sfivXL.js";import"./cross-CUrCvhqT.js";import"./PdfViewerSidebar-ct34gRd4.js";import"./index-BFx1Z8Pw.js";import"./index-6P3gaHhW.js";import"./index-DRFL7mOG.js";import"./PdfViewerToolbar-BVhGvaUk.js";import"./Button-YsHjEWcc.js";import"./chevron-right-B33YkINH.js";import"./Input-DCqgylfG.js";import"./search-DM25wUgq.js";import"./spin-CMwvnnXL.js";import"./error-Bly5Bi76.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4043/a3925951ccc428dbf0ef91801393010176fbc70b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
