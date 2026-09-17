import{j as n}from"./iframe-bxHnXZZE.js";import{B as e}from"./BasePdfViewer-BkgvM9Jn.js";import"./preload-helper-7NwT3r5e.js";import"./index-C6fHHFsn.js";import"./BasePdfViewer.module.css-C_vyCOWC.js";import"./PdfViewerAnnotationLayer-DAXNsi_7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C4RU5ruD.js";import"./PdfViewerOutlineSidebar-B4bGqyFz.js";import"./PdfViewerSidebarHeader-jyJwm29x.js";import"./useBaseUiId-QHeSB_uY.js";import"./useControlled-DQ7SFQLa.js";import"./CompositeRoot-eNfpFpuA.js";import"./CompositeItem-Dt9_APYR.js";import"./ToolbarRootContext-BNi8FLUA.js";import"./composite-16NtQKdD.js";import"./svgIconContainer-DFa2cGRe.js";import"./PdfViewerSearchBar-CVu4wB8E.js";import"./chevron-up-L_ZEPEZh.js";import"./chevron-down-MvzNfmay.js";import"./cross-BUbLZE-A.js";import"./PdfViewerSidebar-DCX9fkgX.js";import"./index-B3lVa8tN.js";import"./index-fMg1ul0K.js";import"./index-pscJp3QG.js";import"./PdfViewerToolbar-hk58afon.js";import"./Button-CnrUq9Aa.js";import"./chevron-right-DmxmUjx8.js";import"./Input-DlQ75Tiv.js";import"./search-B9cWql5S.js";import"./spin-DE-BIapt.js";import"./error-5Rk85rBd.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4031/e6cfcc84a942b7630e99a5f3beb1c552988f715d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
