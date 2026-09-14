import{j as r,M as s}from"./iframe-CQYW_eB-.js";import{P as p}from"./pdf-viewer-N-PJhiGd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cagw_3dx.js";import"./preload-helper-D9TT_d3h.js";import"./PdfViewer-BHcVAQVb.js";import"./index-T0VZSE-0.js";import"./BasePdfViewer-D8f2QGow.js";import"./BasePdfViewer.module.css-GTylaezv.js";import"./PdfViewerAnnotationLayer-D-VU7fPB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-lSNMO0ru.js";import"./PdfViewerOutlineSidebar-DehhKt31.js";import"./PdfViewerSidebarHeader-C0DgT7AF.js";import"./useBaseUiId-CLAYvn4B.js";import"./useControlled-Z2EDTbBt.js";import"./CompositeRoot-RzKBvRBE.js";import"./CompositeItem-B2O_tBvb.js";import"./ToolbarRootContext-DdcVqPbo.js";import"./composite-BSIyIiZo.js";import"./svgIconContainer-BqHGQtsP.js";import"./PdfViewerSearchBar-Btkrhv0V.js";import"./chevron-up-Cucjq9dM.js";import"./chevron-down-3SfwSm8L.js";import"./cross-4hmynEDT.js";import"./PdfViewerSidebar-DzRf_jd4.js";import"./index-Cw-CpLvV.js";import"./index-e5OIlOnL.js";import"./index-B0AlVUaG.js";import"./PdfViewerToolbar-B1HT4Czr.js";import"./Button-CYh2Cp69.js";import"./chevron-right-D4m-4aBV.js";import"./Input-BafxkRHB.js";import"./search-Dr6j30rS.js";import"./spin-DUaAw7tV.js";import"./error-Cu14UhDr.js";import"./withOsdkMetrics-jD7Q4XnW.js";import"./makeExternalStore-3GXsIke7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
