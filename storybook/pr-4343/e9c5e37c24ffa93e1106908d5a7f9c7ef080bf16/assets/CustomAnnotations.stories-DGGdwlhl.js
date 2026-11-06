import{j as n}from"./iframe-CMiiEF1b.js";import{B as e}from"./BasePdfViewer-D1nsEaFw.js";import"./preload-helper-2rscAx0o.js";import"./index-DRZQ1ZuZ.js";import"./BasePdfViewer.module.css-DJLw7y14.js";import"./PdfViewerAnnotationLayer-BUTz1aTf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cl5GNgPP.js";import"./PdfViewerOutlineSidebar-C4l17w4-.js";import"./PdfViewerSidebarHeader-CD-WRCtu.js";import"./useBaseUiId-EgPXNEt2.js";import"./useControlled-CaNRytWe.js";import"./CompositeRoot-CoBz8IBC.js";import"./CompositeItem-D4B_FL8U.js";import"./ToolbarRootContext-UxomdOwp.js";import"./composite-DqjfxZG9.js";import"./svgIconContainer-DmZ8fHpX.js";import"./PdfViewerSearchBar-Cl5y3wHi.js";import"./chevron-up-CyHrqJq5.js";import"./chevron-down-BtRtOYI2.js";import"./cross-DmjzAf0-.js";import"./PdfViewerSidebar-CopQDTqn.js";import"./index-DVpvfzZ8.js";import"./index-goWiuive.js";import"./index-Dtqd3tNX.js";import"./PdfViewerToolbar-B1dCVbY2.js";import"./Button-CDnIVBQ_.js";import"./chevron-right-Dxz2Xbw7.js";import"./Input-B0ji1_35.js";import"./search-0aDkREOD.js";import"./spin-C1eWqz2U.js";import"./error-IdCbvwbX.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4343/e9c5e37c24ffa93e1106908d5a7f9c7ef080bf16/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
