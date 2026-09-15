import{j as n}from"./iframe-a31F6Zea.js";import{B as e}from"./BasePdfViewer-kuQcUUkt.js";import"./preload-helper-BfFj_4tp.js";import"./index-BnGZPYV4.js";import"./BasePdfViewer.module.css-CRqxIfKQ.js";import"./PdfViewerAnnotationLayer-CX5H3LYP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DugIfHe2.js";import"./PdfViewerOutlineSidebar-DQLYf0ot.js";import"./PdfViewerSidebarHeader-WYpUoNod.js";import"./useBaseUiId-CSUeT06E.js";import"./useControlled-CN75eaZx.js";import"./CompositeRoot-DTD1nVz-.js";import"./CompositeItem-mbuOs1fC.js";import"./ToolbarRootContext-wQy2gScd.js";import"./composite-B8asvRon.js";import"./svgIconContainer-DxZS3Oh3.js";import"./PdfViewerSearchBar-B90ENdI4.js";import"./chevron-up-Jd-bDiIb.js";import"./chevron-down-hBWeBGBN.js";import"./cross-Ctxx23y-.js";import"./PdfViewerSidebar-CVatD0Tq.js";import"./index-gZqL-2oV.js";import"./index-DFESKWXH.js";import"./index-DSAvdwec.js";import"./PdfViewerToolbar-D_7QZ7XS.js";import"./Button-a8my9L0w.js";import"./chevron-right-Blnv2kDI.js";import"./Input-CBWYwmBc.js";import"./search-BWfh2RdL.js";import"./spin-_vCkVPUD.js";import"./error-C3q1XKPy.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4038/916b18326a422b114617f4cb8c49552a1ab308fe/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
