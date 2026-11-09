import{j as r,M as s}from"./iframe-C-VQV1kk.js";import{P as p}from"./pdf-viewer-Bux45npz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B7uCxLj4.js";import"./preload-helper-DAFvkMcS.js";import"./PdfViewer-Hc-xPMI-.js";import"./index-Br3mcMRO.js";import"./BasePdfViewer-B4iz4NC8.js";import"./BasePdfViewer.module.css-z_r5HsB2.js";import"./PdfViewerAnnotationLayer-Gec8-Jd9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZ4HJM_f.js";import"./PdfViewerOutlineSidebar-BpkU53un.js";import"./PdfViewerSidebarHeader-CzbHadKQ.js";import"./useBaseUiId-CDIBpZbW.js";import"./useControlled-BadNojnw.js";import"./CompositeRoot-DxGq_URE.js";import"./CompositeItem-CceR4qkm.js";import"./ToolbarRootContext-m881A_zR.js";import"./composite-GjU-j0CL.js";import"./svgIconContainer-CJnwzucZ.js";import"./PdfViewerSearchBar-CoUB9ivJ.js";import"./chevron-up-BpWh1ibP.js";import"./chevron-down-CPUFW1cF.js";import"./cross-B26OHCdD.js";import"./PdfViewerSidebar-FEVkZotf.js";import"./index-BFFBOJxl.js";import"./index-BAOIGUAP.js";import"./index-DPEqsBnM.js";import"./PdfViewerToolbar-DR-hy47f.js";import"./Button-BLvWajsq.js";import"./chevron-right-BreCvim2.js";import"./Input-C1vD7nT2.js";import"./search-D0wtlqkl.js";import"./spin-Bo-kAT2p.js";import"./error-5dXKQyhU.js";import"./withOsdkMetrics-c7bdsNh3.js";import"./makeExternalStore-BIjV_Sjd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
