import{j as n}from"./iframe-DljkNNxK.js";import{B as e}from"./BasePdfViewer-CboSLd2a.js";import"./preload-helper-Cpo1q_i6.js";import"./index-D64RJmhP.js";import"./BasePdfViewer.module.css-1zrF6tZn.js";import"./PdfViewerAnnotationLayer-C438AilN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ZXWFWpva.js";import"./PdfViewerOutlineSidebar-CAQw7WYZ.js";import"./PdfViewerSidebarHeader-krlztRqR.js";import"./useBaseUiId-BDewQ6nf.js";import"./useControlled-Chg_haxJ.js";import"./CompositeRoot-9hHHwD3S.js";import"./CompositeItem-asw0sP3K.js";import"./ToolbarRootContext-DT3K0tIr.js";import"./composite-GUx361Ly.js";import"./svgIconContainer-CnhwGfa6.js";import"./PdfViewerSearchBar-aXMdBSKx.js";import"./chevron-up-CO0SZdwt.js";import"./chevron-down-TeUlP9Ri.js";import"./cross-BC6Bgo8V.js";import"./PdfViewerSidebar-sWvnl6Ze.js";import"./index-IcPHFoqD.js";import"./index-BwvPIv6E.js";import"./index-DVoFeU9w.js";import"./PdfViewerToolbar-HZHcI9qt.js";import"./Button-sFRd8YxN.js";import"./chevron-right-Bxm0Pe6L.js";import"./Input-C1T-Uord.js";import"./search-CviN7Quw.js";import"./spin-DGzd_DtO.js";import"./error-M6Q45Sy0.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4011/b63c7b7b9c3b57c1e99640b513a1669d5474e3e9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
