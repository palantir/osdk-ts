import{j as r,M as s}from"./iframe-CHTHF7Wz.js";import{P as p}from"./pdf-viewer-Ltjv4kRi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CM4Ic_qr.js";import"./preload-helper-fcSkQvlK.js";import"./PdfRenderer-DdqWX9VK.js";import"./index-6RQT7j61.js";import"./PdfViewer-D6jXEOER.js";import"./PdfViewer.module.css-uP-yeqAp.js";import"./PdfViewerAnnotationLayer-BeYJQUiG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BpXyC8Ok.js";import"./PdfViewerOutlineSidebar-DviYlfQb.js";import"./PdfViewerSidebarHeader-Bvdb4SP5.js";import"./useBaseUiId-Ch2-CeLc.js";import"./useControlled-DEeFI2m8.js";import"./CompositeRoot-CQosFNQi.js";import"./CompositeItem-B1d4G5Ee.js";import"./ToolbarRootContext-znMy6l6h.js";import"./composite-4oYZf1BU.js";import"./svgIconContainer-Cb8zoJ-1.js";import"./PdfViewerSearchBar-pmjmCYNY.js";import"./chevron-up-DegKQ9y3.js";import"./chevron-down--pbLBBRz.js";import"./cross-Chwfou75.js";import"./PdfViewerSidebar-whTW91sJ.js";import"./index-DthgxF2u.js";import"./index-doIRobQ8.js";import"./index-Uz2jciBY.js";import"./PdfViewerToolbar-CBgPI9aK.js";import"./Button-BFlkmOoI.js";import"./chevron-right-Bv7JT8xV.js";import"./Input-BAkGNhfG.js";import"./search-CJPgSgzn.js";import"./spin--NMWVL_T.js";import"./error-BgtANkmb.js";import"./withOsdkMetrics-DlMzQx9P.js";import"./makeExternalStore-kE9T3YbL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
