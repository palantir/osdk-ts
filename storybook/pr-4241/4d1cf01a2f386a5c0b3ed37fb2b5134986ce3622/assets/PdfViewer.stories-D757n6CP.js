import{j as r,M as s}from"./iframe-DfEkohu4.js";import{P as p}from"./pdf-viewer-lr9E6OEQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DH0Cgb5q.js";import"./preload-helper-DFhwYWPX.js";import"./PdfViewer-C9xoENb6.js";import"./index-BScMX4pI.js";import"./BasePdfViewer-BVsdd1Ch.js";import"./BasePdfViewer.module.css-ChwSeEq0.js";import"./PdfViewerAnnotationLayer-BjHk08vS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtmgUMv9.js";import"./PdfViewerOutlineSidebar-2M58pw3P.js";import"./PdfViewerSidebarHeader-BHS7lX3C.js";import"./useBaseUiId-B77SsLeT.js";import"./useControlled-BtbuRmOW.js";import"./CompositeRoot-BHbMOPqa.js";import"./CompositeItem-Efavp-9X.js";import"./ToolbarRootContext-CElxzA4r.js";import"./composite-Bps_FR72.js";import"./svgIconContainer-52IA31OT.js";import"./PdfViewerSearchBar-DJB2UIqR.js";import"./chevron-up-BLj9cjIl.js";import"./chevron-down-BPKdn-wb.js";import"./cross-BPfWpbhR.js";import"./PdfViewerSidebar-B8MbVrRU.js";import"./index-CFbhSp4o.js";import"./index-JsvBI6N5.js";import"./index-DeVDv3z2.js";import"./PdfViewerToolbar-D15abTeq.js";import"./Button-hRgK4Dbu.js";import"./chevron-right-CVvN9QKn.js";import"./Input-BPcgfpFu.js";import"./search-B6VKD1Dj.js";import"./spin-BzgASfk-.js";import"./error-CvHPy682.js";import"./withOsdkMetrics-CSBiz8Z-.js";import"./makeExternalStore-D77TIE_F.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
