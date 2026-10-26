import{j as n}from"./iframe-BC4WuJqp.js";import{B as e}from"./BasePdfViewer-DCB4dtdA.js";import"./preload-helper-BAlIbckl.js";import"./index-B64lxDBz.js";import"./BasePdfViewer.module.css-CuiLVz56.js";import"./PdfViewerAnnotationLayer-eeBakPup.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C8Y6szjR.js";import"./PdfViewerOutlineSidebar-CyzZ_C0V.js";import"./PdfViewerSidebarHeader-OLmA9zWq.js";import"./useBaseUiId-BVMrMyXc.js";import"./useControlled-Bs5VhBCJ.js";import"./CompositeRoot-C-pidKcF.js";import"./CompositeItem-B3C6p1hy.js";import"./ToolbarRootContext-c4Ndu606.js";import"./composite-DeP2Ikxo.js";import"./svgIconContainer-CtvZ0OgY.js";import"./PdfViewerSearchBar-Cc_V6y6v.js";import"./chevron-up-CDE-54Ov.js";import"./chevron-down-Cl_Af1LQ.js";import"./cross-6e8uCbEq.js";import"./PdfViewerSidebar-Ch3GCPH-.js";import"./index-Cd4zCzRN.js";import"./index-BUFQlA2h.js";import"./index-eKZRvGXM.js";import"./PdfViewerToolbar-CYd0qHJO.js";import"./Button-DHdZg685.js";import"./chevron-right-5G5htGOy.js";import"./Input-CzEl6QGc.js";import"./search-CZ3TYav-.js";import"./spin-1YEQLOd8.js";import"./error-GVs8VSV-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4260/c58c831ee583a6cf1eac92e37fdb2546fa033b95/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
