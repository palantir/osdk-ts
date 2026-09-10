import{j as r,M as s}from"./iframe-DCMw_0TW.js";import{P as p}from"./pdf-viewer-C512iDzs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-eq0X5HXK.js";import"./preload-helper-nzNuDSAv.js";import"./PdfViewer-DrQY8WW-.js";import"./index-tQLNAeTv.js";import"./BasePdfViewer-CzipMsSj.js";import"./BasePdfViewer.module.css-DUkcsnUa.js";import"./PdfViewerAnnotationLayer-B5ivgrNc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BEdf1Qd9.js";import"./PdfViewerOutlineSidebar-CC8r4icx.js";import"./PdfViewerSidebarHeader-BEK3sscH.js";import"./useBaseUiId-D30K99H9.js";import"./useControlled-glFhf02I.js";import"./CompositeRoot-DUYZWqgF.js";import"./CompositeItem-DAFo6DYX.js";import"./ToolbarRootContext-DAgpPS14.js";import"./composite-BEUqKf6u.js";import"./svgIconContainer-BuqYbofr.js";import"./PdfViewerSearchBar-CKL_fEWA.js";import"./chevron-up-DkSA6y60.js";import"./chevron-down-CwIymZzb.js";import"./cross-orOEa1Of.js";import"./PdfViewerSidebar-DO6E1fOu.js";import"./index-B3cn-YUq.js";import"./index-Dk4-JQXx.js";import"./index-Xc5_iOPx.js";import"./PdfViewerToolbar-hCuJ-NKU.js";import"./Button-DrHRwo7L.js";import"./chevron-right-DQSqn0_5.js";import"./Input-Ct67CszU.js";import"./search-3SCesORj.js";import"./spin-B8XAq0UE.js";import"./error-CThwrDAU.js";import"./withOsdkMetrics-Cz4cYYHT.js";import"./makeExternalStore-CaxsUcIE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
