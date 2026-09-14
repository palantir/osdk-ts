import{j as r,M as s}from"./iframe-DcH5xezC.js";import{P as p}from"./pdf-viewer-C-sFqFWO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-G6-8Fv-C.js";import"./preload-helper-zu47KBbI.js";import"./PdfViewer-Cf1X6fuU.js";import"./index-DbAD30nX.js";import"./BasePdfViewer-oB3WEdFu.js";import"./BasePdfViewer.module.css-BAWBwnz6.js";import"./PdfViewerAnnotationLayer-BOqkFX6W.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BguQtY9T.js";import"./PdfViewerOutlineSidebar-DleBvO0z.js";import"./PdfViewerSidebarHeader-BMA9QNQv.js";import"./useBaseUiId-Bbtq32g0.js";import"./useControlled-BYauL-0P.js";import"./CompositeRoot-BW1y_slJ.js";import"./CompositeItem-D4A9PZVo.js";import"./ToolbarRootContext-DDNTKhTz.js";import"./composite-DA4kpS88.js";import"./svgIconContainer-B5leceMR.js";import"./PdfViewerSearchBar-BPs86lFH.js";import"./chevron-up-BbhsIX5q.js";import"./chevron-down-cNoDE_3k.js";import"./cross-Chd2V34f.js";import"./PdfViewerSidebar-Br65ugfX.js";import"./index-C7e3Vf0D.js";import"./index-DRxO555y.js";import"./index-B91Y8CCx.js";import"./PdfViewerToolbar-h-YUPV_P.js";import"./Button-DWi0EVGU.js";import"./chevron-right-DKDjo4jC.js";import"./Input-CHJLRFkf.js";import"./search-BF1ckEWB.js";import"./spin-CauwYK_s.js";import"./error-BKi4y-Uw.js";import"./withOsdkMetrics-BohsC0KD.js";import"./makeExternalStore-DyQTnfpK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
