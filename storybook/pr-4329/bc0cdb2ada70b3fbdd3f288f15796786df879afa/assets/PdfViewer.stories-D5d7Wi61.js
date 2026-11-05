import{j as r,M as s}from"./iframe-D9LEKPHA.js";import{P as p}from"./pdf-viewer-C3t12-UO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-9YaiUdfA.js";import"./preload-helper-Dxzd1OZD.js";import"./PdfViewer-BtleCzpf.js";import"./index-DzK_y6C8.js";import"./BasePdfViewer-Cam1Pf7M.js";import"./BasePdfViewer.module.css-Dof4RJux.js";import"./PdfViewerAnnotationLayer-BKn-Zlfs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BOfaNYCJ.js";import"./PdfViewerOutlineSidebar-CFR5T5i1.js";import"./PdfViewerSidebarHeader-D08mXPSu.js";import"./useBaseUiId-CBbaApFb.js";import"./useControlled-3uaONOlZ.js";import"./CompositeRoot-pJmJhLIb.js";import"./CompositeItem-C_PTfcmx.js";import"./ToolbarRootContext-CATQRVeE.js";import"./composite-CGRnG1Ww.js";import"./svgIconContainer-e-ufemnI.js";import"./PdfViewerSearchBar-CQSf8nW1.js";import"./chevron-up-BXiNTq90.js";import"./chevron-down-5k8pvBL_.js";import"./cross-C3SLdrCX.js";import"./PdfViewerSidebar-DVgB4eBt.js";import"./index-vYt4oG90.js";import"./index-DXKCvCyZ.js";import"./index-Bc3q1fMe.js";import"./PdfViewerToolbar-C7XTzVTd.js";import"./Button-CFsy2fIN.js";import"./chevron-right-B5Q5WMjR.js";import"./Input-D7T3_Ui_.js";import"./search-CA19qJZK.js";import"./spin-uFat5Vyo.js";import"./error-CuQM1-tZ.js";import"./withOsdkMetrics-CQaJkAGj.js";import"./makeExternalStore-CH14MzlW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
