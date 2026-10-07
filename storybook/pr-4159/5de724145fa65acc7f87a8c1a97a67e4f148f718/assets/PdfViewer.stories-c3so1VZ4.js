import{j as r,M as s}from"./iframe-BkonaQ0V.js";import{P as p}from"./pdf-viewer-BzVT8JrW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-oqJ7Sivm.js";import"./preload-helper-wgqeRAml.js";import"./PdfViewer-BDUUj0eZ.js";import"./index-CygiEJb6.js";import"./BasePdfViewer-Pur4KkAb.js";import"./BasePdfViewer.module.css-b6heD_G_.js";import"./PdfViewerAnnotationLayer-DbtEycvZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CR2M6QdB.js";import"./PdfViewerOutlineSidebar-BnBApn3N.js";import"./PdfViewerSidebarHeader-Cz5y8fCf.js";import"./useBaseUiId-DnbkQC4-.js";import"./useControlled-DJSj5exZ.js";import"./CompositeRoot-CJyLR6FT.js";import"./CompositeItem-Bl9Mb02l.js";import"./ToolbarRootContext-C3x2oEG2.js";import"./composite-CFHemZO9.js";import"./svgIconContainer-B_Cau1X9.js";import"./PdfViewerSearchBar-BTmXjpbq.js";import"./chevron-up-CnDv6d0_.js";import"./chevron-down-BvYaF6aU.js";import"./cross-CkDGtOaH.js";import"./PdfViewerSidebar-B368Cm_R.js";import"./index-CcaHmPI_.js";import"./index-CBL-z8ep.js";import"./index-ct3tIu0S.js";import"./PdfViewerToolbar-DmYTyZuT.js";import"./Button-uS_BewGO.js";import"./chevron-right-5eFplkkn.js";import"./Input-BP09pCNP.js";import"./search-J0YUGWpH.js";import"./spin-Cszm9oLV.js";import"./error-DnbjG5aU.js";import"./withOsdkMetrics-DYHyomoB.js";import"./makeExternalStore-CxsJ8F0x.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
