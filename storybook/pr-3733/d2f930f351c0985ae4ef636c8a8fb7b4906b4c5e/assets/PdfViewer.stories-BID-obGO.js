import{j as r,M as s}from"./iframe-D4qMbcGj.js";import{P as p}from"./pdf-viewer-iM-xrjN1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dao0iZAK.js";import"./preload-helper-BSDUQlJK.js";import"./PdfRenderer-DWodaEFy.js";import"./index-DWgFCifq.js";import"./PdfViewer-cqNJx9ms.js";import"./PdfViewer.module.css-B27-S-Go.js";import"./PdfViewerAnnotationLayer-CYwzChY3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BX2LqEUm.js";import"./PdfViewerOutlineSidebar-BqxT3jxC.js";import"./PdfViewerSidebarHeader-BlKezsd8.js";import"./useBaseUiId-BsTEs7Va.js";import"./useControlled-B5prv2ni.js";import"./CompositeRoot-Ciww1Akn.js";import"./CompositeItem-T6umQOp4.js";import"./ToolbarRootContext-BZK5IVau.js";import"./composite-SYDjM7pY.js";import"./svgIconContainer-DE-ot46s.js";import"./PdfViewerSearchBar-BL_Vw78S.js";import"./chevron-up-BE4Z-wXt.js";import"./chevron-down-DW4Qr4XU.js";import"./cross-vCjyxZoC.js";import"./PdfViewerSidebar-D-NRdeIt.js";import"./index-BzwyurKM.js";import"./index-Dlgd2zdX.js";import"./index-Xv5X3W5u.js";import"./PdfViewerToolbar-CVjmWnej.js";import"./Button-BV1n0jKu.js";import"./chevron-right-BiMq45ot.js";import"./Input-B0VsFePU.js";import"./search-B4XVrJRs.js";import"./spin-NEjHnOtx.js";import"./error-C_hHncG1.js";import"./withOsdkMetrics-fijN6GvD.js";import"./makeExternalStore-BsIpDqEl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
