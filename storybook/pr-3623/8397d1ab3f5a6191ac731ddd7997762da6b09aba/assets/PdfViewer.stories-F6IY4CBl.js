import{j as r,M as s}from"./iframe-D13OvIO6.js";import{P as p}from"./pdf-viewer-BYqDAV-W.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DXKemBbK.js";import"./preload-helper-D5SNWq8-.js";import"./PdfRenderer-DizkZfbk.js";import"./index-H4QN0OBl.js";import"./PdfViewer-aJooofE7.js";import"./PdfViewer.module.css-BBjD1ygE.js";import"./PdfViewerAnnotationLayer-C3zJpr5E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aGtnoJXJ.js";import"./PdfViewerOutlineSidebar-Uqr8VKm2.js";import"./PdfViewerSidebarHeader-C3R-4upE.js";import"./useBaseUiId-y58GEzqr.js";import"./useControlled-BqUAMcfZ.js";import"./CompositeRoot-DS2WgmaE.js";import"./CompositeItem-DCNUmNPR.js";import"./ToolbarRootContext-CGxluKmw.js";import"./composite-DpkCb7U_.js";import"./svgIconContainer-B94D2qcl.js";import"./PdfViewerSearchBar-CCUcHgmZ.js";import"./chevron-up-DzCNYFan.js";import"./chevron-down--_FOD1tv.js";import"./cross-2WUvirnN.js";import"./PdfViewerSidebar-Byb25-BD.js";import"./index-_CZ2H6Pp.js";import"./index-fRHUZYTt.js";import"./index-XlNIEKUK.js";import"./PdfViewerToolbar-BD0WqSMM.js";import"./Button-DVYLGO83.js";import"./chevron-right-DdCLV2g2.js";import"./Input-e5sKn9qR.js";import"./search-C8nvyUgo.js";import"./spin-R6ms6Gtp.js";import"./error-DpcZtWhQ.js";import"./withOsdkMetrics-D8_HxxxP.js";import"./makeExternalStore-KSSdB1lG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
