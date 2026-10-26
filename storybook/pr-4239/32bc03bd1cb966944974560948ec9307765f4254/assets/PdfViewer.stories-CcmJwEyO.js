import{j as r,M as s}from"./iframe-DexdKsaQ.js";import{P as p}from"./pdf-viewer-Bg32g-1S.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CTFh1VWh.js";import"./preload-helper-C3HMhfxy.js";import"./PdfViewer-C_pfBCvL.js";import"./index-CbLEfBq5.js";import"./BasePdfViewer-_KES5Btn.js";import"./BasePdfViewer.module.css-CK7VOSuN.js";import"./PdfViewerAnnotationLayer-B9zPdEvh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BdLDhFQ7.js";import"./PdfViewerOutlineSidebar-DyJpSasj.js";import"./PdfViewerSidebarHeader-CVL8pmL2.js";import"./useBaseUiId-sMlbFyJU.js";import"./useControlled-DJ_HdD9M.js";import"./CompositeRoot-uVOtHN8V.js";import"./CompositeItem-UFfjwpOD.js";import"./ToolbarRootContext-B4sm5nDg.js";import"./composite-BciPM06w.js";import"./svgIconContainer-BRMcYWO4.js";import"./PdfViewerSearchBar-C62VBWzP.js";import"./chevron-up-D547l_N5.js";import"./chevron-down-CPG2b4DG.js";import"./cross-D_rqjJ8K.js";import"./PdfViewerSidebar-C1slTM9_.js";import"./index-DEkTB2Ut.js";import"./index-BqerP4CK.js";import"./index-__d1p36X.js";import"./PdfViewerToolbar-BM_aO7MA.js";import"./Button-Cpyi3piv.js";import"./chevron-right-BqndmMf7.js";import"./Input-BuDuHwVf.js";import"./search-DTk97rWq.js";import"./spin-DxNIQIk1.js";import"./error-mWFE-E3g.js";import"./withOsdkMetrics-DPD_IOvo.js";import"./makeExternalStore-CGnJLW95.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
