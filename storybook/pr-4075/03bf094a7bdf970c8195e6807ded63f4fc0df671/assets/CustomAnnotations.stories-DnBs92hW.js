import{j as n}from"./iframe-DkDai4TH.js";import{B as e}from"./BasePdfViewer-D2u6E4AE.js";import"./preload-helper-JjUJzXXj.js";import"./index-DY9rgq0e.js";import"./BasePdfViewer.module.css-CywNL7L8.js";import"./PdfViewerAnnotationLayer-DAk_zM1u.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yUwI_FF9.js";import"./PdfViewerOutlineSidebar-CE1YGymB.js";import"./PdfViewerSidebarHeader-B2LkYtLE.js";import"./useBaseUiId-BSkkBPAh.js";import"./useControlled-IY8Qa8dX.js";import"./CompositeRoot-6GXCG1ZY.js";import"./CompositeItem-CMeIJ5rV.js";import"./ToolbarRootContext-BkXkRhp8.js";import"./composite-CiXUPQeJ.js";import"./svgIconContainer-Cn4a8-GP.js";import"./PdfViewerSearchBar-BDfHO0Ke.js";import"./chevron-up-DVfjEu6P.js";import"./chevron-down-Do0LaDJ6.js";import"./cross-CAMMsTtN.js";import"./PdfViewerSidebar-cEhcI05S.js";import"./index-CTVvDnPL.js";import"./index-BmkcSWO6.js";import"./index-Lc08usjZ.js";import"./PdfViewerToolbar-KpriZezh.js";import"./Button-DKQFkDWL.js";import"./chevron-right-m3gEzF25.js";import"./Input-Gi5Qq_w9.js";import"./search-BHsfUlEN.js";import"./spin-NXBF9WHo.js";import"./error-CLEog6-B.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4075/03bf094a7bdf970c8195e6807ded63f4fc0df671/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
