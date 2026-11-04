import{j as n}from"./iframe-6oxuiw9Z.js";import{B as e}from"./BasePdfViewer-Bfr1Vpdj.js";import"./preload-helper-BTY9tSHX.js";import"./index-DDLC59ec.js";import"./BasePdfViewer.module.css-DUD_Z2h8.js";import"./PdfViewerAnnotationLayer-BrncqSrT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7FD3BNP.js";import"./PdfViewerOutlineSidebar-Ckk9OgJG.js";import"./PdfViewerSidebarHeader-DYPpUFam.js";import"./useBaseUiId-CTF0uA8q.js";import"./useControlled-Dfn-KuCH.js";import"./CompositeRoot-BslKp4VJ.js";import"./CompositeItem-CxzD_nac.js";import"./ToolbarRootContext-Cg1szVJV.js";import"./composite-D6aR9WOy.js";import"./svgIconContainer-CCWfPmIE.js";import"./PdfViewerSearchBar-DiLTxrpt.js";import"./chevron-up-RSO-Meb3.js";import"./chevron-down-D5GnK5oF.js";import"./cross-DFvXSKDO.js";import"./PdfViewerSidebar-qy9y8gZm.js";import"./index-Buj0z2vt.js";import"./index-CgONBqcV.js";import"./index-5k16yjvX.js";import"./PdfViewerToolbar-B8ghU2NP.js";import"./Button-BYfKNsB1.js";import"./chevron-right-DsrUsQcH.js";import"./Input-CFCgD2F3.js";import"./search-CEhUV7Cx.js";import"./spin-DoZG_dbw.js";import"./error-CCmYgvH-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4341/1ed7c0e783e6a2911de8e41d552b7fd40fbef06f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
