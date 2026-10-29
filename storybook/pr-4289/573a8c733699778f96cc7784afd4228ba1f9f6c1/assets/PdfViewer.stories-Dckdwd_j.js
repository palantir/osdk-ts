import{j as r,M as s}from"./iframe-DrkKxiw5.js";import{P as p}from"./pdf-viewer-CPXJo_ig.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CF-WrzNK.js";import"./preload-helper-CoexQg1D.js";import"./PdfViewer-DDfoaMpv.js";import"./index-9bu5FaWD.js";import"./BasePdfViewer-vVYzB7jr.js";import"./BasePdfViewer.module.css-Cb_Ksmd0.js";import"./PdfViewerAnnotationLayer-BXY-zCjc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DxTxP1i2.js";import"./PdfViewerOutlineSidebar-DjZncpSZ.js";import"./PdfViewerSidebarHeader-CqAdC9vJ.js";import"./useBaseUiId-NPWMEoN9.js";import"./useControlled-BCrFB87J.js";import"./CompositeRoot-WPBDk70c.js";import"./CompositeItem-C5ekTE5F.js";import"./ToolbarRootContext-C8q64USb.js";import"./composite-BHNDyYYF.js";import"./svgIconContainer-BwjWYJj_.js";import"./PdfViewerSearchBar-BmWO7NoW.js";import"./chevron-up-SZpzcDbD.js";import"./chevron-down-DsVdM_C_.js";import"./cross-CNIYbi9C.js";import"./PdfViewerSidebar-Cyq_bW3E.js";import"./index-0ErCHoJl.js";import"./index-BR2AMsRx.js";import"./index-YiUJ_53T.js";import"./PdfViewerToolbar-PW6aaF6q.js";import"./Button-CF-FMXcU.js";import"./chevron-right-BFV2pmzU.js";import"./Input-DOgtVus-.js";import"./search-D4-R-e8V.js";import"./spin-BgqxAXZw.js";import"./error-C2HVZj6I.js";import"./withOsdkMetrics-LuraraC5.js";import"./makeExternalStore-D4NtYiCX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
