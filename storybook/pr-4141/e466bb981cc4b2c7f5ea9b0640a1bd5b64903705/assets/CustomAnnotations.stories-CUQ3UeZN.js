import{j as n}from"./iframe-70ZuGjkJ.js";import{B as e}from"./BasePdfViewer-CQDx_f2f.js";import"./preload-helper-DK4xKHY4.js";import"./index-CckhOj8-.js";import"./BasePdfViewer.module.css-CrONmyUz.js";import"./PdfViewerAnnotationLayer-BPRLUmtE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Db60cZoB.js";import"./PdfViewerOutlineSidebar-C1do2odB.js";import"./PdfViewerSidebarHeader-S1vc3HYp.js";import"./useBaseUiId-CqgzcpTd.js";import"./useControlled-0e2XrUt8.js";import"./CompositeRoot-B4pg0K7R.js";import"./CompositeItem-A9SMjz1N.js";import"./ToolbarRootContext-DmAs8e4b.js";import"./composite-E4mw46H8.js";import"./svgIconContainer-CtTs4nyb.js";import"./PdfViewerSearchBar-CjwnFq7M.js";import"./chevron-up-Bc4KJtHs.js";import"./chevron-down-BPIjaHnC.js";import"./cross-CO8zitM2.js";import"./PdfViewerSidebar-B3yaQpkd.js";import"./index-C1hIfcQ2.js";import"./index-C6_lfWdp.js";import"./index-CDzhFE3P.js";import"./PdfViewerToolbar-PRIEPupz.js";import"./Button-D2KYgMT_.js";import"./chevron-right-CL3r_QNP.js";import"./Input-sBtVPl75.js";import"./search-_UcRnrjw.js";import"./spin-C1q-OLZe.js";import"./error-Ho0rrjia.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4141/e466bb981cc4b2c7f5ea9b0640a1bd5b64903705/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
