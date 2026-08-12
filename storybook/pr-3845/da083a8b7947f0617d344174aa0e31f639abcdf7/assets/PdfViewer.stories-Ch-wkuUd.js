import{j as r,M as s}from"./iframe-BG-xXo7r.js";import{P as p}from"./pdf-viewer-BZAUXJaA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DQUJYIbS.js";import"./preload-helper-2GkLelL5.js";import"./PdfRenderer-DlCUb7JM.js";import"./index-Pj-HzUzm.js";import"./PdfViewer-O6lTM5hX.js";import"./PdfViewer.module.css-B-UPfwWH.js";import"./PdfViewerAnnotationLayer-ChsUWIqq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-SsiNUfWH.js";import"./PdfViewerOutlineSidebar-DYeBYcVf.js";import"./PdfViewerSidebarHeader-D_GnpXHe.js";import"./useBaseUiId-D-UAxzqn.js";import"./useControlled-iuVTSgpH.js";import"./CompositeRoot--nDJUGQ7.js";import"./CompositeItem-cxMrWvJM.js";import"./ToolbarRootContext-DRFZpc1m.js";import"./composite-CKXXvF5N.js";import"./svgIconContainer-CRyh23yS.js";import"./PdfViewerSearchBar-BOwJ2Oy7.js";import"./chevron-up-CX3gHevf.js";import"./chevron-down-BfUHrZib.js";import"./cross-COO8NBvG.js";import"./PdfViewerSidebar-DZ_iByBI.js";import"./index-CQkLRa4U.js";import"./index-BK0u17L-.js";import"./index-DwqJd7FU.js";import"./PdfViewerToolbar-BNqk2aGw.js";import"./Button-BwngmVa3.js";import"./chevron-right-DnlvBFO-.js";import"./Input-BZw_T80b.js";import"./search-BdsoZ98Z.js";import"./spin-B2r3OmZb.js";import"./error-RFJ-PR3n.js";import"./withOsdkMetrics-CfOwfL5Z.js";import"./makeExternalStore-BKMYc6Mc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
