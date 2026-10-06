import{j as r,M as s}from"./iframe-DWfCOAQu.js";import{P as p}from"./pdf-viewer-B6mQjCM7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CSsXoIfZ.js";import"./preload-helper-AetNKwh5.js";import"./PdfViewer-DhnMcl_j.js";import"./index-CqJhMuS2.js";import"./BasePdfViewer-BaiYi9Ty.js";import"./BasePdfViewer.module.css-C00YAJTD.js";import"./PdfViewerAnnotationLayer-DELfqMcm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C41-tJtF.js";import"./PdfViewerOutlineSidebar-CE1K6Ems.js";import"./PdfViewerSidebarHeader-BbmDx8Hr.js";import"./useBaseUiId-BKma_f4b.js";import"./useControlled-CnSP5Uy7.js";import"./CompositeRoot-D_E17u2k.js";import"./CompositeItem-CfFTNcKF.js";import"./ToolbarRootContext-BnN-yS54.js";import"./composite-DNxX4Nkb.js";import"./svgIconContainer-Q7lczhdT.js";import"./PdfViewerSearchBar-DtCQ8Nby.js";import"./chevron-up-DSNBFXpG.js";import"./chevron-down-Dt5AdPlw.js";import"./cross-B_xAvT3d.js";import"./PdfViewerSidebar-4ySsrrjj.js";import"./index-Dcv9F_CZ.js";import"./index-CrNU2B9N.js";import"./index-WpqqJaJk.js";import"./PdfViewerToolbar-4px38u0j.js";import"./Button-C6vZxzg6.js";import"./chevron-right-juAXG2n4.js";import"./Input-B5DqZdR7.js";import"./search-BgPhvmky.js";import"./spin-an9Bo5XM.js";import"./error-D0MXudnr.js";import"./withOsdkMetrics-Dn5f43wd.js";import"./makeExternalStore-CS1-iCYk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
