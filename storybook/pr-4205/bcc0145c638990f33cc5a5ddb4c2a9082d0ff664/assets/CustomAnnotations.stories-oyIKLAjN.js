import{j as n}from"./iframe-Dmb-mlzV.js";import{B as e}from"./BasePdfViewer-BzJtNGow.js";import"./preload-helper-MIGgaMld.js";import"./index-Ds3o4atQ.js";import"./BasePdfViewer.module.css-CCWNBMdg.js";import"./PdfViewerAnnotationLayer-Oo5jtBgM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CfIcRT5q.js";import"./PdfViewerOutlineSidebar-DHA29xSO.js";import"./PdfViewerSidebarHeader-C38WX3pN.js";import"./useBaseUiId-Bl-3cYCN.js";import"./useControlled-BM7SnBgs.js";import"./CompositeRoot-DjAH1BTs.js";import"./CompositeItem-BWXXLF3M.js";import"./ToolbarRootContext-pJcR2hxd.js";import"./composite-6EKatbQT.js";import"./svgIconContainer-DAFeyB5Y.js";import"./PdfViewerSearchBar-CNnIt4_5.js";import"./chevron-up-BvfLEj3k.js";import"./chevron-down-BZ7oFKmu.js";import"./cross-_swrXFsE.js";import"./PdfViewerSidebar-D6ELzOM7.js";import"./index-DZas1VAi.js";import"./index-CP5aixwn.js";import"./index-qj8WLeK2.js";import"./PdfViewerToolbar-df08pbyb.js";import"./Button-8xVTVGsk.js";import"./chevron-right-bbc-ykJd.js";import"./Input-CBzkX4z8.js";import"./search-DMyFpELI.js";import"./spin-Cpe5fPBT.js";import"./error-XRi8aH0l.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4205/bcc0145c638990f33cc5a5ddb4c2a9082d0ff664/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
