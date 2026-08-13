import{j as r,M as s}from"./iframe-BnFW5qcd.js";import{P as p}from"./pdf-viewer-w_GkCYfA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQpJ02sM.js";import"./preload-helper-CNP4KH2h.js";import"./PdfViewer-DBc9Q4hc.js";import"./index-cKOHoRyg.js";import"./BasePdfViewer-CwVJvCcx.js";import"./BasePdfViewer.module.css-BiQwGR6U.js";import"./PdfViewerAnnotationLayer-CG6IUYtt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-L7f0FkNn.js";import"./PdfViewerOutlineSidebar-DyaRHDoh.js";import"./PdfViewerSidebarHeader-B7x-M1id.js";import"./useBaseUiId-D6lJdHIa.js";import"./useControlled-_BjM0h58.js";import"./CompositeRoot-aJZ74Paq.js";import"./CompositeItem-Cs7ZSGuB.js";import"./ToolbarRootContext-C1j3JbNp.js";import"./composite-CvySWJ8Z.js";import"./svgIconContainer-Bodb3rrt.js";import"./PdfViewerSearchBar-YvanNLov.js";import"./chevron-up-BiRasctO.js";import"./chevron-down-DKM-O5Y0.js";import"./cross-DNbpGFX0.js";import"./PdfViewerSidebar-BtpA6dbj.js";import"./index-BPVr2RDp.js";import"./index-BL84tjwg.js";import"./index-C1VvjJNC.js";import"./PdfViewerToolbar-CU9DX5KS.js";import"./Button-BWyY3kpw.js";import"./chevron-right-R2IlgFE2.js";import"./Input-CE1LAlWc.js";import"./search-D9IFs7N_.js";import"./spin-CP2XEWZc.js";import"./error-TzDePL8Z.js";import"./withOsdkMetrics-BThk06i8.js";import"./makeExternalStore-Bf_CkFqj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
