import{j as n}from"./iframe-BHMJk_pQ.js";import{B as e}from"./BasePdfViewer-BeFHInHZ.js";import"./preload-helper-yZDhH5uY.js";import"./index-CGIFCVjE.js";import"./BasePdfViewer.module.css-ClTjxzLF.js";import"./PdfViewerAnnotationLayer-CRuB6pPV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-MYqczd51.js";import"./PdfViewerOutlineSidebar-BY_gewEs.js";import"./PdfViewerSidebarHeader-TrM7eRgM.js";import"./useBaseUiId-q1ez9o9O.js";import"./useControlled-CoWycKh2.js";import"./CompositeRoot-DExkPkqU.js";import"./CompositeItem-C-ykAJ2x.js";import"./ToolbarRootContext-eWmTNPN4.js";import"./composite-vsetCZGp.js";import"./svgIconContainer-EnhuaKpb.js";import"./PdfViewerSearchBar-DxIewKW6.js";import"./chevron-up-Dab4RRO1.js";import"./chevron-down-DAwRR1Ih.js";import"./cross-Ca7k_LyQ.js";import"./PdfViewerSidebar-Bj6rCugL.js";import"./index-DYYPIily.js";import"./index-DlggJEEa.js";import"./index-CzKMl-a_.js";import"./PdfViewerToolbar-s1bx6uNP.js";import"./Button-agVfxQZq.js";import"./chevron-right-Bhh2SDXE.js";import"./Input-Bs3tYIFL.js";import"./search-BSgVHkt6.js";import"./spin-bEbG95gF.js";import"./error-DwwBySlx.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4012/1b375a2d09b0599aef4bbd3c1ee9517e401e6624/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
