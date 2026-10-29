import{j as n}from"./iframe-U_ccsXOa.js";import{B as e}from"./BasePdfViewer-DJvVF4kt.js";import"./preload-helper-65xl7bLJ.js";import"./index-BOhpqcbq.js";import"./BasePdfViewer.module.css-7ZuyVjfZ.js";import"./PdfViewerAnnotationLayer-BBXy4kgl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CURT3cmM.js";import"./PdfViewerOutlineSidebar-CldAmIiT.js";import"./PdfViewerSidebarHeader-DVmdQOq2.js";import"./useBaseUiId-CsjkwTP2.js";import"./useControlled-CXjwM6_M.js";import"./CompositeRoot-Bj3sKbob.js";import"./CompositeItem-6mTD-F3x.js";import"./ToolbarRootContext-D5-PfmM6.js";import"./composite-jcTrqHdY.js";import"./svgIconContainer-Bdip5v4Z.js";import"./PdfViewerSearchBar-Bk3quefY.js";import"./chevron-up-CAF9G4DN.js";import"./chevron-down-B2jqRAv_.js";import"./cross-Dx8cyWlu.js";import"./PdfViewerSidebar-8qkoIdPZ.js";import"./index-BncXt_hB.js";import"./index-CPxksT-G.js";import"./index-CZOfpX0o.js";import"./PdfViewerToolbar-FUcGaosr.js";import"./Button-6VeiZu2O.js";import"./chevron-right-Bscj5Yje.js";import"./Input-W79UZ-Qi.js";import"./search-V9O-Ezy9.js";import"./spin-BC-qNuTx.js";import"./error-DWlA1yK3.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4286/c19e786180f3905d29e55e3e20f0316c82de6eef/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
