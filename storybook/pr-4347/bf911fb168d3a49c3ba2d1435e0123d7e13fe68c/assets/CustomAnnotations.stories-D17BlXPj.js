import{j as n}from"./iframe-Deuk3WWS.js";import{B as e}from"./BasePdfViewer-Ce8cuFgJ.js";import"./preload-helper-BBagj194.js";import"./index-6Crz7A4k.js";import"./BasePdfViewer.module.css-CNGkPTRT.js";import"./PdfViewerAnnotationLayer-BCZ5JIuq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQkK4J0w.js";import"./PdfViewerOutlineSidebar-kUbC4AGV.js";import"./PdfViewerSidebarHeader-Bm96ScVq.js";import"./useBaseUiId-C0TzrPg5.js";import"./useControlled-Ck5NZ_4o.js";import"./CompositeRoot-B8pT3EHZ.js";import"./CompositeItem-D95IUf9G.js";import"./ToolbarRootContext-BQx_lx6V.js";import"./composite-CHecoTnn.js";import"./svgIconContainer-B5ALG4eV.js";import"./PdfViewerSearchBar-BhmWWsjc.js";import"./chevron-up-ZuExc0Ep.js";import"./chevron-down-CzdIHmMJ.js";import"./cross-BVTbes25.js";import"./PdfViewerSidebar-CGxwwHVz.js";import"./index-BOxz8-qW.js";import"./index-CLNZjEzY.js";import"./index-T88N5Ozy.js";import"./PdfViewerToolbar-CIAnS-Rz.js";import"./Button-NLGJUEdX.js";import"./chevron-right-DQvdjn_c.js";import"./Input-DB3pzys-.js";import"./search-CbQ17IfG.js";import"./spin-BagSaugu.js";import"./error-kMW-uU3e.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4347/bf911fb168d3a49c3ba2d1435e0123d7e13fe68c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
