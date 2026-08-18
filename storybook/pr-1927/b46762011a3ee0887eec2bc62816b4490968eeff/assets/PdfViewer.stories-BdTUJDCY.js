import{j as r,M as s}from"./iframe-BOYw5zy-.js";import{P as p}from"./pdf-viewer-DRCyyBdk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CF_-uBIu.js";import"./preload-helper-rlM1gbkG.js";import"./PdfViewer-DT8gXGng.js";import"./index-BiLXe7b8.js";import"./BasePdfViewer-eDYOGvQm.js";import"./BasePdfViewer.module.css-B1JfBO5u.js";import"./PdfViewerAnnotationLayer-DairE_si.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D7u2cfqp.js";import"./PdfViewerOutlineSidebar-DOolqHzC.js";import"./PdfViewerSidebarHeader-DaPVwfBE.js";import"./useBaseUiId-BaQZ9H47.js";import"./useControlled-jWAlfo7U.js";import"./CompositeRoot-BOjZr9sl.js";import"./CompositeItem-CFBGvBu5.js";import"./ToolbarRootContext-po-fYSto.js";import"./composite-B4RYJvOx.js";import"./svgIconContainer-DR1S8Glm.js";import"./PdfViewerSearchBar-DO2oVl9N.js";import"./chevron-up-Dt42EwGc.js";import"./chevron-down-D_OtGuxk.js";import"./cross-CsFY0Vd9.js";import"./PdfViewerSidebar-DTKxCMd8.js";import"./index-BKNNKL9I.js";import"./index-DJ2EryKw.js";import"./index-0lKohxv1.js";import"./PdfViewerToolbar-DZA47IgK.js";import"./Button-WZTUEUss.js";import"./chevron-right-rV4y66Gg.js";import"./Input-D2kKGhXI.js";import"./search-BTWV523N.js";import"./spin-BRCdddQh.js";import"./error-1JPgoJzQ.js";import"./withOsdkMetrics-BaHbUuYM.js";import"./makeExternalStore-BH853qpO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
