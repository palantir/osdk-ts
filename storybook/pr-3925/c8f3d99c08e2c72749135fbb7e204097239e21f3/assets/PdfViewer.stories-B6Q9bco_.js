import{j as r,M as s}from"./iframe-h1qnQQVx.js";import{P as p}from"./pdf-viewer-nFcgH8MK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-8X2A3ojg.js";import"./preload-helper-ADovFD1C.js";import"./PdfViewer-CrMG5rvp.js";import"./index-DD5KPom6.js";import"./BasePdfViewer-BntKwv4u.js";import"./BasePdfViewer.module.css-CYTvYHYd.js";import"./PdfViewerAnnotationLayer-AWh8kJjx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DKd31f_Y.js";import"./PdfViewerOutlineSidebar-C42a_IcY.js";import"./PdfViewerSidebarHeader-C9azxCeF.js";import"./useBaseUiId-hqOZCtk1.js";import"./useControlled-BQy-u6tQ.js";import"./CompositeRoot-D588C_s6.js";import"./CompositeItem-CTw2DdEJ.js";import"./ToolbarRootContext-BYONpLtc.js";import"./composite-DEzICmec.js";import"./svgIconContainer-Ca3ASY3c.js";import"./PdfViewerSearchBar-Bhdx89El.js";import"./chevron-up-Bzvysagl.js";import"./chevron-down-CivjtU0i.js";import"./cross-D4ej-8wY.js";import"./PdfViewerSidebar-BZw26NMA.js";import"./index-BlgrCeK6.js";import"./index-YrVkhqd3.js";import"./index-XQODY1Mp.js";import"./PdfViewerToolbar-BuC5HsS3.js";import"./Button-dm1NzbtL.js";import"./chevron-right-whRUAWwG.js";import"./Input-Cf0RIFeN.js";import"./search-DcazpnHi.js";import"./spin-EKFZA19f.js";import"./error-DJpMatiu.js";import"./withOsdkMetrics-DQ_0oDdX.js";import"./makeExternalStore-NEI1OBmX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
