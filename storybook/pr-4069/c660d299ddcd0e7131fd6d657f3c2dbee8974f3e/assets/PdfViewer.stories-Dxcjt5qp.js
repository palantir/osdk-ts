import{j as r,M as s}from"./iframe-Cfzzxn_n.js";import{P as p}from"./pdf-viewer-DtSiMgpC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-01XYY0Ra.js";import"./preload-helper-Dg7pGUOS.js";import"./PdfViewer-COAWvaRF.js";import"./index-CMN6-XKQ.js";import"./BasePdfViewer-Ceqx3mRp.js";import"./BasePdfViewer.module.css-Bw196wEG.js";import"./PdfViewerAnnotationLayer-BPtdzVLp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-3rK0C39J.js";import"./PdfViewerOutlineSidebar-DGJaAz4k.js";import"./PdfViewerSidebarHeader-BXtClSm2.js";import"./useBaseUiId-jVad5k1_.js";import"./useControlled-CNmeQlt3.js";import"./CompositeRoot-BU75Zm5r.js";import"./CompositeItem-CcHRWvUR.js";import"./ToolbarRootContext-D5srvXY8.js";import"./composite-CLlDBj0Z.js";import"./svgIconContainer-BI8ujPzn.js";import"./PdfViewerSearchBar-BIR7Zwk0.js";import"./chevron-up-DtoJ31cQ.js";import"./chevron-down-DEBizV0j.js";import"./cross-DQq_Xwh6.js";import"./PdfViewerSidebar-BQV-4sx8.js";import"./index-BNc2t-yb.js";import"./index-CBbyaHPU.js";import"./index-CPjSGEwp.js";import"./PdfViewerToolbar-H71vKI01.js";import"./Button-BI-1kn4u.js";import"./chevron-right-D9pRVYW9.js";import"./Input-CnQ0L5k0.js";import"./search-Dkia1gOi.js";import"./spin-BbD_ZBjo.js";import"./error-Bx2UJ-jk.js";import"./withOsdkMetrics-B7pLyp-k.js";import"./makeExternalStore-D0DZxHLg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
