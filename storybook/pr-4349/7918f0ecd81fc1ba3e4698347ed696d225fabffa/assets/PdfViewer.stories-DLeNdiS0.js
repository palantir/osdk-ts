import{j as r,M as s}from"./iframe-DZSjsAiP.js";import{P as p}from"./pdf-viewer-BngmPgP-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CPb4e1hU.js";import"./preload-helper-DRp4yq1n.js";import"./PdfViewer-B9Zusi2j.js";import"./index-CfG6lRDS.js";import"./BasePdfViewer-DhzbqEvI.js";import"./BasePdfViewer.module.css-_Ingd0RF.js";import"./PdfViewerAnnotationLayer-fMJucpsj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LrRzRXwd.js";import"./PdfViewerOutlineSidebar-CC5P_ieL.js";import"./PdfViewerSidebarHeader-CFOQqORC.js";import"./useBaseUiId-DqEZVBYJ.js";import"./useControlled-CW4hq1Ru.js";import"./CompositeRoot-B6oBrjAd.js";import"./CompositeItem-BdQ_Qgkw.js";import"./ToolbarRootContext-DC4x9xJZ.js";import"./composite-C_s-Ej-L.js";import"./svgIconContainer-oLZG0PXz.js";import"./PdfViewerSearchBar-CmyXdj_f.js";import"./chevron-up-C7PgrgSz.js";import"./chevron-down-Cf7GCw_E.js";import"./cross-DuxYv-Qd.js";import"./PdfViewerSidebar-DzIvLTsO.js";import"./index-ORKGFXoZ.js";import"./index-BKSH5ZIy.js";import"./index-CPoJpgxQ.js";import"./PdfViewerToolbar-0uDRotNC.js";import"./Button-DFAegWDw.js";import"./chevron-right-XR2FtT3_.js";import"./Input-D45tcUlW.js";import"./search-BIZEGKYQ.js";import"./spin-D7Z9adRP.js";import"./error-w1f9WiTY.js";import"./withOsdkMetrics-DwbEPMEH.js";import"./makeExternalStore-BvoRFHwl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
