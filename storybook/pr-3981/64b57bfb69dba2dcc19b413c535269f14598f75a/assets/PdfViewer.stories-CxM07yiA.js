import{j as r,M as s}from"./iframe-CJbOBKBh.js";import{P as p}from"./pdf-viewer-Djr0f0C_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DH8NpjUy.js";import"./preload-helper-BLHdcgal.js";import"./PdfViewer-BNT8quId.js";import"./index-BZGK6RAy.js";import"./BasePdfViewer--ysZa02W.js";import"./BasePdfViewer.module.css-DrAv0kv7.js";import"./PdfViewerAnnotationLayer-C1LdBC9E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-3EDU-4vX.js";import"./PdfViewerOutlineSidebar-J-eMNPp6.js";import"./PdfViewerSidebarHeader-DiBuFb0X.js";import"./useBaseUiId-BLfqnsnM.js";import"./useControlled-CZ4YcEAU.js";import"./CompositeRoot-9pHNxhvX.js";import"./CompositeItem-CstBZeOc.js";import"./ToolbarRootContext-DRMcjCuu.js";import"./composite-C9nRcOzN.js";import"./svgIconContainer-nMosQuRN.js";import"./PdfViewerSearchBar-Cm7h1wff.js";import"./chevron-up-uNgbMAJC.js";import"./chevron-down-Cy1gcHm4.js";import"./cross-DXZ7nfx1.js";import"./PdfViewerSidebar-DyJtP2Md.js";import"./index-Dxrf0IE0.js";import"./index-De6fjuAQ.js";import"./index-B_6VUgxJ.js";import"./PdfViewerToolbar-DrEUW2sa.js";import"./Button-ChlDUqJf.js";import"./chevron-right-BElyHC62.js";import"./Input-B6hCJoOA.js";import"./search-BiEjqGXz.js";import"./spin-BFbRVGze.js";import"./error-SsNWn793.js";import"./withOsdkMetrics-PeDqWSVe.js";import"./makeExternalStore-BjeVU-bl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
