import{j as r,M as s}from"./iframe-ByUPzMo-.js";import{P as p}from"./pdf-viewer-Dh9IKT0i.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-MIktuYoU.js";import"./preload-helper-DMW2vH7D.js";import"./PdfViewer-DPzj5zJG.js";import"./index-DDBwTcU5.js";import"./BasePdfViewer-DVFilTND.js";import"./BasePdfViewer.module.css-zc8WERAh.js";import"./PdfViewerAnnotationLayer-BwGMuq-K.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BpCuTEZ9.js";import"./PdfViewerOutlineSidebar-Cj7_RHtq.js";import"./PdfViewerSidebarHeader-BxB93aQd.js";import"./useBaseUiId-uUDoNX5q.js";import"./useControlled-BkbhbtR9.js";import"./CompositeRoot-Dbj_WYpf.js";import"./CompositeItem-Cyx3uAMD.js";import"./ToolbarRootContext-D7Mh8yi7.js";import"./composite-s38ZpXCI.js";import"./svgIconContainer-BoZ4WTrV.js";import"./PdfViewerSearchBar-36E_07Aj.js";import"./chevron-up-Ds2DUwlK.js";import"./chevron-down-MpADD7bW.js";import"./cross-DJjNSarb.js";import"./PdfViewerSidebar-CD_TCONY.js";import"./index-CRwMUVe2.js";import"./index-DckN6Z75.js";import"./index-B7ZeWuUK.js";import"./PdfViewerToolbar-4lecX8cE.js";import"./Button-Psq8nKOy.js";import"./chevron-right-blsAshlY.js";import"./Input-sjbB4Aiw.js";import"./search-BAYfazpa.js";import"./spin-CUh127DI.js";import"./error-ByNBHJWq.js";import"./withOsdkMetrics-DlvIoaDP.js";import"./makeExternalStore-BA6_-t1C.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
