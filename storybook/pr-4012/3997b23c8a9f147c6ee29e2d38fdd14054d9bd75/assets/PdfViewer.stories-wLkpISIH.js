import{j as r,M as s}from"./iframe-BFPzVvxY.js";import{P as p}from"./pdf-viewer-rpjM4GOq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DubrggAl.js";import"./preload-helper-CFSQ1G8J.js";import"./PdfViewer-DaCbJVT7.js";import"./index-CCGax6tv.js";import"./BasePdfViewer-CsRoQMEj.js";import"./BasePdfViewer.module.css-C5ENWO8t.js";import"./PdfViewerAnnotationLayer-CrIrr6u4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEGV9pLs.js";import"./PdfViewerOutlineSidebar-CFK6pCZT.js";import"./PdfViewerSidebarHeader-Zo95aovO.js";import"./useBaseUiId-lA3GGoRZ.js";import"./useControlled-CS4AozJ9.js";import"./CompositeRoot-DN2463Ao.js";import"./CompositeItem-hoe_aJWZ.js";import"./ToolbarRootContext-Bn6OEZQ8.js";import"./composite-ByiulZct.js";import"./svgIconContainer-zvRTjm1U.js";import"./PdfViewerSearchBar-CEIo8y8w.js";import"./chevron-up-CPyZWxMU.js";import"./chevron-down-Ui6vbKSY.js";import"./cross-CB2SiIfn.js";import"./PdfViewerSidebar-5zbQM0Ut.js";import"./index-D76rkl6E.js";import"./index-CDsjmQfs.js";import"./index-CQTk_3Md.js";import"./PdfViewerToolbar-BwhDMoff.js";import"./Button-DM9BYVFF.js";import"./chevron-right-l3nGihMq.js";import"./Input-SASUrwvz.js";import"./search-B9sXG8EA.js";import"./spin-B_pe3jjg.js";import"./error-C6XCbteP.js";import"./withOsdkMetrics-BCHhaE-8.js";import"./makeExternalStore-ke7w82mB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
