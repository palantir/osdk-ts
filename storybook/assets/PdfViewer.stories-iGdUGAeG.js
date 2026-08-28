import{j as r,M as s}from"./iframe-u9hOX5tX.js";import{P as p}from"./pdf-viewer-CFXPJMxq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-54jezmNg.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DS7m90J8.js";import"./index-DxD8FM_1.js";import"./BasePdfViewer-DkBhTf7m.js";import"./BasePdfViewer.module.css-9i287beU.js";import"./PdfViewerAnnotationLayer-C4L34SUT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BfGW3siF.js";import"./PdfViewerOutlineSidebar-B9Q8kc1O.js";import"./PdfViewerSidebarHeader-DkxUkz8z.js";import"./useBaseUiId-NreGDPh5.js";import"./useControlled-Bfp9z5LY.js";import"./CompositeRoot-CJqIWbef.js";import"./CompositeItem-mIZsnJNz.js";import"./ToolbarRootContext-C-NXaLDf.js";import"./composite-B0ATBYyt.js";import"./svgIconContainer-BhCzJfro.js";import"./PdfViewerSearchBar-CdnheFOJ.js";import"./chevron-up-39nvLd6N.js";import"./chevron-down-DJMNDdHU.js";import"./cross-DrLAndSC.js";import"./PdfViewerSidebar-BQmCK-5_.js";import"./index-DBgJDRZ-.js";import"./index-CiR2ByAS.js";import"./index-Bn7Z55t6.js";import"./PdfViewerToolbar-CdVoZUGF.js";import"./Button-DIQR92sZ.js";import"./chevron-right-a36-8gbb.js";import"./Input-DUgdjwsc.js";import"./search-D3Zuzx7q.js";import"./spin-8n0OwUL-.js";import"./error-BYByE55v.js";import"./withOsdkMetrics-DZo9ZLyt.js";import"./makeExternalStore-j84EUnMN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
