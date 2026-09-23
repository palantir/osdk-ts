import{j as n}from"./iframe-CWxH_eja.js";import{B as e}from"./BasePdfViewer-BNrGEwZT.js";import"./preload-helper-BGM-FNNL.js";import"./index-rukiLk-t.js";import"./BasePdfViewer.module.css-BamvrecD.js";import"./PdfViewerAnnotationLayer-D9wQaaQl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFWggdJt.js";import"./PdfViewerOutlineSidebar-CDcAJqhP.js";import"./PdfViewerSidebarHeader-Cxy7ZaCf.js";import"./useBaseUiId-DjXwJ_4A.js";import"./useControlled-CaUffLu_.js";import"./CompositeRoot-DE5qHj0D.js";import"./CompositeItem-ClK4GwxV.js";import"./ToolbarRootContext-BeUcIWq0.js";import"./composite--3W2QfLD.js";import"./svgIconContainer-BVjwrQj6.js";import"./PdfViewerSearchBar-BqC25G3G.js";import"./chevron-up-CQPb-X1m.js";import"./chevron-down-CtewQHTT.js";import"./cross-BUnzug5D.js";import"./PdfViewerSidebar-3BYPeLFB.js";import"./index-91nsioHy.js";import"./index-CCBaaayX.js";import"./index-VZEG51bO.js";import"./PdfViewerToolbar-Rb0HcLvx.js";import"./Button-xLQbkIr8.js";import"./chevron-right-52Er8IeG.js";import"./Input-CalfVJQO.js";import"./search-CCiYcsoJ.js";import"./spin-DOXLJM3l.js";import"./error-4ibjlhF7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4073/9ee60d0bb8e76fd32462aac56e8ce2f4e7bb80d5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
