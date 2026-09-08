import{j as n}from"./iframe-B8zlsrHH.js";import{B as e}from"./BasePdfViewer-BzJouv6w.js";import"./preload-helper-C0b0An0Y.js";import"./index-tfK5NBPh.js";import"./BasePdfViewer.module.css-BzHc0lQg.js";import"./PdfViewerAnnotationLayer-DkH6xbAl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3o_2d83.js";import"./PdfViewerOutlineSidebar-CZHfshKx.js";import"./PdfViewerSidebarHeader-I5jnW5Z1.js";import"./useBaseUiId-CmAD5Nv6.js";import"./useControlled-0KT-Nbfb.js";import"./CompositeRoot-D0O5MW4-.js";import"./CompositeItem-CS-yxRHH.js";import"./ToolbarRootContext-rZcpvLxX.js";import"./composite-CqVw9i-r.js";import"./svgIconContainer-93ic9H0u.js";import"./PdfViewerSearchBar-D-XbSqPO.js";import"./chevron-up-CwWwZExh.js";import"./chevron-down-Cv_0_uCQ.js";import"./cross-DaFAEeUI.js";import"./PdfViewerSidebar-BQ72QdWt.js";import"./index-9c3pIfa3.js";import"./index-BDPlX1qs.js";import"./index-CVRibSdI.js";import"./PdfViewerToolbar-DpVu1Q09.js";import"./Button-D-b8a2cD.js";import"./chevron-right-BOxZXe3P.js";import"./Input-CqRPwD_J.js";import"./search-BU1Su8pV.js";import"./spin-SVSecq_M.js";import"./error-3ug2VmSe.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3841/f3d4c129484c8afef3f9c14de1212ad54571ecd2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
