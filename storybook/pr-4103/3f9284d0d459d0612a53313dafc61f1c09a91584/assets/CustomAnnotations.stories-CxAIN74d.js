import{j as n}from"./iframe-DWfJ7zGz.js";import{B as e}from"./BasePdfViewer-DQEh5Qxy.js";import"./preload-helper-BLrTx2bV.js";import"./index-gWYSOhKn.js";import"./BasePdfViewer.module.css-wWh3ZxS_.js";import"./PdfViewerAnnotationLayer-BZWASSJU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-7SwP9Lsr.js";import"./PdfViewerOutlineSidebar-CEcpxIrR.js";import"./PdfViewerSidebarHeader-C7rb-LsU.js";import"./useBaseUiId-R5Nwqwa3.js";import"./useControlled-x_cvzMnI.js";import"./CompositeRoot-if2jPn0_.js";import"./CompositeItem-Db-3OHhb.js";import"./ToolbarRootContext-Dw2-n8FY.js";import"./composite-CRrOsq3D.js";import"./svgIconContainer-DSpgm6ur.js";import"./PdfViewerSearchBar-DLkAx-vv.js";import"./chevron-up-CBDb6XWY.js";import"./chevron-down-B0X1iKQC.js";import"./cross-osdHHFE1.js";import"./PdfViewerSidebar-BMpN6SN_.js";import"./index-1zb5OrbF.js";import"./index-CjmeahRK.js";import"./index-B26u0c0l.js";import"./PdfViewerToolbar-DAviNAlS.js";import"./Button-D-n8pDY3.js";import"./chevron-right-D4tSTkbF.js";import"./Input-nyG97nhE.js";import"./search-tI2FUc7S.js";import"./spin-xixPXlQq.js";import"./error-DqCKC8-V.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4103/3f9284d0d459d0612a53313dafc61f1c09a91584/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
