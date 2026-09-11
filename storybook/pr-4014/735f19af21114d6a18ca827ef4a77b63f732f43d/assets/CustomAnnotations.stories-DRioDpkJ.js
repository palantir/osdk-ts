import{j as n}from"./iframe-Cf0qyGmO.js";import{B as e}from"./BasePdfViewer-CeM6Sz_v.js";import"./preload-helper-FPWMSdmp.js";import"./index-BgodPvXa.js";import"./BasePdfViewer.module.css-2BsNw86_.js";import"./PdfViewerAnnotationLayer-BlI_GT5J.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7NrMbCG.js";import"./PdfViewerOutlineSidebar-CbARuoy3.js";import"./PdfViewerSidebarHeader-CiIBxXH_.js";import"./useBaseUiId-BYXJoihF.js";import"./useControlled-BC5mDRRe.js";import"./CompositeRoot-DNYnltY6.js";import"./CompositeItem-Hv8dpGL2.js";import"./ToolbarRootContext-BEgrRK88.js";import"./composite-C4psFksR.js";import"./svgIconContainer-Cf6GYh8C.js";import"./PdfViewerSearchBar-BC0rhQ_6.js";import"./chevron-up-jTKpnbxO.js";import"./chevron-down-CciGsrf9.js";import"./cross-Dw3cMUV6.js";import"./PdfViewerSidebar-CTw7DxjQ.js";import"./index-DsFZ6bc6.js";import"./index-vIhG0vhZ.js";import"./index-_vrq9vUl.js";import"./PdfViewerToolbar-D9BhnOiV.js";import"./Button-QXRQZjdg.js";import"./chevron-right-D0-Bc27a.js";import"./Input-DeGiuUjm.js";import"./search-CjtKZYOm.js";import"./spin-DOfbekBQ.js";import"./error-CneFkgZH.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4014/735f19af21114d6a18ca827ef4a77b63f732f43d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
