import{j as n}from"./iframe-BOWU70X1.js";import{B as e}from"./BasePdfViewer-D2d8PUix.js";import"./preload-helper-DsrGzdLY.js";import"./index-Dqy6Gfe7.js";import"./BasePdfViewer.module.css-CiVImMa5.js";import"./PdfViewerAnnotationLayer-B1KaghwA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BSdBLseA.js";import"./PdfViewerOutlineSidebar-DT86qBh2.js";import"./PdfViewerSidebarHeader-BZxJO5IB.js";import"./useBaseUiId-8tGgV_0l.js";import"./useControlled-BdeVhzxt.js";import"./CompositeRoot-CnRbnYqx.js";import"./CompositeItem-CIAYfkGT.js";import"./ToolbarRootContext-CaVCFQJS.js";import"./composite-CSfG6ZaY.js";import"./svgIconContainer-B9QIza-c.js";import"./PdfViewerSearchBar-BMbKcAl7.js";import"./chevron-up-QziipCuR.js";import"./chevron-down-B1Z7ByUI.js";import"./cross-CVkoRI6N.js";import"./PdfViewerSidebar-Clrgwh8s.js";import"./index-utUHJIrZ.js";import"./index-BfjmLFxg.js";import"./index-DAEdDj8Q.js";import"./PdfViewerToolbar-DFXfPrs7.js";import"./Button-BvbX1UI9.js";import"./chevron-right-DsfhFCzC.js";import"./Input-Ba0NW75w.js";import"./search-Bm_8-FpL.js";import"./spin-eCHjnsrg.js";import"./error-BjTP1vhZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4107/c4bf6881618112767fe96c9c48b808ba8ff6556d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
