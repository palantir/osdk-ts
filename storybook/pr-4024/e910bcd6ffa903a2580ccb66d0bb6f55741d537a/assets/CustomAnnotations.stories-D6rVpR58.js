import{j as n}from"./iframe-CMAdZ-tl.js";import{B as e}from"./BasePdfViewer-1dxenqD5.js";import"./preload-helper-BCEvkaTh.js";import"./index-uZXDV4-c.js";import"./BasePdfViewer.module.css-DKxwP3UL.js";import"./PdfViewerAnnotationLayer-D9NRdaf3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DK95keeB.js";import"./PdfViewerOutlineSidebar-J5vonr7X.js";import"./PdfViewerSidebarHeader-YviJqUcb.js";import"./useBaseUiId-C6a-nIiQ.js";import"./useControlled-BNZjX3EY.js";import"./CompositeRoot-DPqOwPLX.js";import"./CompositeItem-WbzOgrFX.js";import"./ToolbarRootContext-UfxXSGbE.js";import"./composite-hUzc6DpG.js";import"./svgIconContainer-BGo4Ffmi.js";import"./PdfViewerSearchBar-CYMY7KZO.js";import"./chevron-up-BOhlPChP.js";import"./chevron-down--0eNTL5v.js";import"./cross-TecNFToN.js";import"./PdfViewerSidebar-Dy6sGZU8.js";import"./index-BkytFj73.js";import"./index-DqPGLAB8.js";import"./index-Bi9d8J52.js";import"./PdfViewerToolbar-tbwfuquw.js";import"./Button-CMbZ2dfd.js";import"./chevron-right-Bz7D4sOM.js";import"./Input-EDICR5v8.js";import"./search-Bbf0CQIG.js";import"./spin-6bJbRsLH.js";import"./error-CKKGLKp7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4024/e910bcd6ffa903a2580ccb66d0bb6f55741d537a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
