import{j as r,M as s}from"./iframe-BrKhH_8U.js";import{P as p}from"./pdf-viewer-DNceIr5x.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CcAYYzLw.js";import"./preload-helper-CixVNBXc.js";import"./PdfRenderer-COnSCUEF.js";import"./index-DLFRq0fk.js";import"./PdfViewer-BkvBUqfp.js";import"./PdfViewer.module.css-BibifsnI.js";import"./PdfViewerAnnotationLayer-DR4f4AcE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVCC0hnW.js";import"./PdfViewerOutlineSidebar-wlPEoEZf.js";import"./PdfViewerSidebarHeader-DzOpI_fB.js";import"./useBaseUiId-DviDdHmF.js";import"./useControlled-C9JrXNOF.js";import"./CompositeRoot-DCkI9c80.js";import"./CompositeItem-BrVmYibG.js";import"./ToolbarRootContext-DuQ_a6L2.js";import"./composite-C8s_Cnxx.js";import"./svgIconContainer-BAvRxQfV.js";import"./PdfViewerSearchBar-CkTwPAaj.js";import"./chevron-up-CZNZm9GP.js";import"./chevron-down-CrYvrwth.js";import"./cross-CERk_AYz.js";import"./PdfViewerSidebar-C8vfjlnQ.js";import"./index-BO650apv.js";import"./index-Uf5yNz3F.js";import"./index-BDbogzKC.js";import"./PdfViewerToolbar-D324GL5c.js";import"./Button-C2inf5rY.js";import"./chevron-right-Bu3j5zIj.js";import"./Input-D2QPVo1M.js";import"./minus-ZigxQGa9.js";import"./search-BdlbsWDT.js";import"./spin-Bi0TS7no.js";import"./error-Bv15h-Vo.js";import"./withOsdkMetrics-mdCcmRVX.js";import"./makeExternalStore-VG7HHRW4.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
