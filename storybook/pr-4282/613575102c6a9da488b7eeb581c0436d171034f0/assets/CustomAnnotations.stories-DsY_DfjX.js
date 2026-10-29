import{j as n}from"./iframe-BgXQ_2ZQ.js";import{B as e}from"./BasePdfViewer-DIYyHK6e.js";import"./preload-helper-BidOVzf2.js";import"./index-Du7DARA2.js";import"./BasePdfViewer.module.css-C9aNIRk9.js";import"./PdfViewerAnnotationLayer-CrVlHF5I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kPH7afgF.js";import"./PdfViewerOutlineSidebar-sgxXc-qj.js";import"./PdfViewerSidebarHeader-DqnX3AYH.js";import"./useBaseUiId-BDBZknBQ.js";import"./useControlled-BJTO4Tz0.js";import"./CompositeRoot-CDxZD_lV.js";import"./CompositeItem-BoTWi4na.js";import"./ToolbarRootContext-DnYkqago.js";import"./composite-DkGW9dlU.js";import"./svgIconContainer-Dt6fkfKI.js";import"./PdfViewerSearchBar-DERNs7BK.js";import"./chevron-up-DOlBMi8n.js";import"./chevron-down-xbEb9_oS.js";import"./cross-DjR1Bdqm.js";import"./PdfViewerSidebar-CHRzBpdx.js";import"./index-BR5r7qBw.js";import"./index-BrroAixZ.js";import"./index-BNVSiMmU.js";import"./PdfViewerToolbar-DwjQRltg.js";import"./Button-DyzWkyRc.js";import"./chevron-right-DgbYNyJ2.js";import"./Input-snLmBrpI.js";import"./search-DUa1f9S-.js";import"./spin-Cmg6tD_q.js";import"./error-DWfidi70.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4282/613575102c6a9da488b7eeb581c0436d171034f0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
