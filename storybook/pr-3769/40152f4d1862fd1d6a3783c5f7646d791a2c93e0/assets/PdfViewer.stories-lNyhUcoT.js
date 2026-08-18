import{j as r,M as s}from"./iframe-C1PJ2Ip3.js";import{P as p}from"./pdf-viewer-BOaiveJc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDH7PV4f.js";import"./preload-helper-K62Nqc8W.js";import"./PdfViewer-DYGErURb.js";import"./index-Bl_td8xL.js";import"./BasePdfViewer-dlqT1qBO.js";import"./BasePdfViewer.module.css-CPCvK1X9.js";import"./PdfViewerAnnotationLayer-C8j31v2K.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tQEDhHZU.js";import"./PdfViewerOutlineSidebar-DQ9uz-6o.js";import"./PdfViewerSidebarHeader-dSB1Ja1V.js";import"./useBaseUiId-DyrsDa4O.js";import"./useControlled-DAF9cP4u.js";import"./CompositeRoot-lYhZlUX9.js";import"./CompositeItem-Y5w5FHLX.js";import"./ToolbarRootContext-DK1JTwfB.js";import"./composite-SuHb1-n8.js";import"./svgIconContainer-CS1Om_Hp.js";import"./PdfViewerSearchBar-CVUMA7H0.js";import"./chevron-up-BNHOG28N.js";import"./chevron-down-DsYD0DIc.js";import"./cross-BL08wg1G.js";import"./PdfViewerSidebar-C_b-guS6.js";import"./index-DD9JVuxo.js";import"./index-CQ1-7fux.js";import"./index-BwWp-Y48.js";import"./PdfViewerToolbar-DmH_CZaP.js";import"./Button-D_-j7_TT.js";import"./chevron-right-B0i1aEMe.js";import"./Input-C990PYdc.js";import"./search-664FgG4e.js";import"./spin-CiFh3T1K.js";import"./error-4m8JSMdV.js";import"./withOsdkMetrics-CdeGhgQc.js";import"./makeExternalStore-CZuSCPax.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
