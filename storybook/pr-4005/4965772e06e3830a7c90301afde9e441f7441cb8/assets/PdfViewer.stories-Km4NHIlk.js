import{j as r,M as s}from"./iframe-BgIqeTr7.js";import{P as p}from"./pdf-viewer-DVeOCK5z.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BD-VBjkO.js";import"./preload-helper-BbBE06U6.js";import"./PdfViewer-CIIuqxlK.js";import"./index-OeIAiwUu.js";import"./BasePdfViewer-CBi8LMND.js";import"./BasePdfViewer.module.css-WMPfsZi6.js";import"./PdfViewerAnnotationLayer-CqT9InPM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DN2w3TP1.js";import"./PdfViewerOutlineSidebar-VqTktOi9.js";import"./PdfViewerSidebarHeader-L5BWigk8.js";import"./useBaseUiId-CgOsBxCj.js";import"./useControlled-DoFIiJ6c.js";import"./CompositeRoot-mRZyL7Z6.js";import"./CompositeItem-D2E5MTZ0.js";import"./ToolbarRootContext-XHaZZ7gx.js";import"./composite-BF8O5dbv.js";import"./svgIconContainer-BtrJOEHF.js";import"./PdfViewerSearchBar-BPENPiKR.js";import"./chevron-up-CWKyRQDq.js";import"./chevron-down-CZAmY7BW.js";import"./cross-Wbc8t1qS.js";import"./PdfViewerSidebar-DMHsSwZo.js";import"./index-DA3CS0qW.js";import"./index-D9MNyfPv.js";import"./index-ef3bSd-w.js";import"./PdfViewerToolbar-B9xW4QuZ.js";import"./Button-WSqWRGZH.js";import"./chevron-right-CUVnfRCX.js";import"./Input-Ccm-R2od.js";import"./search-BF7QrwO6.js";import"./spin-C8ph8OFM.js";import"./error-DvPLPT6J.js";import"./withOsdkMetrics-D9CYPZjX.js";import"./makeExternalStore-_B_am4pH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
