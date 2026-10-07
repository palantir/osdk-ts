import{j as n}from"./iframe-CUE_Kfqx.js";import{B as e}from"./BasePdfViewer-1cAJpwBO.js";import"./preload-helper-AIizN4Br.js";import"./index-BiahB8So.js";import"./BasePdfViewer.module.css-0yhijrPE.js";import"./PdfViewerAnnotationLayer-DMcC3QXJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-dvfI6pTR.js";import"./PdfViewerOutlineSidebar-BEZb-eIO.js";import"./PdfViewerSidebarHeader-0adF68AE.js";import"./useBaseUiId-DGLgADwu.js";import"./useControlled-DMcW3WuP.js";import"./CompositeRoot-CDSz4Y6J.js";import"./CompositeItem-B7RByGkr.js";import"./ToolbarRootContext-_FDeKHlj.js";import"./composite-hPB6o8bz.js";import"./svgIconContainer-BHr2UOEv.js";import"./PdfViewerSearchBar-D2EuCybc.js";import"./chevron-up-DQrrkzRc.js";import"./chevron-down-DAAZF-qc.js";import"./cross-x00S7IUW.js";import"./PdfViewerSidebar-BWHv4jWK.js";import"./index-u0e1YJAK.js";import"./index-Kj8T-xKz.js";import"./index-Dn1aYiaH.js";import"./PdfViewerToolbar-BdBn1yxs.js";import"./Button-Dhiaj79W.js";import"./chevron-right-DNYiOlVT.js";import"./Input-Bbk2_em_.js";import"./search-CrkbBBP3.js";import"./spin-CptlyRpn.js";import"./error-CgrtB7s8.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4117/aba627e4f37517b2add7c80c7d01465c7ab70a2f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
