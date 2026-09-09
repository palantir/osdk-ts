import{j as r,M as s}from"./iframe-CiHlxZKU.js";import{P as p}from"./pdf-viewer-BjT2ITTr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CwAd7n-O.js";import"./preload-helper-3-eHC6Oh.js";import"./PdfViewer-CJzCajvT.js";import"./index-DVK1qKBA.js";import"./BasePdfViewer-BU2dmLJ2.js";import"./BasePdfViewer.module.css-kqLMgZJX.js";import"./PdfViewerAnnotationLayer-DX8XdAnd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DX7UeHhK.js";import"./PdfViewerOutlineSidebar-NeeuJDfB.js";import"./PdfViewerSidebarHeader-DQspvcnu.js";import"./useBaseUiId-CYLsHClR.js";import"./useControlled-CSOYJAwm.js";import"./CompositeRoot-C3MOOs5L.js";import"./CompositeItem-BgmQxoYD.js";import"./ToolbarRootContext-COwKCexa.js";import"./composite-BmdkrJdi.js";import"./svgIconContainer-B7oTlJNo.js";import"./PdfViewerSearchBar-DuEvv1ap.js";import"./chevron-up-B8Pmsayn.js";import"./chevron-down-7F-_gONV.js";import"./cross-DnkNQUkT.js";import"./PdfViewerSidebar-DalTnHaB.js";import"./index-GfXRF7Uq.js";import"./index-DX1yHJ7e.js";import"./index-BpiTLOmA.js";import"./PdfViewerToolbar-DQSF5zfp.js";import"./Button-79zi9HD3.js";import"./chevron-right-DA9YSdpo.js";import"./Input-WrV6nsUm.js";import"./search-DGzvsSxy.js";import"./spin-Bia6FSQE.js";import"./error-BS001LJB.js";import"./withOsdkMetrics-DOs-_cRC.js";import"./makeExternalStore-BMposTlq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
