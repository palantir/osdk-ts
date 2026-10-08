import{j as r,M as s}from"./iframe-DaG_CcyR.js";import{P as p}from"./pdf-viewer-DxRaYDI8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DVXPrl16.js";import"./preload-helper-fLmgAqZC.js";import"./PdfViewer-CECps782.js";import"./index-C2NmqeV8.js";import"./BasePdfViewer-CWu-BhbV.js";import"./BasePdfViewer.module.css-BJA3GTO3.js";import"./PdfViewerAnnotationLayer-1svw8IOp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CTaywWS8.js";import"./PdfViewerOutlineSidebar-ptHfTH0e.js";import"./PdfViewerSidebarHeader-C_-KE32v.js";import"./useBaseUiId-BfCzIxwR.js";import"./useControlled-CiDIFyuy.js";import"./CompositeRoot-k224o5OP.js";import"./CompositeItem-BBL8fhGk.js";import"./ToolbarRootContext-D3JANhpq.js";import"./composite-DNA29nNr.js";import"./svgIconContainer-DJ0pmdAm.js";import"./PdfViewerSearchBar-BmmMfBZZ.js";import"./chevron-up-BR6PTGu3.js";import"./chevron-down-D4cFhIOL.js";import"./cross-CBdyBq1j.js";import"./PdfViewerSidebar-BMYZDB14.js";import"./index-DZsXV9bE.js";import"./index-BC4OQi8j.js";import"./index-BRmwEG4U.js";import"./PdfViewerToolbar-YcOYJq-j.js";import"./Button-BJNxKAu7.js";import"./chevron-right-DCP78vN_.js";import"./Input-B0e0EOXI.js";import"./search-C70hm_cR.js";import"./spin-CnS_5AVo.js";import"./error-Cof-i4TZ.js";import"./withOsdkMetrics-CplHDg7O.js";import"./makeExternalStore-BWD8JKLV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
