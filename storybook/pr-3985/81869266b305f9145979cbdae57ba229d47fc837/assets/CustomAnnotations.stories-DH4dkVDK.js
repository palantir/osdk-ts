import{j as n}from"./iframe-Bx31wN7l.js";import{B as e}from"./BasePdfViewer-DAqvD8uF.js";import"./preload-helper-fuKytI2J.js";import"./index-DZxERBQ8.js";import"./BasePdfViewer.module.css-Db7rTieC.js";import"./PdfViewerAnnotationLayer-CBKOiT3a.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHfI2Fi2.js";import"./PdfViewerOutlineSidebar-DDlxB92L.js";import"./PdfViewerSidebarHeader-BYi8KrV8.js";import"./useBaseUiId-BpE0KEfc.js";import"./useControlled-BUc-d8tN.js";import"./CompositeRoot-DgtyOefj.js";import"./CompositeItem-CXKQZ3E9.js";import"./ToolbarRootContext-BEc0iwyp.js";import"./composite-Bx5EuYDq.js";import"./svgIconContainer-CsmE7H8N.js";import"./PdfViewerSearchBar-Bd63vCmR.js";import"./chevron-up-B3g37vVs.js";import"./chevron-down-Ca2LkDWe.js";import"./cross-ByPIg3cq.js";import"./PdfViewerSidebar-UtwODWGV.js";import"./index-BrSdfPya.js";import"./index-ec0TeVrD.js";import"./index-WQiMJ8U5.js";import"./PdfViewerToolbar-Bnghk2Eq.js";import"./Button-D8P70LO7.js";import"./chevron-right-wc1q4edg.js";import"./Input-CQoFLmc7.js";import"./search-BkXPkxMB.js";import"./spin-D5g2Y2kJ.js";import"./error-BqlruEo6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3985/81869266b305f9145979cbdae57ba229d47fc837/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
