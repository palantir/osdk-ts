import{j as n}from"./iframe-C6LBpvuI.js";import{B as e}from"./BasePdfViewer-DXsM3fV0.js";import"./preload-helper-D5MgSTAG.js";import"./index-NiT3c2LR.js";import"./BasePdfViewer.module.css-C4tI7VNN.js";import"./PdfViewerAnnotationLayer-Cx2rNQiq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DG_8ZpZ2.js";import"./PdfViewerOutlineSidebar-B4khtXyR.js";import"./PdfViewerSidebarHeader-S0Cm9kru.js";import"./useBaseUiId-D9K-3OOp.js";import"./useControlled-35bEpDbg.js";import"./CompositeRoot-Becs0LHq.js";import"./CompositeItem-Cmb1U36q.js";import"./ToolbarRootContext-DJRyp8mD.js";import"./composite-CIL5RRbh.js";import"./svgIconContainer-Bqb8q1fz.js";import"./PdfViewerSearchBar-C927SICJ.js";import"./chevron-up-sJlGUkQk.js";import"./chevron-down-Bw9bT84C.js";import"./cross-_DiJsQ5N.js";import"./PdfViewerSidebar-CUp2n0MV.js";import"./index-vMfLr8EK.js";import"./index-CPv3k7C8.js";import"./index-DwcGPrXk.js";import"./PdfViewerToolbar-BpAnALQO.js";import"./Button-DcSoFPNd.js";import"./chevron-right-DhOxVU2U.js";import"./Input-CYIsQ-Xl.js";import"./search-CkHqN668.js";import"./spin-UkXqLGEJ.js";import"./error-CGV30LyY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3969/63a52aab3f6a90f70e2a29f35d018293c0e3fcb7/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
