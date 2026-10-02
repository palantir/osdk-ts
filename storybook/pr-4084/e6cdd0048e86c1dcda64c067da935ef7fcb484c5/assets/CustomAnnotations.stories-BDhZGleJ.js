import{j as n}from"./iframe-DopY1iFB.js";import{B as e}from"./BasePdfViewer-DQCdTJpo.js";import"./preload-helper-vT8POVDR.js";import"./index-CCfIWMGJ.js";import"./BasePdfViewer.module.css-haLPSHWn.js";import"./PdfViewerAnnotationLayer-DyAwaNzO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B4rFgybZ.js";import"./PdfViewerOutlineSidebar-DUm9G2QA.js";import"./PdfViewerSidebarHeader-BaM9X6T4.js";import"./useBaseUiId-z-VkK_Xn.js";import"./useControlled-ClnCU8CR.js";import"./CompositeRoot-1iYFDpbP.js";import"./CompositeItem-D98VU1_Q.js";import"./ToolbarRootContext-CFKLRcpG.js";import"./composite-BGFtTgn-.js";import"./svgIconContainer-DKL3lG_j.js";import"./PdfViewerSearchBar-BN1Znw-b.js";import"./chevron-up-D3orJZRH.js";import"./chevron-down-Cn7sl9Ua.js";import"./cross-y3ZfqzAA.js";import"./PdfViewerSidebar-CKG3IRCz.js";import"./index-BlOFqzc6.js";import"./index-CsUmhPmI.js";import"./index-CI3yqxJd.js";import"./PdfViewerToolbar-DIggjay8.js";import"./Button-BegRP6Wf.js";import"./chevron-right-DOmIAxJ1.js";import"./Input-DdA-yANI.js";import"./search-CxfNGXVV.js";import"./spin-WN7Y0rxt.js";import"./error-CTe9ttET.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4084/e6cdd0048e86c1dcda64c067da935ef7fcb484c5/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
