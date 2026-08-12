import{j as r,M as s}from"./iframe-acnc8jNP.js";import{P as p}from"./pdf-viewer-BA2-GMx7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D9rdrG74.js";import"./preload-helper-C0AHc0KZ.js";import"./PdfRenderer-DITne1LE.js";import"./index-B2HcsiAS.js";import"./PdfViewer-Cuy6Dcir.js";import"./PdfViewer.module.css-BdhenbZV.js";import"./PdfViewerAnnotationLayer-8BLaqa1s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwQDO8tK.js";import"./PdfViewerOutlineSidebar-i7o_M-y9.js";import"./PdfViewerSidebarHeader-D4HkdOjf.js";import"./useBaseUiId-W2eivYCg.js";import"./useControlled-CL58-5q6.js";import"./CompositeRoot-DugwLGdc.js";import"./CompositeItem-uY-l1SPS.js";import"./ToolbarRootContext-D5eO9Pgy.js";import"./composite-DX6f7iaw.js";import"./svgIconContainer-DjMgejtG.js";import"./PdfViewerSearchBar-DZm2wOxM.js";import"./chevron-up-CrtQc57j.js";import"./chevron-down-C9q_0P71.js";import"./cross-Bv8-5PKG.js";import"./PdfViewerSidebar-yMzSA4VZ.js";import"./index-B43oBquw.js";import"./index-BRGNHgC5.js";import"./index-BZeQ4uGI.js";import"./PdfViewerToolbar-DQa3S3J9.js";import"./Button-xirM2J2C.js";import"./chevron-right-CjYVeW7-.js";import"./Input-D_7AcYF3.js";import"./search-D7Py9QCX.js";import"./spin-lNKgMonq.js";import"./error-Cxeuitdp.js";import"./withOsdkMetrics-D-f8kfgF.js";import"./makeExternalStore-C2yWrJUB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
