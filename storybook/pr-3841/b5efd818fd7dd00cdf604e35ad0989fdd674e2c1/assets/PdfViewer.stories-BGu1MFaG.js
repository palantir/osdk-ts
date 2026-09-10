import{j as r,M as s}from"./iframe-B9IeBNGg.js";import{P as p}from"./pdf-viewer-CC41yIt_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BmRMNx0e.js";import"./preload-helper-ClkC783W.js";import"./PdfViewer-DP7aTp65.js";import"./index-DybWhixB.js";import"./BasePdfViewer-B4g0gVVi.js";import"./BasePdfViewer.module.css-C1ITWOYI.js";import"./PdfViewerAnnotationLayer-CcE_5yJu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJb9CCgd.js";import"./PdfViewerOutlineSidebar-CifHAQvl.js";import"./PdfViewerSidebarHeader-DGvsVJ8a.js";import"./useBaseUiId-CH6EGP3F.js";import"./useControlled-DKviyNQT.js";import"./CompositeRoot-YP594CFC.js";import"./CompositeItem-c0dv1mNX.js";import"./ToolbarRootContext-B71dHQV4.js";import"./composite-boJAotvg.js";import"./svgIconContainer-BmjXdC_z.js";import"./PdfViewerSearchBar-DfoGQFwc.js";import"./chevron-up-DbfTWqEA.js";import"./chevron-down-CKtjlwoI.js";import"./cross-BHBvGy8S.js";import"./PdfViewerSidebar-DzsyjxVc.js";import"./index-DD1785H2.js";import"./index-CnuXrNj3.js";import"./index-CJqGIAUW.js";import"./PdfViewerToolbar-C1A9S4sO.js";import"./Button-CoXfleKP.js";import"./chevron-right-kUh_6NOf.js";import"./Input-Iq2bz4Jn.js";import"./search-Deq1gtA1.js";import"./spin-C3fv45lV.js";import"./error-Cg3e0-pZ.js";import"./withOsdkMetrics-C0Di3XLY.js";import"./makeExternalStore-B8vFN8aQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
