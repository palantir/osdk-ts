import{j as n}from"./iframe-BK92nj8O.js";import{B as e}from"./BasePdfViewer-D3e-HXL7.js";import"./preload-helper-BzvFWRwm.js";import"./index-Cp-oegvQ.js";import"./BasePdfViewer.module.css-Dggn5z8m.js";import"./PdfViewerAnnotationLayer-BaHUesKb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChO90koN.js";import"./PdfViewerOutlineSidebar-CjAHz3uF.js";import"./PdfViewerSidebarHeader--KxVvST-.js";import"./useBaseUiId-DJzLMsdJ.js";import"./useControlled-D4vgYWXW.js";import"./CompositeRoot-DldYV1eq.js";import"./CompositeItem-BUqJx2UC.js";import"./ToolbarRootContext-DaxowF1A.js";import"./composite-CUOp8zR0.js";import"./svgIconContainer-CUCnXzLA.js";import"./PdfViewerSearchBar-uMfYxx5t.js";import"./chevron-up-CIbPOuc_.js";import"./chevron-down-DFEA5aIq.js";import"./cross-CQouWOVo.js";import"./PdfViewerSidebar-DeXwIwrF.js";import"./index-D33Byr__.js";import"./index-CRvcO-Mq.js";import"./index-Vq2K6jMQ.js";import"./PdfViewerToolbar-DK2kbeUH.js";import"./Button-CLd3GlZq.js";import"./chevron-right-BLYgI0JZ.js";import"./Input-R7iFBYJw.js";import"./search-Cx7lcCpX.js";import"./spin-Ca9xxKIf.js";import"./error-CpelSvOO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4266/9658bde64a7beb91d3fec5ce341b6335546f04e3/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
