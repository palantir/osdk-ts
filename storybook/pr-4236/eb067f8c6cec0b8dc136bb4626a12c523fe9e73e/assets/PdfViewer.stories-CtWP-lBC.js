import{j as r,M as s}from"./iframe-BGoY5mFC.js";import{P as p}from"./pdf-viewer-CZeK7Jfg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Tc4zHf7o.js";import"./preload-helper-DsvzwfCi.js";import"./PdfViewer-Dhp3sKU_.js";import"./index-DnfiKoHw.js";import"./BasePdfViewer-D4ap9xtU.js";import"./BasePdfViewer.module.css-B0s6Y0TJ.js";import"./PdfViewerAnnotationLayer-yotbbLGo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_Al93KFx.js";import"./PdfViewerOutlineSidebar-zxZicrTu.js";import"./PdfViewerSidebarHeader-CjWNa7ZR.js";import"./useBaseUiId-CIYnZ7Oo.js";import"./useControlled-Cqb7ClaQ.js";import"./CompositeRoot-BIQInV-N.js";import"./CompositeItem-2fAyt8Be.js";import"./ToolbarRootContext-DUxALj_T.js";import"./composite-DKhm2DCj.js";import"./svgIconContainer-BX-wZNF4.js";import"./PdfViewerSearchBar-D9uBVLTt.js";import"./chevron-up-CzoLGspj.js";import"./chevron-down-CCx6Nv0U.js";import"./cross-BtqJOxEL.js";import"./PdfViewerSidebar-DkB9lIbe.js";import"./index-B0vfjDqX.js";import"./index-B6V6F-VV.js";import"./index-DYEd7rlA.js";import"./PdfViewerToolbar-D86urf21.js";import"./Button-CFNLbf5u.js";import"./chevron-right-8UKO4GDH.js";import"./Input-D9S9buqu.js";import"./search-Du0qzm2Q.js";import"./spin-BIskOECu.js";import"./error-Brajw6PY.js";import"./withOsdkMetrics-DBjKwuY0.js";import"./makeExternalStore-BltVU3hB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
