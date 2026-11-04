import{j as n}from"./iframe-DnJOFPSX.js";import{B as e}from"./BasePdfViewer-CaIfduJo.js";import"./preload-helper-DE0LB-In.js";import"./index-BsrGUZmH.js";import"./BasePdfViewer.module.css-B0Lxj-Jx.js";import"./PdfViewerAnnotationLayer-B2aGTmdy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BxTlIt42.js";import"./PdfViewerOutlineSidebar-6pU1LbIu.js";import"./PdfViewerSidebarHeader-C49DST9Q.js";import"./useBaseUiId-BmOtxMBQ.js";import"./useControlled-LZY0zNEU.js";import"./CompositeRoot--UloWT4z.js";import"./CompositeItem-C0xu2aal.js";import"./ToolbarRootContext-C0ive6C5.js";import"./composite-ActYTO9Q.js";import"./svgIconContainer-C9e6psM5.js";import"./PdfViewerSearchBar-CQQzP6Rn.js";import"./chevron-up-CQ9DGpiu.js";import"./chevron-down-DnnfJ5YY.js";import"./cross-RxTC7yT1.js";import"./PdfViewerSidebar-B8Wq54r8.js";import"./index-Dz6yRx1S.js";import"./index-C47JnOK2.js";import"./index-CN_nZvI2.js";import"./PdfViewerToolbar-DFQIHX6H.js";import"./Button-cZ9KvtCU.js";import"./chevron-right-DZ_0zxjG.js";import"./Input-DAAzhLOd.js";import"./search-1uNTCuXG.js";import"./spin-fD4iwopV.js";import"./error-BL2HC2Sp.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4343/7d0c19200867541034fd8d3f463180ecc47b9043/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
