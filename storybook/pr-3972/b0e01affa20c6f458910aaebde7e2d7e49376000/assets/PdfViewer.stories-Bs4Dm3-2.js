import{j as r,M as s}from"./iframe-D5Tg4ktw.js";import{P as p}from"./pdf-viewer-C21xowus.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CsmhiC6j.js";import"./preload-helper-BaIqC2Pe.js";import"./PdfViewer-B3TrMz2_.js";import"./index-BEbB4IUm.js";import"./BasePdfViewer-BOyG8J42.js";import"./BasePdfViewer.module.css-CHSq3v7k.js";import"./PdfViewerAnnotationLayer-DBoJ3DWL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-OlQYmdyC.js";import"./PdfViewerOutlineSidebar-DMeC2yTp.js";import"./PdfViewerSidebarHeader-B0oWKLF0.js";import"./useBaseUiId-BdvoItIk.js";import"./useControlled-DObGwXHJ.js";import"./CompositeRoot-BRGopZjr.js";import"./CompositeItem-C5_2nepJ.js";import"./ToolbarRootContext-0E-Oi6aL.js";import"./composite-B1gx-sbX.js";import"./svgIconContainer-C3wCuOXB.js";import"./PdfViewerSearchBar-Bzer5j4k.js";import"./chevron-up-DIJxNvtO.js";import"./chevron-down-C1ACHifJ.js";import"./cross-DzUcTLFz.js";import"./PdfViewerSidebar-Bop030IO.js";import"./index-Deb3KNPH.js";import"./index-CFXN4yab.js";import"./index-DJsS0_Xm.js";import"./PdfViewerToolbar-R-lpChve.js";import"./Button-DiryTlNK.js";import"./chevron-right-DFibO6-T.js";import"./Input-CN7F7SIp.js";import"./search-DeZTwCkl.js";import"./spin-DiNU2h6O.js";import"./error-B5UKi7xe.js";import"./withOsdkMetrics-C-Pgn628.js";import"./makeExternalStore-kA_iXT4K.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
