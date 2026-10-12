import{j as n}from"./iframe-DpYBlUf6.js";import{B as e}from"./BasePdfViewer-5-eKaed1.js";import"./preload-helper-aJL6Jgcy.js";import"./index-DG12qFyq.js";import"./BasePdfViewer.module.css-Btf9DWVQ.js";import"./PdfViewerAnnotationLayer-C4hc5g3F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DtXLCq7x.js";import"./PdfViewerOutlineSidebar-HCCqbbqy.js";import"./PdfViewerSidebarHeader-Bu3ReIMI.js";import"./useBaseUiId-Cvpk5u0b.js";import"./useControlled-BzCwoTTi.js";import"./CompositeRoot-C4FRlMLp.js";import"./CompositeItem-3SIjESMP.js";import"./ToolbarRootContext-D5uSuuYr.js";import"./composite-kZPGPCkC.js";import"./svgIconContainer-BNnaw46F.js";import"./PdfViewerSearchBar-CmCRVHBY.js";import"./chevron-up-cEkFZZuZ.js";import"./chevron-down-DiWPSqGR.js";import"./cross-hvj-E3FQ.js";import"./PdfViewerSidebar-CeuVI1Ol.js";import"./index-DvRXLSHl.js";import"./index-Zn6BbNql.js";import"./index-gjgAmiRP.js";import"./PdfViewerToolbar-CQ7D_A7h.js";import"./Button-OjQdDHcR.js";import"./chevron-right-C6iXKlAO.js";import"./Input-BuqKJ0cI.js";import"./search-B-2FwTug.js";import"./spin-C30_OflA.js";import"./error-_sVszbe4.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4202/b27ff736d4eb8216c59f54ffe6aff46afef5059c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
