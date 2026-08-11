import{j as r,M as s}from"./iframe-B3d6ZwH7.js";import{P as p}from"./pdf-viewer-DMB_ilBB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-23foG5j1.js";import"./preload-helper-BSBI65hL.js";import"./PdfRenderer-Bf0mkg-Y.js";import"./index-Bij8j6CR.js";import"./PdfViewer-BsEbPBNN.js";import"./PdfViewer.module.css-BfYMqN_J.js";import"./PdfViewerAnnotationLayer-BMOew4cS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-2FoxG43j.js";import"./PdfViewerOutlineSidebar-DCeGA3kI.js";import"./PdfViewerSidebarHeader-GTJqAeEw.js";import"./useBaseUiId-C-tRhBps.js";import"./useControlled-D1Bg559p.js";import"./CompositeRoot-BI8I6DP3.js";import"./CompositeItem-DK8C0Auv.js";import"./ToolbarRootContext-DBcC0PM-.js";import"./composite-CtQhbIeo.js";import"./svgIconContainer-NJcm7Mm7.js";import"./PdfViewerSearchBar-CN3dOnao.js";import"./chevron-up-B-5vzQN1.js";import"./chevron-down-B6cvH9xf.js";import"./cross-BWneTCDr.js";import"./PdfViewerSidebar-Brz7N8ID.js";import"./index-C0kc6WcW.js";import"./index-DtG__1M4.js";import"./index-Cq5tqX8Z.js";import"./PdfViewerToolbar-DS8qDlc0.js";import"./Button-B3hR3y0_.js";import"./chevron-right-CqufhgZ-.js";import"./Input-CsaNiGJD.js";import"./search-CAgN4ZC5.js";import"./spin-D4dxHdoS.js";import"./error-C54s5z2j.js";import"./withOsdkMetrics-__TOn-89.js";import"./makeExternalStore-BZfNFRrb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
