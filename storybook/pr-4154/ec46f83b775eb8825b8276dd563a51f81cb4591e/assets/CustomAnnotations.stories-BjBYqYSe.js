import{j as n}from"./iframe-i3f0VK7P.js";import{B as e}from"./BasePdfViewer-CXoRg8-X.js";import"./preload-helper-CcQVXdAf.js";import"./index-BSc8nCuA.js";import"./BasePdfViewer.module.css-C-jncDTQ.js";import"./PdfViewerAnnotationLayer-Bd5CVCWw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DnL0S9eH.js";import"./PdfViewerOutlineSidebar-ColfIKAn.js";import"./PdfViewerSidebarHeader-Nb3M64At.js";import"./useBaseUiId-3GNAAiBc.js";import"./useControlled-BBd9b3hp.js";import"./CompositeRoot-fteDc1R_.js";import"./CompositeItem-C5NIgZsO.js";import"./ToolbarRootContext-DMZj-zjR.js";import"./composite-GZoC5isN.js";import"./svgIconContainer-DpWasIbE.js";import"./PdfViewerSearchBar-Bc1XPhNc.js";import"./chevron-up-Dmmoi6D2.js";import"./chevron-down-BEmwBzIe.js";import"./cross-U10SUwzd.js";import"./PdfViewerSidebar-Bft19V59.js";import"./index-B9C8GZw0.js";import"./index-UuGZwwy8.js";import"./index-CrHn1Rne.js";import"./PdfViewerToolbar-hnKdcW95.js";import"./Button-CM2JbGjZ.js";import"./chevron-right-B_fWAyqd.js";import"./Input-BKCzKS6Z.js";import"./search-D1ajCeBe.js";import"./spin-DxE3f87V.js";import"./error-Cm9VDJHx.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4154/ec46f83b775eb8825b8276dd563a51f81cb4591e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
