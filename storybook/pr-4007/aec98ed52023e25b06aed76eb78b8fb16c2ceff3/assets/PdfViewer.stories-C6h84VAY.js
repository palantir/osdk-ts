import{j as r,M as s}from"./iframe-B-AKwe0U.js";import{P as p}from"./pdf-viewer-DuqRHpCg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DuOdjiCR.js";import"./preload-helper-f3uNRD8c.js";import"./PdfViewer-PA-VIXiB.js";import"./index-BTKqd_0M.js";import"./BasePdfViewer-CBC6xXxk.js";import"./BasePdfViewer.module.css-GR_lQF7s.js";import"./PdfViewerAnnotationLayer-yAKqMj1P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Irxi5hwE.js";import"./PdfViewerOutlineSidebar-DwMyjl9w.js";import"./PdfViewerSidebarHeader-CVFpccFp.js";import"./useBaseUiId-BzL2rBHV.js";import"./useControlled-DAZJskjr.js";import"./CompositeRoot-CiFuoTgE.js";import"./CompositeItem-BmFykBzh.js";import"./ToolbarRootContext-CAFwtwDJ.js";import"./composite-C2ZOTtj7.js";import"./svgIconContainer-sFjpt_d1.js";import"./PdfViewerSearchBar-C9QWQyGA.js";import"./chevron-up-C5GJtUjl.js";import"./chevron-down-CI9pzF65.js";import"./cross-DA2KL76X.js";import"./PdfViewerSidebar-CsEZHW28.js";import"./index-ZM1N2Vft.js";import"./index-DbIw_M6r.js";import"./index-DK2QIJxh.js";import"./PdfViewerToolbar--v89i0q8.js";import"./Button-DSXsoF7A.js";import"./chevron-right-CrLVANuk.js";import"./Input-C_it6lB9.js";import"./search-BeqvshXG.js";import"./spin-DR7FSY18.js";import"./error-C0T-x3vg.js";import"./withOsdkMetrics-DWcYXPst.js";import"./makeExternalStore-CwQpDBtV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
