import{j as n}from"./iframe-CHAjmeRW.js";import{B as e}from"./BasePdfViewer-B4ftRD0-.js";import"./preload-helper-Bnd8YX8b.js";import"./index-uehY9gxK.js";import"./BasePdfViewer.module.css-CREP_AM-.js";import"./PdfViewerAnnotationLayer-BpWOjxMr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-mreAOi14.js";import"./PdfViewerOutlineSidebar-CHOS_-_6.js";import"./PdfViewerSidebarHeader-ChrLAJ5a.js";import"./useBaseUiId-CrKq0iow.js";import"./useControlled-DIGLnSxk.js";import"./CompositeRoot-HR3mJi7N.js";import"./CompositeItem-C3TCOkoR.js";import"./ToolbarRootContext-DT7PezqV.js";import"./composite-DrWVaKH_.js";import"./svgIconContainer-C6bTix-V.js";import"./PdfViewerSearchBar-BwBll1XZ.js";import"./chevron-up-DIqZHR-j.js";import"./chevron-down-BhaNHOdV.js";import"./cross-21maCkVo.js";import"./PdfViewerSidebar-f3tI2Kuf.js";import"./index-BX5VsLRX.js";import"./index-0JEFRERF.js";import"./index-DItNlf6T.js";import"./PdfViewerToolbar-C3hl0j4N.js";import"./Button-BrV62231.js";import"./chevron-right-DYwe1xf_.js";import"./Input-CEDKmeIa.js";import"./search-C-PuNkbt.js";import"./spin-CrdGFiTO.js";import"./error-D546O215.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3841/cca80736cf34615f9b4717b5044472057ccf1229/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
