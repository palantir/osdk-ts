import{j as r,M as s}from"./iframe-W9lZ6KB9.js";import{P as p}from"./pdf-viewer-ORUOPiWs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C1YbYPrY.js";import"./preload-helper-FRDH_-i6.js";import"./PdfViewer-egDYqfz1.js";import"./index-zvENON5K.js";import"./BasePdfViewer-CLR7qS-d.js";import"./BasePdfViewer.module.css-CmlEarDS.js";import"./PdfViewerAnnotationLayer-EgzDEghu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKPObKzF.js";import"./PdfViewerOutlineSidebar-D5vNgJMy.js";import"./PdfViewerSidebarHeader-DF6xpqWr.js";import"./useBaseUiId-CM8bj9T3.js";import"./useControlled-BibYMAkB.js";import"./CompositeRoot-ChTmxUvs.js";import"./CompositeItem-9LwIi5rO.js";import"./ToolbarRootContext-DwUbHsl_.js";import"./composite-Dds-kjO9.js";import"./svgIconContainer-GBMBocam.js";import"./PdfViewerSearchBar-Bkw22AcZ.js";import"./chevron-up-DYacBVi1.js";import"./chevron-down-CPOSM9ve.js";import"./cross-BA2Nf7ni.js";import"./PdfViewerSidebar-CiL36kD_.js";import"./index-WuDXyzt9.js";import"./index-Do1aQnY4.js";import"./index-CiBIb1Hm.js";import"./PdfViewerToolbar-CdDRlS_g.js";import"./Button-Cgco6Fdx.js";import"./chevron-right-rrjstvxH.js";import"./Input-BE9q1hzT.js";import"./search-DtUsUWlr.js";import"./spin-B-3vhnL1.js";import"./error-DJOARvPR.js";import"./withOsdkMetrics-BEDTYsPk.js";import"./makeExternalStore-Bh-hA2FN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
