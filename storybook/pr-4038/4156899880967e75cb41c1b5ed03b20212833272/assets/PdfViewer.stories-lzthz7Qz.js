import{j as r,M as s}from"./iframe-WliM3Ewa.js";import{P as p}from"./pdf-viewer-1DMDLqhM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-rrp9S6M6.js";import"./preload-helper-DEyC4ekG.js";import"./PdfViewer-9nZJKnDm.js";import"./index-CnrTWWrO.js";import"./BasePdfViewer-C4iwGF_M.js";import"./BasePdfViewer.module.css-DKq-DbcG.js";import"./PdfViewerAnnotationLayer-z8TjVrHG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-gomsxF-j.js";import"./PdfViewerOutlineSidebar-VsyllnM4.js";import"./PdfViewerSidebarHeader-D7zIz5B_.js";import"./useBaseUiId-CUkyUtdd.js";import"./useControlled-DNr35Z2-.js";import"./CompositeRoot-C29YIfoq.js";import"./CompositeItem-PZY5TD1e.js";import"./ToolbarRootContext-CDiW3Jhi.js";import"./composite-ByE6f88x.js";import"./svgIconContainer-eh8pO9ol.js";import"./PdfViewerSearchBar-CLwZ6jav.js";import"./chevron-up-DFgRpDyU.js";import"./chevron-down-D3GW0vbF.js";import"./cross-B523-3pv.js";import"./PdfViewerSidebar-BQ974VP0.js";import"./index-DZuQrbeK.js";import"./index-NRd0AnHS.js";import"./index-DLdNuuvj.js";import"./PdfViewerToolbar-fLROX_yy.js";import"./Button-Bajbsf8L.js";import"./chevron-right-Cyh5JFZY.js";import"./Input-CQ-UP_L4.js";import"./search-DOR9iHB9.js";import"./spin-BZ71ai4s.js";import"./error-CRmqFCAs.js";import"./withOsdkMetrics-BMKdbhzI.js";import"./makeExternalStore-y3QUXpj7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
