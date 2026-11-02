import{j as n}from"./iframe-BnrsOFns.js";import{B as e}from"./BasePdfViewer-DZuCM-U1.js";import"./preload-helper-C6w5d29Q.js";import"./index-tNt1Rsha.js";import"./BasePdfViewer.module.css-CK7Ab9yX.js";import"./PdfViewerAnnotationLayer-DyAXSvrm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-IFu38hit.js";import"./PdfViewerOutlineSidebar-DgQmXOmk.js";import"./PdfViewerSidebarHeader-CXU8o4nN.js";import"./useBaseUiId-CnooZjs2.js";import"./useControlled-BkaP8RLt.js";import"./CompositeRoot-DO44Qm0Q.js";import"./CompositeItem-CoclYseh.js";import"./ToolbarRootContext-DKbWnJ_n.js";import"./composite-D8-ppVWB.js";import"./svgIconContainer-DHTpClH2.js";import"./PdfViewerSearchBar-BiIjGSJm.js";import"./chevron-up-C1tOweU3.js";import"./chevron-down-CJXJGt0n.js";import"./cross-DmYEQL4N.js";import"./PdfViewerSidebar-DJS9PY4i.js";import"./index-D5j7HDb2.js";import"./index-BGU_qlki.js";import"./index-COCOeC7h.js";import"./PdfViewerToolbar-8tPcrr9B.js";import"./Button-CQyg3zRK.js";import"./chevron-right-AdbL7vla.js";import"./Input-Bh0uDmot.js";import"./search-Ch8w7dwR.js";import"./spin-BzwnExdx.js";import"./error-5DZ7K3HO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4304/64b8a529f71d0994d2141163f3503b1aa9a440d2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
