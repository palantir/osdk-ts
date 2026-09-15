import{j as n}from"./iframe-CTo_Vzji.js";import{B as e}from"./BasePdfViewer-Dn0ZOBDN.js";import"./preload-helper-DdmOa013.js";import"./index-Db0bQB9_.js";import"./BasePdfViewer.module.css-DiiGfMB0.js";import"./PdfViewerAnnotationLayer-BV78R26M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DKveZztW.js";import"./PdfViewerOutlineSidebar-Ba8x1LiI.js";import"./PdfViewerSidebarHeader-BzqC6DQH.js";import"./useBaseUiId-DRC8ORV_.js";import"./useControlled-BoNXrNA6.js";import"./CompositeRoot-BQ2lIX7u.js";import"./CompositeItem-DzuUOttU.js";import"./ToolbarRootContext-Dbn3i0X6.js";import"./composite-hvvr6RcJ.js";import"./svgIconContainer-BrN7Rq3k.js";import"./PdfViewerSearchBar-C-CL0duF.js";import"./chevron-up-CrGOdmiH.js";import"./chevron-down-DsgPE9Kl.js";import"./cross-CFrNYW1-.js";import"./PdfViewerSidebar-BxvaMk2H.js";import"./index-q7czgvlb.js";import"./index-Dn1u0MHw.js";import"./index-BIdADT_u.js";import"./PdfViewerToolbar-3dCpR6GF.js";import"./Button-C3RHmX63.js";import"./chevron-right-hinqzXnI.js";import"./Input-EzzRC5FT.js";import"./search-DYJawdx1.js";import"./spin-BVXuDuhq.js";import"./error-CDiUdq4p.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4011/d1eef39f964fd1fc402ddb4e4682f108def3f080/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
