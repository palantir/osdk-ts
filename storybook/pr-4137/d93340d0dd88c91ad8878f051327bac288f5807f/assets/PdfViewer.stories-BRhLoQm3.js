import{j as r,M as s}from"./iframe-el7bjSAH.js";import{P as p}from"./pdf-viewer-CDl6QZsc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BJTRhjrE.js";import"./preload-helper-DLIuAVkn.js";import"./PdfViewer-CHpUZHDC.js";import"./index-DqdFzNH7.js";import"./BasePdfViewer-DggwxqjO.js";import"./BasePdfViewer.module.css-ChhUk8Lm.js";import"./PdfViewerAnnotationLayer-C9b_h0TU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChhDJjRW.js";import"./PdfViewerOutlineSidebar-dAWSz96g.js";import"./PdfViewerSidebarHeader-B0STjWoM.js";import"./useBaseUiId-BMJSE7oP.js";import"./useControlled-B75sCM7T.js";import"./CompositeRoot-BkTRdWQt.js";import"./CompositeItem-2Q_-fuaz.js";import"./ToolbarRootContext-B3AP-FE_.js";import"./composite-CNO4lqFc.js";import"./svgIconContainer-DsqZkZNx.js";import"./PdfViewerSearchBar-B8lQMKze.js";import"./chevron-up-DUc-JZ6h.js";import"./chevron-down-C0Gm8Kcu.js";import"./cross-DKrIoJp0.js";import"./PdfViewerSidebar-C7Ibmmyi.js";import"./index-BxJn0x3b.js";import"./index-C95mnJoM.js";import"./index-0oAMicpD.js";import"./PdfViewerToolbar-TaVo98Am.js";import"./Button-CzJbluPV.js";import"./chevron-right-BKMPkhOz.js";import"./Input-CL8_Xm7J.js";import"./search-BcW8-7NR.js";import"./spin-CFUwHxCS.js";import"./error-D7fY3cPV.js";import"./withOsdkMetrics-BlbIxaEE.js";import"./makeExternalStore-F3_wqthP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
