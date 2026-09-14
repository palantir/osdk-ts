import{j as r,M as s}from"./iframe-8JOFoP6w.js";import{P as p}from"./pdf-viewer-Cwa8g91i.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D0R0KhQJ.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BeKVTQZs.js";import"./index-DVXlafOG.js";import"./BasePdfViewer-ti95Ct55.js";import"./BasePdfViewer.module.css-CZUgV9p9.js";import"./PdfViewerAnnotationLayer-BbXjcZmi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BB5kq3gn.js";import"./PdfViewerOutlineSidebar-BocCCyKe.js";import"./PdfViewerSidebarHeader-yxRZ_I3e.js";import"./useBaseUiId-DJOFV3yl.js";import"./useControlled-EfqR38x7.js";import"./CompositeRoot-BzOoRJCF.js";import"./CompositeItem-DOhO0oM7.js";import"./ToolbarRootContext-5xRdL1EJ.js";import"./composite-Dacbrp7D.js";import"./svgIconContainer-Bc52btQW.js";import"./PdfViewerSearchBar-DDmO4f0k.js";import"./chevron-up-DljBenA-.js";import"./chevron-down-dUDP5SOr.js";import"./cross-Ba_aocLO.js";import"./PdfViewerSidebar-Drs5xMFz.js";import"./index-DTTaRHwW.js";import"./index-DABUx9II.js";import"./index-DIPLjPoi.js";import"./PdfViewerToolbar-VIdd5J88.js";import"./Button-BowFr5Gg.js";import"./chevron-right-7-3_T6c2.js";import"./Input-B80vLCMJ.js";import"./search-ld6lzdhI.js";import"./spin-CtXnK9Wx.js";import"./error-BLfUwIjQ.js";import"./withOsdkMetrics-DErVVM0k.js";import"./makeExternalStore-ZHAkzHUN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
