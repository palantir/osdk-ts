import{j as r,M as s}from"./iframe-D6wK3EAy.js";import{P as p}from"./pdf-viewer-2_Br6Nzh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Du1__9LC.js";import"./preload-helper-9qW4f37k.js";import"./PdfRenderer-Dx6vd_xB.js";import"./index-C4Egst8D.js";import"./PdfViewer-krod5Gey.js";import"./PdfViewer.module.css-k01Jboh2.js";import"./PdfViewerAnnotationLayer-57ATi8V9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D42Phhmk.js";import"./PdfViewerOutlineSidebar-BoDgYamc.js";import"./PdfViewerSidebarHeader-DUUpY53H.js";import"./useBaseUiId-Cqe_H5Gd.js";import"./useControlled-DDOEDrW8.js";import"./CompositeRoot-D2oKoHNQ.js";import"./CompositeItem-CBOlU4eU.js";import"./ToolbarRootContext-IVqSjG4F.js";import"./composite-ITGjJkDr.js";import"./svgIconContainer-BQ29Jrrk.js";import"./PdfViewerSearchBar-CLnk0xm2.js";import"./chevron-up-Dc22t6fU.js";import"./chevron-down-CUkUYMVt.js";import"./cross-DJsnF8CR.js";import"./PdfViewerSidebar-BJ1SiI1W.js";import"./index-B6SJHL1l.js";import"./index-CaTU6vjS.js";import"./index-VMlmoRq8.js";import"./PdfViewerToolbar-2zHP8-uI.js";import"./Button-BOEdhvyt.js";import"./chevron-right-Dl7Zh4Ur.js";import"./Input-D0ZybK8t.js";import"./search-BHdUrAF7.js";import"./spin-CUVwbotN.js";import"./error-CiM4_SXt.js";import"./withOsdkMetrics-n3V8zZwC.js";import"./makeExternalStore-CAK-_0fa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
