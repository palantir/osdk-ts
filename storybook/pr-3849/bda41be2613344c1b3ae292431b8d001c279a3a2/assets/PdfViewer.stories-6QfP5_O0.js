import{j as r,M as s}from"./iframe-Dgz81_4K.js";import{P as p}from"./pdf-viewer-W4_99MTV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ct-JZPUq.js";import"./preload-helper-BGuNlUqA.js";import"./PdfViewer-DNHO6d70.js";import"./index-F2L_OuM-.js";import"./BasePdfViewer-CciSD1GI.js";import"./BasePdfViewer.module.css-B1jukohw.js";import"./PdfViewerAnnotationLayer-DjYWm0L4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2u3Zd-r.js";import"./PdfViewerOutlineSidebar-BoTIg2Fc.js";import"./PdfViewerSidebarHeader-0QY7Pk6D.js";import"./useBaseUiId-BncAuZS9.js";import"./useControlled-pvz7JI6x.js";import"./CompositeRoot-CelQvhjj.js";import"./CompositeItem-Do6kqd5-.js";import"./ToolbarRootContext-mBIzMDya.js";import"./composite-CBrybvSL.js";import"./svgIconContainer-25pdXJKu.js";import"./PdfViewerSearchBar-CWkLiiSB.js";import"./chevron-up-xrVqXXGE.js";import"./chevron-down-Cgs_d-_t.js";import"./cross-HWG3bUDk.js";import"./PdfViewerSidebar-2vEbD1rX.js";import"./index-htBElXvT.js";import"./index-CiBmfd_G.js";import"./index-47H69AQZ.js";import"./PdfViewerToolbar-D0RirOTC.js";import"./Button-Bs7uQYUi.js";import"./chevron-right-CHNncDAi.js";import"./Input-Bd0_Le58.js";import"./search-z0PitH45.js";import"./spin-BmcA7sI6.js";import"./error-nIlnw04t.js";import"./withOsdkMetrics-tYv3puyU.js";import"./makeExternalStore-B9Noz3DE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
