import{j as n}from"./iframe-EpH4H8Ct.js";import{B as e}from"./BasePdfViewer-BJqRmz0Q.js";import"./preload-helper-AInD9Bcq.js";import"./index-6wkuS9kk.js";import"./BasePdfViewer.module.css-DP7d-l3q.js";import"./PdfViewerAnnotationLayer-RQpMg6y3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DsuoNhWh.js";import"./PdfViewerOutlineSidebar-d1FFtfWi.js";import"./PdfViewerSidebarHeader-DFFE9VT-.js";import"./useBaseUiId-B53jZkpD.js";import"./useControlled-D6NLbg_O.js";import"./CompositeRoot-ln6Pmanu.js";import"./CompositeItem-DzD_vpNX.js";import"./ToolbarRootContext-BhZagEjX.js";import"./composite-CXo_dnRM.js";import"./svgIconContainer-BEULmRQq.js";import"./PdfViewerSearchBar-DuoXff5_.js";import"./chevron-up-DUmXP7Zo.js";import"./chevron-down-B3Hf5n4h.js";import"./cross-Bw1kg8R1.js";import"./PdfViewerSidebar-DbhHE7zv.js";import"./index-Dva8VjAa.js";import"./index-Dy-Nc8BB.js";import"./index-5GEbdtwp.js";import"./PdfViewerToolbar-CgVXlkiV.js";import"./Button-BXHz7yPF.js";import"./chevron-right-CMsBc4vs.js";import"./Input-DNhi3I7C.js";import"./search-Bdehc4Bq.js";import"./spin-DJZXcuaj.js";import"./error-CwB_EWnJ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4054/9c253755b8e0fb1f2b40bf55e800b1d33f6675bf/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
