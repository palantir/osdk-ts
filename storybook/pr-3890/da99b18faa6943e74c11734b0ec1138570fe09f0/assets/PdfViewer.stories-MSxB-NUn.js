import{j as r,M as s}from"./iframe-Dg0RA47C.js";import{P as p}from"./pdf-viewer-DgOfVDc6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D_ZQJURc.js";import"./preload-helper-C2cTZMmE.js";import"./PdfViewer-s5H1s1FO.js";import"./index-CP0v3oc4.js";import"./BasePdfViewer-BupRefLn.js";import"./BasePdfViewer.module.css-DKi_dcYm.js";import"./PdfViewerAnnotationLayer-Bf80ybJM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Di_aCx2C.js";import"./PdfViewerOutlineSidebar-C5o89eBq.js";import"./PdfViewerSidebarHeader-B6s0js6g.js";import"./useBaseUiId-cAnpWjx3.js";import"./useControlled-BIwik4nh.js";import"./CompositeRoot-C9m24bXN.js";import"./CompositeItem-BNj1W7kt.js";import"./ToolbarRootContext-vZD2WDzJ.js";import"./composite-BCKGU-V6.js";import"./svgIconContainer-MFwXKo8a.js";import"./PdfViewerSearchBar-DaLa5WA1.js";import"./chevron-up-y9rLHYBv.js";import"./chevron-down-Cbs30_CT.js";import"./cross-CAoQgAes.js";import"./PdfViewerSidebar-ya6Ud87x.js";import"./index-hS7TW2Ac.js";import"./index-BWQjYTbn.js";import"./index-Bs4XxOPg.js";import"./PdfViewerToolbar-D_-YidTm.js";import"./Button-C34VLXt7.js";import"./chevron-right-G6KIlO1s.js";import"./Input-CFaw-jkU.js";import"./search-D2EDy9ee.js";import"./spin-Bk2GIozR.js";import"./error-BL9dqZOx.js";import"./withOsdkMetrics-D5C1Gkqy.js";import"./makeExternalStore-D8EkG36v.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
