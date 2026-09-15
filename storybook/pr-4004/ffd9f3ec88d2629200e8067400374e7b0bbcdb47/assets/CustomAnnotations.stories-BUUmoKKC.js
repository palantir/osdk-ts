import{j as n}from"./iframe-Ds1oJ6aB.js";import{B as e}from"./BasePdfViewer-CqFY4tSH.js";import"./preload-helper-BuU6EXxB.js";import"./index-DV-RsCBD.js";import"./BasePdfViewer.module.css-Bk7A22E6.js";import"./PdfViewerAnnotationLayer-B7F1eBAz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVDxsaiU.js";import"./PdfViewerOutlineSidebar-D1LKyBN5.js";import"./PdfViewerSidebarHeader-oP0drdjI.js";import"./useBaseUiId-SveB9MiJ.js";import"./useControlled-Bb3j5PDR.js";import"./CompositeRoot-D-aRvgIt.js";import"./CompositeItem-DRYBX4C7.js";import"./ToolbarRootContext-D5DhHef8.js";import"./composite-B685C7pj.js";import"./svgIconContainer-DhoJ1wKf.js";import"./PdfViewerSearchBar-D70aiVqX.js";import"./chevron-up-BFdcJJnz.js";import"./chevron-down-BTaheqba.js";import"./cross-GX9DzQOW.js";import"./PdfViewerSidebar-CjH8BIui.js";import"./index-DBvZrrqp.js";import"./index-Z-0SkI97.js";import"./index-Dg7JsOD2.js";import"./PdfViewerToolbar-DXpw0LtE.js";import"./Button-DEZznyRx.js";import"./chevron-right-CQ40gcNj.js";import"./Input-DCigff7H.js";import"./search-C9RUzGD8.js";import"./spin-D4dm0sXo.js";import"./error-Cpa8ixp-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4004/ffd9f3ec88d2629200e8067400374e7b0bbcdb47/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
