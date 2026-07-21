import{j as r,M as s}from"./iframe-C6Gno_Aq.js";import{P as p}from"./pdf-viewer-CViNIi2V.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DZYL5TBI.js";import"./preload-helper-CHnjjJXQ.js";import"./PdfRenderer-ByBgxS3n.js";import"./index-_m_JHKvg.js";import"./PdfViewer-UhEyeHoG.js";import"./PdfViewer.module.css-C76Ai3qW.js";import"./PdfViewerAnnotationLayer-2b3eRJZA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BYt7QPLw.js";import"./PdfViewerOutlineSidebar-BmBYJnfi.js";import"./PdfViewerSidebarHeader-CifQpGFc.js";import"./useBaseUiId-CnO9l72w.js";import"./useControlled-B0Ct5X_K.js";import"./CompositeRoot-DLmdtUyo.js";import"./CompositeItem-DE_b4Ah6.js";import"./ToolbarRootContext-Dt9qdQ1p.js";import"./composite-BlxHHZlA.js";import"./svgIconContainer-BLTZNNpG.js";import"./PdfViewerSearchBar-oGCCMveQ.js";import"./chevron-up-DK7CAgq7.js";import"./chevron-down-BrbcyY4P.js";import"./cross-DEBXdKEp.js";import"./PdfViewerSidebar-ChiXYNVc.js";import"./index-YErgbXSw.js";import"./index-Cjc07lz8.js";import"./index-DH-47JRN.js";import"./PdfViewerToolbar-B1ve7-z4.js";import"./Button-DdI2oTJ4.js";import"./chevron-right-CCRoymNj.js";import"./Input-DwspMHxQ.js";import"./search-D577hEWx.js";import"./spin-CM-OfEuo.js";import"./error-CB9fHq9w.js";import"./withOsdkMetrics--nrQLmcD.js";import"./makeExternalStore-0Avz4Dap.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
