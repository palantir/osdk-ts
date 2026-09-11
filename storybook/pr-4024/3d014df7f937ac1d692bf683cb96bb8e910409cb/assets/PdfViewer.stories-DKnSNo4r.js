import{j as r,M as s}from"./iframe-DsGELu4T.js";import{P as p}from"./pdf-viewer-EgV5D_76.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CkrrQkxJ.js";import"./preload-helper-XA-VDU9h.js";import"./PdfViewer-sy0ZazNw.js";import"./index-FibZOxqI.js";import"./BasePdfViewer-C4ISLBZT.js";import"./BasePdfViewer.module.css-UJmoMU0s.js";import"./PdfViewerAnnotationLayer-B8jPH9aH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BodKIVAf.js";import"./PdfViewerOutlineSidebar-BO99AESQ.js";import"./PdfViewerSidebarHeader-sWykdcMh.js";import"./useBaseUiId-Bgw27mqh.js";import"./useControlled-hcbn-QvT.js";import"./CompositeRoot-D3XGeTiI.js";import"./CompositeItem-0ZiilmCA.js";import"./ToolbarRootContext-rEV65r5F.js";import"./composite-CRl6169X.js";import"./svgIconContainer-CnDXZd3l.js";import"./PdfViewerSearchBar-R5Wt-YTg.js";import"./chevron-up-sbUmcZSc.js";import"./chevron-down-BZA6QViL.js";import"./cross-oXbqlTg1.js";import"./PdfViewerSidebar-BQZ5gR2p.js";import"./index-Dl4r3eFQ.js";import"./index-BAMqZ9uk.js";import"./index-D5CaD6SI.js";import"./PdfViewerToolbar-CWstvFAt.js";import"./Button-CoSq253i.js";import"./chevron-right-fQ_is3x0.js";import"./Input-BiHcxxvv.js";import"./search-C-C2z-My.js";import"./spin-BeihRYm-.js";import"./error-CKgv5Cwb.js";import"./withOsdkMetrics-Q1C_QdTj.js";import"./makeExternalStore-B1xZJ4O7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
