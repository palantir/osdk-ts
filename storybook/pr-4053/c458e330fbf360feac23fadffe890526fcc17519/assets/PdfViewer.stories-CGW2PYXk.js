import{j as r,M as s}from"./iframe-C1CKZi3d.js";import{P as p}from"./pdf-viewer-DG-PQuSx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BOKxrWgp.js";import"./preload-helper-CjKKPLuI.js";import"./PdfViewer-DnxF-Dcx.js";import"./index-22zkYmfP.js";import"./BasePdfViewer-DoB31MAY.js";import"./BasePdfViewer.module.css-BvGSZ-H-.js";import"./PdfViewerAnnotationLayer-pNYFtUG6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dt_uj0Kj.js";import"./PdfViewerOutlineSidebar-DwtEuARu.js";import"./PdfViewerSidebarHeader-CVexGIen.js";import"./useBaseUiId-kwR7401f.js";import"./useControlled-DsloswUn.js";import"./CompositeRoot-DOe-YGFq.js";import"./CompositeItem-D6jDCgAH.js";import"./ToolbarRootContext-DaCQoKRW.js";import"./composite-BHop2ulG.js";import"./svgIconContainer-5vjXCpW3.js";import"./PdfViewerSearchBar-Czx_n9c1.js";import"./chevron-up-Cr-0mNNf.js";import"./chevron-down-x4h-9kMe.js";import"./cross-DgfaXAP1.js";import"./PdfViewerSidebar-DW71B8b7.js";import"./index-Bxl9BKgt.js";import"./index-BaUESoup.js";import"./index-TnDt-8d7.js";import"./PdfViewerToolbar-D-FRRRMJ.js";import"./Button-C8GCJke3.js";import"./chevron-right-DweMCb-H.js";import"./Input-B9v9dpXG.js";import"./search-Crhz7pqe.js";import"./spin-C1Hy8Eg-.js";import"./error-CvIXlX6i.js";import"./withOsdkMetrics-DM8OHQYr.js";import"./makeExternalStore-B-NF9qcV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
