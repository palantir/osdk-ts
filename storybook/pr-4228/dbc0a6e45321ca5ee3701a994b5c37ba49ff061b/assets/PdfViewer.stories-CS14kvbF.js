import{j as r,M as s}from"./iframe-CQsOKhp1.js";import{P as p}from"./pdf-viewer-DkHG5fjX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DNjbz0nK.js";import"./preload-helper-QCVrcnhn.js";import"./PdfViewer-B07LZOwN.js";import"./index-Cfn5HHSj.js";import"./BasePdfViewer-CUHIBBVw.js";import"./BasePdfViewer.module.css-sd2aRnZn.js";import"./PdfViewerAnnotationLayer-DknE52YB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BVp4ca7B.js";import"./PdfViewerOutlineSidebar-BQL714h1.js";import"./PdfViewerSidebarHeader-DNYuGoIw.js";import"./useBaseUiId-D94WIrG_.js";import"./useControlled-BDZq96US.js";import"./CompositeRoot-CAScWFgu.js";import"./CompositeItem-D0ilUgR4.js";import"./ToolbarRootContext-C5qJ1QrY.js";import"./composite-blMZk3SM.js";import"./svgIconContainer-qEMrR21W.js";import"./PdfViewerSearchBar-CLcp4QtM.js";import"./chevron-up-ZkvFUe5J.js";import"./chevron-down-BU_Ll11Q.js";import"./cross-D4ZfN4mf.js";import"./PdfViewerSidebar-C5iFY6M6.js";import"./index-C1wW_rI9.js";import"./index-vi3ICmyv.js";import"./index-BeDrSC4b.js";import"./PdfViewerToolbar-ByY8eI_r.js";import"./Button-CPVt0M1Q.js";import"./chevron-right-k0xf9FS6.js";import"./Input-B-8EoJIN.js";import"./search-BBkEdcYr.js";import"./spin-BUz68z7S.js";import"./error-B_L6yULe.js";import"./withOsdkMetrics-DTL1iOoJ.js";import"./makeExternalStore-IEAykGhy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
