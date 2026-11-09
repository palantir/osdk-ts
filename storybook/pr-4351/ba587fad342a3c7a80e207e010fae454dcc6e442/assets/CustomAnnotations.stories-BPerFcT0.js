import{j as n}from"./iframe-BCHKv9OM.js";import{B as e}from"./BasePdfViewer-BO2-RKoK.js";import"./preload-helper-VdwPsvvy.js";import"./index-Bwt2nvxG.js";import"./BasePdfViewer.module.css-Cd0IZ-Vl.js";import"./PdfViewerAnnotationLayer-DobYT3Cd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXWlwkG1.js";import"./PdfViewerOutlineSidebar-VPFePi7J.js";import"./PdfViewerSidebarHeader-DCgeQqC9.js";import"./useBaseUiId-D9fN6cGs.js";import"./useControlled-BHnn3yAy.js";import"./CompositeRoot-CVWrQ93x.js";import"./CompositeItem-BMLR6r4a.js";import"./ToolbarRootContext-CwhQOyHm.js";import"./composite-C-pKBr51.js";import"./svgIconContainer-DyfXuRzr.js";import"./PdfViewerSearchBar-BhhvYpkm.js";import"./chevron-up-BDepI66l.js";import"./chevron-down-BKy1nerW.js";import"./cross-2PepCGpt.js";import"./PdfViewerSidebar-BicFIY-X.js";import"./index-C5vlMEFw.js";import"./index-BkIhD60u.js";import"./index-z0BP5rZZ.js";import"./PdfViewerToolbar-CW5LwauO.js";import"./Button-C3RFGMgN.js";import"./chevron-right-ReD_HBZj.js";import"./Input-sKzdlVIX.js";import"./search-DF6xe5EC.js";import"./spin-DPH9mYj3.js";import"./error-6YNMu2Ib.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4351/ba587fad342a3c7a80e207e010fae454dcc6e442/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
