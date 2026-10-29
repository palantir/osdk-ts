import{j as r,M as s}from"./iframe-zGIsJMpT.js";import{P as p}from"./pdf-viewer-BCcnofx3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DIX6Xo7g.js";import"./preload-helper-CC38SpOi.js";import"./PdfViewer-HzpiBs1K.js";import"./index-8YhFnXQQ.js";import"./BasePdfViewer-BiKItjOx.js";import"./BasePdfViewer.module.css-D5HK3xI3.js";import"./PdfViewerAnnotationLayer-l7Sopo6F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BEe3827v.js";import"./PdfViewerOutlineSidebar-DzUjLFFB.js";import"./PdfViewerSidebarHeader-B8OeFGeI.js";import"./useBaseUiId-ci9SHEVb.js";import"./useControlled-BkrEcqk8.js";import"./CompositeRoot-CCYsbZke.js";import"./CompositeItem-BoSufc_A.js";import"./ToolbarRootContext-Cb-1rKtx.js";import"./composite-DMfXOji_.js";import"./svgIconContainer-CP5MNfZh.js";import"./PdfViewerSearchBar-FfAmc8Mc.js";import"./chevron-up-HGJhC36b.js";import"./chevron-down-Du5I5wVW.js";import"./cross-DktHdIAg.js";import"./PdfViewerSidebar-B_ZY4OOA.js";import"./index-CF-IYV_p.js";import"./index-B-FTFFET.js";import"./index-_YOXVANG.js";import"./PdfViewerToolbar-BuSXpzQP.js";import"./Button-DgFOPBJa.js";import"./chevron-right-DRjZXFtn.js";import"./Input-DUh3JuNM.js";import"./search-Dz1VIdGa.js";import"./spin-Czg7TWlF.js";import"./error-o2dkV_Rh.js";import"./withOsdkMetrics-CjW6J-ki.js";import"./makeExternalStore-BEcMJ506.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
