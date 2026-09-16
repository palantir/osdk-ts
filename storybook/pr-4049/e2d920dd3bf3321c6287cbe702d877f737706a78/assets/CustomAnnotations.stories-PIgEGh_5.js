import{j as n}from"./iframe-DsISivmL.js";import{B as e}from"./BasePdfViewer-e_T9GdVt.js";import"./preload-helper-BzOTEX4h.js";import"./index-CA9KUbCW.js";import"./BasePdfViewer.module.css-CiWvfh2L.js";import"./PdfViewerAnnotationLayer-flJrDOub.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cu3TsdkY.js";import"./PdfViewerOutlineSidebar-CJ4enFoN.js";import"./PdfViewerSidebarHeader-SY6Bs4Hd.js";import"./useBaseUiId-CMSPxGM5.js";import"./useControlled-B8XvalbJ.js";import"./CompositeRoot-DtRaXi0v.js";import"./CompositeItem-DPkp3H9j.js";import"./ToolbarRootContext-BoW9B8ED.js";import"./composite-0zr51VGP.js";import"./svgIconContainer-Dp3EEAal.js";import"./PdfViewerSearchBar-GpZ4Hxq7.js";import"./chevron-up-DsKGUyjQ.js";import"./chevron-down-CGSFBjuL.js";import"./cross-BGShLWmS.js";import"./PdfViewerSidebar-a6CIjiUM.js";import"./index-CKh5Salv.js";import"./index-CLDUlJNg.js";import"./index-vtVyo2v8.js";import"./PdfViewerToolbar-LXc0Rs-o.js";import"./Button-CSztET3k.js";import"./chevron-right-D1fk8oRH.js";import"./Input-C-IYkLA_.js";import"./search-BjXP8SQo.js";import"./spin-DK3fitk7.js";import"./error-33DrpFja.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4049/e2d920dd3bf3321c6287cbe702d877f737706a78/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
