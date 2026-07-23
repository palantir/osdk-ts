import{j as r,M as s}from"./iframe-BYRe4uJK.js";import{P as p}from"./pdf-viewer-DvqzsWuA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B-vQnOZs.js";import"./preload-helper-Cum0qz8-.js";import"./PdfRenderer-C7YMMAgR.js";import"./index-BSiGs5jY.js";import"./PdfViewer-BaLDuifG.js";import"./PdfViewer.module.css-Dmu1fTHY.js";import"./PdfViewerAnnotationLayer-B_m9d-g0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZJdYEUA.js";import"./PdfViewerOutlineSidebar-D2cwALUh.js";import"./PdfViewerSidebarHeader-B5FQZHQJ.js";import"./useBaseUiId-7Cfuz0uT.js";import"./useControlled-Cz1PwyZ0.js";import"./CompositeRoot-DsA64_XP.js";import"./CompositeItem-Crcaf1__.js";import"./ToolbarRootContext-C3DcUEtK.js";import"./composite-Dd4L05U8.js";import"./svgIconContainer-Cwfx5WFd.js";import"./PdfViewerSearchBar-DzKaOOB5.js";import"./chevron-up-DoWFPjFK.js";import"./chevron-down-DTiQIWjT.js";import"./cross-BhpL9m1U.js";import"./PdfViewerSidebar-DsZ-GqJX.js";import"./index-BBRR4-WG.js";import"./index-JMZ2rmHA.js";import"./index-BSDlleOE.js";import"./PdfViewerToolbar-DREpZuBc.js";import"./Button-DOx7OVVZ.js";import"./chevron-right-DBA9QwYj.js";import"./Input-CeyVjWeu.js";import"./search-BNXEAWI6.js";import"./spin-DjA-s9UV.js";import"./error-QnKoxNx8.js";import"./withOsdkMetrics-_2ZJlIJa.js";import"./makeExternalStore-Dn028j21.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
