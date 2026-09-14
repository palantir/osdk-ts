import{j as r,M as s}from"./iframe-DNB7pKwx.js";import{P as p}from"./pdf-viewer-Bj-D8Wd0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CISbBfP3.js";import"./preload-helper-zsyjqppt.js";import"./PdfViewer-DpohYLcE.js";import"./index-CO8W_kBY.js";import"./BasePdfViewer-BTw7cmvu.js";import"./BasePdfViewer.module.css-DDs2Flbe.js";import"./PdfViewerAnnotationLayer-Dtg3fcf0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BmvvQGLP.js";import"./PdfViewerOutlineSidebar-DHS6bDcn.js";import"./PdfViewerSidebarHeader-DB6Xgchs.js";import"./useBaseUiId-CFk2utP-.js";import"./useControlled-CZirorca.js";import"./CompositeRoot-Bby4hQdF.js";import"./CompositeItem-DZ0O8IVJ.js";import"./ToolbarRootContext-Bsj6zD7P.js";import"./composite-Bsz5rAKx.js";import"./svgIconContainer-C0yR1K-j.js";import"./PdfViewerSearchBar-C_Qllt7U.js";import"./chevron-up-BlSwyyPp.js";import"./chevron-down-DkSb3Fq2.js";import"./cross-Z_Cymmuf.js";import"./PdfViewerSidebar-FlaK-F-a.js";import"./index-B7VbqBWX.js";import"./index-Cw7J0xRI.js";import"./index-BWzAq-lx.js";import"./PdfViewerToolbar-De1eaq11.js";import"./Button-HIyOMk5a.js";import"./chevron-right-B2jtW0n6.js";import"./Input-D7pQEHrn.js";import"./search-B9wO7VDL.js";import"./spin-DMR9LJAG.js";import"./error-DTTI1i1g.js";import"./withOsdkMetrics-aAvnjy0e.js";import"./makeExternalStore-rGxpfiad.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
