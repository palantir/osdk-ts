import{j as n}from"./iframe-CfT8oSzl.js";import{B as e}from"./BasePdfViewer-DpPh3U_9.js";import"./preload-helper-Ck2G3lhL.js";import"./index-BpawNvzq.js";import"./BasePdfViewer.module.css-8dWUYdkn.js";import"./PdfViewerAnnotationLayer-C7s02r4F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BtaNxc9f.js";import"./PdfViewerOutlineSidebar-D4n4R6yq.js";import"./PdfViewerSidebarHeader-DNdorBKC.js";import"./useBaseUiId-D4xhi0G6.js";import"./useControlled-C4oVQ_PT.js";import"./CompositeRoot-DywOp6_S.js";import"./CompositeItem-B7Z5vov3.js";import"./ToolbarRootContext-CiSOROzl.js";import"./composite-CCZTgGc-.js";import"./svgIconContainer-ya4CV7y2.js";import"./PdfViewerSearchBar-BWwZsLrV.js";import"./chevron-up-CZ51cXHG.js";import"./chevron-down-hfFWURIG.js";import"./cross-BDq3cq5E.js";import"./PdfViewerSidebar-CsrW7NNe.js";import"./index-Ajqy3tvo.js";import"./index-DvoLa0A4.js";import"./index-UxUlnqFt.js";import"./PdfViewerToolbar-Dzs0Xqpd.js";import"./Button-RnGlAnHy.js";import"./chevron-right-lSPXB6iW.js";import"./Input-frvZccMj.js";import"./search-CeTlWaJs.js";import"./spin-BJdO7DXQ.js";import"./error-CTOxDA6S.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4011/e0f5aa5ddbb0576760c6feb7b6280908df044f25/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
