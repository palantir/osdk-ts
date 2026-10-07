import{j as r,M as s}from"./iframe-Cidbd9U_.js";import{P as p}from"./pdf-viewer-Bgw3WcYY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPRI9DNX.js";import"./preload-helper-CDZ9ml3u.js";import"./PdfViewer-DK-iHqQQ.js";import"./index-DHtVl5lr.js";import"./BasePdfViewer-CRC89i01.js";import"./BasePdfViewer.module.css-BEEkYmVy.js";import"./PdfViewerAnnotationLayer-CEtU-K4F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJbBGMpM.js";import"./PdfViewerOutlineSidebar-C8DKTwZk.js";import"./PdfViewerSidebarHeader-PVSjLnvX.js";import"./useBaseUiId-qBbflN1T.js";import"./useControlled-CD8kHrNC.js";import"./CompositeRoot-7EDOhLfq.js";import"./CompositeItem-RBkj06fN.js";import"./ToolbarRootContext-CFGHeG8t.js";import"./composite-wQgj7E4E.js";import"./svgIconContainer-BRrBCQQQ.js";import"./PdfViewerSearchBar-c8PxQM-_.js";import"./chevron-up-CM55ykMJ.js";import"./chevron-down-gf2GhVLl.js";import"./cross-BTGq5cWg.js";import"./PdfViewerSidebar-BhoaH6KO.js";import"./index-CSBG_Ogr.js";import"./index-CvuA1U9Q.js";import"./index-B4TXSL8y.js";import"./PdfViewerToolbar-lMJBBPuU.js";import"./Button-B5k9EJ-k.js";import"./chevron-right-DRPE0Ill.js";import"./Input-DOViwQP-.js";import"./search-d8u8t1Cm.js";import"./spin-BbYtHddB.js";import"./error-CLTZOyUS.js";import"./withOsdkMetrics-CFH71nhb.js";import"./makeExternalStore-Cw6sOONN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
