import{j as n}from"./iframe-D0hYQ0ZS.js";import{B as e}from"./BasePdfViewer-CxnFTCIo.js";import"./preload-helper-CA2FQp3d.js";import"./index-DmARC5st.js";import"./BasePdfViewer.module.css-tvcbN5xR.js";import"./PdfViewerAnnotationLayer-SqyFlRGy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CqktX2_d.js";import"./PdfViewerOutlineSidebar-DIlMqPpP.js";import"./PdfViewerSidebarHeader-D5lmJDj3.js";import"./useBaseUiId-XRgD1fAc.js";import"./useControlled-DFsigNjS.js";import"./CompositeRoot-eTw2gpKR.js";import"./CompositeItem-BfeA3NJO.js";import"./ToolbarRootContext-B3P_Il02.js";import"./composite-DkKFn4B2.js";import"./svgIconContainer-Bnj1Dnpn.js";import"./PdfViewerSearchBar-7cU5s7t4.js";import"./chevron-up-CuguSENz.js";import"./chevron-down-DpAIzyvb.js";import"./cross-DGfZ9I8q.js";import"./PdfViewerSidebar-C6p_0y69.js";import"./index-CwuOLTmH.js";import"./index-dclRq-mv.js";import"./index-DET9q48x.js";import"./PdfViewerToolbar-zncUR-Wp.js";import"./Button-BBjgpomd.js";import"./chevron-right-8pXzmSOz.js";import"./Input-DppPciYW.js";import"./search-DXnEIY7b.js";import"./spin-DQ6aGHuN.js";import"./error-DZHrzjAe.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4360/6735cd57bfdb674e838fe8d0f8368deabd9f7527/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
