import{j as r,M as s}from"./iframe-6-lsrwMw.js";import{P as p}from"./pdf-viewer-CM2K1k1V.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D0IqFi1Z.js";import"./preload-helper-Db94U03p.js";import"./PdfViewer-C1EDq1iU.js";import"./index-DH_wHqGf.js";import"./BasePdfViewer-CE3jvw7D.js";import"./BasePdfViewer.module.css-DK8BdIVQ.js";import"./PdfViewerAnnotationLayer-BDaN5xX6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CX31JY7r.js";import"./PdfViewerOutlineSidebar-DTGL87XW.js";import"./PdfViewerSidebarHeader-BZ_ave_A.js";import"./useBaseUiId-CL8n1QSk.js";import"./useControlled-Do4cdAri.js";import"./CompositeRoot-CoiK24n9.js";import"./CompositeItem-B37GUCR2.js";import"./ToolbarRootContext-DZy52B3w.js";import"./composite-49wknnqt.js";import"./svgIconContainer-XYTAu43b.js";import"./PdfViewerSearchBar-C-zOHB1a.js";import"./chevron-up-CGd4_eZO.js";import"./chevron-down-CRB-_0Nc.js";import"./cross-YaAg5Emc.js";import"./PdfViewerSidebar-CMUtZgRd.js";import"./index-DfdKE2my.js";import"./index-Bw-N-TJf.js";import"./index-1sUFjhZs.js";import"./PdfViewerToolbar-DMatsa8d.js";import"./Button-BajEEQr1.js";import"./chevron-right-B6AJrAhM.js";import"./Input-DmhHRvF_.js";import"./search-DcT9O0hm.js";import"./spin-DFATcdNp.js";import"./error-B3oxwr-6.js";import"./withOsdkMetrics-B8Q-upjJ.js";import"./makeExternalStore-7KIsSfAR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
