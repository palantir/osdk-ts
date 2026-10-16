import{j as n}from"./iframe-BatTRwfa.js";import{B as e}from"./BasePdfViewer-C88bX-OC.js";import"./preload-helper-1dO9BeYB.js";import"./index-DOW0CwQC.js";import"./BasePdfViewer.module.css-DsJlWK0_.js";import"./PdfViewerAnnotationLayer-BfdPlywD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BrlL28F-.js";import"./PdfViewerOutlineSidebar-CSMBqjSr.js";import"./PdfViewerSidebarHeader-B3Cbl0jO.js";import"./useBaseUiId-DvfpcKJo.js";import"./useControlled-STn9JHtw.js";import"./CompositeRoot-DYz2YvtC.js";import"./CompositeItem-5Yv0-9Y-.js";import"./ToolbarRootContext-DNGFWytt.js";import"./composite-BBv4613M.js";import"./svgIconContainer-BEJ8Uc8u.js";import"./PdfViewerSearchBar-BhiwtH0E.js";import"./chevron-up-CQaqaItd.js";import"./chevron-down-DrwZYKMn.js";import"./cross-BDeJmnrY.js";import"./PdfViewerSidebar-DYqotsxK.js";import"./index-DAlaDr9m.js";import"./index-CjHrbaV9.js";import"./index-zVbC2njb.js";import"./PdfViewerToolbar-BY7CKcLZ.js";import"./Button-Du5jWjff.js";import"./chevron-right-DqCP77j9.js";import"./Input-C5LDgX9X.js";import"./search-CZvhHXAJ.js";import"./spin-DD2yJORt.js";import"./error-D_Nf9rBh.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1926/20996e6e5d0f33ae8371cb1b7569d52aa0f11719/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
