import{j as r,M as s}from"./iframe-5l1aTQWB.js";import{P as p}from"./pdf-viewer-TTCB-yud.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B05Qz0Dr.js";import"./preload-helper-CV54w-MR.js";import"./PdfViewer-Dyc236WY.js";import"./index-CabVKWfS.js";import"./BasePdfViewer-ClL9Vib3.js";import"./BasePdfViewer.module.css-lTMGXAoh.js";import"./PdfViewerAnnotationLayer-BSVaTcYu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D4_ePV4b.js";import"./PdfViewerOutlineSidebar-D4DKUyr2.js";import"./PdfViewerSidebarHeader-BNReHXHY.js";import"./useBaseUiId-D2qSGviR.js";import"./useControlled-Dv35mSy4.js";import"./CompositeRoot-CIAUHOBN.js";import"./CompositeItem-CiQq9b_9.js";import"./ToolbarRootContext-DpNaqsW8.js";import"./composite-BN-nzUC2.js";import"./svgIconContainer-DUWwpavS.js";import"./PdfViewerSearchBar-D2C2Z6ZG.js";import"./chevron-up-Cy2dHORW.js";import"./chevron-down-C-oTZ5aG.js";import"./cross-DVFwGI58.js";import"./PdfViewerSidebar-DLDwC7VZ.js";import"./index-BKm5H3zL.js";import"./index-CWUPxEVH.js";import"./index-U5dtIGUV.js";import"./PdfViewerToolbar-hor6X3Y-.js";import"./Button-BbI-ZrrT.js";import"./chevron-right-6t-earY4.js";import"./Input-DVZngs_7.js";import"./search-ocH4sH9r.js";import"./spin-8jMD_x6c.js";import"./error-Cor_ktfQ.js";import"./withOsdkMetrics-B5w28mdE.js";import"./makeExternalStore-Bp08F5QN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
