import{j as r,M as s}from"./iframe-DJaET-4W.js";import{P as p}from"./pdf-viewer-BPnlmhhd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DvBwNg3S.js";import"./preload-helper-BLsfXLTb.js";import"./PdfViewer-DfJYF3S0.js";import"./index-CXAjf3Lj.js";import"./BasePdfViewer-BucpqJ2_.js";import"./BasePdfViewer.module.css-Byl8XziD.js";import"./PdfViewerAnnotationLayer-BeDbuGg2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D0qPv1ky.js";import"./PdfViewerOutlineSidebar-B6Bbttaj.js";import"./PdfViewerSidebarHeader-8Ap4FMGi.js";import"./useBaseUiId-C64d8rt1.js";import"./useControlled-CUKxlT-G.js";import"./CompositeRoot-CQnKrQdm.js";import"./CompositeItem-DfP3tBe3.js";import"./ToolbarRootContext-geDYh26O.js";import"./composite-DJhk57sk.js";import"./svgIconContainer-ZOxHgtx1.js";import"./PdfViewerSearchBar-D6Kj4DUH.js";import"./chevron-up-3GBfYp9-.js";import"./chevron-down-LDtg690T.js";import"./cross-DREoRCVi.js";import"./PdfViewerSidebar-DcQRWDcC.js";import"./index-Cy507Wuk.js";import"./index-DBzGUm2T.js";import"./index-BtLQLn9f.js";import"./PdfViewerToolbar-C-6idwzq.js";import"./Button-BMrMSDOy.js";import"./chevron-right-QCkY0RnE.js";import"./Input-Ckb4ze0a.js";import"./search-DhdNxuaM.js";import"./spin-K05C1dXj.js";import"./error-BfaKs4G2.js";import"./withOsdkMetrics-DfivTNsf.js";import"./makeExternalStore-Bp_quvMW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
