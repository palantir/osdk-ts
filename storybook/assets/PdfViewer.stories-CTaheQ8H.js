import{j as r,M as s}from"./iframe-rsNkHZI8.js";import{P as p}from"./pdf-viewer-BiPxmwAM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DqJWCXrA.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-HzzlIaE_.js";import"./index-CGI_aBYs.js";import"./PdfViewer-DrTXRxc-.js";import"./PdfViewer.module.css-Bbyo2CQ9.js";import"./PdfViewerAnnotationLayer-B2o-08QE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXYJIuV4.js";import"./PdfViewerOutlineSidebar-47dRtZTV.js";import"./PdfViewerSidebarHeader-DStyHDf1.js";import"./useBaseUiId-BUl6pw-H.js";import"./useControlled-D3vnxyt3.js";import"./CompositeRoot-BqV4i5xg.js";import"./CompositeItem-DDmeFsyN.js";import"./ToolbarRootContext-C0g8uHuL.js";import"./composite-XCitygaR.js";import"./svgIconContainer-BZthJgoq.js";import"./PdfViewerSearchBar-BGHBBJNv.js";import"./chevron-up-BTYmYcSk.js";import"./chevron-down-DMoNOrUS.js";import"./cross-DbbG_peE.js";import"./PdfViewerSidebar-C34GJpfF.js";import"./index-D1xOPTpB.js";import"./index-BkJWDSh0.js";import"./index-CLHdUyO3.js";import"./PdfViewerToolbar-C2qqFtvA.js";import"./Button-Bum5P5Nf.js";import"./chevron-right-DzIGSXcm.js";import"./Input-D8yDtZTG.js";import"./search-CgZRPEt7.js";import"./spin-BUlwN487.js";import"./error-B0gTN4Dr.js";import"./withOsdkMetrics-DN3Tt0ZW.js";import"./makeExternalStore-DADMh7-t.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
