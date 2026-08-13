import{j as r,M as s}from"./iframe-BmFJOqc6.js";import{P as p}from"./pdf-viewer-DcYbBx39.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CbbVwpnd.js";import"./preload-helper-C_jr2zBl.js";import"./PdfRenderer-DErx0A1M.js";import"./index-3j69-5Ym.js";import"./PdfViewer-Cx9YOjS4.js";import"./PdfViewer.module.css-C3GueEci.js";import"./PdfViewerAnnotationLayer-D3Z57Sth.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BQwmjcFg.js";import"./PdfViewerOutlineSidebar-B6wPxbhh.js";import"./PdfViewerSidebarHeader-CRufTdY5.js";import"./useBaseUiId-C5SRli-B.js";import"./useControlled-L8rvP9al.js";import"./CompositeRoot-3fgP7bL8.js";import"./CompositeItem-CPVzsbMv.js";import"./ToolbarRootContext-Dryg-_tS.js";import"./composite-BoouiZdh.js";import"./svgIconContainer-CMQoxDUu.js";import"./PdfViewerSearchBar-DLXDk39F.js";import"./chevron-up-BSHD2cQh.js";import"./chevron-down-DWMFwiT1.js";import"./cross-CKVqWa-w.js";import"./PdfViewerSidebar-CCeG538S.js";import"./index-C3KliuNA.js";import"./index-DWnSWhJ9.js";import"./index-Cfv6AZs9.js";import"./PdfViewerToolbar-VNz1xlAg.js";import"./Button-BBPh3cP6.js";import"./chevron-right-DhDxIINB.js";import"./Input-BT2Zyp5m.js";import"./search-CioqFqwa.js";import"./spin-CqyDNycS.js";import"./error-l2yMMQM_.js";import"./withOsdkMetrics-BzcGzmjv.js";import"./makeExternalStore-iaafROBl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
