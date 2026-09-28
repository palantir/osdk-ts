import{j as r,M as s}from"./iframe-xlXCZ1ws.js";import{P as p}from"./pdf-viewer-Bpfbp21Y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLHz9axQ.js";import"./preload-helper-qqQQlHro.js";import"./PdfViewer-bO6Gwr7J.js";import"./index-0LV67TMp.js";import"./BasePdfViewer-Bl7raXRM.js";import"./BasePdfViewer.module.css-D6bgtRSz.js";import"./PdfViewerAnnotationLayer-5Jt_Ata6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-8YHC8VIt.js";import"./PdfViewerOutlineSidebar-Bmv68_pC.js";import"./PdfViewerSidebarHeader-aI_BFvO5.js";import"./useBaseUiId-BGTxIfXW.js";import"./useControlled-BnjR3wqV.js";import"./CompositeRoot-C-huw0MW.js";import"./CompositeItem-BYik2Kor.js";import"./ToolbarRootContext-5Gfw3fcR.js";import"./composite-CRMLjWFi.js";import"./svgIconContainer-CuvK47Ur.js";import"./PdfViewerSearchBar-DfZsm1A3.js";import"./chevron-up-DeJJ1UcY.js";import"./chevron-down-gZxsFq9N.js";import"./cross-CR59a-Oy.js";import"./PdfViewerSidebar-CKZqa5mC.js";import"./index-kTsIio2O.js";import"./index-C9_hIpBS.js";import"./index-mu_ylgEd.js";import"./PdfViewerToolbar-a2Gccqv0.js";import"./Button-BsW3xUOI.js";import"./chevron-right-D6XapKZk.js";import"./Input-BoJ1ruei.js";import"./search-C6I7AzRf.js";import"./spin-C8QS8At6.js";import"./error-1_b5vZEY.js";import"./withOsdkMetrics-Cc_kPS0s.js";import"./makeExternalStore-BkPioVOv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
