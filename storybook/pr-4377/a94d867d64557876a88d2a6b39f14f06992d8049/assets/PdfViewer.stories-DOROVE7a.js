import{j as r,M as s}from"./iframe-BwKzjaO_.js";import{P as p}from"./pdf-viewer-V0f6QnTB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C9PsStYO.js";import"./preload-helper-Cw3PuEWm.js";import"./PdfViewer-5GfzRmgb.js";import"./index-jEwj8y1B.js";import"./BasePdfViewer-D9AQTxdr.js";import"./BasePdfViewer.module.css-D2By1xZ7.js";import"./PdfViewerAnnotationLayer-CEnVn06Y.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CFH0GhlH.js";import"./PdfViewerOutlineSidebar-BK_Uf3uY.js";import"./PdfViewerSidebarHeader-BJPpPQ7s.js";import"./useBaseUiId-BGPb7m92.js";import"./useControlled-DYaNtfGY.js";import"./CompositeRoot-BP1E_eJl.js";import"./CompositeItem-Cp7s4593.js";import"./ToolbarRootContext-BtpiBS9l.js";import"./composite-Az3dyPdd.js";import"./svgIconContainer-BwQ9ehgu.js";import"./PdfViewerSearchBar-CuFIdDz2.js";import"./chevron-up-DzumeE9d.js";import"./chevron-down-BTGBlQFb.js";import"./cross-1lQqZabN.js";import"./PdfViewerSidebar-CnYgdfi8.js";import"./index-BV1P-O2s.js";import"./index-Kp1RIk0o.js";import"./index-DSTqBN-p.js";import"./PdfViewerToolbar-Cq_FPIEi.js";import"./Button-Cz27x8wi.js";import"./chevron-right-qdaQX1qL.js";import"./Input-4hInwvvu.js";import"./search-DdHvONrb.js";import"./spin-Co01VOJV.js";import"./error-Nw58INx5.js";import"./withOsdkMetrics-3WubJygy.js";import"./makeExternalStore-GJQDziWf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
