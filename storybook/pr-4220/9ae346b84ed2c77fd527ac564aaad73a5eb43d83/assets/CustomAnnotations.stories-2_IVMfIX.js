import{j as n}from"./iframe-CQJeOMd0.js";import{B as e}from"./BasePdfViewer-CtaF_biw.js";import"./preload-helper-DYgGZ5xf.js";import"./index-ZrJt1iGx.js";import"./BasePdfViewer.module.css-CK1FK93k.js";import"./PdfViewerAnnotationLayer-BaasQFMZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BI3k-CA0.js";import"./PdfViewerOutlineSidebar-3gWDhq_X.js";import"./PdfViewerSidebarHeader-BZJxSwtd.js";import"./useBaseUiId-UYsDOBIH.js";import"./useControlled-DiW8shJx.js";import"./CompositeRoot-C3iUD0YR.js";import"./CompositeItem-BlyLfX91.js";import"./ToolbarRootContext-BZfxaQ_Q.js";import"./composite-B-fR2hSY.js";import"./svgIconContainer-By2ff4hT.js";import"./PdfViewerSearchBar-C172Ll-I.js";import"./chevron-up-oXUixRK4.js";import"./chevron-down-BsREGsZS.js";import"./cross-DwSzg9Eu.js";import"./PdfViewerSidebar-D6TnFdx1.js";import"./index-DTaUM21t.js";import"./index-Bfc4h_Hy.js";import"./index-CazEHWy5.js";import"./PdfViewerToolbar-DZ_sgt6a.js";import"./Button-CNntGJtS.js";import"./chevron-right-p7RTCciC.js";import"./Input-D3KZDZ9i.js";import"./search-CdEhbnO_.js";import"./spin-lXdVA0Gt.js";import"./error-pXwI3jKa.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4220/9ae346b84ed2c77fd527ac564aaad73a5eb43d83/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
