import{j as r,M as s}from"./iframe-CHEKlg6X.js";import{P as p}from"./pdf-viewer-C1_mlUpS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BBx7fmlS.js";import"./preload-helper-Bk_EBvkM.js";import"./PdfViewer-B-IqIg66.js";import"./index-BlVg7-ny.js";import"./BasePdfViewer-CUicpPit.js";import"./BasePdfViewer.module.css-C0sVv9N0.js";import"./PdfViewerAnnotationLayer-EHEDSCSh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DiyHENHN.js";import"./PdfViewerOutlineSidebar-DRnpaqmg.js";import"./PdfViewerSidebarHeader-D6IrLWVM.js";import"./useBaseUiId-Dm5MMLjS.js";import"./useControlled-YILXX2lb.js";import"./CompositeRoot-DMYuCTXX.js";import"./CompositeItem-BM163bD9.js";import"./ToolbarRootContext-Cjz1--hk.js";import"./composite-CfCX0gh6.js";import"./svgIconContainer-CkU_wGfW.js";import"./PdfViewerSearchBar-DVwfQpyg.js";import"./chevron-up-CG3q86df.js";import"./chevron-down-2mN8R6m0.js";import"./cross-CLXDm_xy.js";import"./PdfViewerSidebar-Dt7E5Zew.js";import"./index-CaLR8Vgq.js";import"./index-D9r-VgWS.js";import"./index-B4M03-o8.js";import"./PdfViewerToolbar-Bf1hqyjU.js";import"./Button-BeqL8QWK.js";import"./chevron-right-_kA8t25p.js";import"./Input-BQ285Nrh.js";import"./search-C2zDUTqA.js";import"./spin-D-sGa9QB.js";import"./error-DR3tFMqe.js";import"./withOsdkMetrics-CBYIB_jK.js";import"./makeExternalStore--de5UDab.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
