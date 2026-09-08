import{j as r,M as s}from"./iframe-CMaTw6X_.js";import{P as p}from"./pdf-viewer-Bzx2te1r.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DB92tESL.js";import"./preload-helper-YUCSvBRl.js";import"./PdfViewer-D34x-elW.js";import"./index-DcwZFFHE.js";import"./BasePdfViewer-DFcSSjkZ.js";import"./BasePdfViewer.module.css-D-pHh_Zd.js";import"./PdfViewerAnnotationLayer-CDoLlnRE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D1pbbJIA.js";import"./PdfViewerOutlineSidebar-lIfvmB14.js";import"./PdfViewerSidebarHeader-CmSP1EB2.js";import"./useBaseUiId-BQVDaT2W.js";import"./useControlled-BhIydEad.js";import"./CompositeRoot-DX7AciNN.js";import"./CompositeItem-BOjJ-dS3.js";import"./ToolbarRootContext-0tvyCtzm.js";import"./composite-CLM32H9h.js";import"./svgIconContainer-DzaaatyJ.js";import"./PdfViewerSearchBar-Cino_H5k.js";import"./chevron-up-0_d0BXvT.js";import"./chevron-down-CiliQGq8.js";import"./cross-BToySQSC.js";import"./PdfViewerSidebar-1V16d-Pj.js";import"./index-FMHsbTbl.js";import"./index-DrAoL5DS.js";import"./index-CokBQJMj.js";import"./PdfViewerToolbar-CtlShoUS.js";import"./Button-gCGWFRxS.js";import"./chevron-right-C6RtJBO_.js";import"./Input-C22UXl1f.js";import"./search-DX2tWApA.js";import"./spin-DdCVHfes.js";import"./error-QpkULiAa.js";import"./withOsdkMetrics-06-Hb-DT.js";import"./makeExternalStore-daS2Qovb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
