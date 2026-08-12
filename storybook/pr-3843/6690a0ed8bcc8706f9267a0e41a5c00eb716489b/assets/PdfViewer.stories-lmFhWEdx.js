import{j as r,M as s}from"./iframe-BrhV0PUK.js";import{P as p}from"./pdf-viewer-BaaW0GRp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BUmQrfVK.js";import"./preload-helper-DCSdbV6c.js";import"./PdfRenderer-D-Vr7mgh.js";import"./index-CYSE8e1n.js";import"./PdfViewer-DIrJtUDA.js";import"./PdfViewer.module.css-BMVvmsgO.js";import"./PdfViewerAnnotationLayer-qVaS6xzu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cv-DSC4F.js";import"./PdfViewerOutlineSidebar-DLyNrrfM.js";import"./PdfViewerSidebarHeader-DQh8gyMi.js";import"./useBaseUiId-ar5Lsdrx.js";import"./useControlled-6A1CqUP6.js";import"./CompositeRoot-B1bjMCQp.js";import"./CompositeItem-wFOdGMSc.js";import"./ToolbarRootContext-Db_LnSee.js";import"./composite-Ds9WVBvD.js";import"./svgIconContainer-BaPcQU1s.js";import"./PdfViewerSearchBar-pF-hV9LB.js";import"./chevron-up-Bmbil0Gy.js";import"./chevron-down-Be_vCZl2.js";import"./cross-CsjK0wnB.js";import"./PdfViewerSidebar-BI0HYALA.js";import"./index-BoJTlJdl.js";import"./index-CF0KaaTI.js";import"./index-C_GiEd2c.js";import"./PdfViewerToolbar-irl6RzZK.js";import"./Button-D7_ffq5-.js";import"./chevron-right-kY_Lfw3J.js";import"./Input-DMkARyQa.js";import"./search-sMra4T2I.js";import"./spin-BxiHxiDG.js";import"./error-ZZJFbw6u.js";import"./withOsdkMetrics-dDB_t-WN.js";import"./makeExternalStore-DaqSmfhW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
