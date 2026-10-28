import{j as n}from"./iframe-Dd3-Yl6N.js";import{B as e}from"./BasePdfViewer-DrzXrk3B.js";import"./preload-helper-C9sTmRJF.js";import"./index-BiUH_hpy.js";import"./BasePdfViewer.module.css-Ehta4KzJ.js";import"./PdfViewerAnnotationLayer-R1zqJ7st.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B8BsfczS.js";import"./PdfViewerOutlineSidebar-C5shv0E7.js";import"./PdfViewerSidebarHeader-QhjYFllf.js";import"./useBaseUiId-CtlPAw8O.js";import"./useControlled-tZuoOrAX.js";import"./CompositeRoot-CYHaL44h.js";import"./CompositeItem-BLXgiCJ0.js";import"./ToolbarRootContext-YQCd6tra.js";import"./composite-B7_CRtOh.js";import"./svgIconContainer-B7D9nEeV.js";import"./PdfViewerSearchBar-QA9aT6pz.js";import"./chevron-up-D7jv6yNF.js";import"./chevron-down-COpzwsCU.js";import"./cross-Eqzrh4V_.js";import"./PdfViewerSidebar-8msTLgFB.js";import"./index-D_tBmJ25.js";import"./index-Dk7mnZge.js";import"./index-CbNEs7cg.js";import"./PdfViewerToolbar-BxkXnK1_.js";import"./Button-DgI_B-BT.js";import"./chevron-right-DA4NJB2v.js";import"./Input-BFjIxR6L.js";import"./search-uFxQauC9.js";import"./spin-X6cuFIIZ.js";import"./error-OA8M66y2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4276/4b9cefe4c11cd6e8e8e85e02caf6d34b0c580ee6/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
