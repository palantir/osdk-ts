import{j as n}from"./iframe-UMA_W4zg.js";import{B as e}from"./BasePdfViewer-DPvipBdH.js";import"./preload-helper-DaWmOC6j.js";import"./index-DErLZjti.js";import"./BasePdfViewer.module.css-BfFFJeWR.js";import"./PdfViewerAnnotationLayer-DKqiK813.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-0thMlNcg.js";import"./PdfViewerOutlineSidebar-v8r1Q1g4.js";import"./PdfViewerSidebarHeader-DJshUxmb.js";import"./useBaseUiId-DrNqzCDV.js";import"./useControlled-CE_jt1bn.js";import"./CompositeRoot-B5e6HIoO.js";import"./CompositeItem-CW8dWwRY.js";import"./ToolbarRootContext-BoABXtXA.js";import"./composite-cvyf7rpJ.js";import"./svgIconContainer-9DAz-xsT.js";import"./PdfViewerSearchBar-R-nGoxN9.js";import"./chevron-up-CL38ih1s.js";import"./chevron-down-Bl-z4KIc.js";import"./cross-uHksr5pp.js";import"./PdfViewerSidebar-C4BMoFEC.js";import"./index-CpBKtjMD.js";import"./index-Dh7ukoT2.js";import"./index-CEcWMbm3.js";import"./PdfViewerToolbar-d3hJC1iN.js";import"./Button-CX0KG7k8.js";import"./chevron-right-Cfb34noM.js";import"./Input-B7UvCAbi.js";import"./search-DDqiAHNJ.js";import"./spin-BzBEFXkA.js";import"./error-CSAcfTyc.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4096/39b2e0bbf8039d62ddb5bd2a33a9976a10185dc3/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
