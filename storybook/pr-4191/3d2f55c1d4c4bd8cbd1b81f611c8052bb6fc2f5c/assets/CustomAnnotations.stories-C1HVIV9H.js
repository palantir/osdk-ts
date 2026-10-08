import{j as n}from"./iframe-B1-dVNhS.js";import{B as e}from"./BasePdfViewer-D4CJI0GL.js";import"./preload-helper-C2ProuBv.js";import"./index-WzbH8_Sp.js";import"./BasePdfViewer.module.css-gHYhI9mY.js";import"./PdfViewerAnnotationLayer-D0CZrhRp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ZGUeIfTn.js";import"./PdfViewerOutlineSidebar-B2_t-OoF.js";import"./PdfViewerSidebarHeader-CEFT34YV.js";import"./useBaseUiId-B6R5LUY3.js";import"./useControlled-CY-lWJZk.js";import"./CompositeRoot-Cj8dSouc.js";import"./CompositeItem-BkBiNRQD.js";import"./ToolbarRootContext-1bs6h0vw.js";import"./composite-GFxhGtPY.js";import"./svgIconContainer-wdLWihrJ.js";import"./PdfViewerSearchBar-CqFQXEhT.js";import"./chevron-up-7DWG-eXg.js";import"./chevron-down-DucaWjk_.js";import"./cross-DSyUk5jg.js";import"./PdfViewerSidebar-DGZ_tMsU.js";import"./index-C7eChUSe.js";import"./index-Dh-RbIId.js";import"./index-E0TiBTDQ.js";import"./PdfViewerToolbar-D65TiivC.js";import"./Button-B1lo8D22.js";import"./chevron-right-D4K_OOXM.js";import"./Input-DcCcX-hv.js";import"./search-D_Yyj-29.js";import"./spin-2eBjDyRn.js";import"./error-mrqVIVBz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4191/3d2f55c1d4c4bd8cbd1b81f611c8052bb6fc2f5c/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
