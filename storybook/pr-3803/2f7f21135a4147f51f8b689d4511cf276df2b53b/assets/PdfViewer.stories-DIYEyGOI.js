import{j as r,M as s}from"./iframe-CKhREHfL.js";import{P as p}from"./pdf-viewer-BqcWzl-k.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BhszY4Cz.js";import"./preload-helper-DBUxvamd.js";import"./PdfRenderer-Cg0PYs4V.js";import"./index-C5QFNAxP.js";import"./PdfViewer-zDFYbMTp.js";import"./PdfViewer.module.css-EVGstdQv.js";import"./PdfViewerAnnotationLayer-COV8DUyc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B2h_qwJi.js";import"./PdfViewerOutlineSidebar-DuEuiVDb.js";import"./PdfViewerSidebarHeader-BJj4WZ5K.js";import"./useBaseUiId-CxNcwInf.js";import"./useControlled-DU_GLnf5.js";import"./CompositeRoot-CGmDk9rQ.js";import"./CompositeItem-BvUhxEG9.js";import"./ToolbarRootContext-CUGbrwD0.js";import"./composite-DRC4ACh_.js";import"./svgIconContainer-xQdtq3jL.js";import"./PdfViewerSearchBar-UxTvROYB.js";import"./chevron-up-DTEDLGvH.js";import"./chevron-down-KTtBty24.js";import"./cross-Ctdls4x7.js";import"./PdfViewerSidebar-RFa847TK.js";import"./index-ChjJkDiV.js";import"./index-B_JObfE5.js";import"./index-Bbvw0vLy.js";import"./PdfViewerToolbar-DEjz9Uxx.js";import"./Button-BMZmhn3e.js";import"./chevron-right-CiOjtQB6.js";import"./Input-BHAHokL6.js";import"./search-BDUioyk4.js";import"./spin-DZiHdORd.js";import"./error-DVbvZX26.js";import"./withOsdkMetrics-B8apvPCk.js";import"./makeExternalStore-qR4iZXdH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
