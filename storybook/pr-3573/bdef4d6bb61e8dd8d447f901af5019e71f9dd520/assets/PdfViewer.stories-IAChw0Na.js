import{j as r,M as s}from"./iframe-BuIfWQiT.js";import{P as p}from"./pdf-viewer-Dfv03WUp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B4lqTmau.js";import"./preload-helper-BvAbq-DM.js";import"./PdfRenderer-lHQu0S-A.js";import"./index-tGxJ4i2d.js";import"./PdfViewer-BGcoEqV9.js";import"./PdfViewer.module.css-BnZyTH2x.js";import"./PdfViewerAnnotationLayer-CDGMMqyq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BE2T8Vu0.js";import"./PdfViewerOutlineSidebar-oO1PuW7x.js";import"./PdfViewerSidebarHeader-BGSERnSN.js";import"./useBaseUiId-BTaavWiD.js";import"./useControlled-5qhFJw8u.js";import"./CompositeRoot-DUlnwgLR.js";import"./CompositeItem-uCKrjlaB.js";import"./ToolbarRootContext-UqrQOJ91.js";import"./composite-Dqi9L7ei.js";import"./svgIconContainer-D5Zy-JaY.js";import"./PdfViewerSearchBar-QWH6KbFV.js";import"./chevron-up-DJGfcNO7.js";import"./chevron-down-DQNyNuTM.js";import"./cross-CqgTtmT-.js";import"./PdfViewerSidebar-CnQEGkjz.js";import"./index-B_N9wHAC.js";import"./index-eA4nGAMP.js";import"./index-DdiA5Wxy.js";import"./PdfViewerToolbar-to8L2fdl.js";import"./Button-FYmGU4rV.js";import"./chevron-right-BAkaknJa.js";import"./Input-eVj5BZhK.js";import"./search-EvA7dgxQ.js";import"./spin-B1ljsJWH.js";import"./error-EFGVVxdZ.js";import"./withOsdkMetrics-CQy4uTsn.js";import"./makeExternalStore-CXUbXgCo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
