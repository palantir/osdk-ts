import{j as n}from"./iframe-D1PWQ8eg.js";import{B as e}from"./BasePdfViewer-xJEI5S7P.js";import"./preload-helper-ChDiB21Q.js";import"./index-BfN20Yol.js";import"./BasePdfViewer.module.css-Ch1OlCzt.js";import"./PdfViewerAnnotationLayer-CS7r6yao.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-V0V9d5ar.js";import"./PdfViewerOutlineSidebar-DFUofst6.js";import"./PdfViewerSidebarHeader-CgYShS80.js";import"./useBaseUiId-DQZDizk3.js";import"./useControlled-D21_fOEO.js";import"./CompositeRoot-Dmveyke6.js";import"./CompositeItem-DoK1nl1V.js";import"./ToolbarRootContext-DVH0WoOd.js";import"./composite-Dz4PW6bE.js";import"./svgIconContainer-BXQnyB7k.js";import"./PdfViewerSearchBar-Bm2doVX4.js";import"./chevron-up-BkjL9JfX.js";import"./chevron-down-h_s7BHqv.js";import"./cross-DpDhreOD.js";import"./PdfViewerSidebar-DDpDjzne.js";import"./index-BXJyqqou.js";import"./index-C-gFUxtR.js";import"./index-k_FhLYlw.js";import"./PdfViewerToolbar-hFH6B94z.js";import"./Button-DGBWNQgJ.js";import"./chevron-right-CWmnnzRr.js";import"./Input-DcHTO1Eg.js";import"./search-Bzfmr3Yu.js";import"./spin-Bn5vZBoA.js";import"./error-CawAj1Hu.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4362/a446217fec31473ff3aeb5c4e0c65c7b9a67c507/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
