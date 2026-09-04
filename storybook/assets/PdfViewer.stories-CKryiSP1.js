import{j as r,M as s}from"./iframe-DTnMR0KG.js";import{P as p}from"./pdf-viewer-COf4St-k.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-q8t1Wbdm.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-CtD0ltR7.js";import"./index-Zau0Jz6Y.js";import"./BasePdfViewer-DjnaIKhx.js";import"./BasePdfViewer.module.css-HkU5Z5_J.js";import"./PdfViewerAnnotationLayer-BwQiK4g7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ybfp_Z1o.js";import"./PdfViewerOutlineSidebar-Buwr0Ss5.js";import"./PdfViewerSidebarHeader-B62XhvxK.js";import"./useBaseUiId-BmGZESq6.js";import"./useControlled-CA00kb2t.js";import"./CompositeRoot-D9_TmYWD.js";import"./CompositeItem-Bv-USTDP.js";import"./ToolbarRootContext-CVieYv4R.js";import"./composite-CHsrvqtn.js";import"./svgIconContainer-Dax4Obiz.js";import"./PdfViewerSearchBar-Dg3Qf6V2.js";import"./chevron-up-DFNL29rc.js";import"./chevron-down-CGKhWSQM.js";import"./cross-DMx8fbm0.js";import"./PdfViewerSidebar-CWZ8RoOy.js";import"./index-Dp8wnHZj.js";import"./index-B1hrThmL.js";import"./index-BhpGgSwE.js";import"./PdfViewerToolbar-uaiF1WZj.js";import"./Button-CiLEYhU4.js";import"./chevron-right-nGYKO2FT.js";import"./Input-Cz7lC9dl.js";import"./search-D15ONi4r.js";import"./spin-B7oUzWn2.js";import"./error-CKmqMHYj.js";import"./withOsdkMetrics-CSsnJEPw.js";import"./makeExternalStore-DeAXmBwe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
