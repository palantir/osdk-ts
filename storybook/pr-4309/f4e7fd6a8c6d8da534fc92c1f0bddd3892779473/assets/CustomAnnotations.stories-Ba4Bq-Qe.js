import{j as n}from"./iframe-DpkDs-j9.js";import{B as e}from"./BasePdfViewer-j8ARXbtv.js";import"./preload-helper-BJT4uFVz.js";import"./index-BfXl5P7F.js";import"./BasePdfViewer.module.css-DOF4dRbd.js";import"./PdfViewerAnnotationLayer-C_8Xqtue.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B3KU6zTy.js";import"./PdfViewerOutlineSidebar-DmCbNxv_.js";import"./PdfViewerSidebarHeader-B7e9aC16.js";import"./useBaseUiId-BRApLhFH.js";import"./useControlled-Z-gfVngv.js";import"./CompositeRoot-C1Mq1mgm.js";import"./CompositeItem-BWOALM-p.js";import"./ToolbarRootContext-BtylWzdM.js";import"./composite-CYXI2UHT.js";import"./svgIconContainer-0YWxOZfe.js";import"./PdfViewerSearchBar-DqapoxaV.js";import"./chevron-up-JsLnX-_r.js";import"./chevron-down-_hw012xs.js";import"./cross-CySzb61z.js";import"./PdfViewerSidebar-jBnldkEL.js";import"./index-tOaH1qey.js";import"./index-CXFl5eQh.js";import"./index-g8PO-kx8.js";import"./PdfViewerToolbar-C9DDMNYQ.js";import"./Button-DUyzdMzu.js";import"./chevron-right-90eI8Xop.js";import"./Input-xEESwrVF.js";import"./search-9Dh1YH6c.js";import"./spin-6wkVDtYs.js";import"./error-CJpmyc4X.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4309/f4e7fd6a8c6d8da534fc92c1f0bddd3892779473/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
