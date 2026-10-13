import{j as n}from"./iframe-CzOy-JTY.js";import{B as e}from"./BasePdfViewer-D34eaBy-.js";import"./preload-helper-CIQ1DaMN.js";import"./index-Dumhhqmc.js";import"./BasePdfViewer.module.css-ComQC5UX.js";import"./PdfViewerAnnotationLayer-DVSVF7NY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXuwHwU1.js";import"./PdfViewerOutlineSidebar-BYQiWK6l.js";import"./PdfViewerSidebarHeader-BXOsNTU9.js";import"./useBaseUiId-DnUPrOGO.js";import"./useControlled-B2qS0FH4.js";import"./CompositeRoot-DXRrMkcj.js";import"./CompositeItem-BAmKL-U0.js";import"./ToolbarRootContext-BCdc83Ck.js";import"./composite-BVn9jKX7.js";import"./svgIconContainer-DpIclYOT.js";import"./PdfViewerSearchBar-R6fGmbqf.js";import"./chevron-up-r9gOX2c1.js";import"./chevron-down-USLYqae_.js";import"./cross-CWygvYLq.js";import"./PdfViewerSidebar-C52aahJI.js";import"./index-BLqBty1z.js";import"./index-CyYfj6ys.js";import"./index-C62E3V-C.js";import"./PdfViewerToolbar-fut91Eb7.js";import"./Button-emQM4kcG.js";import"./chevron-right-BEpk0ZQ4.js";import"./Input-MeFMWRbL.js";import"./search-BJ6lcKDX.js";import"./spin-Bm0NYlb5.js";import"./error-Dy_Lr_qP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4215/f665f1ec97f32382e12e3b45563773ec0b59f7e2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
