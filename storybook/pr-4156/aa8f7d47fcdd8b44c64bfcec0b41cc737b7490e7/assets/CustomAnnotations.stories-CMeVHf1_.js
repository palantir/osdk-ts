import{j as n}from"./iframe-CDX-NTfD.js";import{B as e}from"./BasePdfViewer-DP9LUQGI.js";import"./preload-helper-CSvLju02.js";import"./index-D6xAz9PB.js";import"./BasePdfViewer.module.css-_ZcHSgrJ.js";import"./PdfViewerAnnotationLayer-BZGBZWXz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DyakSSVV.js";import"./PdfViewerOutlineSidebar-BMgEnIHa.js";import"./PdfViewerSidebarHeader-6qS8tWOt.js";import"./useBaseUiId-CM3Yhx5P.js";import"./useControlled-CLUlXrHb.js";import"./CompositeRoot-G0IwBiJo.js";import"./CompositeItem-nsBHK6f-.js";import"./ToolbarRootContext-BX6M6ShK.js";import"./composite-CpWLo2c3.js";import"./svgIconContainer-99TPvqBc.js";import"./PdfViewerSearchBar-CoHsy8la.js";import"./chevron-up-CWV7V4BU.js";import"./chevron-down-r7sEOhf_.js";import"./cross-CUWzhEFb.js";import"./PdfViewerSidebar-BsRMtAEj.js";import"./index-DTEUSjqo.js";import"./index-qkQ_SGyl.js";import"./index-DmFJgdYe.js";import"./PdfViewerToolbar-DzuKCBQV.js";import"./Button-CscfG-hh.js";import"./chevron-right-DIyekDiy.js";import"./Input-Dz-cSGCu.js";import"./search-DvrI77MS.js";import"./spin-C05TSbS2.js";import"./error-BplB6VbP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4156/aa8f7d47fcdd8b44c64bfcec0b41cc737b7490e7/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
