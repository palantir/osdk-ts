import{j as n}from"./iframe-BVyCc2AC.js";import{B as e}from"./BasePdfViewer-BmfO84Ng.js";import"./preload-helper--HBo1d6L.js";import"./index-BNzHGqwC.js";import"./BasePdfViewer.module.css-CGKFcFd9.js";import"./PdfViewerAnnotationLayer-DGEl-Vt4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHlagkWN.js";import"./PdfViewerOutlineSidebar-CiS_zJKU.js";import"./PdfViewerSidebarHeader-D6-D_J6E.js";import"./useBaseUiId-DiffXzRm.js";import"./useControlled-C2MZaBz1.js";import"./CompositeRoot-CzbGDq-Q.js";import"./CompositeItem-C3G54MgE.js";import"./ToolbarRootContext-DsUmoyrJ.js";import"./composite-CBp6hdMU.js";import"./svgIconContainer-C1dTG25d.js";import"./PdfViewerSearchBar-YnEkCG_O.js";import"./chevron-up-CM9y3p6w.js";import"./chevron-down-ClvvnW1g.js";import"./cross-Ch6pWJlm.js";import"./PdfViewerSidebar-D8sdFTD0.js";import"./index-cmuB7ZqK.js";import"./index-BevvX3YQ.js";import"./index-x0mWFteh.js";import"./PdfViewerToolbar-D6RFNyFP.js";import"./Button-BRNew1Yr.js";import"./chevron-right-C6MHH1lP.js";import"./Input-BZeDxcIX.js";import"./search-Dykn9IV3.js";import"./spin-Bs6_7YSH.js";import"./error-QOEmR757.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3925/ea1dbb57cc9c73c5c6ec45d93c71ed95024ae6a2/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
