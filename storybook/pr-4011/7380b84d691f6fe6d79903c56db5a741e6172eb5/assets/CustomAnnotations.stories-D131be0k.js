import{j as n}from"./iframe-Cd0WuP5s.js";import{B as e}from"./BasePdfViewer-uZOTZWCG.js";import"./preload-helper-BULq60Sg.js";import"./index-Dn3UPUEv.js";import"./BasePdfViewer.module.css-LSvWQbiL.js";import"./PdfViewerAnnotationLayer-DAibjFT5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLoeGog7.js";import"./PdfViewerOutlineSidebar-BfWUZLyk.js";import"./PdfViewerSidebarHeader-0wp4tX8J.js";import"./useBaseUiId-DrebTsUj.js";import"./useControlled-BoZ7gbt2.js";import"./CompositeRoot-DVz_H_XK.js";import"./CompositeItem-CUY6v9CS.js";import"./ToolbarRootContext-zlKF7dlE.js";import"./composite-DOtbOOdR.js";import"./svgIconContainer-Zo359bK_.js";import"./PdfViewerSearchBar-DXgxR9Sg.js";import"./chevron-up-DD5syRc5.js";import"./chevron-down-Dtgstolr.js";import"./cross-Cht5ZydL.js";import"./PdfViewerSidebar-BMuDXVZY.js";import"./index-8j_gMIpQ.js";import"./index-C-_orMox.js";import"./index-BgMZ2AWP.js";import"./PdfViewerToolbar-D_Go5aXB.js";import"./Button-DQgJQ0ys.js";import"./chevron-right-Che5kgaY.js";import"./Input-Cxx4mnqf.js";import"./search-j5X8koaR.js";import"./spin-CpDaRo9q.js";import"./error-BXNrYt0u.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4011/7380b84d691f6fe6d79903c56db5a741e6172eb5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
