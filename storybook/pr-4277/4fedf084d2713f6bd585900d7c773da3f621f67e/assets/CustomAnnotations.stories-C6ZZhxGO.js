import{j as n}from"./iframe-DFu988a9.js";import{B as e}from"./BasePdfViewer-jutUNdQI.js";import"./preload-helper-Ct8docw7.js";import"./index-DtOhOCRY.js";import"./BasePdfViewer.module.css-BdPyd1sC.js";import"./PdfViewerAnnotationLayer-9RzTOnru.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBZQUsCJ.js";import"./PdfViewerOutlineSidebar-BDCP9nV0.js";import"./PdfViewerSidebarHeader-B3qplKEH.js";import"./useBaseUiId-DfpfcE5B.js";import"./useControlled-yPSACah0.js";import"./CompositeRoot-zB1wsWJC.js";import"./CompositeItem-DmVR8xyg.js";import"./ToolbarRootContext-C15MGeq9.js";import"./composite-CqpVVzkR.js";import"./svgIconContainer-HyV1TJqY.js";import"./PdfViewerSearchBar-hLTVTg9Z.js";import"./chevron-up-C31YKC3J.js";import"./chevron-down-NXTIxDJ_.js";import"./cross-CTTF3yR9.js";import"./PdfViewerSidebar-kAfUm-0_.js";import"./index-Dsc2iZcF.js";import"./index-oZKnD5HE.js";import"./index-B1t2YxMt.js";import"./PdfViewerToolbar-DHQSCtu0.js";import"./Button-6zqiKmKY.js";import"./chevron-right-C2VuHgv6.js";import"./Input-BESoTzvx.js";import"./search-IsQI8GuL.js";import"./spin-CC-gpMsi.js";import"./error-DqAZcTwE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4277/4fedf084d2713f6bd585900d7c773da3f621f67e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
