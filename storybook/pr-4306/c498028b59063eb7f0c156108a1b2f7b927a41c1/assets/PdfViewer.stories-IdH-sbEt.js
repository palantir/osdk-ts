import{j as r,M as s}from"./iframe-Bjmz4Pw6.js";import{P as p}from"./pdf-viewer-BpJbjTOL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BYCXzDg4.js";import"./preload-helper-ChdqJ_Fk.js";import"./PdfViewer-B3oKZwT0.js";import"./index-CteV8V5-.js";import"./BasePdfViewer-B7eY4AfI.js";import"./BasePdfViewer.module.css-YlY1SCDC.js";import"./PdfViewerAnnotationLayer-SNfmgFPJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DDTb_wxV.js";import"./PdfViewerOutlineSidebar-Bp21Xsrd.js";import"./PdfViewerSidebarHeader-CFfGn0i2.js";import"./useBaseUiId-Dab5gkr1.js";import"./useControlled-UgrzeJ-P.js";import"./CompositeRoot-Cv00B2tO.js";import"./CompositeItem-XruUBT06.js";import"./ToolbarRootContext-D0yTrMZy.js";import"./composite-D5kvXpM3.js";import"./svgIconContainer-waXVP79l.js";import"./PdfViewerSearchBar-_LwwMRIk.js";import"./chevron-up-CqPzjhrI.js";import"./chevron-down-DYnrRDqf.js";import"./cross-DLiU4vOO.js";import"./PdfViewerSidebar-BC2m-we3.js";import"./index-BqU459RR.js";import"./index-B0jhHXrB.js";import"./index-xuV1OxFF.js";import"./PdfViewerToolbar-D24_ejDm.js";import"./Button-gMxn8bZ8.js";import"./chevron-right-BMmDN2S0.js";import"./Input-CYsfOYNb.js";import"./search-BFNLN2pg.js";import"./spin-CDYtxnFt.js";import"./error-DXq7Sg4A.js";import"./withOsdkMetrics-DHpFVYZj.js";import"./makeExternalStore-Czv1SlrP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
