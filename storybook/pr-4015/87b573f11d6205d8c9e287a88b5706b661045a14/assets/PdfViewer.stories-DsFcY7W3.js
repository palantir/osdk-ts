import{j as r,M as s}from"./iframe-CUqJoiyS.js";import{P as p}from"./pdf-viewer-B5_2FSjT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BYfcWYVz.js";import"./preload-helper-CqOWo9Kq.js";import"./PdfViewer-BAyK5jwC.js";import"./index-DhW4888P.js";import"./BasePdfViewer-WlI8KFL6.js";import"./BasePdfViewer.module.css-C2dN7KPG.js";import"./PdfViewerAnnotationLayer-mvlCNWAI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-62bEhX36.js";import"./PdfViewerOutlineSidebar-_sDwqjIi.js";import"./PdfViewerSidebarHeader-DlQq_fFU.js";import"./useBaseUiId-BZb7TWDk.js";import"./useControlled-BMDtEhI-.js";import"./CompositeRoot-WLxYlhMX.js";import"./CompositeItem-Zdmcbf9r.js";import"./ToolbarRootContext-DkHEjN7J.js";import"./composite-TXFEMlyS.js";import"./svgIconContainer-B7WKcrMM.js";import"./PdfViewerSearchBar-BHYxCChq.js";import"./chevron-up-B5QrUkr_.js";import"./chevron-down-BfkwxApB.js";import"./cross-GG3fOgP3.js";import"./PdfViewerSidebar-CNy4moa7.js";import"./index-BCxd25LX.js";import"./index-DAzmwTik.js";import"./index-BBo0v-HH.js";import"./PdfViewerToolbar-CHt_XMTD.js";import"./Button-BNd5oumq.js";import"./chevron-right-DCT94QeC.js";import"./Input-CRJI3PzK.js";import"./search-DIQou5oL.js";import"./spin-DyRGtD7R.js";import"./error-l4XIFlvt.js";import"./withOsdkMetrics-BPGEJQZq.js";import"./makeExternalStore-DVkGjBto.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
