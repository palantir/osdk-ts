import{j as n}from"./iframe-BAOOmxmu.js";import{B as e}from"./BasePdfViewer-0LGqUP6o.js";import"./preload-helper-BIm_Fr-4.js";import"./index-QY-KQRXF.js";import"./BasePdfViewer.module.css-CKHc8l2m.js";import"./PdfViewerAnnotationLayer-D7NeaZdT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-R8Mzb3hh.js";import"./PdfViewerOutlineSidebar-B5l42gx8.js";import"./PdfViewerSidebarHeader-B3wY-it_.js";import"./useBaseUiId-B4ZR21gm.js";import"./useControlled-CuqfVZxX.js";import"./CompositeRoot-C4ZGEnfk.js";import"./CompositeItem-BPZd139z.js";import"./ToolbarRootContext-C5dbAl4m.js";import"./composite-DMwFPLnT.js";import"./svgIconContainer-Bp5LkjRC.js";import"./PdfViewerSearchBar-lVeLQKoU.js";import"./chevron-up-C8zsWRrD.js";import"./chevron-down-Dwrs1hNu.js";import"./cross-h2O47eJg.js";import"./PdfViewerSidebar-OobbV5uj.js";import"./index-DyTfUGkB.js";import"./index-DDBX-eT9.js";import"./index-20cLn6S1.js";import"./PdfViewerToolbar-CSPdXwHd.js";import"./Button-btye1J53.js";import"./chevron-right-BTGap8OS.js";import"./Input-d_-ySvYA.js";import"./search-D68AVNns.js";import"./spin-i4j-9qcy.js";import"./error-BswP0WVl.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4020/42ea72282900458bdf0d0894dc952ef9d2eb8f34/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
