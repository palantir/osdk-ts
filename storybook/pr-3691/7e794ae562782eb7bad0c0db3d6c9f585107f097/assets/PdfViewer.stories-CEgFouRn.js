import{j as r,M as s}from"./iframe-BHqX_OjB.js";import{P as p}from"./pdf-viewer-w4mPBENx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-sAahA_W6.js";import"./preload-helper-iJZi-ya6.js";import"./PdfRenderer-xjbkl1rs.js";import"./index-BA2wo7jA.js";import"./PdfViewer-C6aKjEuD.js";import"./PdfViewer.module.css-DM_zHrgX.js";import"./PdfViewerAnnotationLayer-DYVMfluD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BSwfs7xG.js";import"./PdfViewerOutlineSidebar-3qyI9--O.js";import"./PdfViewerSidebarHeader-C4LxQy9T.js";import"./useBaseUiId-DGxwLPNF.js";import"./useControlled-CXhfBr_j.js";import"./CompositeRoot-CfQtc8nL.js";import"./CompositeItem-foV6VRcu.js";import"./ToolbarRootContext-B5O_h2j5.js";import"./composite-Dhxcl_Lf.js";import"./svgIconContainer-B7mFK-8J.js";import"./PdfViewerSearchBar-D1HJ3wX7.js";import"./chevron-up-CBdHyc5U.js";import"./chevron-down-pZMjawWL.js";import"./cross-DEJmigHM.js";import"./PdfViewerSidebar-CQilmU3w.js";import"./index-Dlpbs8yg.js";import"./index-BhHOMf9A.js";import"./index-Bd0Tj_WK.js";import"./PdfViewerToolbar-B3mQj3fq.js";import"./Button-DKSmXupo.js";import"./chevron-right-D8q3xbjf.js";import"./Input-BHTNGOiI.js";import"./search-BuNoiZLv.js";import"./spin-pTutehbR.js";import"./error-Beb7Ue--.js";import"./withOsdkMetrics-mlBDJhuk.js";import"./makeExternalStore-DzepmK8L.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
