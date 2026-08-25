import{j as r,M as s}from"./iframe-wRPSG4iB.js";import{P as p}from"./pdf-viewer-fSb-FVhK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DGdEqVte.js";import"./preload-helper-D848Ncme.js";import"./PdfViewer-SR__pW4m.js";import"./index-C8OWKbFz.js";import"./BasePdfViewer-BwFuK0si.js";import"./BasePdfViewer.module.css-D88fEvtH.js";import"./PdfViewerAnnotationLayer-CRs-nTDr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dozf8hdM.js";import"./PdfViewerOutlineSidebar-BvzLP-pK.js";import"./PdfViewerSidebarHeader-CJO_3FG_.js";import"./useBaseUiId-SdltLqrh.js";import"./useControlled-Djv6iTti.js";import"./CompositeRoot-DO_cXPhc.js";import"./CompositeItem-T6bJ2JFd.js";import"./ToolbarRootContext-CvxpTeNo.js";import"./composite-DX6SXiPb.js";import"./svgIconContainer-D1tLpFWt.js";import"./PdfViewerSearchBar-D9GhAsny.js";import"./chevron-up-i2LnoZUh.js";import"./chevron-down-DU-ii_Gy.js";import"./cross-CfaXio25.js";import"./PdfViewerSidebar-C7pZEYQe.js";import"./index-nYnrFckb.js";import"./index-DhSyQl07.js";import"./index-B7phL-s1.js";import"./PdfViewerToolbar-BVAdRK6H.js";import"./Button-DRSm3Zzs.js";import"./chevron-right-B9-EzJ42.js";import"./Input-DLUURi2W.js";import"./search-CQw0whIQ.js";import"./spin-DNFHS6bS.js";import"./error-jxE8jp2D.js";import"./withOsdkMetrics-Duzkh8Hp.js";import"./makeExternalStore-D9SKqMSw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
