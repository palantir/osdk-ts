import{j as n}from"./iframe-Cbv5zznp.js";import{B as e}from"./BasePdfViewer-xRi2yayD.js";import"./preload-helper-DqfcifpH.js";import"./index-D2aFmDJC.js";import"./BasePdfViewer.module.css-KtH3kn5F.js";import"./PdfViewerAnnotationLayer-eNr8dX5u.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D0jf8GPR.js";import"./PdfViewerOutlineSidebar-uqwcmpyk.js";import"./PdfViewerSidebarHeader-CKv2wDUs.js";import"./useBaseUiId-CbroaXAW.js";import"./useControlled-BoBGM7g4.js";import"./CompositeRoot-DdtBOEpx.js";import"./CompositeItem-CWAeob4t.js";import"./ToolbarRootContext-CLkLs3Pj.js";import"./composite-DJiR_4ty.js";import"./svgIconContainer-BWSQzhSR.js";import"./PdfViewerSearchBar-CYksNUiR.js";import"./chevron-up-C98UExzO.js";import"./chevron-down-DHe7MR3-.js";import"./cross-C8I2PI6u.js";import"./PdfViewerSidebar-Ip1lAgvU.js";import"./index-B-Z3zT8c.js";import"./index-CCzNRBOI.js";import"./index-5hCgKDxn.js";import"./PdfViewerToolbar-XZYr--dk.js";import"./Button-Tfyx2Upy.js";import"./chevron-right-5ZkhHG70.js";import"./Input-DmJSS6xV.js";import"./search-CH6DBRTT.js";import"./spin-CwXaVdlZ.js";import"./error-DnP2O5g6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4011/fecab971ea727c9fc98974a8bff3f6a0e8f0b25c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
