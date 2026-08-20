import{j as r,M as s}from"./iframe-t1WFPDhw.js";import{P as p}from"./pdf-viewer-B3RvrdAj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BxwlCnhS.js";import"./preload-helper-Da1tS92Z.js";import"./PdfViewer-D0f9qhsn.js";import"./index-B1GoUeLu.js";import"./BasePdfViewer-CTwN8mwN.js";import"./BasePdfViewer.module.css-BVAqAmwc.js";import"./PdfViewerAnnotationLayer-B7CK8XrT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CElD-QxA.js";import"./PdfViewerOutlineSidebar-B4GWHcTo.js";import"./PdfViewerSidebarHeader-DeXLpUhy.js";import"./useBaseUiId-DK5GeXHs.js";import"./useControlled-IVlR0_Jk.js";import"./CompositeRoot-DcMuC1Y0.js";import"./CompositeItem-LJuZmcxS.js";import"./ToolbarRootContext-B23-OKwl.js";import"./composite-CDJe9A1X.js";import"./svgIconContainer-BUiS1VCJ.js";import"./PdfViewerSearchBar-DFO2HTVF.js";import"./chevron-up-B6YqaUB6.js";import"./chevron-down-qM8DZerS.js";import"./cross-Da_GAL_u.js";import"./PdfViewerSidebar-BGeUnM1V.js";import"./index-Cro2QC3a.js";import"./index-BzHvcWdE.js";import"./index-Dip6e6D7.js";import"./PdfViewerToolbar-D97YOO5c.js";import"./Button-DqjYckjv.js";import"./chevron-right-RAGjq0Hp.js";import"./Input-YG1B-d52.js";import"./search-CoPwATRc.js";import"./spin-S7dHwR5Y.js";import"./error-DceejFAv.js";import"./withOsdkMetrics-BIBpp3u3.js";import"./makeExternalStore-Dd5JFSU6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
