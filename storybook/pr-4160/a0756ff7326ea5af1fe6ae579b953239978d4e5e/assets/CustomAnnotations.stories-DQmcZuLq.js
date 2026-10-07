import{j as n}from"./iframe-BMLtitQA.js";import{B as e}from"./BasePdfViewer-B62Sdqmg.js";import"./preload-helper-B7zvwNzg.js";import"./index-BKoaBi8s.js";import"./BasePdfViewer.module.css-BTIi6Omp.js";import"./PdfViewerAnnotationLayer-C7_NxUz7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkE610W8.js";import"./PdfViewerOutlineSidebar-DrZp7oaR.js";import"./PdfViewerSidebarHeader-KbydxlhY.js";import"./useBaseUiId-Bv7ijZL9.js";import"./useControlled-BSRFoePA.js";import"./CompositeRoot-CdNOM7Hm.js";import"./CompositeItem-FfLXXCMg.js";import"./ToolbarRootContext-C3i3QER6.js";import"./composite-0pBAMAMm.js";import"./svgIconContainer-DG_uvfKl.js";import"./PdfViewerSearchBar-BvbM14Pj.js";import"./chevron-up-D0YU9iNA.js";import"./chevron-down-BmGdKwgH.js";import"./cross-B9AlOyDj.js";import"./PdfViewerSidebar-DvCNE9Hi.js";import"./index-Dq5rNNxI.js";import"./index-1wGhlHyg.js";import"./index-G040djXj.js";import"./PdfViewerToolbar-R-7qvI-i.js";import"./Button-eAAIImFA.js";import"./chevron-right-DwZ4V7P_.js";import"./Input-D3mEoBXJ.js";import"./search-CINj6xtb.js";import"./spin-Dwd9CEQd.js";import"./error-DwpvxQx3.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4160/a0756ff7326ea5af1fe6ae579b953239978d4e5e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
