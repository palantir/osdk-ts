import{j as n}from"./iframe-BGhobRtu.js";import{B as e}from"./BasePdfViewer-BPzsTPt5.js";import"./preload-helper-pGzP1r6a.js";import"./index-vtFPCgDX.js";import"./BasePdfViewer.module.css-BzexBz_H.js";import"./PdfViewerAnnotationLayer-zNmAEmxC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B6AgzrL3.js";import"./PdfViewerOutlineSidebar-KoOrc_Sx.js";import"./PdfViewerSidebarHeader-BLwpDxBj.js";import"./useBaseUiId-DQZ7iRRg.js";import"./useControlled-Dp1hI4GV.js";import"./CompositeRoot--woMTd9b.js";import"./CompositeItem-C8P235hg.js";import"./ToolbarRootContext-DV_dajLa.js";import"./composite-N1fMxm4N.js";import"./svgIconContainer-B7bAtHsS.js";import"./PdfViewerSearchBar-C_ny_4ed.js";import"./chevron-up-CzjEd9u5.js";import"./chevron-down-DAtIJVst.js";import"./cross-CuYz6VCw.js";import"./PdfViewerSidebar-DgG0hDpY.js";import"./index-EPx86zSw.js";import"./index-qA_bivHa.js";import"./index-C0Y6HNv7.js";import"./PdfViewerToolbar-BGpdt9Et.js";import"./Button-DAz_khhf.js";import"./chevron-right-DEz8fcwi.js";import"./Input-C3PEeUtQ.js";import"./search-CD-rabLl.js";import"./spin-3jFEliKG.js";import"./error-CFVPudD2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4074/9a0294df67e9b90720f187b4cc3cfbabfc1928f5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
