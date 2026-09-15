import{j as n}from"./iframe-DP2XT2Ax.js";import{B as e}from"./BasePdfViewer-B2gYoSnY.js";import"./preload-helper-MSxHh9cg.js";import"./index-CZwfuIm2.js";import"./BasePdfViewer.module.css-dbWV6bYD.js";import"./PdfViewerAnnotationLayer-DxqabTf4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0TeDTUn.js";import"./PdfViewerOutlineSidebar-C2nKzhYJ.js";import"./PdfViewerSidebarHeader-DuSfI6ft.js";import"./useBaseUiId-FZoWw8m8.js";import"./useControlled-C4scXiay.js";import"./CompositeRoot-DYAU3vjN.js";import"./CompositeItem-AXDbFh92.js";import"./ToolbarRootContext-BZtQONnf.js";import"./composite-CmPQztny.js";import"./svgIconContainer-CYYVNj4c.js";import"./PdfViewerSearchBar-BvTPCdI9.js";import"./chevron-up-B8bW0ZvP.js";import"./chevron-down-CzZnZ__S.js";import"./cross-BST2eW_7.js";import"./PdfViewerSidebar-Vc8AG8oj.js";import"./index-DTkzCssz.js";import"./index-RJE3YwuO.js";import"./index-B2FT6Zn5.js";import"./PdfViewerToolbar-DDBT72Fe.js";import"./Button-BVtJyzoK.js";import"./chevron-right-CZrJGb7a.js";import"./Input-1UPAFlWH.js";import"./search-DHZrW8_w.js";import"./spin-NDYsP5fO.js";import"./error-BbJX9_-G.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4015/38e7ec0f4a8d77b42b69594520f5129a328ee382/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
