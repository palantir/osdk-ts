import{j as r,M as s}from"./iframe-Cmyuw2Ph.js";import{P as p}from"./pdf-viewer-C0_3M5H9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C-RbCUr3.js";import"./preload-helper-BdOHKbj_.js";import"./PdfViewer-Ck5-rLcr.js";import"./index-DmkTpiQF.js";import"./BasePdfViewer-ZWC8Wn0L.js";import"./BasePdfViewer.module.css-yF2GMxRl.js";import"./PdfViewerAnnotationLayer-AmfBe2Eu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-SbYfHltb.js";import"./PdfViewerOutlineSidebar-DVKspPNr.js";import"./PdfViewerSidebarHeader-BqzbX3n6.js";import"./useBaseUiId-BKvwKpWC.js";import"./useControlled-1Ry22NdV.js";import"./CompositeRoot-YHm0gnnd.js";import"./CompositeItem-Bm_UDkTp.js";import"./ToolbarRootContext-Bziyhvzk.js";import"./composite-BApZsjKv.js";import"./svgIconContainer-kIxwS322.js";import"./PdfViewerSearchBar-DwbxKQl4.js";import"./chevron-up-DKDq-nZE.js";import"./chevron-down-DihUPRd8.js";import"./cross-DgRED2Y7.js";import"./PdfViewerSidebar-pGD1WQt_.js";import"./index-BIIUg6ti.js";import"./index-DdBzIF29.js";import"./index-Cy1dz_-E.js";import"./PdfViewerToolbar-Dm9fRNcZ.js";import"./Button-Cgurdd-l.js";import"./chevron-right-CGSatMfy.js";import"./Input-DF2j3Inj.js";import"./search-MWYwj9aD.js";import"./spin-CTPHgb1c.js";import"./error-BVkhCBJN.js";import"./withOsdkMetrics-DCjep4oi.js";import"./makeExternalStore-D1HySzYn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
