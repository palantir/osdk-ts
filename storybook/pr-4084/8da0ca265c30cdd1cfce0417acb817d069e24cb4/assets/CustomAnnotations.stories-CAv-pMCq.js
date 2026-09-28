import{j as n}from"./iframe-C52xRtUi.js";import{B as e}from"./BasePdfViewer-jPwigKU-.js";import"./preload-helper-VoitBlG4.js";import"./index-C7u1bqdX.js";import"./BasePdfViewer.module.css-BjDVsd-h.js";import"./PdfViewerAnnotationLayer-Cgi26BNS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BWTx_Glr.js";import"./PdfViewerOutlineSidebar-NzMyJTPE.js";import"./PdfViewerSidebarHeader-CYBvkOjs.js";import"./useBaseUiId-DJafaxQ0.js";import"./useControlled-DX7cxw4N.js";import"./CompositeRoot-CW0AwatW.js";import"./CompositeItem-DAwBJWeq.js";import"./ToolbarRootContext-CVcuXFio.js";import"./composite-B5eZIT_T.js";import"./svgIconContainer-BCVv-_g-.js";import"./PdfViewerSearchBar-5yPVLq6j.js";import"./chevron-up-CwlSNKkd.js";import"./chevron-down-C2zgY8nG.js";import"./cross-a7kzaFsa.js";import"./PdfViewerSidebar-DEFuDzg9.js";import"./index-1YKdHDT0.js";import"./index-DzK9GJWU.js";import"./index-pyzUPPmp.js";import"./PdfViewerToolbar-R6tgSILh.js";import"./Button-B-u0RyTK.js";import"./chevron-right-biDNbaiV.js";import"./Input-BgQuQrPL.js";import"./search-dgHR1_2q.js";import"./spin-9Rto8oDb.js";import"./error-COI_mt5G.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4084/8da0ca265c30cdd1cfce0417acb817d069e24cb4/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
