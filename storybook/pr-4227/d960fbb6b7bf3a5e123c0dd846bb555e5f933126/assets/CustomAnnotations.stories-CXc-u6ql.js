import{j as n}from"./iframe-C8jWyiQL.js";import{B as e}from"./BasePdfViewer-Bk7DPR6F.js";import"./preload-helper-D3hrqtKI.js";import"./index-Ck3WMYCS.js";import"./BasePdfViewer.module.css-O1yWtspD.js";import"./PdfViewerAnnotationLayer-7Awe-4Ep.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DdCda3E_.js";import"./PdfViewerOutlineSidebar-B_aJ5K-b.js";import"./PdfViewerSidebarHeader-Z_kUTjCO.js";import"./useBaseUiId-C0Hhh4zZ.js";import"./useControlled-HdEPNqxD.js";import"./CompositeRoot-M7l7lOLa.js";import"./CompositeItem-DPPPi3Ly.js";import"./ToolbarRootContext-CKRR356X.js";import"./composite-VSkp61oJ.js";import"./svgIconContainer-Cl0UVpcd.js";import"./PdfViewerSearchBar-DZhpVp2u.js";import"./chevron-up-CRrSBUVC.js";import"./chevron-down-DWvQrpRH.js";import"./cross-Dl8HY39B.js";import"./PdfViewerSidebar-D0Qz0osc.js";import"./index-B-MOYaQO.js";import"./index-Ch17Lfr0.js";import"./index-p54yret9.js";import"./PdfViewerToolbar--jqGV0sY.js";import"./Button-3m2yzrh1.js";import"./chevron-right-CgDVGKQK.js";import"./Input-BJZD4UWc.js";import"./search-D-ei7hDs.js";import"./spin-DtrPWeXh.js";import"./error-DFAsAkKT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4227/d960fbb6b7bf3a5e123c0dd846bb555e5f933126/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
