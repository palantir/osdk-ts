import{j as n}from"./iframe-ClYhC0-S.js";import{B as e}from"./BasePdfViewer-B8usMd0W.js";import"./preload-helper-CNkkVcag.js";import"./index-Bmj0xk3d.js";import"./BasePdfViewer.module.css-CuvNqgzb.js";import"./PdfViewerAnnotationLayer-D2FO-e4o.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CW2S0Y36.js";import"./PdfViewerOutlineSidebar-XM3y7GLH.js";import"./PdfViewerSidebarHeader-BzL675uE.js";import"./useBaseUiId-Dd8fT170.js";import"./useControlled-4Gm1FEJo.js";import"./CompositeRoot-BXpO_Vjm.js";import"./CompositeItem-CPrfZrML.js";import"./ToolbarRootContext-DAdrKT5D.js";import"./composite-BwqNvQ0F.js";import"./svgIconContainer-9bIBfj8h.js";import"./PdfViewerSearchBar-BRUioN-n.js";import"./chevron-up-DuRbxtQz.js";import"./chevron-down-DJbVh1LY.js";import"./cross-C_2oyR03.js";import"./PdfViewerSidebar-DCb3zRG5.js";import"./index-cVgcsKtQ.js";import"./index-D8PsRgog.js";import"./index-CI-u4eDt.js";import"./PdfViewerToolbar-DKof30yE.js";import"./Button-Dg23Hvs4.js";import"./chevron-right-CdN8GFh5.js";import"./Input-D8CWVoNO.js";import"./search-BBIKhGWf.js";import"./spin-DydhKjPJ.js";import"./error-BD_aaRfa.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4352/c48bce3b5ed2743a3677646bdae3edc338884c03/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
