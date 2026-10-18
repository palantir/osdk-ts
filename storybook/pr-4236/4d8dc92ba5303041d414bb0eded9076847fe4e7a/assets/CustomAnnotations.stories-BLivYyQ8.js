import{j as n}from"./iframe-sYP-l0_a.js";import{B as e}from"./BasePdfViewer-3LH4JKKe.js";import"./preload-helper-IUxRucnJ.js";import"./index-BQi0o8Ch.js";import"./BasePdfViewer.module.css-D2vc8KRF.js";import"./PdfViewerAnnotationLayer-C0ZVVJFh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LMA5_LLe.js";import"./PdfViewerOutlineSidebar-Dwh81Asp.js";import"./PdfViewerSidebarHeader-EvIActhD.js";import"./useBaseUiId-Btvm4iEK.js";import"./useControlled-BPCLqxL9.js";import"./CompositeRoot-CLDatbQ_.js";import"./CompositeItem-7yi4DVr9.js";import"./ToolbarRootContext-BoQIBGO1.js";import"./composite-C-aQf2ph.js";import"./svgIconContainer-BEJydEi7.js";import"./PdfViewerSearchBar-B4dTfnHH.js";import"./chevron-up-BgSVvo7b.js";import"./chevron-down-BmV5GZMn.js";import"./cross-Bm2pwBEc.js";import"./PdfViewerSidebar-AVC6BSLf.js";import"./index-00-MRRTX.js";import"./index-C0H-vXi6.js";import"./index-mlL1YxFR.js";import"./PdfViewerToolbar-ecdSUnLu.js";import"./Button-B9jbca7B.js";import"./chevron-right-BPGajvL_.js";import"./Input-CSh4Ffdb.js";import"./search-DLv6CrwK.js";import"./spin-CELmcFhX.js";import"./error-DO2C4OtK.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4236/4d8dc92ba5303041d414bb0eded9076847fe4e7a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
