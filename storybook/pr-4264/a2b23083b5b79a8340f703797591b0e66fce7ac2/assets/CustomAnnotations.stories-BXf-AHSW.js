import{j as n}from"./iframe-CWNCqF8m.js";import{B as e}from"./BasePdfViewer-Cmv5dtys.js";import"./preload-helper-CP42LvtG.js";import"./index-C_BFGzEW.js";import"./BasePdfViewer.module.css-D9z-5jN5.js";import"./PdfViewerAnnotationLayer-D-YRpAsO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-6SzHNSiN.js";import"./PdfViewerOutlineSidebar-ClgFyaAy.js";import"./PdfViewerSidebarHeader-iwd4vhju.js";import"./useBaseUiId-Cbti5FZV.js";import"./useControlled-COgqWOOu.js";import"./CompositeRoot-BUFS30GS.js";import"./CompositeItem-Bb-U7Uoq.js";import"./ToolbarRootContext-DH9Y5D6c.js";import"./composite-Bv2UjceH.js";import"./svgIconContainer-BD1yvJod.js";import"./PdfViewerSearchBar-CvkXYiGu.js";import"./chevron-up-B-9EQSwW.js";import"./chevron-down-CKxmHC3q.js";import"./cross-Gf4Gi1Zs.js";import"./PdfViewerSidebar-D227jL5S.js";import"./index-BVR21Q-U.js";import"./index-Q_B2Rqgi.js";import"./index-BtEMoLG0.js";import"./PdfViewerToolbar-CEOzG1br.js";import"./Button-DyTPsUeB.js";import"./chevron-right-DefV646S.js";import"./Input-CnULVynl.js";import"./search-D8ew1nZH.js";import"./spin-CZeG3WX6.js";import"./error-BFVZCDZ0.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4264/a2b23083b5b79a8340f703797591b0e66fce7ac2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
