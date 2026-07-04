import{j as r,M as s}from"./iframe-FKfcGEZl.js";import{P as p}from"./pdf-viewer-DPpf_m_M.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DAnjpsG0.js";import"./preload-helper-BeXIZzmt.js";import"./PdfRenderer-MtgQRzFT.js";import"./index-CnIqS-gI.js";import"./PdfViewer-DpaAaO0L.js";import"./PdfViewer.module.css-BaOuBzh4.js";import"./PdfViewerAnnotationLayer-ByYKlqTa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hX8gWVCf.js";import"./PdfViewerOutlineSidebar-DMiUtwKs.js";import"./PdfViewerSidebarHeader-CQGyG0jT.js";import"./useBaseUiId-Ch5g6tvE.js";import"./useControlled-BOr4TDar.js";import"./CompositeRoot-CNKIkEQ9.js";import"./CompositeItem-BaP_QcSF.js";import"./ToolbarRootContext-DzPr42DC.js";import"./composite-2aT5GdQ2.js";import"./svgIconContainer-C42q1xjX.js";import"./PdfViewerSearchBar--9ToBio9.js";import"./chevron-up-VyQLw09o.js";import"./chevron-down-C5iWmvXK.js";import"./cross-CNrBTxg5.js";import"./PdfViewerSidebar-FdluUeAs.js";import"./index-ByKPLx2f.js";import"./index-BX2INUHu.js";import"./index-DzvIJVEt.js";import"./PdfViewerToolbar-Cv4JKCSW.js";import"./Button-CMpW18lC.js";import"./chevron-right-CEQH_oCW.js";import"./Input-B6Zw80Nn.js";import"./search-C-NMFnh5.js";import"./spin-DAS5g7Ul.js";import"./error-5UnepCgR.js";import"./withOsdkMetrics-B1J2Hl71.js";import"./makeExternalStore-GtGhGiKK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
