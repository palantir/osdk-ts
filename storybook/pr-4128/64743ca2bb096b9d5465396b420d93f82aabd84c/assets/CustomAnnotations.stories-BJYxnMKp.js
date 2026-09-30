import{j as n}from"./iframe-ClMgtSuk.js";import{B as e}from"./BasePdfViewer-Dn2vddCt.js";import"./preload-helper-DTt1WWTr.js";import"./index-CldZE-Fz.js";import"./BasePdfViewer.module.css-BFJiMt6b.js";import"./PdfViewerAnnotationLayer-BcT0MrR4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BnZhCV3M.js";import"./PdfViewerOutlineSidebar-C1SOxM4q.js";import"./PdfViewerSidebarHeader-L7AQnyA5.js";import"./useBaseUiId-woEv5Hvl.js";import"./useControlled-8r5NxEZn.js";import"./CompositeRoot-DJv74Jyy.js";import"./CompositeItem-DEoo3ITM.js";import"./ToolbarRootContext-dH9njPoH.js";import"./composite-AMpBTCaD.js";import"./svgIconContainer-oOu9mbxW.js";import"./PdfViewerSearchBar-DcGLHVoM.js";import"./chevron-up-BerPpks5.js";import"./chevron-down-DRfUqPRw.js";import"./cross-viQYDEND.js";import"./PdfViewerSidebar-0XlWqXj_.js";import"./index-Dlvw17dt.js";import"./index-BU0jcG4_.js";import"./index-Rnbyd2Wh.js";import"./PdfViewerToolbar-CKPNCMTD.js";import"./Button-BCu1jtHq.js";import"./chevron-right-CFOC_MUK.js";import"./Input-BtIh3kKl.js";import"./search-COwJRDi0.js";import"./spin-BlTY4L1T.js";import"./error-D3qiwtEy.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4128/64743ca2bb096b9d5465396b420d93f82aabd84c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
