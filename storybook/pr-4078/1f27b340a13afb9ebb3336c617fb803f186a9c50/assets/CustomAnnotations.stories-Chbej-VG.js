import{j as n}from"./iframe-DoZpKAuy.js";import{B as e}from"./BasePdfViewer-7-BTh_aK.js";import"./preload-helper-VWDIqFcw.js";import"./index-DI9gHjQw.js";import"./BasePdfViewer.module.css-CVrHHv6e.js";import"./PdfViewerAnnotationLayer-_tqhr-5l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CGtzn6CL.js";import"./PdfViewerOutlineSidebar-CPjObfY6.js";import"./PdfViewerSidebarHeader-eoW-DNLT.js";import"./useBaseUiId-DGOpwqqR.js";import"./useControlled-Dtv5pYI4.js";import"./CompositeRoot-DPPeigpD.js";import"./CompositeItem-JZBFttqy.js";import"./ToolbarRootContext-CkYvN6qQ.js";import"./composite-BwuXi3Qd.js";import"./svgIconContainer-DaZ9l-Xt.js";import"./PdfViewerSearchBar-CTas0Epy.js";import"./chevron-up-ChZQ0y89.js";import"./chevron-down-Chs2Nvxl.js";import"./cross-BOIWmSa8.js";import"./PdfViewerSidebar-BKj2x84r.js";import"./index-Dwncc-H5.js";import"./index-CJ3t3vUm.js";import"./index-D3VbgQBY.js";import"./PdfViewerToolbar-DlPmT5ll.js";import"./Button-Bx4A8oJL.js";import"./chevron-right-CxlPTWOA.js";import"./Input-DA4z6leT.js";import"./search-D2oluobe.js";import"./spin-a56SoFi1.js";import"./error-vQUKN10-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4078/1f27b340a13afb9ebb3336c617fb803f186a9c50/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
