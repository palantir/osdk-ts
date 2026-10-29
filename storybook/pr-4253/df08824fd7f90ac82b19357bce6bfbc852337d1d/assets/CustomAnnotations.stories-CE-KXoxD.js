import{j as n}from"./iframe-2fyz7Bbq.js";import{B as e}from"./BasePdfViewer-DCNG1tFe.js";import"./preload-helper-FOou-mrh.js";import"./index-w9tQLZ4b.js";import"./BasePdfViewer.module.css-C1ycsbCy.js";import"./PdfViewerAnnotationLayer-7FydnsbR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBboPNvi.js";import"./PdfViewerOutlineSidebar-0L7pY3wI.js";import"./PdfViewerSidebarHeader-C7WxnAIL.js";import"./useBaseUiId-Dhg2ncZ0.js";import"./useControlled-DBeA7CGw.js";import"./CompositeRoot-Bp4YIOpv.js";import"./CompositeItem-DxQDXycs.js";import"./ToolbarRootContext-D0NvUOkn.js";import"./composite-B2qtiWqW.js";import"./svgIconContainer-CyZL2Xnt.js";import"./PdfViewerSearchBar-BcoXxP2u.js";import"./chevron-up-BQ9gaiFE.js";import"./chevron-down-IEWgGiNw.js";import"./cross-FzaN-G0q.js";import"./PdfViewerSidebar-Cwvz9SX-.js";import"./index-CV5ZhaCs.js";import"./index-2dmmxfKi.js";import"./index-BVjs4Tt3.js";import"./PdfViewerToolbar-yenhppDC.js";import"./Button-CEYlZhfx.js";import"./chevron-right-D87zwXsr.js";import"./Input-BME0--u-.js";import"./search-Cte9a7SC.js";import"./spin-CTxgJwQy.js";import"./error-DQou1LSG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4253/df08824fd7f90ac82b19357bce6bfbc852337d1d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
