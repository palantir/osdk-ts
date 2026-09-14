import{j as r,M as s}from"./iframe-C3h4Q1BU.js";import{P as p}from"./pdf-viewer-BGxgrUxU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BfPPSQXd.js";import"./preload-helper-CA8PdwhG.js";import"./PdfViewer-CNSFQX9U.js";import"./index-CuMmyLu1.js";import"./BasePdfViewer-BpGS1uzo.js";import"./BasePdfViewer.module.css-DbAFLXxL.js";import"./PdfViewerAnnotationLayer-BmS9mFDa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQEjwBMB.js";import"./PdfViewerOutlineSidebar-DmBR6QxW.js";import"./PdfViewerSidebarHeader-BS6v9QFy.js";import"./useBaseUiId-CW_7Ddvm.js";import"./useControlled-CJNnVZBn.js";import"./CompositeRoot-BRvgbfd5.js";import"./CompositeItem-DI8BefCP.js";import"./ToolbarRootContext-AG_e6eyt.js";import"./composite-CYiVeAjT.js";import"./svgIconContainer-DnZbbW9L.js";import"./PdfViewerSearchBar-C2GJ3ZnT.js";import"./chevron-up-C5Kuivww.js";import"./chevron-down-BDOZijvO.js";import"./cross-B1EMHtko.js";import"./PdfViewerSidebar-Bp-PIYHt.js";import"./index-DeSqFGSS.js";import"./index-CLYARYT8.js";import"./index-Xgl-RbZw.js";import"./PdfViewerToolbar-CK6zmxt4.js";import"./Button-CgHUffbd.js";import"./chevron-right-CdSw7b20.js";import"./Input-LpvjeHcx.js";import"./search-BrzFjKOS.js";import"./spin-DG4hxKvX.js";import"./error-MSHCVYku.js";import"./withOsdkMetrics-Bf4iaqB8.js";import"./makeExternalStore-Bit4WYt1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
