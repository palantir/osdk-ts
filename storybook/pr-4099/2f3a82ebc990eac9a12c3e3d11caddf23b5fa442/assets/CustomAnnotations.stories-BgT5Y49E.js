import{j as n}from"./iframe-BDPC3MGU.js";import{B as e}from"./BasePdfViewer-DYJYs1Xq.js";import"./preload-helper-DqLc1wpe.js";import"./index-wr-Wa-rJ.js";import"./BasePdfViewer.module.css-CzJT2RH7.js";import"./PdfViewerAnnotationLayer-BDQjeSXD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2WxcRBh.js";import"./PdfViewerOutlineSidebar-BX2ykg1i.js";import"./PdfViewerSidebarHeader-Deqy-g-B.js";import"./useBaseUiId-98Vlp7TA.js";import"./useControlled-BH2-CGJ0.js";import"./CompositeRoot-CRYYgIff.js";import"./CompositeItem-Glk6Ljpg.js";import"./ToolbarRootContext-gDYw7M9I.js";import"./composite-BmeraXkj.js";import"./svgIconContainer-BbA1ZoWr.js";import"./PdfViewerSearchBar-rEsrJ8hZ.js";import"./chevron-up-BRYc7wLQ.js";import"./chevron-down-B2ocyj_k.js";import"./cross-DYURuHsA.js";import"./PdfViewerSidebar-DpX3Z-BC.js";import"./index-DH6huj2W.js";import"./index-BCVo02gU.js";import"./index--VX9rzYc.js";import"./PdfViewerToolbar-B9dA0u9_.js";import"./Button-BuWPanNZ.js";import"./chevron-right-SEL_D816.js";import"./Input-q3l62r8C.js";import"./search-CHOuY8gu.js";import"./spin-BkxihDLE.js";import"./error-BZbzk8xv.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4099/2f3a82ebc990eac9a12c3e3d11caddf23b5fa442/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
