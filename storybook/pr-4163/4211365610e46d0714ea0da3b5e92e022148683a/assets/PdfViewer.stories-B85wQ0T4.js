import{j as r,M as s}from"./iframe-DKjGRkFv.js";import{P as p}from"./pdf-viewer-v9tAfE2x.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DSWk7avX.js";import"./preload-helper-C6rqf7Sg.js";import"./PdfViewer-BN2g8ws3.js";import"./index-_KqllXCA.js";import"./BasePdfViewer-DW5xxcFa.js";import"./BasePdfViewer.module.css-DxBbHgms.js";import"./PdfViewerAnnotationLayer-D00Nr3ZQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5J8F52f.js";import"./PdfViewerOutlineSidebar-8QtJWnld.js";import"./PdfViewerSidebarHeader-BVQyKjbK.js";import"./useBaseUiId-jPX4s7al.js";import"./useControlled-BvxP1vnA.js";import"./CompositeRoot-BTdYvgkq.js";import"./CompositeItem-CdsaUFys.js";import"./ToolbarRootContext-VDTGiuqQ.js";import"./composite-Be6SAy6p.js";import"./svgIconContainer-D-LkokGt.js";import"./PdfViewerSearchBar-k7kz19JK.js";import"./chevron-up-CIG-gUzX.js";import"./chevron-down-zDaWrCdE.js";import"./cross-Byw5v4Q_.js";import"./PdfViewerSidebar-BUoRedI3.js";import"./index-CVidFmw5.js";import"./index-BP_2hfUi.js";import"./index-Bcv2oXK6.js";import"./PdfViewerToolbar-B8qLKLqA.js";import"./Button-CT84oTMh.js";import"./chevron-right-47Df3BK-.js";import"./Input-Cl-jE7Eu.js";import"./search-CvJrksrv.js";import"./spin-BMLF-y1l.js";import"./error-CIT7Z9G8.js";import"./withOsdkMetrics-e_OoMjHx.js";import"./makeExternalStore-BnEyfyYD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
