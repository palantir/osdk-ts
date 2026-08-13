import{j as r,M as s}from"./iframe-BBlRBgNm.js";import{P as p}from"./pdf-viewer-CAjZpgcc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BvfrPnBO.js";import"./preload-helper-nUcndVB1.js";import"./PdfViewer-TxI9m1Ds.js";import"./index-BZqLTchK.js";import"./BasePdfViewer-CvRNDSsg.js";import"./BasePdfViewer.module.css-DBz92C_S.js";import"./PdfViewerAnnotationLayer-Dhd1tvdo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CsmTSKlf.js";import"./PdfViewerOutlineSidebar-DK7g21PL.js";import"./PdfViewerSidebarHeader-Bl-HZK-W.js";import"./useBaseUiId-CY9tAtRf.js";import"./useControlled-BArMeZNp.js";import"./CompositeRoot-DnA8PxM7.js";import"./CompositeItem-TLen8WtJ.js";import"./ToolbarRootContext-DE0PC0Rd.js";import"./composite-D1tYMIIj.js";import"./svgIconContainer-DOveKI2E.js";import"./PdfViewerSearchBar-CpvsaGga.js";import"./chevron-up-ZlCsuDbf.js";import"./chevron-down-796VQilV.js";import"./cross-wqLIhFuX.js";import"./PdfViewerSidebar-B8SXGax3.js";import"./index-BeqmCVha.js";import"./index-CDRFlmxs.js";import"./index-BxiEEyZP.js";import"./PdfViewerToolbar-CG0M3Y8b.js";import"./Button-rAV1gEhG.js";import"./chevron-right-D9ZDwzk4.js";import"./Input-iZ0inZPU.js";import"./search-BWru_8ZJ.js";import"./spin-DlCd4QtD.js";import"./error-CSd4pgb3.js";import"./withOsdkMetrics-Cmjq74if.js";import"./makeExternalStore-CAu16bqE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
