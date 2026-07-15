import{j as r,M as s}from"./iframe-BdNbAFle.js";import{P as p}from"./pdf-viewer-CMbs6pSI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2vDvdovs.js";import"./preload-helper-BjV6E6gx.js";import"./PdfRenderer-DQbmIiEs.js";import"./index-4fA03-91.js";import"./PdfViewer-jGGeDMRH.js";import"./PdfViewer.module.css-CvQW3lSS.js";import"./PdfViewerAnnotationLayer-DzwMTj74.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CmiAXZS3.js";import"./PdfViewerOutlineSidebar-JMXQWgzh.js";import"./PdfViewerSidebarHeader-DeMEaxD-.js";import"./useBaseUiId-BGjT-Qmv.js";import"./useControlled-CBZPBUlo.js";import"./CompositeRoot-BB8y43zY.js";import"./CompositeItem-BDhhqbET.js";import"./ToolbarRootContext-Bnpwe4G1.js";import"./composite-DaC07jrL.js";import"./svgIconContainer-Dyrfk8aF.js";import"./PdfViewerSearchBar-CPKmy2os.js";import"./chevron-up-DIQgXHuW.js";import"./chevron-down-B8IA8ZhM.js";import"./cross-BSVbceJM.js";import"./PdfViewerSidebar-8J2NLnuz.js";import"./index-QBUU6ayA.js";import"./index-C9KIenbi.js";import"./index-CO-SFKBQ.js";import"./PdfViewerToolbar-ouxVWGgv.js";import"./Button-CfUv03Rp.js";import"./chevron-right-C0kdnJPo.js";import"./Input-lS_WHl4g.js";import"./search-Bs7peCHA.js";import"./spin-BvgN-Vfi.js";import"./error-D7NvUwWR.js";import"./withOsdkMetrics-DPn6STul.js";import"./makeExternalStore-DIquDnN6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
