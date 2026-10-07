import{j as n}from"./iframe-Dsupwakr.js";import{B as e}from"./BasePdfViewer-Dl7qt72L.js";import"./preload-helper-CR7mXLCL.js";import"./index-CkpgR3fu.js";import"./BasePdfViewer.module.css-Cl5p0cjK.js";import"./PdfViewerAnnotationLayer-Ba2Z0Fb4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-m6xiEz5E.js";import"./PdfViewerOutlineSidebar-CpHSWZcz.js";import"./PdfViewerSidebarHeader-CaKuvT3H.js";import"./useBaseUiId-DzCfcDkQ.js";import"./useControlled-CqadE3GD.js";import"./CompositeRoot-AbTQ-SnI.js";import"./CompositeItem-B9L7nJBI.js";import"./ToolbarRootContext-BtvPE-us.js";import"./composite-HdCWnL8f.js";import"./svgIconContainer-C-Aw8Ccc.js";import"./PdfViewerSearchBar-C_00UvSo.js";import"./chevron-up-CVk7Qd1e.js";import"./chevron-down-CDVIUa1b.js";import"./cross-CWb-HvPA.js";import"./PdfViewerSidebar-CpaglXf1.js";import"./index-J7JFMYQD.js";import"./index-B_g_AMfh.js";import"./index-ChctX4zI.js";import"./PdfViewerToolbar-B9-pIVRZ.js";import"./Button-D1tcxnZe.js";import"./chevron-right-BJuzsk5N.js";import"./Input-C5vpLtnd.js";import"./search-B3WEXmh0.js";import"./spin-DREUdLDX.js";import"./error-CLndc-8a.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4167/43981b3a87c15b3d21cebf611f319c7a4145dfdd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
