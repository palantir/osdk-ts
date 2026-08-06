import{j as r,M as s}from"./iframe-BfhfREBy.js";import{P as p}from"./pdf-viewer-Cz3L_nmP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CASpafhW.js";import"./preload-helper--XKw4bmx.js";import"./PdfRenderer-BDqaogz8.js";import"./index-DytRM3DZ.js";import"./PdfViewer-CNL14wGW.js";import"./PdfViewer.module.css-B4wP5v6o.js";import"./PdfViewerAnnotationLayer-D1ZZJn7f.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CsNoa6r_.js";import"./PdfViewerOutlineSidebar-B9BUQ_qW.js";import"./PdfViewerSidebarHeader-D0ua3TZh.js";import"./useBaseUiId-BFH0KUQX.js";import"./useControlled-B4Njh2P6.js";import"./CompositeRoot-BkSLtIUs.js";import"./CompositeItem-BAnZg7F8.js";import"./ToolbarRootContext-CzwlFaUf.js";import"./composite-_2f5sVOd.js";import"./svgIconContainer-DBAOF07n.js";import"./PdfViewerSearchBar-CKJ30_3X.js";import"./chevron-up-Cl98-HFE.js";import"./chevron-down-CxBM7YTA.js";import"./cross-BeF5Hfc8.js";import"./PdfViewerSidebar-DadIZd4c.js";import"./index-kesKYPJD.js";import"./index-ynePoQ8g.js";import"./index-Dr01-4SU.js";import"./PdfViewerToolbar-BhC9Nr1y.js";import"./Button-DfmbIkJw.js";import"./chevron-right-qRrpg_Tr.js";import"./Input-E-9p2WY9.js";import"./search-6CMwLJx5.js";import"./spin-CHxpCJPK.js";import"./error-CzQ0trJH.js";import"./withOsdkMetrics-D87XtM7j.js";import"./makeExternalStore-BxS-AXBE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
