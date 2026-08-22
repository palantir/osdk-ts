import{j as r,M as s}from"./iframe-De8gl-wb.js";import{P as p}from"./pdf-viewer-Sg-w8RYS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C5i369Xc.js";import"./preload-helper-CZp3UEUX.js";import"./PdfViewer-CgmGWEpO.js";import"./index-yM1iOqxa.js";import"./BasePdfViewer-B2lQBwMf.js";import"./BasePdfViewer.module.css-BMM98lpe.js";import"./PdfViewerAnnotationLayer-DyzaGyUf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-t5bcMUW9.js";import"./PdfViewerOutlineSidebar-Dldggbbr.js";import"./PdfViewerSidebarHeader-CcJjADcq.js";import"./useBaseUiId-D2bKh7zK.js";import"./useControlled-DGI8qUj-.js";import"./CompositeRoot-BDbqsLgf.js";import"./CompositeItem-CLhIql87.js";import"./ToolbarRootContext-RfA3FV7l.js";import"./composite-CsYpzAzm.js";import"./svgIconContainer-O0KE-yUX.js";import"./PdfViewerSearchBar--sIFo5e2.js";import"./chevron-up-D-VwF2R7.js";import"./chevron-down-DwDibcrO.js";import"./cross-Rb4_YcYg.js";import"./PdfViewerSidebar-CuRPWbq2.js";import"./index-CEZAAMx5.js";import"./index-CZuFPKTq.js";import"./index-yZ2YDAwx.js";import"./PdfViewerToolbar-Br8Tl_db.js";import"./Button-C8NRJqZ9.js";import"./chevron-right-BmP9AqyI.js";import"./Input-jUEOhmQC.js";import"./search-gqOR6dWB.js";import"./spin-VDRSGOnB.js";import"./error-DNa-KthT.js";import"./withOsdkMetrics-Cqq5lG27.js";import"./makeExternalStore-BgPv4tiZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
