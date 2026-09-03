import{j as r,M as s}from"./iframe-CraWtfc_.js";import{P as p}from"./pdf-viewer-7VSbilai.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BBg2J3Wz.js";import"./preload-helper-B2ygN63P.js";import"./PdfViewer-CYipDdE6.js";import"./index-uggTCp7M.js";import"./BasePdfViewer-Bi85UFgs.js";import"./BasePdfViewer.module.css-B67z3yfB.js";import"./PdfViewerAnnotationLayer-BmkyTqln.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BdpN0pBl.js";import"./PdfViewerOutlineSidebar-DCg_MUAa.js";import"./PdfViewerSidebarHeader-DDLnCpEi.js";import"./useBaseUiId-B3gf6Rgr.js";import"./useControlled-C2EFnSRK.js";import"./CompositeRoot-BBwewoC_.js";import"./CompositeItem-D5jj9W4Y.js";import"./ToolbarRootContext-BqVmfek1.js";import"./composite-DStzulLq.js";import"./svgIconContainer-C4_0pLg-.js";import"./PdfViewerSearchBar-q4Dxxdpm.js";import"./chevron-up-CQfXW1SS.js";import"./chevron-down-B7zCZjZp.js";import"./cross-DBeI7hzA.js";import"./PdfViewerSidebar-DfXj3eN6.js";import"./index-KL6FZw16.js";import"./index-C7ILWK60.js";import"./index-CE8B_DUN.js";import"./PdfViewerToolbar-dykahKtu.js";import"./Button-CzW3iwgW.js";import"./chevron-right-THA92gqz.js";import"./Input-BXsVCVWI.js";import"./search-BX2x7npa.js";import"./spin-VnT3o7nh.js";import"./error-CwgXbJjF.js";import"./withOsdkMetrics-D5fF38B3.js";import"./makeExternalStore-CprYBPlM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
