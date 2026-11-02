import{j as r,M as s}from"./iframe-BCqrjcZp.js";import{P as p}from"./pdf-viewer-3jmo0z31.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CXllHAlZ.js";import"./preload-helper-IP6Q7Lp8.js";import"./PdfViewer-BUT9haxk.js";import"./index-D0jlJMeY.js";import"./BasePdfViewer-D9m874OB.js";import"./BasePdfViewer.module.css-DlUK3buA.js";import"./PdfViewerAnnotationLayer-K1bN_Xzn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BfPXyAg3.js";import"./PdfViewerOutlineSidebar-BxuexDA5.js";import"./PdfViewerSidebarHeader-nZjhxwSO.js";import"./useBaseUiId-BHV9sQZt.js";import"./useControlled-Bzb-P5Sw.js";import"./CompositeRoot-PCvE1_W2.js";import"./CompositeItem-CI0_kgLB.js";import"./ToolbarRootContext-gONCPNww.js";import"./composite-D7-rpd9b.js";import"./svgIconContainer-DwsnB4Bh.js";import"./PdfViewerSearchBar-yqNiJLWf.js";import"./chevron-up-CDPM_Mi7.js";import"./chevron-down-ClwDZxr-.js";import"./cross-B5B9w1fn.js";import"./PdfViewerSidebar-CnynYV1z.js";import"./index-C-VgWq2f.js";import"./index-CI0KRk9Y.js";import"./index-i3vQjJLM.js";import"./PdfViewerToolbar-DSl2RMUt.js";import"./Button-u7PTjF0v.js";import"./chevron-right-CeU1UmP2.js";import"./Input-CuKouNDL.js";import"./search-uqqKBKCA.js";import"./spin-CoQW6jbN.js";import"./error--BdktMRw.js";import"./withOsdkMetrics-C5LHIkEx.js";import"./makeExternalStore-IQ_ZHFEU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
