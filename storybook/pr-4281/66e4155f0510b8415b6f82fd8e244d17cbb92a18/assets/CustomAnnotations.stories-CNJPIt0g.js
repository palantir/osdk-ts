import{j as n}from"./iframe-BLF1KQu4.js";import{B as e}from"./BasePdfViewer-D5H74Xzk.js";import"./preload-helper-GcktYcA3.js";import"./index-aXPerbbD.js";import"./BasePdfViewer.module.css-DruT0XA_.js";import"./PdfViewerAnnotationLayer-PdXvyy60.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dt3N6-6m.js";import"./PdfViewerOutlineSidebar-CB886v7T.js";import"./PdfViewerSidebarHeader-DmoTsxqM.js";import"./useBaseUiId-BxovN8d6.js";import"./useControlled-BnRS1sX7.js";import"./CompositeRoot-BnIl24Qb.js";import"./CompositeItem-jL-VyW-C.js";import"./ToolbarRootContext-FsR9CG6K.js";import"./composite-fyXwWWU2.js";import"./svgIconContainer-DjnJEiXc.js";import"./PdfViewerSearchBar-BXlPoi1e.js";import"./chevron-up-Dr0nS4Jc.js";import"./chevron-down-CtuyY29H.js";import"./cross-D5Owe--z.js";import"./PdfViewerSidebar-QoDWLXl_.js";import"./index-DoZkCOy9.js";import"./index-BeFBWWGf.js";import"./index-CJxk2Woh.js";import"./PdfViewerToolbar-CTC-hdG7.js";import"./Button-YyRiSJZP.js";import"./chevron-right-BHaqyXak.js";import"./Input-ep0tMe9Y.js";import"./search-jxTo-jPn.js";import"./spin-BAAANgFf.js";import"./error-8EJJ_3qq.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4281/66e4155f0510b8415b6f82fd8e244d17cbb92a18/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
