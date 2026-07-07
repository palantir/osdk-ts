import{j as r,M as s}from"./iframe-CCHicgAT.js";import{P as p}from"./pdf-viewer-3AZRiPra.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-n4wztwwV.js";import"./preload-helper-ZUdEkx9w.js";import"./PdfRenderer-CSCxT-HE.js";import"./index-erXVeKzm.js";import"./PdfViewer-DDNs6yBP.js";import"./PdfViewer.module.css-BKncJ_HM.js";import"./PdfViewerAnnotationLayer-CQWpQu62.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cp-7C16s.js";import"./PdfViewerOutlineSidebar-BFbt_GOs.js";import"./PdfViewerSidebarHeader-CB4WBGJo.js";import"./useBaseUiId-CHnZoAe-.js";import"./useControlled-SF3ZeUXr.js";import"./CompositeRoot-sa32eEU_.js";import"./CompositeItem-BP7inN6H.js";import"./ToolbarRootContext-DSDzlIKl.js";import"./composite-KsTmwuoM.js";import"./svgIconContainer-CT8qasyd.js";import"./PdfViewerSearchBar-IosIO1qC.js";import"./chevron-up-B64xOZRs.js";import"./chevron-down-BruPS1Tz.js";import"./cross-BoW2CFzb.js";import"./PdfViewerSidebar-v_aNmgQa.js";import"./index-BHTgYSBD.js";import"./index-CWSijKne.js";import"./index-BbS88aWT.js";import"./PdfViewerToolbar-CmMXOfms.js";import"./Button-zGeYpjtk.js";import"./chevron-right-HyOwCoVL.js";import"./Input-Cs5_InzK.js";import"./search-Bf6FLrqb.js";import"./spin-KxdDXjH2.js";import"./error-DNrecZbm.js";import"./withOsdkMetrics-DZUYlxG5.js";import"./makeExternalStore-vz78AVGV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
