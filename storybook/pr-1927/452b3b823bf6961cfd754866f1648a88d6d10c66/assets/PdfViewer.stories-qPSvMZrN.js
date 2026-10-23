import{j as r,M as s}from"./iframe-BpdL9i9r.js";import{P as p}from"./pdf-viewer-Bz-Sk36U.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BNdL7YqZ.js";import"./preload-helper-BGgpRwmn.js";import"./PdfViewer-CeCggEk1.js";import"./index-BOBmNIkf.js";import"./BasePdfViewer-BREg5Z2u.js";import"./BasePdfViewer.module.css-DRmUqfrO.js";import"./PdfViewerAnnotationLayer-BOTg22Yn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDO7Vxhx.js";import"./PdfViewerOutlineSidebar-OdNDLFxx.js";import"./PdfViewerSidebarHeader-CcvRxM9n.js";import"./useBaseUiId-DRf0avcO.js";import"./useControlled-QZyhjlC2.js";import"./CompositeRoot-Cb_mm6by.js";import"./CompositeItem-DWqZMJZf.js";import"./ToolbarRootContext-B3r4TQUK.js";import"./composite-BFfsCZEe.js";import"./svgIconContainer-BYUaz7v8.js";import"./PdfViewerSearchBar-B8Snljau.js";import"./chevron-up-r3u3JX8A.js";import"./chevron-down-CmBeGku0.js";import"./cross-B_FitAUD.js";import"./PdfViewerSidebar-Bb0_Wf1Y.js";import"./index-CQPYqNM-.js";import"./index-Dh6vk7Lg.js";import"./index-CAZS1ZmE.js";import"./PdfViewerToolbar-16xflOlp.js";import"./Button-BysZxDt3.js";import"./chevron-right-B1AKeJm8.js";import"./Input-yfdnK4QX.js";import"./search-C5Bpx8xV.js";import"./spin-V55Ur53u.js";import"./error-BZRmZs4O.js";import"./withOsdkMetrics-DoqsagcU.js";import"./makeExternalStore-BVQoDSnU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
