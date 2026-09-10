import{j as n}from"./iframe-CpcWMsh2.js";import{B as e}from"./BasePdfViewer-SLWXT-C9.js";import"./preload-helper-CN3GQMjz.js";import"./index-Crz8jB-9.js";import"./BasePdfViewer.module.css-iUUJT5-L.js";import"./PdfViewerAnnotationLayer-Dc9VoHgf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-By5V5iQT.js";import"./PdfViewerOutlineSidebar-CLWKYemt.js";import"./PdfViewerSidebarHeader-Bc7mNLfc.js";import"./useBaseUiId-DXzATXKT.js";import"./useControlled-nerw9-6R.js";import"./CompositeRoot-9Gx1ntls.js";import"./CompositeItem-Bm31Wr9o.js";import"./ToolbarRootContext-nw5M_EUa.js";import"./composite-CtH7isvm.js";import"./svgIconContainer-Huh63JJu.js";import"./PdfViewerSearchBar-C6ySXB_9.js";import"./chevron-up-Ctp0z2FB.js";import"./chevron-down-ByJuuwk-.js";import"./cross-BGaRJcvO.js";import"./PdfViewerSidebar-C0GwaDCF.js";import"./index-BbnSTWOo.js";import"./index-BBtYj7J3.js";import"./index-doObrpzR.js";import"./PdfViewerToolbar-CnekX4Pw.js";import"./Button-CUMMFBAM.js";import"./chevron-right-BmYsvrnU.js";import"./Input-BdQWVtdR.js";import"./search-BprxbqFd.js";import"./spin-D4PO8CQY.js";import"./error-Cea5AChJ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4020/aaf499b22d630f9a90f7e215b04f4a95a7e74da1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
