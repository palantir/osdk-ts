import{j as n}from"./iframe-n9hYnZ1k.js";import{B as e}from"./BasePdfViewer-BKZUl87n.js";import"./preload-helper-BfllC993.js";import"./index-jFXEL4dj.js";import"./BasePdfViewer.module.css-Cnm5VKr2.js";import"./PdfViewerAnnotationLayer-D65eoavv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DYGWl51b.js";import"./PdfViewerOutlineSidebar-kNFxhUf7.js";import"./PdfViewerSidebarHeader-BaxN7BVN.js";import"./useBaseUiId--HQwG44S.js";import"./useControlled-DVMhLBcM.js";import"./CompositeRoot-DQOCmPRb.js";import"./CompositeItem-CR3Fp4HR.js";import"./ToolbarRootContext-D77_KmSZ.js";import"./composite-BHMqnRJI.js";import"./svgIconContainer-Ds9BUjSm.js";import"./PdfViewerSearchBar-B34V9PKJ.js";import"./chevron-up-4s-c7Z0m.js";import"./chevron-down-0IZaGxOE.js";import"./cross-B2c8g5Vb.js";import"./PdfViewerSidebar-CYNoP9se.js";import"./index-BM8zROYs.js";import"./index-CD83LihZ.js";import"./index-CsVpqo9H.js";import"./PdfViewerToolbar-CaD8e0zv.js";import"./Button-C1ReapeD.js";import"./chevron-right-PiT8SQ35.js";import"./Input-D9iybl22.js";import"./search-DNZ54Yxb.js";import"./spin-DEUhCvTq.js";import"./error-D9TzGXim.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4238/9b53f4153fca13a179edfa7d8f3c5fe1fe0c281d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
