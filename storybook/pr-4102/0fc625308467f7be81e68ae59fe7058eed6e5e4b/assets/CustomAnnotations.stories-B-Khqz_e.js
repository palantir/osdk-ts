import{j as n}from"./iframe-DfWRDQYW.js";import{B as e}from"./BasePdfViewer-BoGVCjFc.js";import"./preload-helper-DztOS3mh.js";import"./index-V0duYaOI.js";import"./BasePdfViewer.module.css-pdviIOE-.js";import"./PdfViewerAnnotationLayer-CEagJrUB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8EpOeC4.js";import"./PdfViewerOutlineSidebar-ciQcl20h.js";import"./PdfViewerSidebarHeader-B54m3jby.js";import"./useBaseUiId-CnljwGyr.js";import"./useControlled-DFU1H8fZ.js";import"./CompositeRoot-0jTYfUgQ.js";import"./CompositeItem-Bp9WguhV.js";import"./ToolbarRootContext-DK75y1Fb.js";import"./composite-BvmRb9Ju.js";import"./svgIconContainer-Djmd0i7i.js";import"./PdfViewerSearchBar-R4fevATj.js";import"./chevron-up-DV0heeBN.js";import"./chevron-down-DTtuRFlq.js";import"./cross-MjnJnae7.js";import"./PdfViewerSidebar-DwI2y5SV.js";import"./index-BPZ3Sv03.js";import"./index-BhBX8uvN.js";import"./index-DMKrGJHK.js";import"./PdfViewerToolbar-CFzxqkFt.js";import"./Button-OSZ8RwgD.js";import"./chevron-right-BEHBYBC-.js";import"./Input-DIDbgdBf.js";import"./search-Dxbg6ZmT.js";import"./spin-ByRk7Dco.js";import"./error-D9hH3fxG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4102/0fc625308467f7be81e68ae59fe7058eed6e5e4b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
