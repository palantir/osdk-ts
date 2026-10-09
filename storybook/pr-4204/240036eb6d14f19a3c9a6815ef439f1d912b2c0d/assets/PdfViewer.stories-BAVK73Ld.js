import{j as r,M as s}from"./iframe-C2bn1_9y.js";import{P as p}from"./pdf-viewer-BSpYcHrC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CT5IfBvR.js";import"./preload-helper-BKCOmGZc.js";import"./PdfViewer-DCktXUvI.js";import"./index-Rse0ui84.js";import"./BasePdfViewer-B1TsbXnu.js";import"./BasePdfViewer.module.css-4ovSVSd-.js";import"./PdfViewerAnnotationLayer-CmUxImmV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBl0OMd0.js";import"./PdfViewerOutlineSidebar-26x_g9s0.js";import"./PdfViewerSidebarHeader-Dc70f5BE.js";import"./useBaseUiId-BEW7P3cF.js";import"./useControlled-BN9CT1rQ.js";import"./CompositeRoot-Dt31koM5.js";import"./CompositeItem-Dhse_QgT.js";import"./ToolbarRootContext-C-eiR_Mr.js";import"./composite-DfH2wcee.js";import"./svgIconContainer-DPC29kub.js";import"./PdfViewerSearchBar-BjiuXv5w.js";import"./chevron-up-BILZRy9w.js";import"./chevron-down-BOQ5t9w6.js";import"./cross-D3-SLGNH.js";import"./PdfViewerSidebar-Deh3hqgQ.js";import"./index-C2JbH2_9.js";import"./index-pp8KWnVv.js";import"./index-Dvlf4PX0.js";import"./PdfViewerToolbar-O96rG5Ep.js";import"./Button-DYwf6UQE.js";import"./chevron-right-D23-KQ92.js";import"./Input-M9Th-rY9.js";import"./search-BCScHNOJ.js";import"./spin-ADNqhO95.js";import"./error-DBJpIi5X.js";import"./withOsdkMetrics-B5yrVNzh.js";import"./makeExternalStore-DeVLvyOh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
