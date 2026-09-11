import{j as n}from"./iframe-BzQifrbm.js";import{B as e}from"./BasePdfViewer-BeQ0xu5k.js";import"./preload-helper-CfkbdYt3.js";import"./index-DmrXmCsp.js";import"./BasePdfViewer.module.css-C9_zxmWt.js";import"./PdfViewerAnnotationLayer-PYI32aEU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEwu1LOx.js";import"./PdfViewerOutlineSidebar-DQ74vB3c.js";import"./PdfViewerSidebarHeader-RLHDy8cK.js";import"./useBaseUiId-6fIHZX7k.js";import"./useControlled-D0PoBQGG.js";import"./CompositeRoot-CGj0oX1M.js";import"./CompositeItem-CA5vFsEl.js";import"./ToolbarRootContext-CUQpKqWY.js";import"./composite-Bm8VjQnK.js";import"./svgIconContainer-eTPVDcxE.js";import"./PdfViewerSearchBar-4VkcM9Qs.js";import"./chevron-up-Djx50XjO.js";import"./chevron-down-DgIB0DB7.js";import"./cross-BtXGESXa.js";import"./PdfViewerSidebar-BuW1CKGV.js";import"./index-YkT_3P70.js";import"./index-DRwqomtN.js";import"./index-C6mlQsvu.js";import"./PdfViewerToolbar-KmEDLLfM.js";import"./Button-DGOVPU6o.js";import"./chevron-right-Dp6OsSDk.js";import"./Input-D_KI0oie.js";import"./search-i0ScbyPC.js";import"./spin-Dz0T-Avo.js";import"./error-C5OE11e3.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3772/b2346daf948cba92c0c7824ad3141d7dcea52267/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
