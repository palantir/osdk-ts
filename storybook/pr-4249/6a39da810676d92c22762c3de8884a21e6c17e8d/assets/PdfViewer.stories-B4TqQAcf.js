import{j as r,M as s}from"./iframe-8pDs9AML.js";import{P as p}from"./pdf-viewer-CTJgsfli.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-OMaJ7237.js";import"./preload-helper-DR90AuyO.js";import"./PdfViewer-DHvcXFbx.js";import"./index-BgxF440z.js";import"./BasePdfViewer-BsUTMvt1.js";import"./BasePdfViewer.module.css-rMfAMpyB.js";import"./PdfViewerAnnotationLayer-CQlzQ9GD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Di2eLW3w.js";import"./PdfViewerOutlineSidebar-Cs-1Jx89.js";import"./PdfViewerSidebarHeader-BsKSI9Ek.js";import"./useBaseUiId-Y2Bqc82V.js";import"./useControlled-DjP6n15o.js";import"./CompositeRoot-BMRtaivU.js";import"./CompositeItem-B2g2yaWL.js";import"./ToolbarRootContext-BlIr8usp.js";import"./composite-DXO-Xhg7.js";import"./svgIconContainer-BOUHKa6M.js";import"./PdfViewerSearchBar-Deo_a6Rh.js";import"./chevron-up-wQgVC5xx.js";import"./chevron-down-Be7tG24a.js";import"./cross-FlHZ6uvS.js";import"./PdfViewerSidebar-C1yPPSjO.js";import"./index-BXm3f9eW.js";import"./index-gTFJVjv-.js";import"./index-DoNWJbFe.js";import"./PdfViewerToolbar-6YOyLPo2.js";import"./Button-DIdY9EdX.js";import"./chevron-right-C8-zuL6J.js";import"./Input-ClAW_50X.js";import"./search-D5muLECQ.js";import"./spin-CIi5TUav.js";import"./error-HBrPbPXF.js";import"./withOsdkMetrics-QxEi4RWI.js";import"./makeExternalStore-B6vEKUuF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
