import{j as n}from"./iframe-BxJiroe5.js";import{B as e}from"./BasePdfViewer-BJOj1MH5.js";import"./preload-helper-DLdhLncI.js";import"./index-D3_UFpM5.js";import"./BasePdfViewer.module.css-C_jHUZiA.js";import"./PdfViewerAnnotationLayer-e3o812jg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVo3SbGP.js";import"./PdfViewerOutlineSidebar-UQwByyEw.js";import"./PdfViewerSidebarHeader-BdV4NJvN.js";import"./useBaseUiId-CsOPh1qV.js";import"./useControlled-DfqnBr2w.js";import"./CompositeRoot-BLV6PWXU.js";import"./CompositeItem-BT8yR1a5.js";import"./ToolbarRootContext--suhwR1X.js";import"./composite-BKj-HEYH.js";import"./svgIconContainer-C-ufoPHL.js";import"./PdfViewerSearchBar-DwFBiz8X.js";import"./chevron-up-C402f-7H.js";import"./chevron-down-DjbhW8-h.js";import"./cross-Bw3wvyRT.js";import"./PdfViewerSidebar-CrK3KFF-.js";import"./index-hrPqGcKI.js";import"./index-nC3VniDk.js";import"./index-0CUe0U0r.js";import"./PdfViewerToolbar-CNuCyU6f.js";import"./Button-Bo57TzJg.js";import"./chevron-right-Ba8s5nQ5.js";import"./Input-DEdpGx6f.js";import"./search-JlbJ_F58.js";import"./spin-DG2wkoqv.js";import"./error-CmKYwFXp.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4289/067bbd492a1d3fc4415a623c5e151046ef506c1c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
