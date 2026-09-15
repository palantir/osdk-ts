import{j as n}from"./iframe-SCQrgHSr.js";import{B as e}from"./BasePdfViewer-cJHfEz4_.js";import"./preload-helper-ruFAjrX8.js";import"./index-BUtIlNP3.js";import"./BasePdfViewer.module.css-BcmJ0CEX.js";import"./PdfViewerAnnotationLayer-DwQYU5N6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBfqV98e.js";import"./PdfViewerOutlineSidebar-CQNOxjVI.js";import"./PdfViewerSidebarHeader-Cl_GlXV3.js";import"./useBaseUiId-BR-Fy_C2.js";import"./useControlled-Cz7FsEHc.js";import"./CompositeRoot-BCA50m_r.js";import"./CompositeItem-Co12UxPz.js";import"./ToolbarRootContext-BfCeEs7c.js";import"./composite-Dt5lUk_W.js";import"./svgIconContainer-PYczuJwB.js";import"./PdfViewerSearchBar-yWShgWFv.js";import"./chevron-up-DkMOD8xG.js";import"./chevron-down-CgTNl4cy.js";import"./cross-RzKZrUkh.js";import"./PdfViewerSidebar-CCJhuukd.js";import"./index-ZLSkTGBP.js";import"./index--0Ld1SF2.js";import"./index-w54i75Ov.js";import"./PdfViewerToolbar-Dc3NwNem.js";import"./Button-CuEtz6jx.js";import"./chevron-right-GCWvYjW8.js";import"./Input-CnPO-APv.js";import"./search-Dm4EdHL9.js";import"./spin-_buxEs4I.js";import"./error-bDXyKJC8.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4016/74b44f803275094af6a0ec237d8961917b06ad19/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
