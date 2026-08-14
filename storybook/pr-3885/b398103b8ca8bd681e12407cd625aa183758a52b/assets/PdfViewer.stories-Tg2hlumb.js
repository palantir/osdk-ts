import{j as r,M as s}from"./iframe-DfZGSEnK.js";import{P as p}from"./pdf-viewer-CE4A0wV4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VmacgmRj.js";import"./preload-helper-JSyPDtRL.js";import"./PdfViewer-BTV12cR9.js";import"./index-BtmgN424.js";import"./BasePdfViewer-Pcbq_zs2.js";import"./BasePdfViewer.module.css-C_emdCRz.js";import"./PdfViewerAnnotationLayer-CN9PqX3f.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-nqxFF9Tg.js";import"./PdfViewerOutlineSidebar-3WaXzlUa.js";import"./PdfViewerSidebarHeader-CQUBkUlY.js";import"./useBaseUiId-DywIzSMt.js";import"./useControlled-CIgmgNK9.js";import"./CompositeRoot-Ccny5-4z.js";import"./CompositeItem-BdMjAmQ6.js";import"./ToolbarRootContext-C7WEHba5.js";import"./composite-CaYLCY3w.js";import"./svgIconContainer-Df807jxI.js";import"./PdfViewerSearchBar-CKg3-qOx.js";import"./chevron-up-e7KkzcAV.js";import"./chevron-down-qE8TvtrC.js";import"./cross-Beh92vlp.js";import"./PdfViewerSidebar-BoBaOBPW.js";import"./index-CgBWG5tj.js";import"./index-DCIaOmvZ.js";import"./index-Bgh8wCNB.js";import"./PdfViewerToolbar-ChmBLYa7.js";import"./Button-B1pKZshi.js";import"./chevron-right-CGfLaHgR.js";import"./Input-DFmCPLco.js";import"./search-BwusOqn1.js";import"./spin-CNOZ5IW3.js";import"./error-C02d4v5E.js";import"./withOsdkMetrics-BVC9GIYX.js";import"./makeExternalStore-BNurq7kY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
