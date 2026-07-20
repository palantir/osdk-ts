import{j as r,M as s}from"./iframe-kEXttPrj.js";import{P as p}from"./pdf-viewer-K4N-1baG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DbKxEgqA.js";import"./preload-helper-DJYrSKst.js";import"./PdfRenderer-CqqXZtHK.js";import"./index-DMqv5uwI.js";import"./PdfViewer-fkp_dwD2.js";import"./PdfViewer.module.css-B3xaMR5Q.js";import"./PdfViewerAnnotationLayer-BaK9JVFY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C1yzhGPy.js";import"./PdfViewerOutlineSidebar-BhKVjJL0.js";import"./PdfViewerSidebarHeader-Do2J_ebC.js";import"./useBaseUiId-DK-jOoPS.js";import"./useControlled-3Mte2FdL.js";import"./CompositeRoot-QJnDYpZr.js";import"./CompositeItem-D1ks_FDg.js";import"./ToolbarRootContext-Dfgo4ZFi.js";import"./composite-Csa0CmWK.js";import"./svgIconContainer-CCezkQSK.js";import"./PdfViewerSearchBar-Bz10YL4X.js";import"./chevron-up-Bccj-kK_.js";import"./chevron-down-DDhDIBpv.js";import"./cross-CbZpIeeo.js";import"./PdfViewerSidebar-CpE8sXKg.js";import"./index-D7SejJKZ.js";import"./index-C0DdVeXZ.js";import"./index-B2GAgXCG.js";import"./PdfViewerToolbar-CUyBNM2l.js";import"./Button-CenD0bzg.js";import"./chevron-right-Bl81ITCT.js";import"./Input-BZuor96n.js";import"./search-C15Jk0fn.js";import"./spin-ujMeDvFA.js";import"./error-B8yv3Sxe.js";import"./withOsdkMetrics-DjZwTYaT.js";import"./makeExternalStore-bAuKHDUj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
