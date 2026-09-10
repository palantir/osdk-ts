import{j as n}from"./iframe-DF9DX5mw.js";import{B as e}from"./BasePdfViewer-BbX3SchY.js";import"./preload-helper-DVnQ6duR.js";import"./index-BmuLmEaC.js";import"./BasePdfViewer.module.css-DnfuBeF3.js";import"./PdfViewerAnnotationLayer-ClU03A1p.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BuHrcxuC.js";import"./PdfViewerOutlineSidebar-Dlgj20H-.js";import"./PdfViewerSidebarHeader-DU7eEjZB.js";import"./useBaseUiId-Z5YEKe02.js";import"./useControlled-CD5ggXKk.js";import"./CompositeRoot-CmRSkQS-.js";import"./CompositeItem-MLQ_GRVe.js";import"./ToolbarRootContext-Cv5YqZmZ.js";import"./composite-DOTEZs57.js";import"./svgIconContainer-BnUXZNAT.js";import"./PdfViewerSearchBar-BNxtKkGr.js";import"./chevron-up-DPV2hUsw.js";import"./chevron-down-YPHBShAj.js";import"./cross-CNVJX-R0.js";import"./PdfViewerSidebar-rec3fZ9o.js";import"./index-CME9wlOT.js";import"./index-C_Rqkv-M.js";import"./index-BougzNP_.js";import"./PdfViewerToolbar-D11c2lGW.js";import"./Button-fzptvapi.js";import"./chevron-right-CzBjljxo.js";import"./Input-XPtGFq-8.js";import"./search-C_UKWj2f.js";import"./spin-DHc3mk9S.js";import"./error-CX7q-MIV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3908/787f7df1482cc716bacba4857ccd64fd4b9138d7/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
