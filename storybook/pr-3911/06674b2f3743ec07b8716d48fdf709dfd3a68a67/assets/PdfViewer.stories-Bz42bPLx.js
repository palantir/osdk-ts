import{j as r,M as s}from"./iframe-CDYdpxWh.js";import{P as p}from"./pdf-viewer-Cq4yUL0O.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BnVd86re.js";import"./preload-helper-CkE461ve.js";import"./PdfViewer-D0Aqr3nX.js";import"./index-BDIxaxLo.js";import"./BasePdfViewer-C60pddbY.js";import"./BasePdfViewer.module.css-BP7lKno8.js";import"./PdfViewerAnnotationLayer-CXliv6VF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUXymqN_.js";import"./PdfViewerOutlineSidebar-6R29fd9g.js";import"./PdfViewerSidebarHeader-C6Grg6fo.js";import"./useBaseUiId-CUhIEzim.js";import"./useControlled-BZuuCA_k.js";import"./CompositeRoot-BNc8BtUY.js";import"./CompositeItem-BTvB014k.js";import"./ToolbarRootContext-Cua-jDew.js";import"./composite-rscbUgln.js";import"./svgIconContainer-CHuNpbq1.js";import"./PdfViewerSearchBar-DOI_xbGP.js";import"./chevron-up-SfxQQ8PR.js";import"./chevron-down--F9l2MVX.js";import"./cross-oT0hm_vb.js";import"./PdfViewerSidebar-CH0IlgHH.js";import"./index-DTpaMTKB.js";import"./index-Dh4Ma2cK.js";import"./index-DTjfrKc-.js";import"./PdfViewerToolbar-DL1JdwbP.js";import"./Button-B9zOHmCX.js";import"./chevron-right-Bayjf7Y6.js";import"./Input-BmXHCQaU.js";import"./search-DOJNPKi3.js";import"./spin-BkDjShAF.js";import"./error-BRoJe7F1.js";import"./withOsdkMetrics-_ioV7svt.js";import"./makeExternalStore-BpabXzBh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
