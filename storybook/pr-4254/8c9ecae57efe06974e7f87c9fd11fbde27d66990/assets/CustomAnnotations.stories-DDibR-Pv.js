import{j as n}from"./iframe-CZ6tfr7m.js";import{B as e}from"./BasePdfViewer-Cn21s43F.js";import"./preload-helper-CkfrOY1H.js";import"./index-DLNBYVnV.js";import"./BasePdfViewer.module.css-BcWUtBsH.js";import"./PdfViewerAnnotationLayer-CAD5djnq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_80a8SN.js";import"./PdfViewerOutlineSidebar-DNjeOXhH.js";import"./PdfViewerSidebarHeader-cRV39C_F.js";import"./useBaseUiId-Cj6LeXHN.js";import"./useControlled-BvU1uW5X.js";import"./CompositeRoot-Crsul0J8.js";import"./CompositeItem-Cl5PbTL3.js";import"./ToolbarRootContext-CRrNmffx.js";import"./composite-BbwXcuXn.js";import"./svgIconContainer-Dvg9KYVw.js";import"./PdfViewerSearchBar-RByMXIk8.js";import"./chevron-up-DRnXouIx.js";import"./chevron-down-DVcYPRuD.js";import"./cross-CPXyH5jR.js";import"./PdfViewerSidebar-qbi7rhHG.js";import"./index-DtElecf-.js";import"./index-DeteMldf.js";import"./index-BfO80qBP.js";import"./PdfViewerToolbar-FB3PCddW.js";import"./Button-3RbWO35b.js";import"./chevron-right-DDRyC-zb.js";import"./Input-BkVAz5rQ.js";import"./search-ztvSGVr9.js";import"./spin-CeL5cYXp.js";import"./error-d7pkadgS.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4254/8c9ecae57efe06974e7f87c9fd11fbde27d66990/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
