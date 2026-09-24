import{j as r,M as s}from"./iframe-D4LVDAiJ.js";import{P as p}from"./pdf-viewer-DThSYFvL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DkVG-nQB.js";import"./preload-helper-BRiuw1tM.js";import"./PdfViewer-D5wz_gQ5.js";import"./index-Doq37HVC.js";import"./BasePdfViewer-BX8Yigys.js";import"./BasePdfViewer.module.css-t36dFZk-.js";import"./PdfViewerAnnotationLayer-DPjOQPoF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D1LaFT4g.js";import"./PdfViewerOutlineSidebar-BemFOhUL.js";import"./PdfViewerSidebarHeader-BzHwiGPs.js";import"./useBaseUiId-t0XnwFOX.js";import"./useControlled-BSRYlGKN.js";import"./CompositeRoot-yOf4enD8.js";import"./CompositeItem-BgdG338-.js";import"./ToolbarRootContext-VbrNfAOv.js";import"./composite-BgyxEEOk.js";import"./svgIconContainer-CKDcZSuW.js";import"./PdfViewerSearchBar-9Bhug4qD.js";import"./chevron-up-BScqMm5M.js";import"./chevron-down-DO0q0xd1.js";import"./cross-CrN1mHSM.js";import"./PdfViewerSidebar-76TD_YMk.js";import"./index-CgV2ExFN.js";import"./index-DgptZbMC.js";import"./index-9wm5pOXR.js";import"./PdfViewerToolbar-0Oh7XV9j.js";import"./Button-De22pfKg.js";import"./chevron-right-Ce8lFjSQ.js";import"./Input-Dus9QmGC.js";import"./search-BWsEyD_y.js";import"./spin-Dezj_3mJ.js";import"./error-B5872Opm.js";import"./withOsdkMetrics-ooLMpNFk.js";import"./makeExternalStore-CGuk3GA7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
