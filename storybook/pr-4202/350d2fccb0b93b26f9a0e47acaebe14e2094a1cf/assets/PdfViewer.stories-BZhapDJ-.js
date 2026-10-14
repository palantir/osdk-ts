import{j as r,M as s}from"./iframe-CXk0WqhB.js";import{P as p}from"./pdf-viewer-BaIcrTQK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DCOjnbQj.js";import"./preload-helper-ChjBfvhG.js";import"./PdfViewer-FN2xHKpY.js";import"./index-ML5mwP3e.js";import"./BasePdfViewer-DUKO32LN.js";import"./BasePdfViewer.module.css-C4U5zFcD.js";import"./PdfViewerAnnotationLayer-DWlB4qnG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DY7sVL-2.js";import"./PdfViewerOutlineSidebar-mtD_M-W2.js";import"./PdfViewerSidebarHeader-BNT60aw2.js";import"./useBaseUiId-DHjZ3Omh.js";import"./useControlled-Bl28iO0R.js";import"./CompositeRoot-LDpbwH3I.js";import"./CompositeItem-04P4zIgd.js";import"./ToolbarRootContext-DTmHJOM7.js";import"./composite-ytyU9AJN.js";import"./svgIconContainer-Dcyi3Q_X.js";import"./PdfViewerSearchBar-UtHSZZ1e.js";import"./chevron-up-DXTTiNvj.js";import"./chevron-down-DQ2eC5iE.js";import"./cross-BmemhmuM.js";import"./PdfViewerSidebar-DhYpmtv5.js";import"./index-_eczYP6a.js";import"./index-CjxpfJC5.js";import"./index-BT6_XaBS.js";import"./PdfViewerToolbar-BsR1Gxb2.js";import"./Button-Dic26hGY.js";import"./chevron-right-ChIknEX1.js";import"./Input-D9BOnKAN.js";import"./search-BLVXHNks.js";import"./spin-CKF2cSiD.js";import"./error-BWxZwg9W.js";import"./withOsdkMetrics-ChxJang_.js";import"./makeExternalStore-Ck8wEGfj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
