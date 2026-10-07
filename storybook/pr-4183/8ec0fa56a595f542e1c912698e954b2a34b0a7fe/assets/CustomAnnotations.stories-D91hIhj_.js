import{j as n}from"./iframe-C4U2JRoY.js";import{B as e}from"./BasePdfViewer-D1pIMwOD.js";import"./preload-helper-DN3ZEv3h.js";import"./index-sST8iqoh.js";import"./BasePdfViewer.module.css-D-CYqp9K.js";import"./PdfViewerAnnotationLayer-ClxhjNZn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-26HnQxKy.js";import"./PdfViewerOutlineSidebar-CIF-K5hy.js";import"./PdfViewerSidebarHeader-DrdvH8sB.js";import"./useBaseUiId-t75_1mYb.js";import"./useControlled-DgRL6il9.js";import"./CompositeRoot-Ds9KXhrb.js";import"./CompositeItem-2E0ykI3P.js";import"./ToolbarRootContext-BAVcRF15.js";import"./composite-DyzBkCx-.js";import"./svgIconContainer-Bqyk4ukb.js";import"./PdfViewerSearchBar-C58nS9a3.js";import"./chevron-up-5MsGEDsY.js";import"./chevron-down-dh5AFKhr.js";import"./cross-BjW1gIQB.js";import"./PdfViewerSidebar-DDfrfZDG.js";import"./index-DXHuqct4.js";import"./index-CwxTqGIm.js";import"./index-BAotWep5.js";import"./PdfViewerToolbar-BA8kPwNx.js";import"./Button-_EOncV-8.js";import"./chevron-right-JfhVFnfL.js";import"./Input-Bt5QmGO0.js";import"./search-DGpCoBRn.js";import"./spin-m6UB76fD.js";import"./error-CEamcZeP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4183/8ec0fa56a595f542e1c912698e954b2a34b0a7fe/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
