import{j as n}from"./iframe-B7clUVHt.js";import{B as e}from"./BasePdfViewer-D3SRq9gi.js";import"./preload-helper-CUPfdM8_.js";import"./index-BJuITS90.js";import"./BasePdfViewer.module.css-Dyy6RQSZ.js";import"./PdfViewerAnnotationLayer-C_uh5Kix.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_AlQ9vp.js";import"./PdfViewerOutlineSidebar-CxKJeb2i.js";import"./PdfViewerSidebarHeader-CGqkPvkM.js";import"./useBaseUiId-DVrDHycI.js";import"./useControlled-ccc4EKlt.js";import"./CompositeRoot-o-Rz0IEc.js";import"./CompositeItem-DVh6-70_.js";import"./ToolbarRootContext-CjbBLH2h.js";import"./composite-DyK7yBlQ.js";import"./svgIconContainer-BJLnErPQ.js";import"./PdfViewerSearchBar-DbkPwkVv.js";import"./chevron-up-CHEo39G-.js";import"./chevron-down-M1DCZVuw.js";import"./cross-CmeT_My2.js";import"./PdfViewerSidebar-yiDNJ9ZP.js";import"./index-CjqIP0d4.js";import"./index-aq1Wm6Yn.js";import"./index-DD_iU2uX.js";import"./PdfViewerToolbar-Czf3GT8o.js";import"./Button-BsEC03FF.js";import"./chevron-right-fNto6Rxu.js";import"./Input-CT_I8RKH.js";import"./search-D5J8qnAm.js";import"./spin-C60HKyjM.js";import"./error-gkpqEfzK.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4043/18190187062d7d1ddd25e3568a0635be12659e84/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
