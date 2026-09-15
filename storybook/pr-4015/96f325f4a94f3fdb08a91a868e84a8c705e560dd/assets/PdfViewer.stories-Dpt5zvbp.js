import{j as r,M as s}from"./iframe-Dv4QQ6Y4.js";import{P as p}from"./pdf-viewer-t6ixhgSo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ECKROP3K.js";import"./preload-helper-BZeo2aa_.js";import"./PdfViewer-C17OaySL.js";import"./index-Bo5vUrye.js";import"./BasePdfViewer-CE4s1jrW.js";import"./BasePdfViewer.module.css-B1gqsE3z.js";import"./PdfViewerAnnotationLayer-CWl3J772.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DxgcQVnT.js";import"./PdfViewerOutlineSidebar-CXZ7i9Hy.js";import"./PdfViewerSidebarHeader-B3dgj-C8.js";import"./useBaseUiId-DPM9QPEL.js";import"./useControlled-BcGMXD3D.js";import"./CompositeRoot-V7t5avHu.js";import"./CompositeItem-b4hZwQ2E.js";import"./ToolbarRootContext-Blue4JH4.js";import"./composite-D2e8WeVr.js";import"./svgIconContainer-De6SA4Dr.js";import"./PdfViewerSearchBar-CYe0-EEm.js";import"./chevron-up-S7OuVv0m.js";import"./chevron-down-XPf4kqix.js";import"./cross-CTXbroJK.js";import"./PdfViewerSidebar-B4AGaxry.js";import"./index-X99WJuZn.js";import"./index-D7zPEcZE.js";import"./index-wUCDkndP.js";import"./PdfViewerToolbar-3l7EisOD.js";import"./Button-B_X3_bQA.js";import"./chevron-right-BEK8PyQr.js";import"./Input-DTNwj_yO.js";import"./search-CWgR1vVP.js";import"./spin-BFd6LcUB.js";import"./error-CMA_8Zv0.js";import"./withOsdkMetrics-CfzcCH1M.js";import"./makeExternalStore-Bg3zd0w-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
