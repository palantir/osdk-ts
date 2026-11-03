import{j as n}from"./iframe-C5CLXfWS.js";import{B as e}from"./BasePdfViewer-_g3tN5xE.js";import"./preload-helper-CmQDAWyb.js";import"./index-DtGlOU-M.js";import"./BasePdfViewer.module.css-uB8SJRXU.js";import"./PdfViewerAnnotationLayer-CeZXhLwK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-irskzhWU.js";import"./PdfViewerOutlineSidebar-DoUM-BQ7.js";import"./PdfViewerSidebarHeader-BMo5pq5n.js";import"./useBaseUiId-CqeeK3OI.js";import"./useControlled-CzKtgw0j.js";import"./CompositeRoot-D3v7mylM.js";import"./CompositeItem-Dx1-4fNK.js";import"./ToolbarRootContext-Bvt9zfPy.js";import"./composite-B3s1Z_B-.js";import"./svgIconContainer-BIzzh223.js";import"./PdfViewerSearchBar-CXrwUxP2.js";import"./chevron-up-Ceu2kqXI.js";import"./chevron-down-k0OiGtOZ.js";import"./cross-B3o49gy1.js";import"./PdfViewerSidebar-DqVFdzZL.js";import"./index-CaADRcIm.js";import"./index-BXJypcxy.js";import"./index-DGZrjFba.js";import"./PdfViewerToolbar-B7sftNxM.js";import"./Button-W3Mp6JlA.js";import"./chevron-right-Bq5PMKem.js";import"./Input-D-cxIIFp.js";import"./search-aAg3Ft0P.js";import"./spin-DEWpdMTN.js";import"./error-aTWH99uz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4286/15bc611b53da802ac8dd03a846280ed530b7bdff/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
