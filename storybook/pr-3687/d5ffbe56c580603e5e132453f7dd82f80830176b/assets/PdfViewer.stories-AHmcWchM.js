import{j as r,M as s}from"./iframe-BCBw9img.js";import{P as p}from"./pdf-viewer-B8t6zOj9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C3L3N-Ep.js";import"./preload-helper-C2ZIifEO.js";import"./PdfRenderer-B74ar7ow.js";import"./index-Bion3d63.js";import"./PdfViewer-9A6pafgz.js";import"./PdfViewer.module.css-feM-_xwz.js";import"./PdfViewerAnnotationLayer-glKOLlr3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5jxLc8y.js";import"./PdfViewerOutlineSidebar-BeU-YfXP.js";import"./PdfViewerSidebarHeader-Bu36skjQ.js";import"./useBaseUiId-CXGNHbZw.js";import"./useControlled-C717FIDH.js";import"./CompositeRoot-BlnsUej2.js";import"./CompositeItem-BAHesqPE.js";import"./ToolbarRootContext-ChkyB5aj.js";import"./composite-p-A9hppt.js";import"./svgIconContainer-CGRDyAb9.js";import"./PdfViewerSearchBar-ChSo9onr.js";import"./chevron-up-BPHAmMKc.js";import"./chevron-down-DBuG-0Fx.js";import"./cross-BxEz3SL2.js";import"./PdfViewerSidebar-DiccYN1x.js";import"./index-09KyzolL.js";import"./index-1A5bhDlP.js";import"./index-BrKznVkU.js";import"./PdfViewerToolbar-Dhz_dNut.js";import"./Button-CshbfEO8.js";import"./chevron-right-CKHYCvis.js";import"./Input-CFQuLrIn.js";import"./search-YMKpWnTK.js";import"./spin-DCawRRb3.js";import"./error-CIswznoQ.js";import"./withOsdkMetrics-D61WyUel.js";import"./makeExternalStore-SGpgOIaZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
