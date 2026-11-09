import{j as n}from"./iframe-D4P7etlB.js";import{B as e}from"./BasePdfViewer-C5IcTsDM.js";import"./preload-helper-C2lPWNQK.js";import"./index--jClFyuO.js";import"./BasePdfViewer.module.css-C5kyNEx4.js";import"./PdfViewerAnnotationLayer-hyXOc8wg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNMCYCej.js";import"./PdfViewerOutlineSidebar-DZtcqWHN.js";import"./PdfViewerSidebarHeader-CCUP9oYl.js";import"./useBaseUiId-DvebyHll.js";import"./useControlled-Bt7GOIrD.js";import"./CompositeRoot-DF6AjUpi.js";import"./CompositeItem-Ca01-11J.js";import"./ToolbarRootContext-BJaSUWck.js";import"./composite-EmCbbtLr.js";import"./svgIconContainer-U5WzETGn.js";import"./PdfViewerSearchBar-a6XnklwN.js";import"./chevron-up-C2KJQHoa.js";import"./chevron-down-6L8qWnzl.js";import"./cross-2BDiF0Hd.js";import"./PdfViewerSidebar-D4uL6N47.js";import"./index-C2PCEa1N.js";import"./index-CryUHWua.js";import"./index-CwQjgJZY.js";import"./PdfViewerToolbar-CrCFIln_.js";import"./Button-DSmwZlqW.js";import"./chevron-right-nw2YE6Ge.js";import"./Input-qm2XT5j9.js";import"./search-BeidNAh3.js";import"./spin-DDS5VNY5.js";import"./error-BEbiBzi3.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4323/26f02ec4dd9631b439ceea57e8c551b22c4f6d2d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
