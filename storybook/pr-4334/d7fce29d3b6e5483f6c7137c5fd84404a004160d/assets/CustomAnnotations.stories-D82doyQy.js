import{j as n}from"./iframe-BrmQZ3gv.js";import{B as e}from"./BasePdfViewer-DbmaKasu.js";import"./preload-helper-bFlMnFhE.js";import"./index-BukqnFRF.js";import"./BasePdfViewer.module.css-C6FQfuNW.js";import"./PdfViewerAnnotationLayer-DKQ14nDz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yj7Cr6Nt.js";import"./PdfViewerOutlineSidebar-CtNfHLBJ.js";import"./PdfViewerSidebarHeader-BSl9s0Is.js";import"./useBaseUiId-DOEJb2YQ.js";import"./useControlled-BKcLfL-m.js";import"./CompositeRoot-COp-ZJW3.js";import"./CompositeItem-Cj9sjJEA.js";import"./ToolbarRootContext-DVJYWBBz.js";import"./composite-CToHHLnK.js";import"./svgIconContainer-1ZxcqWPt.js";import"./PdfViewerSearchBar-CVzJ5_VC.js";import"./chevron-up-TwyymfBW.js";import"./chevron-down-DjoNZ0eU.js";import"./cross-CyQ2LR1N.js";import"./PdfViewerSidebar-BoSMIYyr.js";import"./index-Lz8g2hRL.js";import"./index-DrxXiExk.js";import"./index-BHysiYNZ.js";import"./PdfViewerToolbar-Bm4C0N-s.js";import"./Button-DFW8ZRr_.js";import"./chevron-right-BapW_1iO.js";import"./Input-CJbUQK7W.js";import"./search-3yVqV9Ja.js";import"./spin-CjKcjTDl.js";import"./error-BoTJC5k7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4334/d7fce29d3b6e5483f6c7137c5fd84404a004160d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
