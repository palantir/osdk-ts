import{j as r,M as s}from"./iframe-qEFPpghE.js";import{P as p}from"./pdf-viewer-B0X66eUV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DD7qBC0W.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BgIyoM_j.js";import"./index-BH9ELRZv.js";import"./BasePdfViewer-BZEmWHuG.js";import"./BasePdfViewer.module.css-DBeOpZ79.js";import"./PdfViewerAnnotationLayer-5IaoH5gg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZYQcWX1.js";import"./PdfViewerOutlineSidebar-DMzySvtC.js";import"./PdfViewerSidebarHeader-BWgw7P3b.js";import"./useBaseUiId-v_A1mAU8.js";import"./useControlled-CzEkdiJb.js";import"./CompositeRoot-BvfPUWf5.js";import"./CompositeItem-HOTCeKr0.js";import"./ToolbarRootContext-mJyuSkMG.js";import"./composite-DEeYGE6i.js";import"./svgIconContainer-CQknLjCX.js";import"./PdfViewerSearchBar-Xu2C1eYE.js";import"./chevron-up-DyvoFaxc.js";import"./chevron-down-BYYCeXTI.js";import"./cross-CrQI27cl.js";import"./PdfViewerSidebar-C-jHJbiZ.js";import"./index-BoodJoCF.js";import"./index-BYmDYJlP.js";import"./index-DW-XX4vU.js";import"./PdfViewerToolbar-Cn4CgO3t.js";import"./Button--WxUXUTJ.js";import"./chevron-right-Bp_mtd9t.js";import"./Input-BablyCOK.js";import"./search-D09RX6LY.js";import"./spin-BmwZ8xUz.js";import"./error-AR1tV96Q.js";import"./withOsdkMetrics-Ch_Qi-aF.js";import"./makeExternalStore-AlhYZ7re.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
