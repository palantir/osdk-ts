import{j as n}from"./iframe-BVAvsfQX.js";import{B as e}from"./BasePdfViewer-C2r57M-C.js";import"./preload-helper-BwI1TZkb.js";import"./index-NhX7SFCA.js";import"./BasePdfViewer.module.css-B8lc8SZT.js";import"./PdfViewerAnnotationLayer-BuYjcXv6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-0wws9OQx.js";import"./PdfViewerOutlineSidebar-CMUgVocZ.js";import"./PdfViewerSidebarHeader-Dt-34AIy.js";import"./useBaseUiId-DNCMaGc4.js";import"./useControlled-DefMg-iO.js";import"./CompositeRoot-C0VK8q3G.js";import"./CompositeItem-D1GzGip_.js";import"./ToolbarRootContext-mIzgtd8o.js";import"./composite-BKwa0sk2.js";import"./svgIconContainer-DA2Ye4kw.js";import"./PdfViewerSearchBar-BXOsDUjz.js";import"./chevron-up-B7GAqbKU.js";import"./chevron-down-D9zeVubV.js";import"./cross-Blq0AAlZ.js";import"./PdfViewerSidebar-DLAiONSF.js";import"./index-CsgPrkQT.js";import"./index-Pg5rWMVo.js";import"./index-CZLwJ3bI.js";import"./PdfViewerToolbar-BWbDQA9L.js";import"./Button-D9hGt4n3.js";import"./chevron-right-DBrTvDTg.js";import"./Input-BfbcPKto.js";import"./search-YL3_raLw.js";import"./spin-__sEt3KL.js";import"./error-CpL1Ts52.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4285/1945c65778af9abaae4f7cfe07585568c11ed992/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
