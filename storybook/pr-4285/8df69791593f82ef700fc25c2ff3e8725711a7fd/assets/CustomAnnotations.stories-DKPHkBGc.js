import{j as n}from"./iframe-YB9hqlg8.js";import{B as e}from"./BasePdfViewer-CaUBpOXd.js";import"./preload-helper-CTcVL9dw.js";import"./index-jQAJu0aU.js";import"./BasePdfViewer.module.css-DaCc8uBC.js";import"./PdfViewerAnnotationLayer-BnyVAKEQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-uhTW8T6t.js";import"./PdfViewerOutlineSidebar-f84NK5Qw.js";import"./PdfViewerSidebarHeader-BW3ZXN_l.js";import"./useBaseUiId-BmL79WrH.js";import"./useControlled-XI3b4Slf.js";import"./CompositeRoot-oV4NngM_.js";import"./CompositeItem-DRhQIZ9t.js";import"./ToolbarRootContext-DKnQVXJ0.js";import"./composite-DeqrZPcw.js";import"./svgIconContainer-BewESC0Y.js";import"./PdfViewerSearchBar-CtCt-UHg.js";import"./chevron-up-BPnKWxDY.js";import"./chevron-down-CLNGzp69.js";import"./cross-CqHbx82J.js";import"./PdfViewerSidebar-DaaIskSH.js";import"./index-BPsVLTCl.js";import"./index-BFeXeiP0.js";import"./index-Bs1x_wg2.js";import"./PdfViewerToolbar-D9zJATBa.js";import"./Button-BgGo20Fo.js";import"./chevron-right-BrpIGdUP.js";import"./Input-ZdgKVRhe.js";import"./search-BY-8te7i.js";import"./spin-BEJU3Gkz.js";import"./error-C1jwt9uB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4285/8df69791593f82ef700fc25c2ff3e8725711a7fd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
