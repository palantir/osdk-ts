import{j as n}from"./iframe-BWsptOx9.js";import{B as e}from"./BasePdfViewer-BP2qjmFS.js";import"./preload-helper-hck2-2iY.js";import"./index-7iRS3JG9.js";import"./BasePdfViewer.module.css-zDTV-z_a.js";import"./PdfViewerAnnotationLayer-DjRvaj6Y.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-336aN_iS.js";import"./PdfViewerOutlineSidebar-Za3G6muH.js";import"./PdfViewerSidebarHeader-B6hJNorp.js";import"./useBaseUiId-ITgInSIU.js";import"./useControlled-6nTFaGE5.js";import"./CompositeRoot-Cwnbo47Y.js";import"./CompositeItem-BCNmsXPB.js";import"./ToolbarRootContext-DeurAZ5u.js";import"./composite-BV3Gpi4q.js";import"./svgIconContainer-BOVctZiQ.js";import"./PdfViewerSearchBar-DoxZUKbA.js";import"./chevron-up-ChpJJWfv.js";import"./chevron-down-B0CcOxY_.js";import"./cross-BoUzuZNF.js";import"./PdfViewerSidebar-ooLW4Y82.js";import"./index-BoyJNymp.js";import"./index-YOpRnDEd.js";import"./index-DlVXSgR3.js";import"./PdfViewerToolbar-DP-KdaUQ.js";import"./Button-VsXDl_eG.js";import"./chevron-right-UtXUK7x4.js";import"./Input-DMLFbQ55.js";import"./search-CPZq-I8Z.js";import"./spin-p7WL9beS.js";import"./error-D4aggEwD.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1924/7dc9cbc9c1f246d35c56a90dbf88ec910ff0a4e2/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
