import{j as r,M as s}from"./iframe-vYbyM6ZV.js";import{P as p}from"./pdf-viewer-19m2KFBK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cvvx2XCr.js";import"./preload-helper-tlI1dOrD.js";import"./PdfViewer-CXI-SwHR.js";import"./index-MNGJ9mHV.js";import"./BasePdfViewer-D22QNC4v.js";import"./BasePdfViewer.module.css-bgWNX4FG.js";import"./PdfViewerAnnotationLayer-D59sdRvU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-PP9LOE7u.js";import"./PdfViewerOutlineSidebar-DExXphMg.js";import"./PdfViewerSidebarHeader-CiAYEvBj.js";import"./useBaseUiId-ByptStcX.js";import"./useControlled-D5IPizVc.js";import"./CompositeRoot-dbaIZ2L7.js";import"./CompositeItem-D-60Q45b.js";import"./ToolbarRootContext-0aJ-Z7Lw.js";import"./composite-DaPRapKm.js";import"./svgIconContainer-DfARiMaj.js";import"./PdfViewerSearchBar-CrGU-Otd.js";import"./chevron-up-3Jv4vGQo.js";import"./chevron-down-CCDvggT2.js";import"./cross-BEbCovKj.js";import"./PdfViewerSidebar-DJUkeIlu.js";import"./index-BdDLYcYB.js";import"./index-D1tTu4S3.js";import"./index-CFPLyZ8s.js";import"./PdfViewerToolbar-DER3FCSi.js";import"./Button-CkPI_2po.js";import"./chevron-right-rXA-ZcpZ.js";import"./Input-B1kKyDDu.js";import"./search-Ci6nyrFb.js";import"./spin-ahPxpKP6.js";import"./error-bzzwZ2XW.js";import"./withOsdkMetrics-BX5YNskQ.js";import"./makeExternalStore-CEiL8mSF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
