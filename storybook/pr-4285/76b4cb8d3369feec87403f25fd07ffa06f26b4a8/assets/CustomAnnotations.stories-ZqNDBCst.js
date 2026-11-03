import{j as n}from"./iframe-CZB8iCrN.js";import{B as e}from"./BasePdfViewer-Dfxs1swG.js";import"./preload-helper-Bfp8b3lb.js";import"./index-B20F_8Db.js";import"./BasePdfViewer.module.css-0yK5IhFd.js";import"./PdfViewerAnnotationLayer-23BrVjNa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYEhnS4O.js";import"./PdfViewerOutlineSidebar-c1ImahRu.js";import"./PdfViewerSidebarHeader-BoscA2ne.js";import"./useBaseUiId-Dl-CxI70.js";import"./useControlled-CISHEyOE.js";import"./CompositeRoot-DeCtH-KB.js";import"./CompositeItem-BGy1WNiQ.js";import"./ToolbarRootContext-Xc9NkH4h.js";import"./composite-7sRBgyZt.js";import"./svgIconContainer-C34Xeufa.js";import"./PdfViewerSearchBar-CyEpc43Z.js";import"./chevron-up-C1YtvBR9.js";import"./chevron-down-CyERpmZf.js";import"./cross-BaVj46vf.js";import"./PdfViewerSidebar-Dmdi-oNP.js";import"./index-CnvQ1zd9.js";import"./index-DadbORQH.js";import"./index-DiIHqUbm.js";import"./PdfViewerToolbar-DVEpds74.js";import"./Button-CN7eBVL6.js";import"./chevron-right-D_5B1IRG.js";import"./Input-mSuQxNwT.js";import"./search-FLqm4c0t.js";import"./spin-Ct3H6N-2.js";import"./error-BrUtxvkn.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4285/76b4cb8d3369feec87403f25fd07ffa06f26b4a8/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
