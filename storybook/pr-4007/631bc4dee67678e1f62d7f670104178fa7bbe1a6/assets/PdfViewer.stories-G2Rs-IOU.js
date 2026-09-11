import{j as r,M as s}from"./iframe-BU8GFPxQ.js";import{P as p}from"./pdf-viewer-CXobRC_s.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dp-x4Tro.js";import"./preload-helper-BSSMxuAV.js";import"./PdfViewer-yp-xDmjh.js";import"./index-Bj-f6_Qj.js";import"./BasePdfViewer-BDxjjoHE.js";import"./BasePdfViewer.module.css-BDZHc6OO.js";import"./PdfViewerAnnotationLayer-BTWmABeI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRWn3Slq.js";import"./PdfViewerOutlineSidebar-st9mywuE.js";import"./PdfViewerSidebarHeader-BthmLq-b.js";import"./useBaseUiId-BwjQR-o4.js";import"./useControlled-D1XH3a1Z.js";import"./CompositeRoot-CcOKlLIN.js";import"./CompositeItem-CKxdCuih.js";import"./ToolbarRootContext-C_zt0aic.js";import"./composite-Boe3qmtr.js";import"./svgIconContainer-TGaOK_qc.js";import"./PdfViewerSearchBar-DRrKMafe.js";import"./chevron-up-CJMheTzz.js";import"./chevron-down-Cmk3gaNN.js";import"./cross-DWZb8fnb.js";import"./PdfViewerSidebar-DHvCsD_h.js";import"./index-DzgdnyuN.js";import"./index-RL0-TRLi.js";import"./index-BXjwg4tu.js";import"./PdfViewerToolbar-DM-ox_iT.js";import"./Button-BVSo85zW.js";import"./chevron-right-avJJdPxo.js";import"./Input-BKDA3F0b.js";import"./search-BzzxBGZs.js";import"./spin-ludp9p20.js";import"./error-DmWc08dY.js";import"./withOsdkMetrics-NEaJKOCO.js";import"./makeExternalStore-BQ9uq3hP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
