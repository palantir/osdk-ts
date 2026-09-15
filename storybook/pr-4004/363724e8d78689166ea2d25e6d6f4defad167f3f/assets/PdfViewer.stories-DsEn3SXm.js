import{j as r,M as s}from"./iframe-D8hMLNEt.js";import{P as p}from"./pdf-viewer-uaE58Lno.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ZscqQEPf.js";import"./preload-helper-DdG7SQNV.js";import"./PdfViewer-CTSuL2_3.js";import"./index-QDiAeGPl.js";import"./BasePdfViewer-D9QcaQd1.js";import"./BasePdfViewer.module.css-D6Ul7tc7.js";import"./PdfViewerAnnotationLayer-Brfp_g1V.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXjNWkQA.js";import"./PdfViewerOutlineSidebar-DQ37HjW8.js";import"./PdfViewerSidebarHeader-Dfqnl5WX.js";import"./useBaseUiId-O-XOb3K-.js";import"./useControlled-60YnUuGr.js";import"./CompositeRoot-BHHqFIOk.js";import"./CompositeItem-C5rE64Sx.js";import"./ToolbarRootContext-D5yv28Ry.js";import"./composite-36-nzuho.js";import"./svgIconContainer-BJNLg_qp.js";import"./PdfViewerSearchBar-CviBLSKG.js";import"./chevron-up-DI8uRfR4.js";import"./chevron-down-BOORn2QE.js";import"./cross-SP4nOs9x.js";import"./PdfViewerSidebar-ByIlNPTO.js";import"./index-CXwV2iqk.js";import"./index-D2Eij5lS.js";import"./index-B7f8WC_6.js";import"./PdfViewerToolbar-02SX06pV.js";import"./Button-C5El-Ott.js";import"./chevron-right-DFaTzKX6.js";import"./Input-DMnyIvQ_.js";import"./search-fDezn5AL.js";import"./spin-BfOQYoK0.js";import"./error-CLijhntf.js";import"./withOsdkMetrics-wAiRx6GW.js";import"./makeExternalStore-Bvnv1DDu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
