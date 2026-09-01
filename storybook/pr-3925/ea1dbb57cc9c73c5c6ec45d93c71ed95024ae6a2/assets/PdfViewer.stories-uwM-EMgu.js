import{j as r,M as s}from"./iframe-BVyCc2AC.js";import{P as p}from"./pdf-viewer-BKpoM3NY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bjo97tIu.js";import"./preload-helper--HBo1d6L.js";import"./PdfViewer-DqAPXa53.js";import"./index-BNzHGqwC.js";import"./BasePdfViewer-BmfO84Ng.js";import"./BasePdfViewer.module.css-CGKFcFd9.js";import"./PdfViewerAnnotationLayer-DGEl-Vt4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHlagkWN.js";import"./PdfViewerOutlineSidebar-CiS_zJKU.js";import"./PdfViewerSidebarHeader-D6-D_J6E.js";import"./useBaseUiId-DiffXzRm.js";import"./useControlled-C2MZaBz1.js";import"./CompositeRoot-CzbGDq-Q.js";import"./CompositeItem-C3G54MgE.js";import"./ToolbarRootContext-DsUmoyrJ.js";import"./composite-CBp6hdMU.js";import"./svgIconContainer-C1dTG25d.js";import"./PdfViewerSearchBar-YnEkCG_O.js";import"./chevron-up-CM9y3p6w.js";import"./chevron-down-ClvvnW1g.js";import"./cross-Ch6pWJlm.js";import"./PdfViewerSidebar-D8sdFTD0.js";import"./index-cmuB7ZqK.js";import"./index-BevvX3YQ.js";import"./index-x0mWFteh.js";import"./PdfViewerToolbar-D6RFNyFP.js";import"./Button-BRNew1Yr.js";import"./chevron-right-C6MHH1lP.js";import"./Input-BZeDxcIX.js";import"./search-Dykn9IV3.js";import"./spin-Bs6_7YSH.js";import"./error-QOEmR757.js";import"./withOsdkMetrics-B82QxFXL.js";import"./makeExternalStore-B_RrnM78.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
