import{j as n}from"./iframe-D3RqEcTg.js";import{B as e}from"./BasePdfViewer-CsVTwVMr.js";import"./preload-helper-DEJIs2kk.js";import"./index-Cbcna1KE.js";import"./BasePdfViewer.module.css-BinWDh28.js";import"./PdfViewerAnnotationLayer-YHs2CN8b.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ccRGaMH2.js";import"./PdfViewerOutlineSidebar-02UL0oSl.js";import"./PdfViewerSidebarHeader-CnS74iWw.js";import"./useBaseUiId-DzPouJ0p.js";import"./useControlled-CImu19gq.js";import"./CompositeRoot-Byhzyybf.js";import"./CompositeItem-DtKWkFxx.js";import"./ToolbarRootContext-DAdYN5ZS.js";import"./composite-LUqhuSI5.js";import"./svgIconContainer-BFc_5UUB.js";import"./PdfViewerSearchBar-V2bHDM6n.js";import"./chevron-up-CQ5fimvW.js";import"./chevron-down-CejxcKWv.js";import"./cross-CX1s17MX.js";import"./PdfViewerSidebar-BBXddMsI.js";import"./index-B6gngHYt.js";import"./index-C44NzcrV.js";import"./index-C2bdh9HG.js";import"./PdfViewerToolbar-BIMmt0Km.js";import"./Button-BcgwRa4F.js";import"./chevron-right-C6Xt94_8.js";import"./Input-D6dyl9HO.js";import"./search-CqjQ6sEq.js";import"./spin-D8m1fIOX.js";import"./error-CTTKBYvP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4284/db414c6074126e9c19abf6c5dbe2a20b918ae1c3/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
