import{j as r,M as s}from"./iframe-BTufhzDU.js";import{P as p}from"./pdf-viewer-CkClu2cO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DwrHLOtd.js";import"./preload-helper-18tKsGVi.js";import"./PdfViewer-Dd__z1FM.js";import"./index-Bgh_kCmT.js";import"./BasePdfViewer-21P3jGlv.js";import"./BasePdfViewer.module.css-F1NEw0-T.js";import"./PdfViewerAnnotationLayer-YwNkdx4L.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BVbvzuuW.js";import"./PdfViewerOutlineSidebar-Cs6L46mV.js";import"./PdfViewerSidebarHeader-z9fhLy8z.js";import"./useBaseUiId-B_rOieJo.js";import"./useControlled-B8odZqt5.js";import"./CompositeRoot-BMPWQJNL.js";import"./CompositeItem-C2mdT24u.js";import"./ToolbarRootContext-c-VxwH3T.js";import"./composite-C_GDjy5Q.js";import"./svgIconContainer-CIDYFOR4.js";import"./PdfViewerSearchBar-BrR7skiW.js";import"./chevron-up-BFfVKnbk.js";import"./chevron-down-CqOeUkb7.js";import"./cross-CDJmthjs.js";import"./PdfViewerSidebar-w_pm9aCu.js";import"./index-DEr9UFjH.js";import"./index-COZLl5wP.js";import"./index-B-UiCFnv.js";import"./PdfViewerToolbar-C197LEc8.js";import"./Button-C08Dl8zL.js";import"./chevron-right-ku3oucxc.js";import"./Input-GDvhao2V.js";import"./search-DSjsSTcq.js";import"./spin-BCPKJSJ_.js";import"./error-DOFx9qT5.js";import"./withOsdkMetrics-BNGLvviV.js";import"./makeExternalStore-CzdIOkHP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
