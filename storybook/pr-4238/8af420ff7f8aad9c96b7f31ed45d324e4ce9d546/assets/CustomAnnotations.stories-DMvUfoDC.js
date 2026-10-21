import{j as n}from"./iframe-D_14QzXp.js";import{B as e}from"./BasePdfViewer-BwizMZv6.js";import"./preload-helper-COqd9mn5.js";import"./index-dgvA8TZ9.js";import"./BasePdfViewer.module.css-C2yfMUcr.js";import"./PdfViewerAnnotationLayer-BZbDb-ce.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXCdZwLz.js";import"./PdfViewerOutlineSidebar-K_8UTANm.js";import"./PdfViewerSidebarHeader-BlKhhd3p.js";import"./useBaseUiId-CG8eOpE9.js";import"./useControlled-DcIpQ5so.js";import"./CompositeRoot-BFjQMxRy.js";import"./CompositeItem-CEQFfLmp.js";import"./ToolbarRootContext-q675nIs9.js";import"./composite-DPicY4x_.js";import"./svgIconContainer-DLS8mbZw.js";import"./PdfViewerSearchBar-KdMPZYoF.js";import"./chevron-up-DdereFNN.js";import"./chevron-down-0GDoiAFe.js";import"./cross-CugZ9ecx.js";import"./PdfViewerSidebar-8GEYmgpu.js";import"./index-DY8cgXE9.js";import"./index-Df1oZaSN.js";import"./index-Ccw16ZEo.js";import"./PdfViewerToolbar-Bboq4rii.js";import"./Button-emDgWZB-.js";import"./chevron-right-DKCSd0uj.js";import"./Input-DorH3bhS.js";import"./search-kgDQ-7P8.js";import"./spin-CdEAizNu.js";import"./error-3iJhsGJG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4238/8af420ff7f8aad9c96b7f31ed45d324e4ce9d546/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
