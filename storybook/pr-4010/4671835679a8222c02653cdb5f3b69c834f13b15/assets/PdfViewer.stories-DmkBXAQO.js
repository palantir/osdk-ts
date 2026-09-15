import{j as r,M as s}from"./iframe-DcCQS0_6.js";import{P as p}from"./pdf-viewer-DsSor_2z.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DuitDeXm.js";import"./preload-helper-xWYT_d-N.js";import"./PdfViewer-CTs7J4JX.js";import"./index-CbMk7YoF.js";import"./BasePdfViewer-BcyxhweA.js";import"./BasePdfViewer.module.css-705dVgpg.js";import"./PdfViewerAnnotationLayer-BWDjF__D.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B3OJc69Z.js";import"./PdfViewerOutlineSidebar-JAtAc6Vc.js";import"./PdfViewerSidebarHeader-CgY5cX7_.js";import"./useBaseUiId-Dh-QEy1V.js";import"./useControlled-DjePpHNj.js";import"./CompositeRoot-DjPVJlxR.js";import"./CompositeItem-f5BJQE98.js";import"./ToolbarRootContext-Bj_28nw4.js";import"./composite-CzrpQp13.js";import"./svgIconContainer-DW0Yd1WX.js";import"./PdfViewerSearchBar-kKURnDRS.js";import"./chevron-up-BLQgg8Pb.js";import"./chevron-down-lL-kgNIS.js";import"./cross-CUczp16a.js";import"./PdfViewerSidebar-a_WddAcS.js";import"./index-rRkZkhHF.js";import"./index-DV2Nx4iz.js";import"./index-DH8eBQ7L.js";import"./PdfViewerToolbar-q-0B3-os.js";import"./Button-9wNHK-eW.js";import"./chevron-right--h_sAtNy.js";import"./Input-DQQsT43v.js";import"./search-I8gByOwV.js";import"./spin-CFOF6Ziw.js";import"./error-DZqUEnyZ.js";import"./withOsdkMetrics-CT48WTCf.js";import"./makeExternalStore-D7kaYs9c.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
