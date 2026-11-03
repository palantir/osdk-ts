import{j as n}from"./iframe-D4r_-dEc.js";import{B as e}from"./BasePdfViewer-Cx-_t2w3.js";import"./preload-helper-6ZtcGGS6.js";import"./index-7caLYRtX.js";import"./BasePdfViewer.module.css-cZr_qtBn.js";import"./PdfViewerAnnotationLayer-BBjTRKOg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DCtSRty_.js";import"./PdfViewerOutlineSidebar-zsx1AMVz.js";import"./PdfViewerSidebarHeader-TlMWGBUW.js";import"./useBaseUiId-Di53fTVw.js";import"./useControlled-BmrimB4V.js";import"./CompositeRoot-CMhaHLOd.js";import"./CompositeItem-Dyw9HZNd.js";import"./ToolbarRootContext-nt_JLtrz.js";import"./composite-DCTx9hyK.js";import"./svgIconContainer-Dh_c1Bbk.js";import"./PdfViewerSearchBar-Dv07expf.js";import"./chevron-up-mxO02ags.js";import"./chevron-down-ToRQzCeL.js";import"./cross-D7UvadIv.js";import"./PdfViewerSidebar-mGD4Ci6c.js";import"./index-_HJbTBBE.js";import"./index-QrOM1WuB.js";import"./index-BMA4s8ZI.js";import"./PdfViewerToolbar-CJofUTcC.js";import"./Button-Bk2BCIeA.js";import"./chevron-right-6iupBwMV.js";import"./Input-B2HDaQON.js";import"./search-DXq3JDJP.js";import"./spin-BzsagPKW.js";import"./error-1vTQ2DTJ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4325/5d206f627646b8bbdb8e97867a486d4d2c697b26/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
