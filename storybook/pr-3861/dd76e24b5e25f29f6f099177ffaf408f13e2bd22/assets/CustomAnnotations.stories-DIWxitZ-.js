import{j as n}from"./iframe-DXDjAXel.js";import{B as e}from"./BasePdfViewer-hLzoWpZl.js";import"./preload-helper-IpZxA0ro.js";import"./index-CpU5tjqP.js";import"./BasePdfViewer.module.css-CbrzJI72.js";import"./PdfViewerAnnotationLayer-CJ0m8UoD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-AM7gsH9W.js";import"./PdfViewerOutlineSidebar-CbATXmfs.js";import"./PdfViewerSidebarHeader-ON1zIFbb.js";import"./useBaseUiId-C45Ma1UV.js";import"./useControlled-KXVdK95E.js";import"./CompositeRoot-zXPDzw2Z.js";import"./CompositeItem-CDBKBcu9.js";import"./ToolbarRootContext-YFTPY9mo.js";import"./composite--V8DJrbe.js";import"./svgIconContainer-jCzC3C8h.js";import"./PdfViewerSearchBar-C5XIY2wM.js";import"./chevron-up-CTqyJ7aC.js";import"./chevron-down-KI9ROJP6.js";import"./cross-DEtWv0qy.js";import"./PdfViewerSidebar-DhnXPbs8.js";import"./index-BZKWr6fS.js";import"./index-DeWq_guV.js";import"./index-BxV2gtcY.js";import"./PdfViewerToolbar-CUOVHuAt.js";import"./Button-B-4Jw48N.js";import"./chevron-right-Cf-wvkAs.js";import"./Input-Dpc4Iwso.js";import"./search-CiGMtB3E.js";import"./spin-qbSjdm87.js";import"./error-Ba9KLhOx.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3861/dd76e24b5e25f29f6f099177ffaf408f13e2bd22/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
