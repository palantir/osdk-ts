import{j as r,M as s}from"./iframe-5sgXXUq2.js";import{P as p}from"./pdf-viewer-CqpKQsQa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DRgQ91Ug.js";import"./preload-helper-Cbn9zcHA.js";import"./PdfViewer-D5Acy3Za.js";import"./index-CzwNxfu7.js";import"./BasePdfViewer-DPGJTcv9.js";import"./BasePdfViewer.module.css-D3EB3-U-.js";import"./PdfViewerAnnotationLayer-DUL1zWZl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQNUF0a1.js";import"./PdfViewerOutlineSidebar-Ce54Sqpa.js";import"./PdfViewerSidebarHeader-w_aHznlC.js";import"./useBaseUiId-DG_QbP_U.js";import"./useControlled-siu4g8xe.js";import"./CompositeRoot-CNmt4m1i.js";import"./CompositeItem-CIAR7LV4.js";import"./ToolbarRootContext-HX5a3LbS.js";import"./composite-Ine8e3tf.js";import"./svgIconContainer-6O_QyJta.js";import"./PdfViewerSearchBar-DBT_RE-1.js";import"./chevron-up-BlsyuAls.js";import"./chevron-down-B4APaT5X.js";import"./cross-Dl1YYoqq.js";import"./PdfViewerSidebar-D3z2WcO0.js";import"./index-BUovi2pL.js";import"./index-C3HPrqRk.js";import"./index-Dnj1V73h.js";import"./PdfViewerToolbar-DHFfuDJI.js";import"./Button-71PqqjpD.js";import"./chevron-right-sTMCiits.js";import"./Input-CwUkFVhs.js";import"./search-BYA2jSn3.js";import"./spin-DmVIF2yK.js";import"./error-CIAmmsFo.js";import"./withOsdkMetrics-Dp93P8HI.js";import"./makeExternalStore-D7x2N1Sq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
