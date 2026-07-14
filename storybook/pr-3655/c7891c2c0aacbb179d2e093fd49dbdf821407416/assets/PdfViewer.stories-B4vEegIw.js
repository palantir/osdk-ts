import{j as r,M as s}from"./iframe-BGXM3ec5.js";import{P as p}from"./pdf-viewer-E4NM8v7t.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B7cK8KgJ.js";import"./preload-helper-Cvs2uxJ4.js";import"./PdfRenderer-CXnVwWj4.js";import"./index-CEIMM9cQ.js";import"./PdfViewer-03riXdM7.js";import"./PdfViewer.module.css-B4nzx9KN.js";import"./PdfViewerAnnotationLayer-D_0U3Poo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--EnSbuXE.js";import"./PdfViewerOutlineSidebar-zrO3qptv.js";import"./PdfViewerSidebarHeader-DuCvVyIO.js";import"./useBaseUiId-D3KZmE2c.js";import"./useControlled-CcKUPAWF.js";import"./CompositeRoot-DB-RthhP.js";import"./CompositeItem-C6te6ymF.js";import"./ToolbarRootContext-FL3tibwn.js";import"./composite-BP7Wvx2k.js";import"./svgIconContainer-DQTxxMrf.js";import"./PdfViewerSearchBar-D2ydOxgP.js";import"./chevron-up-BcmhIGsB.js";import"./chevron-down-D8rSgEkt.js";import"./cross-5DqgMi5G.js";import"./PdfViewerSidebar-BCwWspBP.js";import"./index-B53fxGUQ.js";import"./index-CJzgfjnD.js";import"./index-C0afkOMh.js";import"./PdfViewerToolbar-BICYOepy.js";import"./Button-CiYkqIVE.js";import"./chevron-right-Dm__kaI0.js";import"./Input-K6JDLxyk.js";import"./search-CjmIhzs5.js";import"./spin-BqEcu9JK.js";import"./error-CVx_3M8V.js";import"./withOsdkMetrics-B5eolS3E.js";import"./makeExternalStore-BE8qXbVH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
