import{j as r,M as s}from"./iframe-OjM1fGhD.js";import{P as p}from"./pdf-viewer-DUKpPOx4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bwe9Ofy5.js";import"./preload-helper-D7fi2uvl.js";import"./PdfViewer-B2rUD43C.js";import"./index-CI4sblvN.js";import"./BasePdfViewer-8KAOs56S.js";import"./BasePdfViewer.module.css-BZDP6uka.js";import"./PdfViewerAnnotationLayer-C9MpaZTv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-wpYWRFqZ.js";import"./PdfViewerOutlineSidebar-B6E5k5eW.js";import"./PdfViewerSidebarHeader-CkrDjRfr.js";import"./useBaseUiId-CUWfCekV.js";import"./useControlled-DrzgK2A0.js";import"./CompositeRoot-CQCSvNox.js";import"./CompositeItem-Ddy0SGDP.js";import"./ToolbarRootContext-zAO6OvY5.js";import"./composite-B2Qeod66.js";import"./svgIconContainer-oX_Dupxj.js";import"./PdfViewerSearchBar-doBicDlk.js";import"./chevron-up-Spox3mii.js";import"./chevron-down-7rWKu4_j.js";import"./cross-D69HQ2f-.js";import"./PdfViewerSidebar-FysGcYiF.js";import"./index-Cd3zzhVm.js";import"./index-DdpkN4AB.js";import"./index-DYYqOieW.js";import"./PdfViewerToolbar-LRx7agpW.js";import"./Button-BtiOWDEe.js";import"./chevron-right-CPTv74nZ.js";import"./Input-DeCvr9l5.js";import"./search-BhAcVZf9.js";import"./spin-BUnDfS_t.js";import"./error-q3Etsg6o.js";import"./withOsdkMetrics-DE164d5t.js";import"./makeExternalStore-C6aI4llN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
