import{j as r,M as s}from"./iframe-D4DE_xCy.js";import{P as p}from"./pdf-viewer-BLmpPG1L.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DuyQHv2-.js";import"./preload-helper-B6-3aPT9.js";import"./PdfViewer-XNgPVMm4.js";import"./index-D326T4JO.js";import"./BasePdfViewer-DSwY7YBJ.js";import"./BasePdfViewer.module.css-DnOfEaxs.js";import"./PdfViewerAnnotationLayer-CFZumqry.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DjHgA49v.js";import"./PdfViewerOutlineSidebar-BLozL9g6.js";import"./PdfViewerSidebarHeader-hj8KH9ri.js";import"./useBaseUiId-BXESL0ei.js";import"./useControlled-C35ONjfY.js";import"./CompositeRoot-R3vCpSS2.js";import"./CompositeItem-Dl-hENiN.js";import"./ToolbarRootContext-DpJnwIQq.js";import"./composite-Dnv2BJfH.js";import"./svgIconContainer-jzN4JDBP.js";import"./PdfViewerSearchBar-CRFzK3yW.js";import"./chevron-up-BjG9V2Qh.js";import"./chevron-down-9HoUrmLz.js";import"./cross-DXk5c3Hx.js";import"./PdfViewerSidebar-nlfeWmUK.js";import"./index-CVC749TS.js";import"./index-DjBeJPFN.js";import"./index-DpB5XU9M.js";import"./PdfViewerToolbar-ByKaGsmm.js";import"./Button-ByxF5usp.js";import"./chevron-right-Clo1IcQf.js";import"./Input-BdkDXHFP.js";import"./search-DMWfSMTs.js";import"./spin-CINaep8X.js";import"./error-BbjQgfT9.js";import"./withOsdkMetrics-DNRznGfV.js";import"./makeExternalStore-BrutYjE5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
