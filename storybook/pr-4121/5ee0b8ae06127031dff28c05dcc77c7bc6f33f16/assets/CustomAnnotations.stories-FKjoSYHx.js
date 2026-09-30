import{j as n}from"./iframe-BLOGWzes.js";import{B as e}from"./BasePdfViewer-WywpPg4x.js";import"./preload-helper-DKYPYdJ1.js";import"./index-Dw_R0R3u.js";import"./BasePdfViewer.module.css-B6JEMSeQ.js";import"./PdfViewerAnnotationLayer-QrOFNyzM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DnyA04-M.js";import"./PdfViewerOutlineSidebar-CN1JORtV.js";import"./PdfViewerSidebarHeader-ZGtFc6vU.js";import"./useBaseUiId-0dkTavyr.js";import"./useControlled-sfZuFzcU.js";import"./CompositeRoot-DOVCCxU2.js";import"./CompositeItem-B6ZRSaDZ.js";import"./ToolbarRootContext-Y2iZ9Ujq.js";import"./composite-BaecbUIv.js";import"./svgIconContainer-DOUGpiyN.js";import"./PdfViewerSearchBar-toa8L46g.js";import"./chevron-up-DgAUgNiJ.js";import"./chevron-down-Eag7e6pI.js";import"./cross-81MWidH4.js";import"./PdfViewerSidebar-BqHPy39_.js";import"./index-BIwD5Jbf.js";import"./index-C_xx75lm.js";import"./index-CURDKWBa.js";import"./PdfViewerToolbar-DJXHAIIu.js";import"./Button-BCMvPzPq.js";import"./chevron-right-CSKabfRv.js";import"./Input-BWx5Xf6Z.js";import"./search-DLp12F_x.js";import"./spin-CLve8YZ7.js";import"./error-CiKKwT6x.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4121/5ee0b8ae06127031dff28c05dcc77c7bc6f33f16/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
