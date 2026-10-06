import{j as r,M as s}from"./iframe-DfwKiHjh.js";import{P as p}from"./pdf-viewer-CdP7dxUC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Qh9sEw_N.js";import"./preload-helper-5NrpNAmT.js";import"./PdfViewer-BJPS0JT-.js";import"./index-DQCbDJi8.js";import"./BasePdfViewer-CQ8_7O89.js";import"./BasePdfViewer.module.css-UBKaUNRr.js";import"./PdfViewerAnnotationLayer-BI8iLOai.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DaYfRBR-.js";import"./PdfViewerOutlineSidebar-DJWasvRv.js";import"./PdfViewerSidebarHeader-BnTvR9n9.js";import"./useBaseUiId-SmhboENz.js";import"./useControlled-BVcUwOCR.js";import"./CompositeRoot-BF6TFUNT.js";import"./CompositeItem-BRErCda5.js";import"./ToolbarRootContext-ywVZD9re.js";import"./composite-mjsmoQDf.js";import"./svgIconContainer-BCMIhWa6.js";import"./PdfViewerSearchBar-BoNqzAOp.js";import"./chevron-up-yR-KySJL.js";import"./chevron-down-DeRPcryF.js";import"./cross-BXl7NczM.js";import"./PdfViewerSidebar-PFrPAwI3.js";import"./index-BvJwPorm.js";import"./index-aXU9JM6g.js";import"./index-COIAanZc.js";import"./PdfViewerToolbar-Cn6ZOTh2.js";import"./Button-4g201-R3.js";import"./chevron-right-DokCoizd.js";import"./Input-CijjM8i3.js";import"./search-Df49v7_E.js";import"./spin-CZEb8xID.js";import"./error-GYK-h93n.js";import"./withOsdkMetrics-x9zZJEiy.js";import"./makeExternalStore-DBs5yW9O.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
