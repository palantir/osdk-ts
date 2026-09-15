import{j as r,M as s}from"./iframe-DUDgTVFJ.js";import{P as p}from"./pdf-viewer-CEeesYOu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CdNMyjii.js";import"./preload-helper-BVnI7eCi.js";import"./PdfViewer-U_Jg1i7W.js";import"./index-BmzW3lpk.js";import"./BasePdfViewer-DSVWwzrP.js";import"./BasePdfViewer.module.css-BoUmYxgg.js";import"./PdfViewerAnnotationLayer-yBrZduXp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-XOJMDx.js";import"./PdfViewerOutlineSidebar-CfHFix6E.js";import"./PdfViewerSidebarHeader-wbw2gQr6.js";import"./useBaseUiId-HT4h8TUv.js";import"./useControlled-CmefEzCZ.js";import"./CompositeRoot-D4jzBbh6.js";import"./CompositeItem-DvLeoEHv.js";import"./ToolbarRootContext-DjTtqRzV.js";import"./composite-CECNeh7S.js";import"./svgIconContainer-ZlCTpn06.js";import"./PdfViewerSearchBar-NMnNg0aU.js";import"./chevron-up-BTxKZ4Su.js";import"./chevron-down-uyo8SlXE.js";import"./cross-BTajFNgg.js";import"./PdfViewerSidebar-d0GxlfLY.js";import"./index-C5bsaNnW.js";import"./index-BvrArIP3.js";import"./index-CRuY3Py7.js";import"./PdfViewerToolbar-pudiqp55.js";import"./Button-CYnqWeJV.js";import"./chevron-right-DiQw-gqp.js";import"./Input-BDNTdkOr.js";import"./search-Bwn6tzKV.js";import"./spin-DkR3V-33.js";import"./error-BKqtxFEE.js";import"./withOsdkMetrics-BxFc9ce-.js";import"./makeExternalStore-Dj0x5GDa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
