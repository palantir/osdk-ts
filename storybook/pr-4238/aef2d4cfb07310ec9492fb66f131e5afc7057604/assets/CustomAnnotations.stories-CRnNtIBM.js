import{j as n}from"./iframe-CazyyGHD.js";import{B as e}from"./BasePdfViewer-Pi_9s7tH.js";import"./preload-helper-MgT8dc0X.js";import"./index-Bwh0Qzuq.js";import"./BasePdfViewer.module.css-BtX2rKGP.js";import"./PdfViewerAnnotationLayer-maXtJUro.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-QNWVQ0La.js";import"./PdfViewerOutlineSidebar-O5CA5ROg.js";import"./PdfViewerSidebarHeader-DqtFhz8u.js";import"./useBaseUiId-_VheOjS_.js";import"./useControlled-W6MY3ceN.js";import"./CompositeRoot-CXxN8NO7.js";import"./CompositeItem-rCpLyuDw.js";import"./ToolbarRootContext-Dv2tMkap.js";import"./composite-eyAHIZy6.js";import"./svgIconContainer-D-fln-_9.js";import"./PdfViewerSearchBar-CvkJirNl.js";import"./chevron-up-Dh6DsN47.js";import"./chevron-down-C2D_MUNL.js";import"./cross-Cm-jIUuV.js";import"./PdfViewerSidebar-DfxUZAEc.js";import"./index-k2L1SHEL.js";import"./index-oHFfHIzb.js";import"./index-CtTCUyk6.js";import"./PdfViewerToolbar-Do4a4Ip1.js";import"./Button-ByiOliQr.js";import"./chevron-right-BzF8ESHk.js";import"./Input-BqWLM-qJ.js";import"./search-CwjMn8PH.js";import"./spin-B88M3law.js";import"./error-0vET3H6E.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4238/aef2d4cfb07310ec9492fb66f131e5afc7057604/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
