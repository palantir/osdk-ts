import{j as n}from"./iframe-DEpmrtbG.js";import{B as e}from"./BasePdfViewer-8LKvmk8x.js";import"./preload-helper-Bgg2uCW1.js";import"./index-DgxVBE9v.js";import"./BasePdfViewer.module.css-BqQiX0iB.js";import"./PdfViewerAnnotationLayer-fJq5Vmya.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zw2D3fBY.js";import"./PdfViewerOutlineSidebar-CLh7fUvT.js";import"./PdfViewerSidebarHeader-C5edfi6W.js";import"./useBaseUiId-CETaC9GH.js";import"./useControlled-CxIvThFp.js";import"./CompositeRoot-BspKcE-Z.js";import"./CompositeItem-LCipfobg.js";import"./ToolbarRootContext-BN4SwV4N.js";import"./composite-DBo_GtSD.js";import"./svgIconContainer-DWCXHbm6.js";import"./PdfViewerSearchBar-CZpZlxlp.js";import"./chevron-up-u1U_q5Bu.js";import"./chevron-down-Cvm0d31k.js";import"./cross-CrU6nGJP.js";import"./PdfViewerSidebar-COmLs_bD.js";import"./index-Ddv81Ai4.js";import"./index-gBnbSOoM.js";import"./index-BsQx4f-z.js";import"./PdfViewerToolbar-Dy1ftZOh.js";import"./Button-C-DZ3Yzq.js";import"./chevron-right-DjJ3dCTu.js";import"./Input-DnQqAjUi.js";import"./search-B4TawZLP.js";import"./spin-7ipxWjVh.js";import"./error-DVsFEdhY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3663/9ed0d45db967e93ecf9c6235909ba8374eaea934/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
