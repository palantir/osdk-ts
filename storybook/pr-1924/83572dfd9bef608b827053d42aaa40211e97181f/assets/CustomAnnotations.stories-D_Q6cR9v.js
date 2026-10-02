import{j as n}from"./iframe-dYZcY_yd.js";import{B as e}from"./BasePdfViewer-By4qYAbO.js";import"./preload-helper-nvTVJuZ0.js";import"./index-DdpHHEag.js";import"./BasePdfViewer.module.css-DU9iqYTC.js";import"./PdfViewerAnnotationLayer-D9IOnhxK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CLosT6CK.js";import"./PdfViewerOutlineSidebar-lizOEXD8.js";import"./PdfViewerSidebarHeader-DeRXSQz-.js";import"./useBaseUiId-BmHomGuM.js";import"./useControlled-BgrYkcgC.js";import"./CompositeRoot-BZ8JZtBk.js";import"./CompositeItem-DIIkXBkk.js";import"./ToolbarRootContext-DaQhWJhT.js";import"./composite-D7xb_xyv.js";import"./svgIconContainer-d4KiPlL-.js";import"./PdfViewerSearchBar-B1xcoh2k.js";import"./chevron-up-ChID50vc.js";import"./chevron-down-DS-zMT_I.js";import"./cross-Dy_Om33n.js";import"./PdfViewerSidebar-DLSlVitw.js";import"./index-CtGq4PGv.js";import"./index-D1qSefVk.js";import"./index-CTY9EHBj.js";import"./PdfViewerToolbar-qxHt1y7V.js";import"./Button-lcjZj2UQ.js";import"./chevron-right-C6nJZ5F6.js";import"./Input-2gIVp1J7.js";import"./search-CDnnsnvp.js";import"./spin-D_kOqZFM.js";import"./error-D1PWFSVl.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1924/83572dfd9bef608b827053d42aaa40211e97181f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
