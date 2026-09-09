import{j as n}from"./iframe-C5ao1IvQ.js";import{B as e}from"./BasePdfViewer-BPLagPrE.js";import"./preload-helper-DGRqXtXi.js";import"./index-Ceo1TM0H.js";import"./BasePdfViewer.module.css-Cfe6BO-_.js";import"./PdfViewerAnnotationLayer-Ct9YsIBH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BMS92Bre.js";import"./PdfViewerOutlineSidebar-BGgARa-t.js";import"./PdfViewerSidebarHeader-DiE2kABy.js";import"./useBaseUiId-CnKjhxxS.js";import"./useControlled-BT4ixp-u.js";import"./CompositeRoot-CkS6ptRI.js";import"./CompositeItem-CbSSSK8r.js";import"./ToolbarRootContext-DALSiAmf.js";import"./composite-C9s-0UsJ.js";import"./svgIconContainer-XtON82xh.js";import"./PdfViewerSearchBar-tbxczbSO.js";import"./chevron-up-DN8532C2.js";import"./chevron-down-CMM_2MNN.js";import"./cross-tL6C68Y8.js";import"./PdfViewerSidebar-C6X1Oj4v.js";import"./index-BrUG7ik_.js";import"./index-BdE4NmrR.js";import"./index-BR9sQfcO.js";import"./PdfViewerToolbar-C1FnA4jY.js";import"./Button-dQ0hHaFn.js";import"./chevron-right-B1O74W_E.js";import"./Input-jSAQ8Oo5.js";import"./search-Cn03k3ET.js";import"./spin-BsVwgArD.js";import"./error-MOhUoXAM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4003/fd64448e169a17acb569c6f5c928fa04c92eeb11/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
