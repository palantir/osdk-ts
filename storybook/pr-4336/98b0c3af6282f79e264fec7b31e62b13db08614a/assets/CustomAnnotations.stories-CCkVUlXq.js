import{j as n}from"./iframe-fiDzxSac.js";import{B as e}from"./BasePdfViewer-Czf_glmY.js";import"./preload-helper-vUH8WtXv.js";import"./index-RsLmo9Ef.js";import"./BasePdfViewer.module.css-C8w1JCtv.js";import"./PdfViewerAnnotationLayer-DYx0WRwy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DU_1d-ID.js";import"./PdfViewerOutlineSidebar-DdkCF9Wx.js";import"./PdfViewerSidebarHeader-B6oLNyKf.js";import"./useBaseUiId-D5crqalZ.js";import"./useControlled-CY87ml-W.js";import"./CompositeRoot-DJUtzFK0.js";import"./CompositeItem-CFHCXDOZ.js";import"./ToolbarRootContext-C3QdEmtK.js";import"./composite-BaurXFau.js";import"./svgIconContainer-DuFQRV6L.js";import"./PdfViewerSearchBar-BRXMLXRB.js";import"./chevron-up-CdmodP9H.js";import"./chevron-down-BeNvA5Jp.js";import"./cross-Dj0Tr1LR.js";import"./PdfViewerSidebar-C-uHoc0N.js";import"./index-CxuMtNmx.js";import"./index-ZxWxF6R4.js";import"./index-CFMoivIb.js";import"./PdfViewerToolbar-CClbqGay.js";import"./Button-BF-ip-LD.js";import"./chevron-right-BmDtbV82.js";import"./Input-kfNjj_-b.js";import"./search-B0MLGd_Y.js";import"./spin-BvpJ_biI.js";import"./error-DWaVmqt2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4336/98b0c3af6282f79e264fec7b31e62b13db08614a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
