import{j as r,M as s}from"./iframe-D_9TmTWV.js";import{P as p}from"./pdf-viewer-DhRJ5tPw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DHXJDAJB.js";import"./preload-helper-DJH2govB.js";import"./PdfRenderer-BUuE4EiG.js";import"./index-CZmlMw1G.js";import"./PdfViewer-DxgsaWl6.js";import"./PdfViewer.module.css-CQ_izyfl.js";import"./PdfViewerAnnotationLayer-BvSTVefJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DWlQdsnq.js";import"./PdfViewerOutlineSidebar-8cl65eZx.js";import"./PdfViewerSidebarHeader-B4xxqpKY.js";import"./useBaseUiId-BDKr1Znm.js";import"./useControlled-DS9eNVze.js";import"./CompositeRoot-C-m0fOsX.js";import"./CompositeItem-CcExbvwI.js";import"./ToolbarRootContext-CNcIlT0m.js";import"./composite-DvHiPVn1.js";import"./svgIconContainer-e2zn3xKA.js";import"./PdfViewerSearchBar-C_pj9Hot.js";import"./chevron-up-t6hlWL8b.js";import"./chevron-down-BZXSDnra.js";import"./cross-LTJbD_sI.js";import"./PdfViewerSidebar-DC9jAm1Q.js";import"./index-boWbyro0.js";import"./index-ilaZ_cq1.js";import"./index-Z3aTWHLe.js";import"./PdfViewerToolbar-CUXIBOCD.js";import"./Button-Dubu6PwJ.js";import"./chevron-right-CS1djdoL.js";import"./Input-BAv6Vl12.js";import"./search-BiwpNc5U.js";import"./spin-ByIUEhNB.js";import"./error-BMNLqSay.js";import"./withOsdkMetrics-DhbE-ALn.js";import"./makeExternalStore-CnxWgFmk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
