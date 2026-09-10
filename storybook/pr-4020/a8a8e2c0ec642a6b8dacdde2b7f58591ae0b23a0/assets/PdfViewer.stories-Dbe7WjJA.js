import{j as r,M as s}from"./iframe-C2ZZ3cOF.js";import{P as p}from"./pdf-viewer-JL3_aaHh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BtBQ2ajY.js";import"./preload-helper-BJtcF0-s.js";import"./PdfViewer-Zou-fu0f.js";import"./index-DsoOCFTI.js";import"./BasePdfViewer-Cn7b-7mu.js";import"./BasePdfViewer.module.css-BLe5LrPo.js";import"./PdfViewerAnnotationLayer-CWbMnwUi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-S_8AH4Yy.js";import"./PdfViewerOutlineSidebar-DKvMQCAg.js";import"./PdfViewerSidebarHeader-D8JIkEzc.js";import"./useBaseUiId-rOymOOAJ.js";import"./useControlled-OqQhu2z4.js";import"./CompositeRoot-Dd3fRhyE.js";import"./CompositeItem-DUancClF.js";import"./ToolbarRootContext-B1pHyjdA.js";import"./composite-Ddvv9IrU.js";import"./svgIconContainer-DGGhigwB.js";import"./PdfViewerSearchBar-D1CFmwQk.js";import"./chevron-up-DzDuYe7x.js";import"./chevron-down-Btxrg9J1.js";import"./cross--ibNnIEf.js";import"./PdfViewerSidebar-B4W2YJ6A.js";import"./index-DlwYymDm.js";import"./index-CTwT6nYN.js";import"./index-DSVH0ev_.js";import"./PdfViewerToolbar-B9QE35Kc.js";import"./Button-D9oV_2gB.js";import"./chevron-right-C1z_GNYk.js";import"./Input-Dmhhrwdm.js";import"./search-U62jo3I0.js";import"./spin-55Bwc2iL.js";import"./error-fD8lMeVM.js";import"./withOsdkMetrics-vMcZolIP.js";import"./makeExternalStore-C0CUUcCC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
