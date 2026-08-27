import{j as r,M as s}from"./iframe-C3sKw2cL.js";import{P as p}from"./pdf-viewer-ClOcy2Q0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BwwOG0ZV.js";import"./preload-helper-D7ozKbCq.js";import"./PdfViewer-CyjfAfxQ.js";import"./index-wGL4M1dj.js";import"./BasePdfViewer-DbfNsktx.js";import"./BasePdfViewer.module.css-BNRh4Gmn.js";import"./PdfViewerAnnotationLayer-CpcGLicG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRcQZVQ9.js";import"./PdfViewerOutlineSidebar-77go5QoB.js";import"./PdfViewerSidebarHeader-6QEn4P9U.js";import"./useBaseUiId-DkTIqUVt.js";import"./useControlled-E83E5YYd.js";import"./CompositeRoot-C9qwXOj3.js";import"./CompositeItem-Bl2bPt1U.js";import"./ToolbarRootContext-jQ-Q_Ur2.js";import"./composite-DODBKXpG.js";import"./svgIconContainer-C1lOjXyd.js";import"./PdfViewerSearchBar-DdSlzgld.js";import"./chevron-up-DPXjRYo5.js";import"./chevron-down-DFO6kUAt.js";import"./cross-Bu18Q5FU.js";import"./PdfViewerSidebar-B_eOUOxb.js";import"./index-CS3EOsxC.js";import"./index-BDLfxrJj.js";import"./index-s1MtgtJR.js";import"./PdfViewerToolbar-BAoQdqr8.js";import"./Button-65aITwDG.js";import"./chevron-right-CMY1DQtV.js";import"./Input-KoETOEYa.js";import"./search-BdUx-yB5.js";import"./spin-DVmqMV5S.js";import"./error-B2CSn4Mi.js";import"./withOsdkMetrics-BIO2bqJF.js";import"./makeExternalStore-CjpzJSnl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
