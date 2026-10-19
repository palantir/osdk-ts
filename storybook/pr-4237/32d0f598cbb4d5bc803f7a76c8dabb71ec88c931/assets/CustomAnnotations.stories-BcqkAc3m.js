import{j as n}from"./iframe-D46iQmwz.js";import{B as e}from"./BasePdfViewer-3MsIlK5m.js";import"./preload-helper-CD5q78pN.js";import"./index-aAuOiy4H.js";import"./BasePdfViewer.module.css-QvuVWnVD.js";import"./PdfViewerAnnotationLayer-C2QXdGBE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kNMyt-jt.js";import"./PdfViewerOutlineSidebar-CHG78Yai.js";import"./PdfViewerSidebarHeader-DmBFJ0DG.js";import"./useBaseUiId-CzYRzxTP.js";import"./useControlled-B0hedhV2.js";import"./CompositeRoot-Dq0N1Y5H.js";import"./CompositeItem-K2_1UaBE.js";import"./ToolbarRootContext-D_lRWVni.js";import"./composite-DKDexQnG.js";import"./svgIconContainer-B30Y3J7X.js";import"./PdfViewerSearchBar-DCUEJwXo.js";import"./chevron-up-DzgvA9uv.js";import"./chevron-down-CLNkT6er.js";import"./cross-DILS2Eyl.js";import"./PdfViewerSidebar-DuCSg9bV.js";import"./index-BcX9m2km.js";import"./index-B9mI2qXL.js";import"./index-B11g5eQq.js";import"./PdfViewerToolbar-D_UVWuYm.js";import"./Button-C713JtES.js";import"./chevron-right-BKhbcvXH.js";import"./Input-Y05_-7l4.js";import"./search-CTXiTDhB.js";import"./spin-CPPwPeVQ.js";import"./error-C1HeeVQA.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4237/32d0f598cbb4d5bc803f7a76c8dabb71ec88c931/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
