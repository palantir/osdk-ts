import{j as r,M as s}from"./iframe-CjpAd4U5.js";import{P as p}from"./pdf-viewer-CnR8v8rZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CaFsojSH.js";import"./preload-helper-BfNxESlv.js";import"./PdfViewer-DFermMzn.js";import"./index-CFyMtNDf.js";import"./BasePdfViewer-BJ6LrAzv.js";import"./BasePdfViewer.module.css-CBWGqiuR.js";import"./PdfViewerAnnotationLayer-Bstc1YrJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zitOaYnx.js";import"./PdfViewerOutlineSidebar-BQPpcnzu.js";import"./PdfViewerSidebarHeader-CTkE4Fte.js";import"./useBaseUiId-DtGYbhuk.js";import"./useControlled-DlmQuXZO.js";import"./CompositeRoot-B27X4oaO.js";import"./CompositeItem-M0I4N5Qo.js";import"./ToolbarRootContext-pZWEREev.js";import"./composite-CXKEjPEl.js";import"./svgIconContainer-BfRjvWya.js";import"./PdfViewerSearchBar-Bb3L9UE1.js";import"./chevron-up-B4XpbNM_.js";import"./chevron-down-Dk_9PWbo.js";import"./cross-YCEgVYb5.js";import"./PdfViewerSidebar-DID0pTHO.js";import"./index-D-J9KFgM.js";import"./index-CESQmif6.js";import"./index-BqxRrYRP.js";import"./PdfViewerToolbar-BrxzFb6J.js";import"./Button-B8Qahzmt.js";import"./chevron-right-CgDOv9aq.js";import"./Input-BMeqWiRY.js";import"./search-CXQZDVwK.js";import"./spin-DEMYbdg9.js";import"./error-DP0C5EXb.js";import"./withOsdkMetrics-q9Wg1g7p.js";import"./makeExternalStore-m3vRiWo8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
