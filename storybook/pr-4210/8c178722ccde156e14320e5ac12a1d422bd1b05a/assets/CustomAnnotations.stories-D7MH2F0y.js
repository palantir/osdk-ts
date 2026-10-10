import{j as n}from"./iframe-CvUSgiu3.js";import{B as e}from"./BasePdfViewer-B7C7VKcr.js";import"./preload-helper-B0zyaiwI.js";import"./index-DmcWe2qf.js";import"./BasePdfViewer.module.css-DLtOfhN-.js";import"./PdfViewerAnnotationLayer-wTRExLFA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-De__YhDF.js";import"./PdfViewerOutlineSidebar-B8Umehmg.js";import"./PdfViewerSidebarHeader-BrRis7dm.js";import"./useBaseUiId-DY1Z1crQ.js";import"./useControlled-DxVirw8z.js";import"./CompositeRoot-CcJNiJRM.js";import"./CompositeItem-BekmKE9y.js";import"./ToolbarRootContext-BRgMGrEJ.js";import"./composite-2ofaKrdo.js";import"./svgIconContainer-CTy32Y-c.js";import"./PdfViewerSearchBar-DTEB9XzN.js";import"./chevron-up-b89XhrlV.js";import"./chevron-down-BJ7q-Z6f.js";import"./cross-DrZXwXEo.js";import"./PdfViewerSidebar-DqDustDk.js";import"./index-CSjUKw3W.js";import"./index-Cn7kZwJh.js";import"./index-40gUd9cg.js";import"./PdfViewerToolbar-C5atoHyi.js";import"./Button-BbMrXCM7.js";import"./chevron-right-BkM_EMCZ.js";import"./Input-Dqxb3pxV.js";import"./search-BikN9LqI.js";import"./spin-DFKcaS5W.js";import"./error-CFT8_0w_.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4210/8c178722ccde156e14320e5ac12a1d422bd1b05a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
