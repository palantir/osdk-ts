import{j as n}from"./iframe-DdqwQQfw.js";import{B as e}from"./BasePdfViewer-CND7EW3Q.js";import"./preload-helper-Do8DhNTP.js";import"./index-BEo5fRZG.js";import"./BasePdfViewer.module.css-ZxyWqwOQ.js";import"./PdfViewerAnnotationLayer-DM_9TtDc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aojFZA8B.js";import"./PdfViewerOutlineSidebar-ClYkfH0y.js";import"./PdfViewerSidebarHeader-BNpJcy3V.js";import"./useBaseUiId-Bcpg3lGk.js";import"./useControlled-DlTcdMFR.js";import"./CompositeRoot-CLlf3n7V.js";import"./CompositeItem-rVjlE15s.js";import"./ToolbarRootContext-BDaRyBS_.js";import"./composite-BS7fyn0m.js";import"./svgIconContainer-z_HFHagN.js";import"./PdfViewerSearchBar-BsGn2LEY.js";import"./chevron-up-CmCXNRx6.js";import"./chevron-down-RBc_HqKE.js";import"./cross-D_2LRYUd.js";import"./PdfViewerSidebar-BYh2EWHz.js";import"./index-ByyVIpwn.js";import"./index-DUGkPzpV.js";import"./index-DqbF2orL.js";import"./PdfViewerToolbar-g72nddx2.js";import"./Button-D31p01oo.js";import"./chevron-right-CVO2S0jx.js";import"./Input-Ddm5AThx.js";import"./search-BAD3BF_p.js";import"./spin-uI0843al.js";import"./error-BE-sE7Te.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4343/1d0d86861e26524dcf5c6d7f0d815ba3280aa352/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
