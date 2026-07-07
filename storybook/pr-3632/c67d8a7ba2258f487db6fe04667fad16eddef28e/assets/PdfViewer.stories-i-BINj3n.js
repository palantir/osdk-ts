import{j as r,M as s}from"./iframe-BL-aTQfU.js";import{P as p}from"./pdf-viewer-BWvKuRHK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BUFv79it.js";import"./preload-helper-BahzRW-X.js";import"./PdfRenderer-DZGY3BTF.js";import"./index-D4EpUFva.js";import"./PdfViewer-CvdTif0N.js";import"./PdfViewer.module.css-CI8PnFQ0.js";import"./PdfViewerAnnotationLayer-De_xMUeA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFz11Koi.js";import"./PdfViewerOutlineSidebar-SEArpiQ8.js";import"./PdfViewerSidebarHeader-BcZO43o8.js";import"./useBaseUiId-CJqwJhLG.js";import"./useControlled-CW7M7uym.js";import"./CompositeRoot-f8OBFUSI.js";import"./CompositeItem-8Mg0ZdDv.js";import"./ToolbarRootContext-BGWwmius.js";import"./composite-pMUz-CIe.js";import"./svgIconContainer-BKl1Wdn_.js";import"./PdfViewerSearchBar-yZz8pHXV.js";import"./chevron-up-D2UD9RuR.js";import"./chevron-down-CuTqKkub.js";import"./cross-BHf_rKQH.js";import"./PdfViewerSidebar-DypYAMBP.js";import"./index-CWou13Ax.js";import"./index-CXThrq9Y.js";import"./index-C4s4Nf7W.js";import"./PdfViewerToolbar-D6Adp6Tu.js";import"./Button-BDE_UIPs.js";import"./chevron-right-Cd4n5K4P.js";import"./Input-D7P-T4dQ.js";import"./search-CcjCZccz.js";import"./spin-DvtmCkjp.js";import"./error-DTNLJVPi.js";import"./withOsdkMetrics-Wvjd9i-y.js";import"./makeExternalStore-NsBbI9KP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
