import{j as r,M as s}from"./iframe-BkUB1z-0.js";import{P as p}from"./pdf-viewer-D-5el20C.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DecVIGCY.js";import"./preload-helper-BCudyj9Z.js";import"./PdfViewer-BFhon2_4.js";import"./index-BCGsaIlh.js";import"./BasePdfViewer-BnCiBTQD.js";import"./BasePdfViewer.module.css-DFkF0t-d.js";import"./PdfViewerAnnotationLayer-CsjHOvfZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BzeBz6U3.js";import"./PdfViewerOutlineSidebar-Bi3CiztQ.js";import"./PdfViewerSidebarHeader-BwIVSaJ6.js";import"./useBaseUiId-B8T1UKcT.js";import"./useControlled-CUAQStBL.js";import"./CompositeRoot-RypsoVii.js";import"./CompositeItem-Bq1Yg5Uc.js";import"./ToolbarRootContext-But4UFVK.js";import"./composite-DN3Oh5mU.js";import"./svgIconContainer-CGIj3k_X.js";import"./PdfViewerSearchBar-QIqf4CRT.js";import"./chevron-up-Cg2ncQwD.js";import"./chevron-down-C-Az15Kw.js";import"./cross-CTUau5h8.js";import"./PdfViewerSidebar-CX5iyQI3.js";import"./index-Cx3qLWLm.js";import"./index-BQjDuZGx.js";import"./index-D6in26WZ.js";import"./PdfViewerToolbar-ojyaI0LL.js";import"./Button-DSZL0uVg.js";import"./chevron-right-fCx9NRNR.js";import"./Input-C4TK9SWN.js";import"./search-BtcHq1ld.js";import"./spin-BeDMiFMy.js";import"./error-yvAwMgsa.js";import"./withOsdkMetrics-a2YFnMdP.js";import"./makeExternalStore-CT_-UtYV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
