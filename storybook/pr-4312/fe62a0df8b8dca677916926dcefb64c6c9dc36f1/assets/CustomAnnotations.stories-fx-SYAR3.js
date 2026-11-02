import{j as n}from"./iframe-Yw9TZb4u.js";import{B as e}from"./BasePdfViewer-DiQhsiwB.js";import"./preload-helper-D_xjOrEt.js";import"./index-8aWnL4Lo.js";import"./BasePdfViewer.module.css-5FsYBPqz.js";import"./PdfViewerAnnotationLayer-CppXoGCF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-EAV7HZYe.js";import"./PdfViewerOutlineSidebar-CwpGDaQt.js";import"./PdfViewerSidebarHeader-CE0AP2z5.js";import"./useBaseUiId-BO9crViw.js";import"./useControlled-BzIkjd0M.js";import"./CompositeRoot-C4K0-3qe.js";import"./CompositeItem-BD6lDA45.js";import"./ToolbarRootContext-BU6uR7dz.js";import"./composite-BNHMrFyE.js";import"./svgIconContainer-BIiUvxcP.js";import"./PdfViewerSearchBar-BPlYUyEi.js";import"./chevron-up-kQ0i4uYc.js";import"./chevron-down-oj878TNR.js";import"./cross-DTT8xN_V.js";import"./PdfViewerSidebar-B0Ff0TrJ.js";import"./index-CibthTqO.js";import"./index-kxnQI0Cl.js";import"./index-DC5PMXgz.js";import"./PdfViewerToolbar-DPVwlU2D.js";import"./Button-C1MrjwiB.js";import"./chevron-right-VjT8d2uy.js";import"./Input-CSG_diAL.js";import"./search-BQQODEli.js";import"./spin-CpPw7ROv.js";import"./error-BrfIeh_k.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4312/fe62a0df8b8dca677916926dcefb64c6c9dc36f1/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
