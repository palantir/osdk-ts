import{j as r,M as s}from"./iframe-DhXfIq6R.js";import{P as p}from"./pdf-viewer-Bj1nR-fh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CIZdQUs2.js";import"./preload-helper-DatgPFZX.js";import"./PdfViewer-DDQiijiC.js";import"./index-CQ4eecZm.js";import"./BasePdfViewer-DpgzITFH.js";import"./BasePdfViewer.module.css-pwG3O24_.js";import"./PdfViewerAnnotationLayer-CHuWDC_6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BiEtaLQW.js";import"./PdfViewerOutlineSidebar-C6dEN3L1.js";import"./PdfViewerSidebarHeader-CF-9fP6p.js";import"./useBaseUiId-B3PC069q.js";import"./useControlled-3_t6o5ui.js";import"./CompositeRoot-DmcR1fWK.js";import"./CompositeItem-DvhhImuQ.js";import"./ToolbarRootContext-B9c-sG_O.js";import"./composite-CCswUWBV.js";import"./svgIconContainer-4NKQuWor.js";import"./PdfViewerSearchBar-M2o8Wa5U.js";import"./chevron-up-BOwCCtym.js";import"./chevron-down-CjJDYGij.js";import"./cross-CjebjloY.js";import"./PdfViewerSidebar-T9uZmDwR.js";import"./index-C3bckibU.js";import"./index-Hw9O_E6A.js";import"./index-BFbo8Hvm.js";import"./PdfViewerToolbar-BGQIOAut.js";import"./Button-Cy8uxh9T.js";import"./chevron-right-DKuBAtJi.js";import"./Input-BBnEWswJ.js";import"./search-Dx_Pysa4.js";import"./spin-qITDTXDP.js";import"./error-UalGv9XX.js";import"./withOsdkMetrics-DbQJKwoW.js";import"./makeExternalStore-BPGOv1IN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
