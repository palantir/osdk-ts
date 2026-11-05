import{j as n}from"./iframe-BryHz5Df.js";import{B as e}from"./BasePdfViewer-BGkn_QzJ.js";import"./preload-helper-ZuG0aKTk.js";import"./index-iPKk9s3t.js";import"./BasePdfViewer.module.css-B5Dh37lj.js";import"./PdfViewerAnnotationLayer-0jzIrjRt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQ0Yv6BS.js";import"./PdfViewerOutlineSidebar-Cu91YgDa.js";import"./PdfViewerSidebarHeader-CnHQGy-Y.js";import"./useBaseUiId-lqu4HseA.js";import"./useControlled-CylTdVLs.js";import"./CompositeRoot-BvYm5qj3.js";import"./CompositeItem-CUgXhRoj.js";import"./ToolbarRootContext-BjHx285v.js";import"./composite-BowJ7EVh.js";import"./svgIconContainer-Bz8FzOTG.js";import"./PdfViewerSearchBar-B7EiwU7D.js";import"./chevron-up-CWdDDD0T.js";import"./chevron-down-DjbeKg79.js";import"./cross-ailj0yO2.js";import"./PdfViewerSidebar-CDOwb4cj.js";import"./index-BK-BH_Yo.js";import"./index-DLszwrmC.js";import"./index-B23Jlpe-.js";import"./PdfViewerToolbar-BTKd_7Cj.js";import"./Button-C6Ze9Rf1.js";import"./chevron-right-B8FrljbQ.js";import"./Input-BJM0PLwp.js";import"./search-BMoYocFy.js";import"./spin-AXOGtmcP.js";import"./error-CL2fTgGo.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4286/943c2962447bdeafaa0027d6a9516ab89e058f33/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
