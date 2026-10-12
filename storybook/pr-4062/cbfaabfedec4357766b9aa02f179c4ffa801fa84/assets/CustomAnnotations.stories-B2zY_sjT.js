import{j as n}from"./iframe-3uOeStlO.js";import{B as e}from"./BasePdfViewer-ClKJS6Zq.js";import"./preload-helper-B_uYGV8k.js";import"./index-B_qY6xMA.js";import"./BasePdfViewer.module.css-95BELV01.js";import"./PdfViewerAnnotationLayer-B7bq9K-S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D46FMrE_.js";import"./PdfViewerOutlineSidebar-CSQAPIIH.js";import"./PdfViewerSidebarHeader-Dr3Y30Id.js";import"./useBaseUiId-DFf4k_ND.js";import"./useControlled-Iq2zkhRy.js";import"./CompositeRoot-C9-5DIug.js";import"./CompositeItem-B84OCPkr.js";import"./ToolbarRootContext-Dbkjbr9t.js";import"./composite-DbFqwck4.js";import"./svgIconContainer-BXcgfdNM.js";import"./PdfViewerSearchBar-DcSH3uTq.js";import"./chevron-up-CNa9vMzR.js";import"./chevron-down-Bzj-jMLe.js";import"./cross-waxScdAW.js";import"./PdfViewerSidebar-CDRoeKlV.js";import"./index-BiPZja9p.js";import"./index-CkR9lTv2.js";import"./index-CV8wC36m.js";import"./PdfViewerToolbar-Cm0pM550.js";import"./Button-B1JQinsR.js";import"./chevron-right-DjaCiRVp.js";import"./Input-CYQFeP5H.js";import"./search-DB4T2psl.js";import"./spin-5ZMaehWW.js";import"./error-BXiGRUyR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4062/cbfaabfedec4357766b9aa02f179c4ffa801fa84/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
