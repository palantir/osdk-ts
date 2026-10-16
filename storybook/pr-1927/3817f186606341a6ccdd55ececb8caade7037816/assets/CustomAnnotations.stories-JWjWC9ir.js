import{j as n}from"./iframe-DmjyB9qr.js";import{B as e}from"./BasePdfViewer-BihJ5UhZ.js";import"./preload-helper-CAx3wjDj.js";import"./index-D4TDlc_O.js";import"./BasePdfViewer.module.css-BEyGm1Wi.js";import"./PdfViewerAnnotationLayer-zZSou8f-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-mbOlqkjO.js";import"./PdfViewerOutlineSidebar-R9p1H_1B.js";import"./PdfViewerSidebarHeader-BSexjVYi.js";import"./useBaseUiId-BIBlatd5.js";import"./useControlled-Bb9znHKm.js";import"./CompositeRoot-CwGyj2Cf.js";import"./CompositeItem-DhSM1hah.js";import"./ToolbarRootContext-9w_REGks.js";import"./composite-ClGRLeRM.js";import"./svgIconContainer-D2c8Ba4-.js";import"./PdfViewerSearchBar-BGHS5GiN.js";import"./chevron-up-ChvIVDyp.js";import"./chevron-down-8HOE1Tp7.js";import"./cross-C5lxgD8z.js";import"./PdfViewerSidebar-C7_2bpmp.js";import"./index-ByDovlnf.js";import"./index-CaiUNbzc.js";import"./index-Cv1wdKn8.js";import"./PdfViewerToolbar-Bezx1Vr5.js";import"./Button-DBHSL7QN.js";import"./chevron-right-CSPvlqX9.js";import"./Input-CLw0N-7T.js";import"./search-CQ17z9WA.js";import"./spin-DJbmMb_j.js";import"./error-C5ZuOycH.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1927/3817f186606341a6ccdd55ececb8caade7037816/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
