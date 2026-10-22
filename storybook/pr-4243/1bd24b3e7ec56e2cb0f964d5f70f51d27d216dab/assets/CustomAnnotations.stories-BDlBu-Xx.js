import{j as n}from"./iframe-tNZJ_yts.js";import{B as e}from"./BasePdfViewer-Bc2lcoCf.js";import"./preload-helper-Cs-zZmWk.js";import"./index-GtjnSSRw.js";import"./BasePdfViewer.module.css-BGnOTI83.js";import"./PdfViewerAnnotationLayer-D8vY3Gwn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5FRQEOZj.js";import"./PdfViewerOutlineSidebar-Q6TB6Zd8.js";import"./PdfViewerSidebarHeader-CdATXfWQ.js";import"./useBaseUiId-CfzXRAwD.js";import"./useControlled-BcyW94WW.js";import"./CompositeRoot-CFSn1tEq.js";import"./CompositeItem-DK62Ja5z.js";import"./ToolbarRootContext-Bgv8jhAk.js";import"./composite-BiyNCJEr.js";import"./svgIconContainer-Cg9fo9q3.js";import"./PdfViewerSearchBar-B7oBJJ7t.js";import"./chevron-up-R7htkY2h.js";import"./chevron-down-B8TK3y2h.js";import"./cross-ocv2rHpU.js";import"./PdfViewerSidebar-CxOhyVmT.js";import"./index-ZWb-P89H.js";import"./index-B8odcJPp.js";import"./index-BI50CR4r.js";import"./PdfViewerToolbar-BzTFB_cF.js";import"./Button-q3PQJ8YO.js";import"./chevron-right-C-_5_npA.js";import"./Input-Bd3UykWw.js";import"./search-380Wfs82.js";import"./spin-CbuvdWCQ.js";import"./error-DA-ZYNwq.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4243/1bd24b3e7ec56e2cb0f964d5f70f51d27d216dab/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
