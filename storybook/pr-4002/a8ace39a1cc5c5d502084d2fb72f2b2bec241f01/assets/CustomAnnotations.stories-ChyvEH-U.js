import{j as n}from"./iframe-Dhq7AaUP.js";import{B as e}from"./BasePdfViewer-CNDFHPYT.js";import"./preload-helper-B5t1nGT4.js";import"./index-505BPbMk.js";import"./BasePdfViewer.module.css-CtYVN7lp.js";import"./PdfViewerAnnotationLayer-CrSZuqqq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CTSpGMik.js";import"./PdfViewerOutlineSidebar-DYh6P9R5.js";import"./PdfViewerSidebarHeader-B7uHzjlW.js";import"./useBaseUiId-8_wbyGGA.js";import"./useControlled-CWg50-5h.js";import"./CompositeRoot-m8DgL1Mk.js";import"./CompositeItem-CmAuNbAQ.js";import"./ToolbarRootContext-BPtqJH5V.js";import"./composite-m_TTOmrH.js";import"./svgIconContainer-D5rjHQJh.js";import"./PdfViewerSearchBar-rOpFAqeA.js";import"./chevron-up-Bck8wAdS.js";import"./chevron-down-D4blBvUy.js";import"./cross-BTExjjDl.js";import"./PdfViewerSidebar-HBeMxnb3.js";import"./index-MT3wqTUP.js";import"./index-5i4D4FjR.js";import"./index-Cn7LZsiB.js";import"./PdfViewerToolbar-4aB5UJaV.js";import"./Button-DHokje8p.js";import"./chevron-right-pCXL_qTH.js";import"./Input-BLnXCCTA.js";import"./search-D9UNy25Q.js";import"./spin-Ce3vFHyN.js";import"./error-_SQQqIaC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4002/a8ace39a1cc5c5d502084d2fb72f2b2bec241f01/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
