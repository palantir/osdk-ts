import{j as r,M as s}from"./iframe-CiPu_-J4.js";import{P as p}from"./pdf-viewer-DWm-RvjO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DOtojiJM.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-Lwpk8_1y.js";import"./index-Bm0FtcPZ.js";import"./PdfViewer-D8Xh0igi.js";import"./PdfViewer.module.css-BWdjNfwT.js";import"./PdfViewerAnnotationLayer-DkQiqh06.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BIvIiuMJ.js";import"./PdfViewerOutlineSidebar-DwCufR9N.js";import"./PdfViewerSidebarHeader-alo0Pei4.js";import"./useBaseUiId-C4cVz7Q6.js";import"./useControlled-Dt8lqEeV.js";import"./CompositeRoot-Dj8OAbSR.js";import"./CompositeItem-B_4iwGUS.js";import"./ToolbarRootContext-CbmIJYSD.js";import"./composite-_cFRdRXY.js";import"./svgIconContainer-q0Pmv2d6.js";import"./PdfViewerSearchBar-D8_dGtic.js";import"./chevron-up-B2UAypUl.js";import"./chevron-down-DeoFD6hB.js";import"./cross-Ca8iEZbR.js";import"./PdfViewerSidebar-JD9b1GMe.js";import"./index-BlspZBuR.js";import"./index-BvYm8X_W.js";import"./index-C2E71xpw.js";import"./PdfViewerToolbar-BXhDnpOx.js";import"./Button-7FNOSjqj.js";import"./chevron-right-CBH4yMk-.js";import"./Input-CbZwBqZS.js";import"./search-B6nAZCB8.js";import"./spin-DZ6PJHqK.js";import"./error-BQWuaF69.js";import"./withOsdkMetrics-BJsy9tin.js";import"./makeExternalStore-CMzFaru2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
