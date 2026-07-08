import{j as r,M as s}from"./iframe-CiJvhlhG.js";import{P as p}from"./pdf-viewer-B0MKliFr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C1758yb3.js";import"./preload-helper-DK17mGgM.js";import"./PdfRenderer-Da4xM29n.js";import"./index-RjixPHr_.js";import"./PdfViewer-DDDW9cwd.js";import"./PdfViewer.module.css-hvlMgAkG.js";import"./PdfViewerAnnotationLayer-B6fVoJPG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-topcl-gX.js";import"./PdfViewerOutlineSidebar-De-Bn9lm.js";import"./PdfViewerSidebarHeader-DV4xPD57.js";import"./useBaseUiId-B2KcvHa2.js";import"./useControlled-cOv0fQIu.js";import"./CompositeRoot-u1n7jqsY.js";import"./CompositeItem-DqJih94e.js";import"./ToolbarRootContext-BfL_p7mI.js";import"./composite-BTQPOs72.js";import"./svgIconContainer-BNXd1gaL.js";import"./PdfViewerSearchBar-Dikn8Eiw.js";import"./chevron-up-BNmXdUGJ.js";import"./chevron-down-BKNhjhGB.js";import"./cross-NCh7tpSo.js";import"./PdfViewerSidebar-DBGVB5TW.js";import"./index-BrcCQyJc.js";import"./index-C4epKkDO.js";import"./index-CxzxdhNR.js";import"./PdfViewerToolbar-fT_c6c-T.js";import"./Button-e0gPLSr0.js";import"./chevron-right-BidNeYlR.js";import"./Input-Aw_J2heG.js";import"./search-DBGT9m4H.js";import"./spin-BYj5qSjf.js";import"./error-CVhpmH-E.js";import"./withOsdkMetrics-DwxB9ODW.js";import"./makeExternalStore-DxzVB76A.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
