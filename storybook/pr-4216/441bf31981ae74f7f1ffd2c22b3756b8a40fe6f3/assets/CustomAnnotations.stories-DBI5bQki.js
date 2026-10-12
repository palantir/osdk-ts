import{j as n}from"./iframe-Bnd7pp_H.js";import{B as e}from"./BasePdfViewer-Yatb-5sX.js";import"./preload-helper-CQp4ttna.js";import"./index-Dq4Q7R9n.js";import"./BasePdfViewer.module.css-B2fzZ5E1.js";import"./PdfViewerAnnotationLayer-E4xwjjkH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LldUq08d.js";import"./PdfViewerOutlineSidebar-CWUlHRRU.js";import"./PdfViewerSidebarHeader-D_agBTDN.js";import"./useBaseUiId-C3FoEBlZ.js";import"./useControlled-BJ3TNVDx.js";import"./CompositeRoot-DYTIixOI.js";import"./CompositeItem-B1cp5WfN.js";import"./ToolbarRootContext-V1EJjV6d.js";import"./composite-ChdURaw7.js";import"./svgIconContainer-BHFCuUIe.js";import"./PdfViewerSearchBar-CTqxnrak.js";import"./chevron-up-BxknkjiV.js";import"./chevron-down-CkIljS9G.js";import"./cross-nf57os0A.js";import"./PdfViewerSidebar-6nzLJt3_.js";import"./index-L92dEHBQ.js";import"./index-CdD4spHg.js";import"./index-CFBknfgj.js";import"./PdfViewerToolbar-tLmp_2BF.js";import"./Button-wIX1QNwU.js";import"./chevron-right-KCQ-vZus.js";import"./Input-Dh0I0gBB.js";import"./search-C2rfWWoo.js";import"./spin-B9zzD4jt.js";import"./error-vnD_TY7d.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4216/441bf31981ae74f7f1ffd2c22b3756b8a40fe6f3/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
