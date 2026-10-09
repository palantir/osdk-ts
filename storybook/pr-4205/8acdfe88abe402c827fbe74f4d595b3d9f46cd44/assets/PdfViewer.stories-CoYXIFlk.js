import{j as r,M as s}from"./iframe-CMfq1HPL.js";import{P as p}from"./pdf-viewer-Dk-FIGtJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ukzPYdAy.js";import"./preload-helper-DoN82JnL.js";import"./PdfViewer-RoHvSLc0.js";import"./index-ZtSJidyR.js";import"./BasePdfViewer-DXx2xWU0.js";import"./BasePdfViewer.module.css-Co-QEI9X.js";import"./PdfViewerAnnotationLayer-Blg2wn3b.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LdDKjDi6.js";import"./PdfViewerOutlineSidebar-nA6rcp4r.js";import"./PdfViewerSidebarHeader-CnP1LE9M.js";import"./useBaseUiId-Doagaslz.js";import"./useControlled-DxbWxp5f.js";import"./CompositeRoot-BjEAhuda.js";import"./CompositeItem-4nYPF74E.js";import"./ToolbarRootContext-DbEzCTeH.js";import"./composite-BMLB8REs.js";import"./svgIconContainer-BrnRNdI4.js";import"./PdfViewerSearchBar-C1Gt9zyJ.js";import"./chevron-up-CchJ2ft7.js";import"./chevron-down-BB1rr6dV.js";import"./cross-DI771Rnq.js";import"./PdfViewerSidebar-ceLqsOsJ.js";import"./index-BOBP5vHC.js";import"./index-Cg-_dyYz.js";import"./index-B0zWLnpw.js";import"./PdfViewerToolbar-BhOqGt8P.js";import"./Button-D9k27imK.js";import"./chevron-right-Cl3BwTEY.js";import"./Input-DAfCa_F_.js";import"./search-CFS1aLLr.js";import"./spin-BAI1MhF9.js";import"./error-CdY5cnSm.js";import"./withOsdkMetrics-CzIhdDBm.js";import"./makeExternalStore-DbDNXFhx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
