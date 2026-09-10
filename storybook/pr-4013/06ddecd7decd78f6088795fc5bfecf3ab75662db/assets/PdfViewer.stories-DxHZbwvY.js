import{j as r,M as s}from"./iframe-mrGpuMKA.js";import{P as p}from"./pdf-viewer-DQCMBf4k.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BoHKMDNu.js";import"./preload-helper-bDWJHmtM.js";import"./PdfViewer-Tw5eIUfh.js";import"./index-hISY08zN.js";import"./BasePdfViewer-DqbHMpPk.js";import"./BasePdfViewer.module.css-C1T4S3Xq.js";import"./PdfViewerAnnotationLayer-Bf827fsP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-solCFHzA.js";import"./PdfViewerOutlineSidebar-Bq2ks8dq.js";import"./PdfViewerSidebarHeader-DDXQfYGz.js";import"./useBaseUiId-BkHLkay-.js";import"./useControlled-Dq35lwdk.js";import"./CompositeRoot-B3NifesU.js";import"./CompositeItem-DUJu_nDn.js";import"./ToolbarRootContext-C5hM_2Bp.js";import"./composite-7erdXABz.js";import"./svgIconContainer-C-bY0sdP.js";import"./PdfViewerSearchBar-B0WfbRXn.js";import"./chevron-up-D2aPUZaL.js";import"./chevron-down-CoivH60m.js";import"./cross-DPMi-K_N.js";import"./PdfViewerSidebar-D6QePSVT.js";import"./index-OuRiGyxD.js";import"./index-DMu33fvM.js";import"./index-Bqma_fPL.js";import"./PdfViewerToolbar-iBG6DZ1v.js";import"./Button-CQDVf8SZ.js";import"./chevron-right-BzjPFbM1.js";import"./Input-B84oc61c.js";import"./search-Yrs_12vc.js";import"./spin-D0F6aTSZ.js";import"./error-DssOxS7p.js";import"./withOsdkMetrics-MvJWQIwU.js";import"./makeExternalStore-Dc6_6-hA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
