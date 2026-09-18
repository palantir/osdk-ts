import{j as r,M as s}from"./iframe-Bnq7KqyA.js";import{P as p}from"./pdf-viewer-LRi-w8g5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DZ-wNfx2.js";import"./preload-helper-B3THyb-s.js";import"./PdfViewer-CS0ngnHW.js";import"./index-Cp8jliQ7.js";import"./BasePdfViewer-BfN6qoZW.js";import"./BasePdfViewer.module.css-D2Wmnf_A.js";import"./PdfViewerAnnotationLayer-B1W7Bm2I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHZYBLYu.js";import"./PdfViewerOutlineSidebar-DZN1Ygr9.js";import"./PdfViewerSidebarHeader-Nh2JyqaA.js";import"./useBaseUiId-BLC23AR8.js";import"./useControlled-lHaiJfgn.js";import"./CompositeRoot-DASWpGLg.js";import"./CompositeItem-kZs7JwNO.js";import"./ToolbarRootContext-BytsqpZq.js";import"./composite-DHkFKHco.js";import"./svgIconContainer-v0UJxJ5s.js";import"./PdfViewerSearchBar-bntHKy0H.js";import"./chevron-up-DJTnrM_I.js";import"./chevron-down-Der9zcUh.js";import"./cross-CZ44W-gs.js";import"./PdfViewerSidebar-BMby3dNf.js";import"./index-CcX-LmS8.js";import"./index-BjxSMAWD.js";import"./index-CAaYrkDS.js";import"./PdfViewerToolbar-FyXRktzT.js";import"./Button-DTZ1WQtp.js";import"./chevron-right-BLv7ktgn.js";import"./Input-DqyWCSM_.js";import"./search-BWQsUNEv.js";import"./spin-DUp3-osU.js";import"./error-CzhS-DQY.js";import"./withOsdkMetrics-NPZms2--.js";import"./makeExternalStore-0aoYVRXh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
