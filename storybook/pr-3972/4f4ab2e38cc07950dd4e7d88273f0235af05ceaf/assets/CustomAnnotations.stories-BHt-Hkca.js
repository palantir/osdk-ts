import{j as n}from"./iframe-CK77c45c.js";import{B as e}from"./BasePdfViewer-BJiar6Jb.js";import"./preload-helper-DbNEja4W.js";import"./index-C442JOIH.js";import"./BasePdfViewer.module.css-BYIk-yYd.js";import"./PdfViewerAnnotationLayer-DU3KVDM8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CcdTV5zF.js";import"./PdfViewerOutlineSidebar-L7AKW-QA.js";import"./PdfViewerSidebarHeader-Cnvjpxso.js";import"./useBaseUiId-dVZqGFlU.js";import"./useControlled-jnmU5UAL.js";import"./CompositeRoot-DzPqxPrx.js";import"./CompositeItem-CAzkW6h4.js";import"./ToolbarRootContext-BQcuSjIX.js";import"./composite-Dh-nFKNO.js";import"./svgIconContainer-L_jjiIf-.js";import"./PdfViewerSearchBar-DycebmGN.js";import"./chevron-up-B2kOBdV2.js";import"./chevron-down-CFkNPRkg.js";import"./cross-CwI5OEk2.js";import"./PdfViewerSidebar-DOZIVkPg.js";import"./index-1zjImjvm.js";import"./index-qnj-Mesk.js";import"./index-BoFZ_UqF.js";import"./PdfViewerToolbar-CtAnoy-e.js";import"./Button-CWY22zau.js";import"./chevron-right-BoGmmrtU.js";import"./Input-DeIqzZkQ.js";import"./search-CV_E7rKM.js";import"./spin-3GRPs9aM.js";import"./error-BvwPFshU.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3972/4f4ab2e38cc07950dd4e7d88273f0235af05ceaf/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
