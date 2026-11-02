import{j as r,M as s}from"./iframe-CHKcZgb7.js";import{P as p}from"./pdf-viewer-BgRM5F53.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-gW4sMScB.js";import"./preload-helper-ebqo0JEM.js";import"./PdfViewer-BRu2rAtO.js";import"./index-BACJcPnF.js";import"./BasePdfViewer-CvCf5GwX.js";import"./BasePdfViewer.module.css-B8AndGw1.js";import"./PdfViewerAnnotationLayer-9UbkhANJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DrU4PQPl.js";import"./PdfViewerOutlineSidebar-DbsqZwG3.js";import"./PdfViewerSidebarHeader-CAMQoxUG.js";import"./useBaseUiId-Cxc3vcrN.js";import"./useControlled-aYGdNSsu.js";import"./CompositeRoot-D69RRO7Y.js";import"./CompositeItem-Brzkx-fO.js";import"./ToolbarRootContext-C-44hQT7.js";import"./composite-B6ohSiOB.js";import"./svgIconContainer-DY2QJrYz.js";import"./PdfViewerSearchBar-JU1S0mqJ.js";import"./chevron-up-kfQOKWTT.js";import"./chevron-down-rruGkt0O.js";import"./cross-Dk2dXrK7.js";import"./PdfViewerSidebar-CmAREi43.js";import"./index-BMxA9FcH.js";import"./index-B0dGrXCM.js";import"./index-DHY3CWWm.js";import"./PdfViewerToolbar-D26OlRI0.js";import"./Button-CiSWKai0.js";import"./chevron-right-4ilIVzq4.js";import"./Input-ByMels_v.js";import"./search-B4aplnsV.js";import"./spin-BpafdYl2.js";import"./error-3jD31VOr.js";import"./withOsdkMetrics-CfcXJ1po.js";import"./makeExternalStore-BWTgA4er.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
