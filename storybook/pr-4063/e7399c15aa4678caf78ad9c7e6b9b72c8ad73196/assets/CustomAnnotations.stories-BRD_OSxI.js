import{j as n}from"./iframe-C4MIlXUU.js";import{B as e}from"./BasePdfViewer-QjA7f0ta.js";import"./preload-helper-DCfOkHUu.js";import"./index-QdXGOJ9B.js";import"./BasePdfViewer.module.css-exYfIl18.js";import"./PdfViewerAnnotationLayer-DHUpBcKO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BC38Sj8L.js";import"./PdfViewerOutlineSidebar-ESMnYjko.js";import"./PdfViewerSidebarHeader-CSwaCHGv.js";import"./useBaseUiId-BLYxIIxg.js";import"./useControlled-DaM2GsbY.js";import"./CompositeRoot-cqE1mAP-.js";import"./CompositeItem-C-l5BZdt.js";import"./ToolbarRootContext-DtcwdZup.js";import"./composite-7GWV62aV.js";import"./svgIconContainer-DoAfVxUT.js";import"./PdfViewerSearchBar-C1WjABS6.js";import"./chevron-up-BLDpobnJ.js";import"./chevron-down-DQjtaLz5.js";import"./cross-D03lplef.js";import"./PdfViewerSidebar-BhC8pNee.js";import"./index-BpG7TDWh.js";import"./index-fTGPOK7q.js";import"./index-DDMEfKUV.js";import"./PdfViewerToolbar-w8J0DR85.js";import"./Button-BxGZ6LLp.js";import"./chevron-right-D2NlEzbS.js";import"./Input-u7GRO9F9.js";import"./search-Bbx7uHY2.js";import"./spin-BwWmMZmY.js";import"./error-m5JvGXlH.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4063/e7399c15aa4678caf78ad9c7e6b9b72c8ad73196/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
