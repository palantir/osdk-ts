import{j as r,M as s}from"./iframe-B8zlsrHH.js";import{P as p}from"./pdf-viewer-DjLTlfTm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C4Cw3Fej.js";import"./preload-helper-C0b0An0Y.js";import"./PdfViewer-BFizquYm.js";import"./index-tfK5NBPh.js";import"./BasePdfViewer-BzJouv6w.js";import"./BasePdfViewer.module.css-BzHc0lQg.js";import"./PdfViewerAnnotationLayer-DkH6xbAl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3o_2d83.js";import"./PdfViewerOutlineSidebar-CZHfshKx.js";import"./PdfViewerSidebarHeader-I5jnW5Z1.js";import"./useBaseUiId-CmAD5Nv6.js";import"./useControlled-0KT-Nbfb.js";import"./CompositeRoot-D0O5MW4-.js";import"./CompositeItem-CS-yxRHH.js";import"./ToolbarRootContext-rZcpvLxX.js";import"./composite-CqVw9i-r.js";import"./svgIconContainer-93ic9H0u.js";import"./PdfViewerSearchBar-D-XbSqPO.js";import"./chevron-up-CwWwZExh.js";import"./chevron-down-Cv_0_uCQ.js";import"./cross-DaFAEeUI.js";import"./PdfViewerSidebar-BQ72QdWt.js";import"./index-9c3pIfa3.js";import"./index-BDPlX1qs.js";import"./index-CVRibSdI.js";import"./PdfViewerToolbar-DpVu1Q09.js";import"./Button-D-b8a2cD.js";import"./chevron-right-BOxZXe3P.js";import"./Input-CqRPwD_J.js";import"./search-BU1Su8pV.js";import"./spin-SVSecq_M.js";import"./error-3ug2VmSe.js";import"./withOsdkMetrics-vJQGO9MO.js";import"./makeExternalStore-BAH7otcI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
