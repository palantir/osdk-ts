import{j as n}from"./iframe-CdsRGRZD.js";import{B as e}from"./BasePdfViewer-CEjiPOXZ.js";import"./preload-helper-CGHORiIs.js";import"./index-Fk1WgWoL.js";import"./BasePdfViewer.module.css-IVpV1cNW.js";import"./PdfViewerAnnotationLayer-CgVZZ5qi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYEFb0ju.js";import"./PdfViewerOutlineSidebar-B5yhwv3J.js";import"./PdfViewerSidebarHeader-Bat2wYH8.js";import"./useBaseUiId-DiEHO-EU.js";import"./useControlled-CXpC8eD9.js";import"./CompositeRoot-D0yYNeXu.js";import"./CompositeItem-CNBfRrGp.js";import"./ToolbarRootContext-DYboyT6t.js";import"./composite-DyS-Ch2i.js";import"./svgIconContainer-Cxkf-wd_.js";import"./PdfViewerSearchBar-CkOerJNt.js";import"./chevron-up-Ccvg19eS.js";import"./chevron-down-C7u5o2RL.js";import"./cross-DAi95Y0X.js";import"./PdfViewerSidebar-IPZm6kbd.js";import"./index-C2Mhw8zH.js";import"./index-BbC0pNoY.js";import"./index-Pe1K3mB3.js";import"./PdfViewerToolbar-DNXu68Bl.js";import"./Button-CMyVgQSr.js";import"./chevron-right-WlbHZvhZ.js";import"./Input-BrPBFCOf.js";import"./search-B-mt-Fpc.js";import"./spin-YLoSjhyU.js";import"./error-D2kK2TGa.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4020/6221eef6d18b50462df11559a95fb660b5b5f6e8/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
