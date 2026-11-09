import{j as n}from"./iframe-tk5AUZuQ.js";import{B as e}from"./BasePdfViewer-B9gCP63F.js";import"./preload-helper-CINJU3SU.js";import"./index-DuoNBOcE.js";import"./BasePdfViewer.module.css-2oWc6wjn.js";import"./PdfViewerAnnotationLayer-7wWng9Fq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B8LsotgK.js";import"./PdfViewerOutlineSidebar-BjUUqwOr.js";import"./PdfViewerSidebarHeader-Db7Xa6uk.js";import"./useBaseUiId-DSKlezyU.js";import"./useControlled-BzYqp0YL.js";import"./CompositeRoot-BGFQLHW0.js";import"./CompositeItem-CQdT7qYH.js";import"./ToolbarRootContext-C3aNx3mE.js";import"./composite-LaLb1mLt.js";import"./svgIconContainer-C5eLdvbo.js";import"./PdfViewerSearchBar-A3euOYWk.js";import"./chevron-up-CKyl3VcN.js";import"./chevron-down-D4rOKL_0.js";import"./cross-C-_HClWz.js";import"./PdfViewerSidebar-D4u2eDSv.js";import"./index-iwECcacA.js";import"./index-BoTbZ6Eb.js";import"./index-BCbjIOTn.js";import"./PdfViewerToolbar-CS4tqwZO.js";import"./Button-B5FtVpF4.js";import"./chevron-right-CfkqqtqT.js";import"./Input-CZRpfSVM.js";import"./search-CAMWt4DD.js";import"./spin-BDiLJOe0.js";import"./error-CfTX2H1b.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4376/e10c5f16e9a1fc98803dbb2e7d91653ffb6d85c2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
