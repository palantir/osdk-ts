import{j as r,M as s}from"./iframe-BrWV3VGg.js";import{P as p}from"./pdf-viewer-CMiAoMgr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DlxDnMN5.js";import"./preload-helper-D6ZQDyfK.js";import"./PdfViewer-DHZvkYSY.js";import"./index-DYvdPCiw.js";import"./BasePdfViewer-jemrxH8M.js";import"./BasePdfViewer.module.css-l-VbW_Nv.js";import"./PdfViewerAnnotationLayer-BQ8TM-bf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CX6nxoMM.js";import"./PdfViewerOutlineSidebar-3Y5vqLqN.js";import"./PdfViewerSidebarHeader-BCKxjXBk.js";import"./useBaseUiId-C6P9jJC8.js";import"./useControlled-DP9gX7Yn.js";import"./CompositeRoot-CGQYcdRE.js";import"./CompositeItem-gO6CPQln.js";import"./ToolbarRootContext-C9pKuHkV.js";import"./composite-CPJHb2Y2.js";import"./svgIconContainer-BUmNfWM-.js";import"./PdfViewerSearchBar-PCpDLy8y.js";import"./chevron-up-BABUamT1.js";import"./chevron-down-hd2kSFPo.js";import"./cross-BVo6wQKR.js";import"./PdfViewerSidebar-C5Z53uuF.js";import"./index-BT_S32QN.js";import"./index-D9RcQQYw.js";import"./index-BNPYibjQ.js";import"./PdfViewerToolbar-CWGI6-5U.js";import"./Button-DQPjTYox.js";import"./chevron-right-DKrDmTQK.js";import"./Input-CDM3tu-K.js";import"./search-Bx9ioHBB.js";import"./spin-Yv9ZO4wx.js";import"./error-DAF972ng.js";import"./withOsdkMetrics-CQ4mIL1e.js";import"./makeExternalStore-mRetLKqP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
