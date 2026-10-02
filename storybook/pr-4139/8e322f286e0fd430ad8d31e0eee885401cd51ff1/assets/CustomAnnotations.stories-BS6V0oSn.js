import{j as n}from"./iframe-qTpzqqub.js";import{B as e}from"./BasePdfViewer-DkT50mS-.js";import"./preload-helper-Dn-jOWjK.js";import"./index-BOmnG_lN.js";import"./BasePdfViewer.module.css-DGroxrk9.js";import"./PdfViewerAnnotationLayer-DaWgdm2u.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-c2u5ic90.js";import"./PdfViewerOutlineSidebar-FaX_3RkN.js";import"./PdfViewerSidebarHeader-BV-Kk69E.js";import"./useBaseUiId-DOsGlG1_.js";import"./useControlled-B4JMLJpk.js";import"./CompositeRoot-Eyq42xkA.js";import"./CompositeItem-6iO3e1lI.js";import"./ToolbarRootContext-BKny703T.js";import"./composite-qaT37KGA.js";import"./svgIconContainer-Bm8Tr4gZ.js";import"./PdfViewerSearchBar-Bl_JmP5_.js";import"./chevron-up-xRBvOqHP.js";import"./chevron-down-B3fo8V2O.js";import"./cross-CnNHuvcS.js";import"./PdfViewerSidebar-CFrWZ3O6.js";import"./index-CXH_UxOS.js";import"./index-BVtfFrKv.js";import"./index-JoLmhLbC.js";import"./PdfViewerToolbar-Ber8zyg9.js";import"./Button-DEMuzBDP.js";import"./chevron-right-FBI82Dt3.js";import"./Input-DUA3RXYY.js";import"./search-MdoZShsS.js";import"./spin-Bjd2Kyt4.js";import"./error-Bf3H-zmd.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4139/8e322f286e0fd430ad8d31e0eee885401cd51ff1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
