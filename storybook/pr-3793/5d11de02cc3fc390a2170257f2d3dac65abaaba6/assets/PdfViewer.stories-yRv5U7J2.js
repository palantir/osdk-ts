import{j as r,M as s}from"./iframe-DJYB1qk1.js";import{P as p}from"./pdf-viewer-DLi6mQAY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DaqRkGto.js";import"./preload-helper-DtuV8K9F.js";import"./PdfRenderer-DPugLeJl.js";import"./index-DonW1mkl.js";import"./PdfViewer-CZpb67E3.js";import"./PdfViewer.module.css-BfFAqNs_.js";import"./PdfViewerAnnotationLayer-BrA23XmB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CD0CMobM.js";import"./PdfViewerOutlineSidebar-B_EaY1RH.js";import"./PdfViewerSidebarHeader-DevOByWA.js";import"./useBaseUiId-DL-SGNBR.js";import"./useControlled-oyOM-Xp0.js";import"./CompositeRoot-CTVySlVm.js";import"./CompositeItem-CUawBViA.js";import"./ToolbarRootContext-CV2B82ef.js";import"./composite-CC6F0Qsz.js";import"./svgIconContainer-BbsWyzEj.js";import"./PdfViewerSearchBar-B-bdd1wn.js";import"./chevron-up-CEeEbND_.js";import"./chevron-down-BBFBeDj_.js";import"./cross-Bpub1NfR.js";import"./PdfViewerSidebar-yyyuZxZI.js";import"./index-C2FWrg77.js";import"./index-D8Ycj_o4.js";import"./index-Ca9Z72uB.js";import"./PdfViewerToolbar-D6C63ueM.js";import"./Button-Duzr31W4.js";import"./chevron-right-DLrxiDYr.js";import"./Input-1LkIvDzf.js";import"./search-5CkafOxN.js";import"./spin-BNkEaYx1.js";import"./error-BpmsLSMo.js";import"./withOsdkMetrics-B_Dkj_nQ.js";import"./makeExternalStore-CkRVjc78.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
