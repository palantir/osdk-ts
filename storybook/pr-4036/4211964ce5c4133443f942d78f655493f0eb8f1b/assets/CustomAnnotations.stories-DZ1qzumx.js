import{j as n}from"./iframe-BtGRzxci.js";import{B as e}from"./BasePdfViewer-C5R3iOxM.js";import"./preload-helper-CyrDjGUQ.js";import"./index-tVIozFN1.js";import"./BasePdfViewer.module.css-CDOjcUeJ.js";import"./PdfViewerAnnotationLayer-yvMxGMaO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-c-U1xWRi.js";import"./PdfViewerOutlineSidebar-BNu6dVrB.js";import"./PdfViewerSidebarHeader-Dp5q31l8.js";import"./useBaseUiId-XRf534_a.js";import"./useControlled-rccl1Nao.js";import"./CompositeRoot-C6E6Nju3.js";import"./CompositeItem-CG89Nl1U.js";import"./ToolbarRootContext-D3OhDsHo.js";import"./composite-Btju52rS.js";import"./svgIconContainer-CN6dxZIp.js";import"./PdfViewerSearchBar-BQ-amnkx.js";import"./chevron-up-BZf-LWm3.js";import"./chevron-down-C1HWTq_e.js";import"./cross-7jkwYPrY.js";import"./PdfViewerSidebar-BEOar2bx.js";import"./index-DLTZ7l6I.js";import"./index-Dv2SWeyR.js";import"./index-BV7_z1j7.js";import"./PdfViewerToolbar-DWXsEm_M.js";import"./Button-CmbUXSv3.js";import"./chevron-right-C-WJHM1Y.js";import"./Input-DGQhm6BR.js";import"./search-BPr2MDER.js";import"./spin-BddQEUUA.js";import"./error-swCJC4aW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4036/4211964ce5c4133443f942d78f655493f0eb8f1b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
