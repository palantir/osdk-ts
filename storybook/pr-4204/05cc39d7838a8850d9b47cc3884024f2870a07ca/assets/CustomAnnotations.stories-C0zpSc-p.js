import{j as n}from"./iframe-7DO_hgMQ.js";import{B as e}from"./BasePdfViewer-D8KHhJDe.js";import"./preload-helper-B5hnoC7R.js";import"./index-C29pOm1T.js";import"./BasePdfViewer.module.css-7xaCyGa5.js";import"./PdfViewerAnnotationLayer-CkRL23qN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DhB2sXmc.js";import"./PdfViewerOutlineSidebar-DZdYkIfh.js";import"./PdfViewerSidebarHeader-CUYUGwCr.js";import"./useBaseUiId-Oq1MgnVD.js";import"./useControlled-C5lH_kP3.js";import"./CompositeRoot-C_Fyw_jj.js";import"./CompositeItem-CRzuvZSB.js";import"./ToolbarRootContext-D-ECRYtl.js";import"./composite-BIyzFJw4.js";import"./svgIconContainer-DzpdNPkA.js";import"./PdfViewerSearchBar-CfzIzmFt.js";import"./chevron-up-C8FDwmBW.js";import"./chevron-down-Cv_rBr5Q.js";import"./cross-D_9OLgop.js";import"./PdfViewerSidebar-DYeGgn92.js";import"./index-DAoZpWAc.js";import"./index-CpBs9sRH.js";import"./index-kxscKf13.js";import"./PdfViewerToolbar-BVOx-ffG.js";import"./Button-CG_O6ptK.js";import"./chevron-right-Dw4MDsc9.js";import"./Input-BSSTxlm0.js";import"./search-BiYpAlM6.js";import"./spin-DtxbzTU8.js";import"./error-CYThlbbP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4204/05cc39d7838a8850d9b47cc3884024f2870a07ca/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
