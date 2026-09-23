import{j as n}from"./iframe-34VatmEZ.js";import{B as e}from"./BasePdfViewer-2v8xG1VG.js";import"./preload-helper-DV4gmwFB.js";import"./index-BlAm73td.js";import"./BasePdfViewer.module.css-ScMMJe2P.js";import"./PdfViewerAnnotationLayer-D-lmkjZZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CMKSD-FR.js";import"./PdfViewerOutlineSidebar-BC0ChKhw.js";import"./PdfViewerSidebarHeader-CQ4zW9Zl.js";import"./useBaseUiId-DeI-Jtiv.js";import"./useControlled-DVccPDBX.js";import"./CompositeRoot--O9jUwEd.js";import"./CompositeItem-DOiHkRNL.js";import"./ToolbarRootContext-CiWe9x3z.js";import"./composite-1B_4pEYH.js";import"./svgIconContainer-_GM_NvIc.js";import"./PdfViewerSearchBar-Bzg8ewUd.js";import"./chevron-up-DSehXApS.js";import"./chevron-down-BtQO1pkc.js";import"./cross-DvtnLYbI.js";import"./PdfViewerSidebar-wQ32Va5t.js";import"./index-Dm8AHk8O.js";import"./index-Fj7eg8Eu.js";import"./index-BTVWVA6f.js";import"./PdfViewerToolbar-DZTsQ8PD.js";import"./Button-DV1A9r6F.js";import"./chevron-right-BzvIpsuC.js";import"./Input-BKrVXT7B.js";import"./search-CVdCifPG.js";import"./spin-693FuYhE.js";import"./error-C-NsPFd6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4075/6b8a39006363d7b1e3b16bf5e44be4d76b9d7100/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
