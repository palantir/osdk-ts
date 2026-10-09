import{j as n}from"./iframe-B7aJzwbo.js";import{B as e}from"./BasePdfViewer-BPEFPF67.js";import"./preload-helper-eRVNIb5p.js";import"./index-RdZvG0OW.js";import"./BasePdfViewer.module.css-CJyyIC6I.js";import"./PdfViewerAnnotationLayer-Cn1M5yjk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-8EoJZINk.js";import"./PdfViewerOutlineSidebar-CSMK4xCS.js";import"./PdfViewerSidebarHeader-DXM-_MWs.js";import"./useBaseUiId-CkpX5NB7.js";import"./useControlled-BukasUFK.js";import"./CompositeRoot-DRlfgqoB.js";import"./CompositeItem-D0hFRJVg.js";import"./ToolbarRootContext-NP1s66to.js";import"./composite-HBnNRj0V.js";import"./svgIconContainer-CdK9JNQh.js";import"./PdfViewerSearchBar-DQL19Wlt.js";import"./chevron-up-C7Q58OFU.js";import"./chevron-down-BK8JqzlO.js";import"./cross-B1O6ebQi.js";import"./PdfViewerSidebar-NPm4TWUJ.js";import"./index-DALXba2W.js";import"./index-8RrkNowe.js";import"./index-CkeudptZ.js";import"./PdfViewerToolbar-DkYQl8JJ.js";import"./Button-C-woLY16.js";import"./chevron-right-Bwc3rLwz.js";import"./Input-qBFcNfHq.js";import"./search-CZmCb7y8.js";import"./spin-Iyt7t25L.js";import"./error-CWUTjlhY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4172/1721cb100ce927d469d68f4e3b172af7a5239aae/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
