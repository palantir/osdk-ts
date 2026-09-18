import{j as n}from"./iframe-D4YDcgkV.js";import{B as e}from"./BasePdfViewer-BH9N0X8c.js";import"./preload-helper-DCpW9ncL.js";import"./index-8cY8PtKc.js";import"./BasePdfViewer.module.css-BrvlBFtM.js";import"./PdfViewerAnnotationLayer-wySpKKjR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hD77BUY9.js";import"./PdfViewerOutlineSidebar-D6UfSJzy.js";import"./PdfViewerSidebarHeader-Cb1SRH4m.js";import"./useBaseUiId-Ce1LHnbR.js";import"./useControlled-Bj0_koJm.js";import"./CompositeRoot-BeFBVw78.js";import"./CompositeItem-CnYlQOQU.js";import"./ToolbarRootContext-BCQVnjEL.js";import"./composite-B2mz0pd-.js";import"./svgIconContainer-COB7RfBn.js";import"./PdfViewerSearchBar-DVXzxh_G.js";import"./chevron-up-ClZcIOpV.js";import"./chevron-down-BuYLfoea.js";import"./cross-Behni1B5.js";import"./PdfViewerSidebar-Bhk4j4nQ.js";import"./index-DFYfgBX1.js";import"./index-BDXEDFqG.js";import"./index-D59BFBqo.js";import"./PdfViewerToolbar-DgiHP4qo.js";import"./Button--v4W1QZO.js";import"./chevron-right-ClYBr9ue.js";import"./Input-Ddw8KtcR.js";import"./search-DK0Hi7mb.js";import"./spin-BdvIRdyG.js";import"./error-CiQk9egS.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4058/f6865ce4ac4b7a65cfaaeac824cbf0e98357945b/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
