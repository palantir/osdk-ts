import{j as n}from"./iframe-BpjAczHY.js";import{B as e}from"./BasePdfViewer-Bs-PYHqW.js";import"./preload-helper-n775iZGy.js";import"./index-B865hR58.js";import"./BasePdfViewer.module.css-CdCa7SpC.js";import"./PdfViewerAnnotationLayer-Cvba9I0T.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-smPM5xw7.js";import"./PdfViewerOutlineSidebar-DT9fWmfF.js";import"./PdfViewerSidebarHeader-BfFPs0_q.js";import"./useBaseUiId-99hOwMJj.js";import"./useControlled-DGtH5z0Q.js";import"./CompositeRoot-BExAPuHl.js";import"./CompositeItem-DG1i5uV0.js";import"./ToolbarRootContext-BQn0Rtks.js";import"./composite-Dz8fJC5u.js";import"./svgIconContainer-C3jJhmpt.js";import"./PdfViewerSearchBar-CY_IZ2Q1.js";import"./chevron-up-B1R5UvP4.js";import"./chevron-down-_ycbe8m1.js";import"./cross-C6qTQWHW.js";import"./PdfViewerSidebar-xMH76uaQ.js";import"./index-DmLzhgLv.js";import"./index-CL2exV6n.js";import"./index-BGlvu2Wm.js";import"./PdfViewerToolbar-BvkyEx9M.js";import"./Button-Dj8yiv60.js";import"./chevron-right-DhbdHIx0.js";import"./Input-BK2Nmyqv.js";import"./search-NVe0lSCh.js";import"./spin-BgFAhocs.js";import"./error-Biwv1K3K.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4215/4cd463d088c0ce48799d00da3866f186eecd52bc/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
