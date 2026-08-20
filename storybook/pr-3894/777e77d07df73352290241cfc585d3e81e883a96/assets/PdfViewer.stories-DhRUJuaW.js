import{j as r,M as s}from"./iframe-C1kKKYdD.js";import{P as p}from"./pdf-viewer-B1CJQEhn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BOeJVsVv.js";import"./preload-helper-C6rhobWF.js";import"./PdfViewer-do-_ut0Y.js";import"./index-B1n8gOgb.js";import"./BasePdfViewer-DeygFdb4.js";import"./BasePdfViewer.module.css-xcYH4T5M.js";import"./PdfViewerAnnotationLayer-DvdAI2fm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DLprMyri.js";import"./PdfViewerOutlineSidebar-C3jDOBAb.js";import"./PdfViewerSidebarHeader-3uzy2mDf.js";import"./useBaseUiId-DXAZbTHW.js";import"./useControlled-unM0ZLUw.js";import"./CompositeRoot-BsbP_BYp.js";import"./CompositeItem-BdX0jAKM.js";import"./ToolbarRootContext-BtomAQOF.js";import"./composite-ByHxOBay.js";import"./svgIconContainer-BTr0PbTv.js";import"./PdfViewerSearchBar-CZUUrnJ5.js";import"./chevron-up-BP92iYJw.js";import"./chevron-down-nMTcBTam.js";import"./cross-BR0Y4p7f.js";import"./PdfViewerSidebar-EfIjoVgk.js";import"./index-BzLe4OJj.js";import"./index-DQDP2CQD.js";import"./index-BLcLrxFs.js";import"./PdfViewerToolbar-DHkmGxyj.js";import"./Button-BSvNohBM.js";import"./chevron-right-CciwpTlr.js";import"./Input-BuF9ZIUF.js";import"./search-D608KClO.js";import"./spin-bBLOoHWk.js";import"./error-BDemNBQ2.js";import"./withOsdkMetrics-BcxhsS6v.js";import"./makeExternalStore-Cl4nhu8w.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
