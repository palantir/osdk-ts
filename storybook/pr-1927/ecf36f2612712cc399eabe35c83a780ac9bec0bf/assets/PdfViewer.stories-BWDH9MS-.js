import{j as r,M as s}from"./iframe-B2Hbgk_7.js";import{P as p}from"./pdf-viewer-DJ9S5lmX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CqxxFHvb.js";import"./preload-helper-BIOghnjg.js";import"./PdfViewer-On78lkWI.js";import"./index-DrosstMD.js";import"./BasePdfViewer-D_CHGVIS.js";import"./BasePdfViewer.module.css-CllgP0qY.js";import"./PdfViewerAnnotationLayer-BlAQPTdX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-bvfIEKP9.js";import"./PdfViewerOutlineSidebar-enChYaYk.js";import"./PdfViewerSidebarHeader-Bgv4hXid.js";import"./useBaseUiId-El1KPGB5.js";import"./useControlled-Y-hNBLuR.js";import"./CompositeRoot-DHn6zOC7.js";import"./CompositeItem-CUZ4C8IA.js";import"./ToolbarRootContext-deiGRCW1.js";import"./composite-C00UUeG4.js";import"./svgIconContainer-kTH1S9JE.js";import"./PdfViewerSearchBar-D-NNGDv_.js";import"./chevron-up-DsndQemZ.js";import"./chevron-down-BIdOqTL3.js";import"./cross-CMOlEEKU.js";import"./PdfViewerSidebar-DRTcNuRW.js";import"./index-BZMUxiku.js";import"./index-BElQuRwB.js";import"./index-y9S8xmis.js";import"./PdfViewerToolbar-Dw0h7PHR.js";import"./Button-ChD0uv2M.js";import"./chevron-right-DgG2S97C.js";import"./Input-C7VTBgbc.js";import"./search-Dge6vq_P.js";import"./spin-gYayzxRQ.js";import"./error-CG38qSaD.js";import"./withOsdkMetrics-Cum7Zc0o.js";import"./makeExternalStore-BIZDH2fs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
