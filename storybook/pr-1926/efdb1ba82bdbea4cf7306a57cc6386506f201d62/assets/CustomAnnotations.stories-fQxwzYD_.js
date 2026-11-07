import{j as n}from"./iframe-sxtnZ__3.js";import{B as e}from"./BasePdfViewer-Jgn_sC7y.js";import"./preload-helper-DN2WWHpq.js";import"./index-B43ZU6C6.js";import"./BasePdfViewer.module.css-hZs3017O.js";import"./PdfViewerAnnotationLayer-auc3Zvk3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-HNetP7ur.js";import"./PdfViewerOutlineSidebar-D3-VxCVi.js";import"./PdfViewerSidebarHeader-CFLz5Zsa.js";import"./useBaseUiId-Ba5m3KpF.js";import"./useControlled-qu9E_ZvC.js";import"./CompositeRoot-BcWDasHc.js";import"./CompositeItem-CQpfGOEN.js";import"./ToolbarRootContext-C88ng33h.js";import"./composite-C8kR_XfL.js";import"./svgIconContainer-p2RMTI7a.js";import"./PdfViewerSearchBar-B3akp2PK.js";import"./chevron-up-DXf8uJek.js";import"./chevron-down-Dv8O8W9l.js";import"./cross-59RLUben.js";import"./PdfViewerSidebar-D1iSGmJI.js";import"./index-DmmZjvsT.js";import"./index-BFg6-CgA.js";import"./index-CgOTndjm.js";import"./PdfViewerToolbar-bR7ngpXx.js";import"./Button-BMtY7X7F.js";import"./chevron-right-Dp-RmUHA.js";import"./Input-BXAWaOKi.js";import"./search-t4p9zjVy.js";import"./spin-CvUxTePS.js";import"./error-B8i5ABXk.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1926/efdb1ba82bdbea4cf7306a57cc6386506f201d62/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
