import{j as r,M as s}from"./iframe-tTpw548-.js";import{P as p}from"./pdf-viewer-5ZnFxE5N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CgimVLQ6.js";import"./preload-helper-BfLQzAkp.js";import"./PdfViewer-5vuPLWMR.js";import"./index-CfoC8y9T.js";import"./BasePdfViewer-BRrJpTeJ.js";import"./BasePdfViewer.module.css-Cx7TX7qR.js";import"./PdfViewerAnnotationLayer-zvaF8iJv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQRXSlfc.js";import"./PdfViewerOutlineSidebar-Dc0Czl-k.js";import"./PdfViewerSidebarHeader-D6BFwbNz.js";import"./useBaseUiId-CAQFrlAe.js";import"./useControlled-C7x4-FQ_.js";import"./CompositeRoot-CdUL1vQ-.js";import"./CompositeItem-CCzTqTt9.js";import"./ToolbarRootContext-CJ6qVhPJ.js";import"./composite-CJkTEPcI.js";import"./svgIconContainer-T3TG2U7K.js";import"./PdfViewerSearchBar-CrxdanLe.js";import"./chevron-up-CyHxY_di.js";import"./chevron-down-EEhO5M0S.js";import"./cross-CLKnrtat.js";import"./PdfViewerSidebar-BxpzDjEz.js";import"./index-LL3h6rZ2.js";import"./index-BP7y8sZT.js";import"./index-D2O-B8gB.js";import"./PdfViewerToolbar-BMobUpnY.js";import"./Button-GJuyUH0v.js";import"./chevron-right-CWSVP7VL.js";import"./Input-HFN8Ab80.js";import"./search-DermPgDt.js";import"./spin-tIL5zAph.js";import"./error-DVgq5BdO.js";import"./withOsdkMetrics-DMDExHtI.js";import"./makeExternalStore-0aQuonQe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
