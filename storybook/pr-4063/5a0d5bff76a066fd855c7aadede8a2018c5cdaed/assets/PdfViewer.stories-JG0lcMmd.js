import{j as r,M as s}from"./iframe-BtV5Bfbi.js";import{P as p}from"./pdf-viewer-DVH1ZTiC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DuGUyZMW.js";import"./preload-helper-BaD02CxS.js";import"./PdfViewer-Nlojp2K-.js";import"./index-DAzHyxws.js";import"./BasePdfViewer-BmXBQYVS.js";import"./BasePdfViewer.module.css-k47wRbMd.js";import"./PdfViewerAnnotationLayer-DxU-NDth.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChEpwK2V.js";import"./PdfViewerOutlineSidebar-CXsvtDyV.js";import"./PdfViewerSidebarHeader-169wtg68.js";import"./useBaseUiId-BC3a2pkv.js";import"./useControlled-DlTCUtzh.js";import"./CompositeRoot-Bz64cv1t.js";import"./CompositeItem-Byxrj2vM.js";import"./ToolbarRootContext-BUFM8kOj.js";import"./composite-C3xTmSSO.js";import"./svgIconContainer-CFzNfVqM.js";import"./PdfViewerSearchBar-C47k6huh.js";import"./chevron-up-Dr62dO2v.js";import"./chevron-down-CdxAFrGc.js";import"./cross-BHH5GCet.js";import"./PdfViewerSidebar-BLgO0FLH.js";import"./index-C-hRh0T_.js";import"./index-D79nVaz6.js";import"./index-CDtXf1D5.js";import"./PdfViewerToolbar-BxUqkIXo.js";import"./Button-CysZ3JPI.js";import"./chevron-right-CugkhF1w.js";import"./Input-C3DTMAEb.js";import"./search-mBeXzQE2.js";import"./spin-ChQSv9nc.js";import"./error-h7XYysQz.js";import"./withOsdkMetrics-jSZ_Ki0a.js";import"./makeExternalStore-1ZTuUud2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
