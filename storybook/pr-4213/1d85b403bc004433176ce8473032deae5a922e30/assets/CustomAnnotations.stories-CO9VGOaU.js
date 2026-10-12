import{j as n}from"./iframe-BfxMX6cT.js";import{B as e}from"./BasePdfViewer-BgT4FHgK.js";import"./preload-helper-BPDao22J.js";import"./index-D5QdHG6c.js";import"./BasePdfViewer.module.css-BGVcOmwo.js";import"./PdfViewerAnnotationLayer-CNTk4cwa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DpqtsGdz.js";import"./PdfViewerOutlineSidebar-DvxPTIOC.js";import"./PdfViewerSidebarHeader-DojvcOYE.js";import"./useBaseUiId-Diys5Rd8.js";import"./useControlled-AEJbE5Jc.js";import"./CompositeRoot-BnpeQnUg.js";import"./CompositeItem-BPbSYDgv.js";import"./ToolbarRootContext-DYeN6dWB.js";import"./composite-CX7YV8L_.js";import"./svgIconContainer-B11i6ssl.js";import"./PdfViewerSearchBar-ph1_MVm7.js";import"./chevron-up-DXYJxj0k.js";import"./chevron-down-3tdgVjjI.js";import"./cross-BQzi9cCY.js";import"./PdfViewerSidebar-DnUaNUzM.js";import"./index-DBgFz0Qc.js";import"./index-CgOKnRwH.js";import"./index-DGcqs1ai.js";import"./PdfViewerToolbar-CI1-fnlJ.js";import"./Button-4wSek2R3.js";import"./chevron-right-s9dwPl5F.js";import"./Input-C-zjcWJd.js";import"./search-D1ZDVnFF.js";import"./spin-l6SQTipy.js";import"./error-Cw0OZsfU.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4213/1d85b403bc004433176ce8473032deae5a922e30/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
