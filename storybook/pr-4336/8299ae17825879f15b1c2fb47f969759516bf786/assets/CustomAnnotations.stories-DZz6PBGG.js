import{j as n}from"./iframe-Cm6Hi8JW.js";import{B as e}from"./BasePdfViewer-Bwq9QXz_.js";import"./preload-helper-BYxBeAAs.js";import"./index-CDpDzJRy.js";import"./BasePdfViewer.module.css-Cr6ugg4u.js";import"./PdfViewerAnnotationLayer-DZqaXfJv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ce497FBn.js";import"./PdfViewerOutlineSidebar-D8d8HY21.js";import"./PdfViewerSidebarHeader-BJyir4D9.js";import"./useBaseUiId-DhmqNEB-.js";import"./useControlled-DQSuLFKk.js";import"./CompositeRoot-BZU2rbh7.js";import"./CompositeItem-BMwGHp9X.js";import"./ToolbarRootContext-C8WiK4oA.js";import"./composite-F8udgwsX.js";import"./svgIconContainer-agsfS07p.js";import"./PdfViewerSearchBar-BTRFgeDg.js";import"./chevron-up-D-ntY23M.js";import"./chevron-down-yfyql6cd.js";import"./cross-CqZ8qeBD.js";import"./PdfViewerSidebar-DhNYi2rX.js";import"./index-DID7t8gF.js";import"./index-CESCzhSs.js";import"./index-C-Ww-yGF.js";import"./PdfViewerToolbar-DSHsMseN.js";import"./Button-Bc-QcRr6.js";import"./chevron-right-CrTmK-qJ.js";import"./Input-YqDpCJ5-.js";import"./search-9QnSKEDq.js";import"./spin-D8_Fsf46.js";import"./error-Dmy_j7rB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4336/8299ae17825879f15b1c2fb47f969759516bf786/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
