import{j as n}from"./iframe-CgaQrvJX.js";import{B as e}from"./BasePdfViewer-9I8s9qdr.js";import"./preload-helper-B2Xmrc95.js";import"./index-Bzmlqe5w.js";import"./BasePdfViewer.module.css-Bx6pARpO.js";import"./PdfViewerAnnotationLayer--pY2pI0W.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDy8CMSn.js";import"./PdfViewerOutlineSidebar-DWSzqiwR.js";import"./PdfViewerSidebarHeader-C3IJx3QF.js";import"./useBaseUiId-CIjmtvYO.js";import"./useControlled-A1Soqi4e.js";import"./CompositeRoot-CTq6S3ih.js";import"./CompositeItem-Dxj4Vwhq.js";import"./ToolbarRootContext-YVP2LXfw.js";import"./composite-B-SLP__V.js";import"./svgIconContainer-DNetVQYr.js";import"./PdfViewerSearchBar-DjC94wtY.js";import"./chevron-up-D3XsRzvV.js";import"./chevron-down-BU6VTUzE.js";import"./cross-IeILlXDu.js";import"./PdfViewerSidebar-CTyzhuLG.js";import"./index-CTmg82ji.js";import"./index-BwSc5cdS.js";import"./index-D_yqZm0V.js";import"./PdfViewerToolbar-CBF6pXMc.js";import"./Button-BWSgruJ1.js";import"./chevron-right-BX0iQKsK.js";import"./Input-DQR44Pu5.js";import"./search-BUTYKFlQ.js";import"./spin-CCqZ3tIh.js";import"./error-DP9sVVUg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4137/63b0732481458ea74aba6ec368dbd980ad708f36/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
