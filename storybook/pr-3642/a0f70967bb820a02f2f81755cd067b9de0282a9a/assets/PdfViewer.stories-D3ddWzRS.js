import{j as r,M as s}from"./iframe-BuOaXUBG.js";import{P as p}from"./pdf-viewer-C02Bhp5H.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BrC7bbul.js";import"./preload-helper-Byc6zjGJ.js";import"./PdfRenderer-CCZlCH3X.js";import"./index-9gX-aKb8.js";import"./PdfViewer-BBlpDIIw.js";import"./PdfViewer.module.css-wcnPviV1.js";import"./PdfViewerAnnotationLayer-DwV1fQtP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-uTVIW0YY.js";import"./PdfViewerOutlineSidebar-Clx8lFk1.js";import"./PdfViewerSidebarHeader-ceyS59r7.js";import"./useBaseUiId-gWvzXzJi.js";import"./useControlled-CeVnUSmU.js";import"./CompositeRoot-CuVimevd.js";import"./CompositeItem-Dn8s-lwK.js";import"./ToolbarRootContext-BufBD7j9.js";import"./composite-DtcJsKmT.js";import"./svgIconContainer-C0AgpTQn.js";import"./PdfViewerSearchBar-Cb6g5X5Q.js";import"./chevron-up-BCZs72Kx.js";import"./chevron-down-Cf0curwx.js";import"./cross-BFOHUCmw.js";import"./PdfViewerSidebar-dW_2eLSs.js";import"./index-DsbnjtVq.js";import"./index-j6_2wF34.js";import"./index-CIq_jtO8.js";import"./PdfViewerToolbar-blpLUJU6.js";import"./Button-BfCOyrcS.js";import"./chevron-right-DFZhowFK.js";import"./Input-DjcXgolR.js";import"./search-CXvYB15j.js";import"./spin-Yt8a1ZIs.js";import"./error-C3camBiK.js";import"./withOsdkMetrics-DYOj9Of0.js";import"./makeExternalStore-BHbVl8Qy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
