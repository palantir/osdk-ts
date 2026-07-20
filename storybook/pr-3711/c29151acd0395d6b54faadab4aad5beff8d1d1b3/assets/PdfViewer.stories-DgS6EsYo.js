import{j as r,M as s}from"./iframe-ZHqX7REe.js";import{P as p}from"./pdf-viewer-C22dFI_A.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BiyWICA1.js";import"./preload-helper-DpRAMuu6.js";import"./PdfRenderer-4MWMyXvm.js";import"./index-DfuwNCPz.js";import"./PdfViewer-BDOMP7YU.js";import"./PdfViewer.module.css-BPko5Ya-.js";import"./PdfViewerAnnotationLayer-XWf3Yqkj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-whWI1ic3.js";import"./PdfViewerOutlineSidebar-JALEe23i.js";import"./PdfViewerSidebarHeader-ChsdwMGn.js";import"./useBaseUiId-CdVqE1St.js";import"./useControlled-CHDgDBvG.js";import"./CompositeRoot-Dj6OByOL.js";import"./CompositeItem-CcRiLlTv.js";import"./ToolbarRootContext-27hv10N9.js";import"./composite-CPaOU4SS.js";import"./svgIconContainer-CC2LHwK5.js";import"./PdfViewerSearchBar-BxSAb7RU.js";import"./chevron-up-BjlEHCZL.js";import"./chevron-down-CZw5ptDU.js";import"./cross-BUpcGnSD.js";import"./PdfViewerSidebar-B3t_Mp4_.js";import"./index-B7WI6jJb.js";import"./index-CMA1bUGM.js";import"./index-CJEXUC9y.js";import"./PdfViewerToolbar-Cpi_KL0K.js";import"./Button-kvIzLk26.js";import"./chevron-right-B-tVzP8-.js";import"./Input-IE_JMD0V.js";import"./search-CfloQI9l.js";import"./spin-CAyx8Mzr.js";import"./error-C_CdPU4N.js";import"./withOsdkMetrics-DT1hhMh4.js";import"./makeExternalStore-wzNUqb3R.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
