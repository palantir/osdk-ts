import{j as n}from"./iframe-DCKvSy3g.js";import{B as e}from"./BasePdfViewer-Bm82vQC_.js";import"./preload-helper-C9_QzmoW.js";import"./index-CjqUtRqG.js";import"./BasePdfViewer.module.css-LbC3e7Oe.js";import"./PdfViewerAnnotationLayer-AekPr7QX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-JQ9lGkMe.js";import"./PdfViewerOutlineSidebar-Bt9IWyhj.js";import"./PdfViewerSidebarHeader-CQw0WEw_.js";import"./useBaseUiId-hGdClsAp.js";import"./useControlled-23Be6Ua4.js";import"./CompositeRoot-DlXDoS8m.js";import"./CompositeItem-BaLy62YM.js";import"./ToolbarRootContext-Dfcq71Kx.js";import"./composite-Bftlp7o-.js";import"./svgIconContainer-DUPiMOGt.js";import"./PdfViewerSearchBar-DkGgsaLE.js";import"./chevron-up-Bx5mSGft.js";import"./chevron-down-CQzxndpd.js";import"./cross-Bgi1b_0b.js";import"./PdfViewerSidebar-Dtu03AyF.js";import"./index-BZTMgR5k.js";import"./index-CF-VmLVs.js";import"./index-Dqoie1xV.js";import"./PdfViewerToolbar-DVNLXqhv.js";import"./Button-B8kaenDu.js";import"./chevron-right-AfPumutr.js";import"./Input-DAFKBr8O.js";import"./search-DnxSmR02.js";import"./spin-C7vL01Ul.js";import"./error-DC-QmFfK.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4219/d0c3930fab462c4b511fd850ddd8d4045bfafd82/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
