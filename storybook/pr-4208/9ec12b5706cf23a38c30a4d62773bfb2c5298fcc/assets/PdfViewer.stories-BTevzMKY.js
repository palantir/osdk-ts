import{j as r,M as s}from"./iframe-RocwcLA1.js";import{P as p}from"./pdf-viewer-XDTe1o8A.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dl8FrIkQ.js";import"./preload-helper-Bi11_lQh.js";import"./PdfViewer-CsEfBlfD.js";import"./index-CPYhK6Tm.js";import"./BasePdfViewer-eY7oaNPW.js";import"./BasePdfViewer.module.css-CrvxP8Ob.js";import"./PdfViewerAnnotationLayer-CWqIW-Nb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-De1N8uoq.js";import"./PdfViewerOutlineSidebar-BngGzl3U.js";import"./PdfViewerSidebarHeader-C47I5uND.js";import"./useBaseUiId-CBnRLDYk.js";import"./useControlled-Bbowgw5B.js";import"./CompositeRoot-kbTi56P6.js";import"./CompositeItem-CRCvuWR7.js";import"./ToolbarRootContext-Cn6bmXqK.js";import"./composite-CcO-1qH0.js";import"./svgIconContainer-DLWtp0BU.js";import"./PdfViewerSearchBar-CvXgrMY6.js";import"./chevron-up-Dy4oGccG.js";import"./chevron-down-C7FnpsrF.js";import"./cross-BgyJlmiP.js";import"./PdfViewerSidebar-C7EoVUBG.js";import"./index-DmXTiMr0.js";import"./index-BnYAAGls.js";import"./index-CYrtNoCb.js";import"./PdfViewerToolbar-Bovqr1XW.js";import"./Button-BNn-NlyQ.js";import"./chevron-right-ovVulBH5.js";import"./Input-CcAG7gXy.js";import"./search-vjT1hCHx.js";import"./spin-CC8HsMB3.js";import"./error-DACjt9aW.js";import"./withOsdkMetrics-D9G4bz54.js";import"./makeExternalStore-B-sos_Fc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
