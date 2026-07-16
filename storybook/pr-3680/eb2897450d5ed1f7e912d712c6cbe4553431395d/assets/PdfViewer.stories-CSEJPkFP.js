import{j as r,M as s}from"./iframe-CaGrV6Xd.js";import{P as p}from"./pdf-viewer-5OA-bIqq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-h6ci2erm.js";import"./preload-helper-DqCnNMeF.js";import"./PdfRenderer-RX0s4yy4.js";import"./index-B-aXTXlp.js";import"./PdfViewer-CwYnai4S.js";import"./PdfViewer.module.css-CFI1kxSt.js";import"./PdfViewerAnnotationLayer-CZOh087F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-IezVQua3.js";import"./PdfViewerOutlineSidebar-aJL18Ath.js";import"./PdfViewerSidebarHeader-C4S4TJNx.js";import"./useBaseUiId--GLX5y2o.js";import"./useControlled-DAOr6g1Y.js";import"./CompositeRoot-Cs3XIX6a.js";import"./CompositeItem-Dw6tm4Ht.js";import"./ToolbarRootContext-BOGK67MF.js";import"./composite-CYL0hfWS.js";import"./svgIconContainer-BZhxiDrs.js";import"./PdfViewerSearchBar-BLgb3uyT.js";import"./chevron-up-BrFV8RQc.js";import"./chevron-down-BXQZftYu.js";import"./cross-DfvWr9nk.js";import"./PdfViewerSidebar-Yt4ISO0d.js";import"./index-C6vZ_CqL.js";import"./index-CrTn2rRx.js";import"./index-VCFFI3LD.js";import"./PdfViewerToolbar-BtCW2Wj1.js";import"./Button-BDtRlS-p.js";import"./chevron-right-C0fT1ggE.js";import"./Input-Gqvvia-z.js";import"./search-uAufuLh8.js";import"./spin-DHGPcGxg.js";import"./error-CJalUTnk.js";import"./withOsdkMetrics--_Hp5D_u.js";import"./makeExternalStore-D3Dv41e5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
