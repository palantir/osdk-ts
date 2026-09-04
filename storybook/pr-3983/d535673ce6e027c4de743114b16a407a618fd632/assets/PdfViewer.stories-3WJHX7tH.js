import{j as r,M as s}from"./iframe-DXaJ13QU.js";import{P as p}from"./pdf-viewer-ClL3mR5i.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-MXjMGD9e.js";import"./preload-helper-BroFP_lE.js";import"./PdfViewer-t6uwNgYn.js";import"./index-DZFr4IUe.js";import"./BasePdfViewer-CI4HHZxp.js";import"./BasePdfViewer.module.css-DLWSxPVj.js";import"./PdfViewerAnnotationLayer-ChaLTURE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BcwBL4Qa.js";import"./PdfViewerOutlineSidebar-CcfELnMJ.js";import"./PdfViewerSidebarHeader-DzT2MuFm.js";import"./useBaseUiId-rib_Fnun.js";import"./useControlled-DEmQR29N.js";import"./CompositeRoot-C6G_y4Q3.js";import"./CompositeItem-UfCVn6ij.js";import"./ToolbarRootContext-Cz-twL-R.js";import"./composite-BAacjU3A.js";import"./svgIconContainer-Cok1WmRf.js";import"./PdfViewerSearchBar-BKwYNrQK.js";import"./chevron-up-Bqe3JmcU.js";import"./chevron-down-BggCntkx.js";import"./cross-B9pf8KCz.js";import"./PdfViewerSidebar-ChUtFhFl.js";import"./index-BGAyhcr2.js";import"./index-DRifIPLC.js";import"./index-Dw57ybl-.js";import"./PdfViewerToolbar-CutXJKWI.js";import"./Button-DN8eJVF0.js";import"./chevron-right-BkUmwsq4.js";import"./Input-5PPkwes4.js";import"./search-BhfCLASk.js";import"./spin-E59hgApP.js";import"./error-Cm275nno.js";import"./withOsdkMetrics-hFb6ubqE.js";import"./makeExternalStore-YZAYYspW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
