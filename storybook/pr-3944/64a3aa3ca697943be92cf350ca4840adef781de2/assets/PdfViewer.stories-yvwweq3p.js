import{j as r,M as s}from"./iframe-Cg0_L8_P.js";import{P as p}from"./pdf-viewer-B0tiVZWO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BN8Yic-4.js";import"./preload-helper-33U0KAdV.js";import"./PdfViewer-0YvqJhqx.js";import"./index-DVyjubzR.js";import"./BasePdfViewer-DBYLI7Hk.js";import"./BasePdfViewer.module.css-z-oInRWn.js";import"./PdfViewerAnnotationLayer-DtvZvBhP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BaUlk8Kt.js";import"./PdfViewerOutlineSidebar-BwuhaZ3M.js";import"./PdfViewerSidebarHeader-CiDLdKzd.js";import"./useBaseUiId-DdUu1ljw.js";import"./useControlled-mwHcpce3.js";import"./CompositeRoot-Bgapsbbm.js";import"./CompositeItem-BnttgNWt.js";import"./ToolbarRootContext-B_XnRMpQ.js";import"./composite-BAsr8Kap.js";import"./svgIconContainer-Dm8ems_M.js";import"./PdfViewerSearchBar-CyO7gCn_.js";import"./chevron-up-CeV18LyR.js";import"./chevron-down-CVB5EJv3.js";import"./cross-DAELvuCc.js";import"./PdfViewerSidebar-DpDGWvr-.js";import"./index-CgP5jim8.js";import"./index-D5kIdvoW.js";import"./index-F9588Jdm.js";import"./PdfViewerToolbar-BYIWvT7Z.js";import"./Button-8z5S-ilA.js";import"./chevron-right-BNr-fxFr.js";import"./Input-9fPQvd0v.js";import"./search-CTHwA6lI.js";import"./spin-BbHf0ETa.js";import"./error-DwBuGVBZ.js";import"./withOsdkMetrics-CULSkWk0.js";import"./makeExternalStore-El_-ZWlA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
