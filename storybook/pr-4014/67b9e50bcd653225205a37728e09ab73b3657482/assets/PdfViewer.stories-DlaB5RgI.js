import{j as r,M as s}from"./iframe-vYDcoh77.js";import{P as p}from"./pdf-viewer-BZkG1q9V.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DBITuyeE.js";import"./preload-helper-DSINEazd.js";import"./PdfViewer-B34tvES5.js";import"./index-Dvlndinu.js";import"./BasePdfViewer-B6v5Hscs.js";import"./BasePdfViewer.module.css-ju13hvuq.js";import"./PdfViewerAnnotationLayer-BwNzKq95.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-z87smcLI.js";import"./PdfViewerOutlineSidebar-BFQEUmek.js";import"./PdfViewerSidebarHeader-Dw_SWA4U.js";import"./useBaseUiId-D0wGlEuT.js";import"./useControlled-9JxLuZTe.js";import"./CompositeRoot-Diwji8kf.js";import"./CompositeItem-tKjm3ITX.js";import"./ToolbarRootContext-DC4Rn718.js";import"./composite-CbGeFR41.js";import"./svgIconContainer-DRRBBWTo.js";import"./PdfViewerSearchBar-BhA4AHTd.js";import"./chevron-up-DxnjXjNM.js";import"./chevron-down-DE4Yil-_.js";import"./cross-Bh3JhpLG.js";import"./PdfViewerSidebar-BqD75WvP.js";import"./index-C4jC_mo-.js";import"./index-CnEHE-8v.js";import"./index-k5xDOMrk.js";import"./PdfViewerToolbar-Ce9jY0Hr.js";import"./Button-C4utuT7d.js";import"./chevron-right-CwRGEJmI.js";import"./Input-D4hoKYSh.js";import"./search-BbY6TLBc.js";import"./spin-Dv9L2sIe.js";import"./error-BQSdaUYK.js";import"./withOsdkMetrics-o2mYvA2y.js";import"./makeExternalStore-C5vRMRFb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
