import{j as r,M as s}from"./iframe-luQilSOF.js";import{P as p}from"./pdf-viewer-BPtQZI7N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dfqvm93r.js";import"./preload-helper-BKBqwCKh.js";import"./PdfViewer-CI_K9tIy.js";import"./index-Bz5LVora.js";import"./BasePdfViewer-C-AbyXOd.js";import"./BasePdfViewer.module.css-2HkBOZt8.js";import"./PdfViewerAnnotationLayer-QNE0yYJI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CrqIAu5c.js";import"./PdfViewerOutlineSidebar-By1LvqRT.js";import"./PdfViewerSidebarHeader-xfpEDOuM.js";import"./useBaseUiId-BIcPA1wg.js";import"./useControlled-BcMtuVsI.js";import"./CompositeRoot-DrF7tz-C.js";import"./CompositeItem-5KLXQsnX.js";import"./ToolbarRootContext-iSsHGgjo.js";import"./composite-BqKU6h-l.js";import"./svgIconContainer-Dg-z8JPf.js";import"./PdfViewerSearchBar-CDI4vEMH.js";import"./chevron-up-BlBu7m32.js";import"./chevron-down-DV7XSuWi.js";import"./cross-dcAeg2cP.js";import"./PdfViewerSidebar-2E4xHgTG.js";import"./index-BnFccNhI.js";import"./index-C2BPTamy.js";import"./index-CXosHwau.js";import"./PdfViewerToolbar-DVX91be4.js";import"./Button-CNpzMVry.js";import"./chevron-right-CMNe8jT1.js";import"./Input-BK5kzofZ.js";import"./search-B5llV8dS.js";import"./spin-6axIvcGP.js";import"./error-D7uvB3Tp.js";import"./withOsdkMetrics-CIz4zTAP.js";import"./makeExternalStore-D9PcNge9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
