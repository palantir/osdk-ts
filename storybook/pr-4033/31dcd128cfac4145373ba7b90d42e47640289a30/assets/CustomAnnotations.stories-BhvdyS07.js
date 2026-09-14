import{j as n}from"./iframe-B-owY9Z7.js";import{B as e}from"./BasePdfViewer-BRpes0al.js";import"./preload-helper-9dohNchO.js";import"./index-B6FNdyul.js";import"./BasePdfViewer.module.css-Dn_hdUq3.js";import"./PdfViewerAnnotationLayer-Cp81sxB1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DDN6plBG.js";import"./PdfViewerOutlineSidebar-Cb0wA0uH.js";import"./PdfViewerSidebarHeader-D389bW0u.js";import"./useBaseUiId-BuygkMJa.js";import"./useControlled-DU5wctnz.js";import"./CompositeRoot-M1Bf3EMV.js";import"./CompositeItem-Czc0ACb3.js";import"./ToolbarRootContext-PF-H9oB3.js";import"./composite-CruT5ftQ.js";import"./svgIconContainer-SVfmpuZH.js";import"./PdfViewerSearchBar-CsLkAVpC.js";import"./chevron-up-CF-KM72b.js";import"./chevron-down-KtY7GIs6.js";import"./cross-DAeYv9DV.js";import"./PdfViewerSidebar-iHFbI2tG.js";import"./index-CHVvDRh4.js";import"./index-D6Mlo6-X.js";import"./index-BLL9qzqo.js";import"./PdfViewerToolbar-Dl5NPLjn.js";import"./Button-CdoyG0J5.js";import"./chevron-right-BZUKbz3n.js";import"./Input-DO0-uKR0.js";import"./search-CeJ8ph1L.js";import"./spin-DkZEhYJj.js";import"./error-BnApDvy6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4033/31dcd128cfac4145373ba7b90d42e47640289a30/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
