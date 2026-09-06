import{j as n}from"./iframe-CPzX1uSk.js";import{B as e}from"./BasePdfViewer-C0K9UPP9.js";import"./preload-helper-BV_2dDRe.js";import"./index-COJJFOT5.js";import"./BasePdfViewer.module.css-DCw21rSf.js";import"./PdfViewerAnnotationLayer-cS31vF03.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-W8NrVfV2.js";import"./PdfViewerOutlineSidebar-CoQYmMKH.js";import"./PdfViewerSidebarHeader-B32oRswh.js";import"./useBaseUiId-Dlz6RJMI.js";import"./useControlled-C6jvEykx.js";import"./CompositeRoot-B3wdSVIR.js";import"./CompositeItem-BddFvRMc.js";import"./ToolbarRootContext-ddrpupWn.js";import"./composite-BpWI7eGy.js";import"./svgIconContainer-BUGQNNP_.js";import"./PdfViewerSearchBar-Czn-fnxN.js";import"./chevron-up-D9jkfLmz.js";import"./chevron-down-C8Owk0H7.js";import"./cross-CrQPe3Ah.js";import"./PdfViewerSidebar-BiehZDmA.js";import"./index-Cz0_03bE.js";import"./index-bgG3RNaT.js";import"./index-Ce1oZCaV.js";import"./PdfViewerToolbar-Cvr5Qe_n.js";import"./Button-Bp9aDI8N.js";import"./chevron-right-y3oxejj1.js";import"./Input-BcH8rlzt.js";import"./search-DbyDvw8l.js";import"./spin-C5ysTixq.js";import"./error-DwSWgrLn.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1926/d9be3d4a666b4b4523e09e1fad563ab9eafc313e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
