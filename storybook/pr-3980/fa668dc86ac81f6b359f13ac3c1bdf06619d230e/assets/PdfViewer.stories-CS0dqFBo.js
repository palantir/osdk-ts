import{j as r,M as s}from"./iframe-BV--DL-R.js";import{P as p}from"./pdf-viewer-B808gYjZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CL4uL6j-.js";import"./preload-helper-BfGADaHb.js";import"./PdfViewer-ClsYoDZt.js";import"./index-CpBKC5uG.js";import"./BasePdfViewer-D3hMvRvE.js";import"./BasePdfViewer.module.css-DSc3BCOi.js";import"./PdfViewerAnnotationLayer-COXrZpa_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BogoY1DA.js";import"./PdfViewerOutlineSidebar-Bbk1-I1Z.js";import"./PdfViewerSidebarHeader-Dd4lrA5k.js";import"./useBaseUiId-rbddndRR.js";import"./useControlled-CdeR330J.js";import"./CompositeRoot-CostxhIo.js";import"./CompositeItem-CftYIfuS.js";import"./ToolbarRootContext-BKEdcjiV.js";import"./composite-CQeJ_a4C.js";import"./svgIconContainer-vnkw8afj.js";import"./PdfViewerSearchBar-D961b-x-.js";import"./chevron-up-BvTtcjbK.js";import"./chevron-down-DLz3NkpP.js";import"./cross-D8EsCuc2.js";import"./PdfViewerSidebar-B_KKaZL-.js";import"./index-BG63AOsT.js";import"./index-EXqXv7zU.js";import"./index-B1MBKIV9.js";import"./PdfViewerToolbar-CkZVltjw.js";import"./Button-D-B9BslW.js";import"./chevron-right-CmoQgFxp.js";import"./Input-CryKSl2-.js";import"./search-BMQtt1GF.js";import"./spin-2A8GpZGT.js";import"./error-CX8ETYns.js";import"./withOsdkMetrics-bx0PT80C.js";import"./makeExternalStore-CbX_-WII.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
