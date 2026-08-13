import{j as r,M as s}from"./iframe-HkADxMgA.js";import{P as p}from"./pdf-viewer-Ys9VVC-S.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CXZ_EKud.js";import"./preload-helper-DTtqGHxT.js";import"./PdfViewer-BylHeJpq.js";import"./index-DUW8wRrQ.js";import"./BasePdfViewer-DD8EtQRq.js";import"./BasePdfViewer.module.css-Cnk-PPsN.js";import"./PdfViewerAnnotationLayer-Cu5y53iw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BqKRIhD3.js";import"./PdfViewerOutlineSidebar-CjBAxBxd.js";import"./PdfViewerSidebarHeader-BuBztp2j.js";import"./useBaseUiId-B28qMeqB.js";import"./useControlled-0FKUHHKR.js";import"./CompositeRoot-C00oHch5.js";import"./CompositeItem-DIBhAm7K.js";import"./ToolbarRootContext-B2D7jBHZ.js";import"./composite-Bshgoqdb.js";import"./svgIconContainer-uqcLMh9h.js";import"./PdfViewerSearchBar--SEMccVJ.js";import"./chevron-up-BAlXL8Mg.js";import"./chevron-down-7aN-gdcZ.js";import"./cross-BJLKHlwA.js";import"./PdfViewerSidebar-DCypB-8p.js";import"./index-AGvrmZqA.js";import"./index-_47i1T5T.js";import"./index-CCQw_l8A.js";import"./PdfViewerToolbar-DiVotGMS.js";import"./Button-DXksPsq1.js";import"./chevron-right-DOUrak8W.js";import"./Input-CdSqdp7n.js";import"./search-oee3a-xy.js";import"./spin-B5r29zGp.js";import"./error-WFtpCqwH.js";import"./withOsdkMetrics-CS878clc.js";import"./makeExternalStore-XFQAED1_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
