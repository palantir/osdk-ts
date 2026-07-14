import{j as r,M as s}from"./iframe-BNyrhVdW.js";import{P as p}from"./pdf-viewer-_NnGXOPC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CMKHvHCm.js";import"./preload-helper-FRiRKs-L.js";import"./PdfRenderer-BrkO4idH.js";import"./index-DkBAUnWa.js";import"./PdfViewer-DdgdeV83.js";import"./PdfViewer.module.css-L80whM5F.js";import"./PdfViewerAnnotationLayer-ASfuxr-8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5nyR31ia.js";import"./PdfViewerOutlineSidebar-CuQgmYlb.js";import"./PdfViewerSidebarHeader-BKk51om3.js";import"./useBaseUiId-KzHqaaf1.js";import"./useControlled-DCvpdeEr.js";import"./CompositeRoot-B00GZnwd.js";import"./CompositeItem-Caz_ZeZt.js";import"./ToolbarRootContext-BWerFr-k.js";import"./composite-BKmOyerC.js";import"./svgIconContainer-MA1JfUXV.js";import"./PdfViewerSearchBar-Bc747ITC.js";import"./chevron-up-BUPhe9l4.js";import"./chevron-down-Bqs5YN-g.js";import"./cross-Wb1iDlKc.js";import"./PdfViewerSidebar-DmxM0IkA.js";import"./index-CujYUlk8.js";import"./index-DJNWyFnw.js";import"./index-ooXVSDT_.js";import"./PdfViewerToolbar-DGqv9cyG.js";import"./Button-Df4W_3CD.js";import"./chevron-right--tmyzMN5.js";import"./Input-Cd2-5o9b.js";import"./search-BgwVfiju.js";import"./spin-BT2XNxUT.js";import"./error-Ad3vot64.js";import"./withOsdkMetrics-XGcTdurw.js";import"./makeExternalStore-CD_BskCq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
