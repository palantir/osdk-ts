import{j as n}from"./iframe-vnKEgnca.js";import{B as e}from"./BasePdfViewer-DuNZI3oL.js";import"./preload-helper-sQW1CADx.js";import"./index-BeGfthlJ.js";import"./BasePdfViewer.module.css-Be5Z8CHC.js";import"./PdfViewerAnnotationLayer-BZi7m-tA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-djqI1R9T.js";import"./PdfViewerOutlineSidebar-vunpV7H8.js";import"./PdfViewerSidebarHeader-BcgCx9TS.js";import"./useBaseUiId-CgxqfjcM.js";import"./useControlled-Bxc3bdV1.js";import"./CompositeRoot-C3fvDz1z.js";import"./CompositeItem-1_Yzr1XW.js";import"./ToolbarRootContext-CwAo2bG9.js";import"./composite-C9k3QAIL.js";import"./svgIconContainer-NsUuck07.js";import"./PdfViewerSearchBar-DYLouFGR.js";import"./chevron-up-DKN-imNl.js";import"./chevron-down-DEu7XuhT.js";import"./cross-_8csVoP1.js";import"./PdfViewerSidebar-Ca6aB1Ny.js";import"./index-BvRjSpJH.js";import"./index-fmSw06oW.js";import"./index-CFCh4JjT.js";import"./PdfViewerToolbar-D4WIlVzP.js";import"./Button-28NdSEt3.js";import"./chevron-right-BwhMVZZd.js";import"./Input-CWIjEhtY.js";import"./search-DSYVPSfx.js";import"./spin-NblOk9of.js";import"./error-BV36DzgX.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4017/477c53849dddc45b13c969b7f4318ed31c4bc0ce/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
