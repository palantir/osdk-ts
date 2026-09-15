import{j as n}from"./iframe-DVYiR4EF.js";import{B as e}from"./BasePdfViewer-BoF3U1s_.js";import"./preload-helper-Dxk87wO7.js";import"./index-BHhu1kj6.js";import"./BasePdfViewer.module.css-BdI8SJYJ.js";import"./PdfViewerAnnotationLayer-D1eZduW0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BFlIsvBZ.js";import"./PdfViewerOutlineSidebar-C9kz0hqW.js";import"./PdfViewerSidebarHeader-zTtwew1N.js";import"./useBaseUiId-zYEXD-mx.js";import"./useControlled-DcB6TY6E.js";import"./CompositeRoot-BrWZddBx.js";import"./CompositeItem-DR-oTCoP.js";import"./ToolbarRootContext-DQtyGnCu.js";import"./composite-C7v8Qqey.js";import"./svgIconContainer-DdXGKFJg.js";import"./PdfViewerSearchBar-C5p1eSd8.js";import"./chevron-up-X87KG-YV.js";import"./chevron-down-DS4rSc_R.js";import"./cross-Clyp6xFe.js";import"./PdfViewerSidebar-CiBJhpsu.js";import"./index-F6YJXidF.js";import"./index-DIoaGE9P.js";import"./index-yOUNHIkz.js";import"./PdfViewerToolbar-B2eX7LBU.js";import"./Button-B_OVrsNR.js";import"./chevron-right-CDIc0jri.js";import"./Input-DXhcExkR.js";import"./search-CYXYxyYM.js";import"./spin-DurZJxgI.js";import"./error-BkP1c58R.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4014/02380e34887b4ddcbb18da817c9babd607d20e73/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
