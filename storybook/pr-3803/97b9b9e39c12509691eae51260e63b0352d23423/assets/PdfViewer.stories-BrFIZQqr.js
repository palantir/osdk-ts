import{j as r,M as s}from"./iframe-OyuMXdrr.js";import{P as p}from"./pdf-viewer-D9P-W8CZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BnbC3nKn.js";import"./preload-helper-_x9aAxJx.js";import"./PdfRenderer-C9h0lBpZ.js";import"./index-CME39S5e.js";import"./PdfViewer-BIu5SEvw.js";import"./PdfViewer.module.css-DrCdGYME.js";import"./PdfViewerAnnotationLayer-C3eAM82g.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHzuUZQY.js";import"./PdfViewerOutlineSidebar-CuYyosXc.js";import"./PdfViewerSidebarHeader-DzdaWQXI.js";import"./useBaseUiId-CxWaSe1x.js";import"./useControlled-4AMSQyom.js";import"./CompositeRoot-DnKLFJ1f.js";import"./CompositeItem-B-4Vgrgy.js";import"./ToolbarRootContext-XKHI_qO5.js";import"./composite-CkaTKBTw.js";import"./svgIconContainer-91GtXVWB.js";import"./PdfViewerSearchBar-CQ9dtfmn.js";import"./chevron-up-B22eJBLJ.js";import"./chevron-down-BF1gUlxP.js";import"./cross-CaP_ypC8.js";import"./PdfViewerSidebar-CYZCURiR.js";import"./index-DQgKy5OY.js";import"./index-PckWXlEL.js";import"./index-CzWqRMoQ.js";import"./PdfViewerToolbar-6JY2rghe.js";import"./Button-BO7yKCcC.js";import"./chevron-right-CfL_j4Eb.js";import"./Input-imDy7DTE.js";import"./search-D5f-ghxr.js";import"./spin-CvVDZGov.js";import"./error-D1Yo1J9l.js";import"./withOsdkMetrics-DiqAT51F.js";import"./makeExternalStore-DBUQL4bm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
