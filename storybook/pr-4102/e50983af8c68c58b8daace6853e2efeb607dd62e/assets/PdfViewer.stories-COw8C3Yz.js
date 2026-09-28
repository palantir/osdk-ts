import{j as r,M as s}from"./iframe-CdZ1-8VD.js";import{P as p}from"./pdf-viewer-C87Msz3t.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B_bdE4xf.js";import"./preload-helper-BfsuwAVK.js";import"./PdfViewer-CUPA3-pm.js";import"./index-DyOp5UTf.js";import"./BasePdfViewer-C2S_gOBr.js";import"./BasePdfViewer.module.css-CvLsMGkX.js";import"./PdfViewerAnnotationLayer-YR5aV8KB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B7tUntpD.js";import"./PdfViewerOutlineSidebar-Cx4_wXhK.js";import"./PdfViewerSidebarHeader-B-kYrRAB.js";import"./useBaseUiId-Bn-Ngw1_.js";import"./useControlled-U2uKb9nR.js";import"./CompositeRoot-B43KT5d8.js";import"./CompositeItem-yiTSbTdQ.js";import"./ToolbarRootContext-2AFAS280.js";import"./composite-DXQ2UI8x.js";import"./svgIconContainer-BzSPbIbT.js";import"./PdfViewerSearchBar-B9GWMyxZ.js";import"./chevron-up-D-YBkt24.js";import"./chevron-down-ElNoZV5X.js";import"./cross-D0Gcop_x.js";import"./PdfViewerSidebar-BSjc_OPz.js";import"./index-BDrIE1q3.js";import"./index-B0esJxNQ.js";import"./index-DVUFOk1V.js";import"./PdfViewerToolbar-mxBKeIOn.js";import"./Button-Bt5t_54D.js";import"./chevron-right-CzYea01Z.js";import"./Input-KSBtG81T.js";import"./search-BZxjL_1A.js";import"./spin-C69F6usU.js";import"./error-C5_AkzgF.js";import"./withOsdkMetrics-Bjc_co0T.js";import"./makeExternalStore-xgvF_Gz5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
