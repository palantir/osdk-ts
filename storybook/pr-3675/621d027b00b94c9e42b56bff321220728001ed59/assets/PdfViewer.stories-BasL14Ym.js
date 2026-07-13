import{j as r,M as s}from"./iframe-BY5-9hkg.js";import{P as p}from"./pdf-viewer-CwgDdPzX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DyhdAe8R.js";import"./preload-helper-CINHPaVZ.js";import"./PdfRenderer-QLiQfUa1.js";import"./index-CJzTTX3u.js";import"./PdfViewer-CCykxpU8.js";import"./PdfViewer.module.css-AnJeG-6z.js";import"./PdfViewerAnnotationLayer-L8NgcfIj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BOj91Jhs.js";import"./PdfViewerOutlineSidebar-BFg5Q2aS.js";import"./PdfViewerSidebarHeader-BMQBziCq.js";import"./useBaseUiId-C_DkBiwm.js";import"./useControlled-DObQOvvV.js";import"./CompositeRoot-CqpW8b8M.js";import"./CompositeItem-BCPCbCzR.js";import"./ToolbarRootContext-USuO0_Rk.js";import"./composite-DqcSZiEj.js";import"./svgIconContainer-E55wUvGa.js";import"./PdfViewerSearchBar-DQv7sEW6.js";import"./chevron-up-Ccpjx5du.js";import"./chevron-down-3bvaVHxC.js";import"./cross-Drh6FKLn.js";import"./PdfViewerSidebar-BTHVVlOc.js";import"./index-DP1DnTlM.js";import"./index-BKgkCnpw.js";import"./index-HRSX2Zy8.js";import"./PdfViewerToolbar-DK47Sy7o.js";import"./Button-DOCEB8h2.js";import"./chevron-right-Bewt2sFD.js";import"./Input-060Zz7KP.js";import"./search-B7RMBj9o.js";import"./spin-2EW2P3gx.js";import"./error-CDvOmrJi.js";import"./withOsdkMetrics-DZo8JWK3.js";import"./makeExternalStore-BGx7tVqv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
