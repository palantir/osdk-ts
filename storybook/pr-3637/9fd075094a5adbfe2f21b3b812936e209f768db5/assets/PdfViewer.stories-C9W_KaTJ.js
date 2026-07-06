import{j as r,M as s}from"./iframe-CH4bNQkz.js";import{P as p}from"./pdf-viewer-Bd6V9fxK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-fGLBXqT6.js";import"./preload-helper-08bwQHsA.js";import"./PdfRenderer-DK2WAmt7.js";import"./index-lqOrrWjd.js";import"./PdfViewer-BtyqSZ9-.js";import"./PdfViewer.module.css-CbcnJr-N.js";import"./PdfViewerAnnotationLayer-D4yS0KFi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CeCeqbv6.js";import"./PdfViewerOutlineSidebar-DoPtspCD.js";import"./PdfViewerSidebarHeader-DkYfZH7r.js";import"./useBaseUiId-DAC-gIXY.js";import"./useControlled-BWRxzInE.js";import"./CompositeRoot-D_BmJop1.js";import"./CompositeItem-VlSq4xDr.js";import"./ToolbarRootContext-BpsHvzSn.js";import"./composite-yo22QLkj.js";import"./svgIconContainer-CyLPlVwT.js";import"./PdfViewerSearchBar-whkHB6Ad.js";import"./chevron-up-CxfvS5Fy.js";import"./chevron-down-s5JdkgG2.js";import"./cross-CBF1hdJp.js";import"./PdfViewerSidebar-DeG3sSuK.js";import"./index-CxjrvYi1.js";import"./index-DNsCKuz5.js";import"./index-9sRS_i3b.js";import"./PdfViewerToolbar-Bfwr5JNa.js";import"./Button-zJe0SN5Z.js";import"./chevron-right-DKOBMvvM.js";import"./Input-DhPlgCAv.js";import"./search-BNt3jfeT.js";import"./spin-C7aGzCMT.js";import"./error-BEfnAN-c.js";import"./withOsdkMetrics-C32SCAiK.js";import"./makeExternalStore-BB1nN1HC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
