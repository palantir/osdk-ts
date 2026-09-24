import{j as r,M as s}from"./iframe-CuaBTThM.js";import{P as p}from"./pdf-viewer-Cq9Xs4TH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2hSzyiGC.js";import"./preload-helper-BgQMGQD9.js";import"./PdfViewer-eSe7gHo7.js";import"./index-GgZf0ymo.js";import"./BasePdfViewer-DfwHkEF9.js";import"./BasePdfViewer.module.css-Bs1_-wzY.js";import"./PdfViewerAnnotationLayer-DAeIpwhk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B5kGRosY.js";import"./PdfViewerOutlineSidebar-6EGN9EY4.js";import"./PdfViewerSidebarHeader-DwKwM0YF.js";import"./useBaseUiId-BS0XPI08.js";import"./useControlled-BV5LNAXf.js";import"./CompositeRoot-B9Nlhs0j.js";import"./CompositeItem-BGC4JuuI.js";import"./ToolbarRootContext-ChhVj2PO.js";import"./composite-CR2xOePv.js";import"./svgIconContainer-CzPEr09G.js";import"./PdfViewerSearchBar-Cf7dUP8P.js";import"./chevron-up-Biv5NG56.js";import"./chevron-down-Bk4mo7mA.js";import"./cross-CR1o8CWA.js";import"./PdfViewerSidebar-C3csWrcY.js";import"./index-BsMXAZnQ.js";import"./index-oUfyUaR2.js";import"./index-CpY0VuZR.js";import"./PdfViewerToolbar-DU0R2RMA.js";import"./Button-CkWuBE5W.js";import"./chevron-right-DKKzntvz.js";import"./Input-CPr8OQD6.js";import"./search-D87DQ5KE.js";import"./spin-BrAioLZI.js";import"./error-B4mawlQh.js";import"./withOsdkMetrics-DEQltQtw.js";import"./makeExternalStore-pp23vOCb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
