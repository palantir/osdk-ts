import{j as n}from"./iframe-Cfa7VV9b.js";import{B as e}from"./BasePdfViewer-NR6-OuXb.js";import"./preload-helper-CNnDmdGh.js";import"./index-CH9AmopW.js";import"./BasePdfViewer.module.css-CgLU-pa-.js";import"./PdfViewerAnnotationLayer-DQph7Uis.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cu2Ufo8b.js";import"./PdfViewerOutlineSidebar-UMqI4d7N.js";import"./PdfViewerSidebarHeader-B6684-1W.js";import"./useBaseUiId-D_k54qol.js";import"./useControlled-CjWedb3G.js";import"./CompositeRoot-C_HDpiI_.js";import"./CompositeItem-Hyqz3S2c.js";import"./ToolbarRootContext-b1GByVNw.js";import"./composite-CrY-lNuw.js";import"./svgIconContainer-DvY8yHqi.js";import"./PdfViewerSearchBar-D69QY-zx.js";import"./chevron-up-CUjg0Z2m.js";import"./chevron-down-GlFAnb1p.js";import"./cross-BEJbLhxw.js";import"./PdfViewerSidebar-CKZoPJG_.js";import"./index-DIAXbPaT.js";import"./index-Bv1S_5M0.js";import"./index-TmLVBI9S.js";import"./PdfViewerToolbar-5BwV1AyY.js";import"./Button-DTyGlfF4.js";import"./chevron-right-Z5MQe8K0.js";import"./Input-DN8AJK08.js";import"./search-BwdTmPFq.js";import"./spin-C4eQPiMh.js";import"./error-DARJoisr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3978/128e19d143db55edec36139b2cfc3e2a427e640d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
