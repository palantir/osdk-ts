import{j as r,M as s}from"./iframe-BIQDpA0w.js";import{P as p}from"./pdf-viewer-CXidaBYn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C-ktIHXJ.js";import"./preload-helper-CAkujj7t.js";import"./PdfViewer-6mFUecjf.js";import"./index-QJcQchwi.js";import"./BasePdfViewer-BSQhsuJ4.js";import"./BasePdfViewer.module.css-CL4dNJ21.js";import"./PdfViewerAnnotationLayer-BDFPbmGy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BbSAmGy0.js";import"./PdfViewerOutlineSidebar-Bug1Qdmj.js";import"./PdfViewerSidebarHeader-CF5uHDxD.js";import"./useBaseUiId-HWzj2ccw.js";import"./useControlled-JCzKMRhN.js";import"./CompositeRoot-DzG4Vn95.js";import"./CompositeItem-k0wax-H2.js";import"./ToolbarRootContext-Cd2qP7C_.js";import"./composite-DWMEotDY.js";import"./svgIconContainer-Beiwk1zG.js";import"./PdfViewerSearchBar-U_gvR8AB.js";import"./chevron-up-9nvyOGkG.js";import"./chevron-down-C5in3kf4.js";import"./cross-BhokxWW9.js";import"./PdfViewerSidebar-C8o8J-Y6.js";import"./index-FeoDYKMl.js";import"./index-Il0_IPc9.js";import"./index-DPEDKbeA.js";import"./PdfViewerToolbar-BL0VevuK.js";import"./Button-CwWS2Nno.js";import"./chevron-right-BewvrboK.js";import"./Input-C1BIZDwN.js";import"./search-BU70SvPR.js";import"./spin-yCLZyc1E.js";import"./error-D2lGBY9x.js";import"./withOsdkMetrics-BMxdO0Ca.js";import"./makeExternalStore-DY4la4Jo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
