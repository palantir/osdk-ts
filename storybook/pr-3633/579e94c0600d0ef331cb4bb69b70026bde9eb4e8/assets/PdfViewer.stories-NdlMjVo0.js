import{j as r,M as s}from"./iframe-BpPL3N54.js";import{P as p}from"./pdf-viewer-DWrx8Jli.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DuH0XBHV.js";import"./preload-helper-D1PYXbeJ.js";import"./PdfRenderer-CSSZp79n.js";import"./index-Kd2NNqIR.js";import"./PdfViewer-BM2vPMKK.js";import"./PdfViewer.module.css-BqMQdelD.js";import"./PdfViewerAnnotationLayer-BBe-NDdo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtaoKlRP.js";import"./PdfViewerOutlineSidebar-49QezhHE.js";import"./PdfViewerSidebarHeader-DyyoBKAD.js";import"./useBaseUiId-C9DsREXo.js";import"./useControlled-CpFf2mto.js";import"./CompositeRoot-B2Jn6Eo_.js";import"./CompositeItem-DEp2UQ0X.js";import"./ToolbarRootContext-G90fG1r6.js";import"./composite-en2PO2eu.js";import"./svgIconContainer-9Pzm5qjd.js";import"./PdfViewerSearchBar-CUiaV2Tm.js";import"./chevron-up-cjashhje.js";import"./chevron-down-DkOfUPuv.js";import"./cross-BJ0QdvuH.js";import"./PdfViewerSidebar-YnHizTB4.js";import"./index-CRd_jlZZ.js";import"./index-DheQatUS.js";import"./index-C-mPw1Ld.js";import"./PdfViewerToolbar-BNpCiIRN.js";import"./Button-BoeqI3JJ.js";import"./chevron-right-D51sskwU.js";import"./Input-Cpw5RQEM.js";import"./search-DqtKkGvQ.js";import"./spin-DkE25pEH.js";import"./error-Czkn31BN.js";import"./withOsdkMetrics-CZtxKDXJ.js";import"./makeExternalStore-Co0apv13.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
