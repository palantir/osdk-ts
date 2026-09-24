import{j as n}from"./iframe-0nbFd4Up.js";import{B as e}from"./BasePdfViewer-CnFoeYuK.js";import"./preload-helper-C9c2Zh8f.js";import"./index-DwMakAAg.js";import"./BasePdfViewer.module.css-Ckb6rEn9.js";import"./PdfViewerAnnotationLayer-DI0GItR4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0tovWLs.js";import"./PdfViewerOutlineSidebar-Cw_k7XVf.js";import"./PdfViewerSidebarHeader-B96Ztgdc.js";import"./useBaseUiId-hHYCbJGR.js";import"./useControlled-Gi7J51jw.js";import"./CompositeRoot-DeccQZNp.js";import"./CompositeItem-C9hOZqfz.js";import"./ToolbarRootContext-B0NC_oEf.js";import"./composite-BsbtETqs.js";import"./svgIconContainer-CfgrNU9r.js";import"./PdfViewerSearchBar-B_XMBn3K.js";import"./chevron-up-Cx5pxXPE.js";import"./chevron-down-BNwXq3g8.js";import"./cross-DNUyMOOH.js";import"./PdfViewerSidebar-ay0gEFB9.js";import"./index-BxiA765S.js";import"./index-5aC9zCcy.js";import"./index-CS8KPTZX.js";import"./PdfViewerToolbar-C_USScj6.js";import"./Button-Cn_l7fEs.js";import"./chevron-right-C3-rjz1K.js";import"./Input-YuE0Ls83.js";import"./search-DDtr797p.js";import"./spin-w4FWlgES.js";import"./error-CFI9j2MF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4084/2defbb091bbc98dd51ae80db958d09fd131fa466/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
