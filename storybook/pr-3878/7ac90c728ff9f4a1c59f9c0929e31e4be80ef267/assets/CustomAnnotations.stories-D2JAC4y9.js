import{j as n}from"./iframe-BrczSXWd.js";import{B as e}from"./BasePdfViewer-B6riY9Hj.js";import"./preload-helper-C9BY0Y3l.js";import"./index-DudA86qY.js";import"./BasePdfViewer.module.css-cstrvPQ1.js";import"./PdfViewerAnnotationLayer-BgNv1zln.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DE5GJRgT.js";import"./PdfViewerOutlineSidebar-DZpCtusT.js";import"./PdfViewerSidebarHeader-jicJGQyQ.js";import"./useBaseUiId-BAdjTZxi.js";import"./useControlled-rjkFsMU4.js";import"./CompositeRoot-BSNg0blt.js";import"./CompositeItem-BJcTRkcm.js";import"./ToolbarRootContext-BTk5x8Vt.js";import"./composite-Bm0YB8hl.js";import"./svgIconContainer-CE-3RmSd.js";import"./PdfViewerSearchBar-U_IPavex.js";import"./chevron-up-CohoVb5E.js";import"./chevron-down-Bqbgyapn.js";import"./cross-Ru6xXr8E.js";import"./PdfViewerSidebar-CSu1mxLK.js";import"./index-HlCA-cEl.js";import"./index-BNKav9tw.js";import"./index-DjqiYrmI.js";import"./PdfViewerToolbar-CWgWi4tZ.js";import"./Button-DCegplHy.js";import"./chevron-right-2DMlM-Pk.js";import"./Input-B6lE5n2S.js";import"./search-BIr2ECst.js";import"./spin-CS46t0Mz.js";import"./error-CUc0NJXd.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3878/7ac90c728ff9f4a1c59f9c0929e31e4be80ef267/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
