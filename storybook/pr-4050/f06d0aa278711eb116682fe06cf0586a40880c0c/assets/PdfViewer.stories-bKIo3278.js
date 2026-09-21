import{j as r,M as s}from"./iframe-CFV-nnj8.js";import{P as p}from"./pdf-viewer-Dqs_NmVr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-N01mSNrB.js";import"./preload-helper-B6fyfr7c.js";import"./PdfViewer-Djvlg0bU.js";import"./index-vmaSH1sB.js";import"./BasePdfViewer-D6pwGRVP.js";import"./BasePdfViewer.module.css-BZeQunXF.js";import"./PdfViewerAnnotationLayer-6SyFmZJh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cn_7lnEy.js";import"./PdfViewerOutlineSidebar-IEPtirvS.js";import"./PdfViewerSidebarHeader-CO_ILrjp.js";import"./useBaseUiId-WVaYu2-M.js";import"./useControlled-BOSfLjyK.js";import"./CompositeRoot-MmXsgA7t.js";import"./CompositeItem-C3ap8dp1.js";import"./ToolbarRootContext-BsgEetLb.js";import"./composite-DJp6IOoD.js";import"./svgIconContainer-D_-2ttXX.js";import"./PdfViewerSearchBar-Bf2lrlnf.js";import"./chevron-up-CVMRK1Sx.js";import"./chevron-down-14_leR3A.js";import"./cross-QMVU-YJc.js";import"./PdfViewerSidebar-BzDwn3V3.js";import"./index-DsD3GjJA.js";import"./index-BjUsjKoR.js";import"./index-Dyi_6i64.js";import"./PdfViewerToolbar-CZp-P79J.js";import"./Button-B3yPaUxl.js";import"./chevron-right-CHhK0Uur.js";import"./Input-KbJwk9Nd.js";import"./search-DZmS-pfQ.js";import"./spin-DAv2U0s5.js";import"./error-CPA32RNg.js";import"./withOsdkMetrics-cGR_rgDD.js";import"./makeExternalStore-BLm3eYi3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
