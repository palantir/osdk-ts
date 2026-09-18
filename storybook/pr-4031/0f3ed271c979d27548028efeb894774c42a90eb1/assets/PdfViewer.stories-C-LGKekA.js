import{j as r,M as s}from"./iframe-BHPDqCFq.js";import{P as p}from"./pdf-viewer-CrRIqKFh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DwGpyTaP.js";import"./preload-helper-C8dKT6c-.js";import"./PdfViewer-BHQ8kECP.js";import"./index-Cxj4mfK8.js";import"./BasePdfViewer-8RMFhoGC.js";import"./BasePdfViewer.module.css-BVE26RBQ.js";import"./PdfViewerAnnotationLayer-DMLAbux_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B-U0gEZr.js";import"./PdfViewerOutlineSidebar-BSc81oot.js";import"./PdfViewerSidebarHeader-Cv2z6dVX.js";import"./useBaseUiId-CT4jboOp.js";import"./useControlled-BLanU1Cz.js";import"./CompositeRoot-C5DOsv6-.js";import"./CompositeItem-BRFTKS6k.js";import"./ToolbarRootContext-BieBN5Ud.js";import"./composite-BIm8cUf1.js";import"./svgIconContainer-COam26m3.js";import"./PdfViewerSearchBar-DPjDqCqM.js";import"./chevron-up-CforyBWp.js";import"./chevron-down-X9qExTnz.js";import"./cross-BHJaWm-f.js";import"./PdfViewerSidebar-C_e6J6NI.js";import"./index-DGoUYVsX.js";import"./index-DJH664Hp.js";import"./index-JmqbywhK.js";import"./PdfViewerToolbar-BUGK-BpT.js";import"./Button-D6w0YH3F.js";import"./chevron-right-Dl1ftTol.js";import"./Input-BmuqUAJQ.js";import"./search-ROafySNP.js";import"./spin-DoyCrZkW.js";import"./error-Wz7v_t0s.js";import"./withOsdkMetrics-Ben-Mf35.js";import"./makeExternalStore-CIZbbQ8M.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
