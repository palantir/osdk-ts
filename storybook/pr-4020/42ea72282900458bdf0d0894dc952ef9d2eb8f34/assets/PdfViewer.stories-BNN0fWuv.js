import{j as r,M as s}from"./iframe-BAOOmxmu.js";import{P as p}from"./pdf-viewer-BSyTAFYD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CdZEp0bE.js";import"./preload-helper-BIm_Fr-4.js";import"./PdfViewer-Kg5H6xml.js";import"./index-QY-KQRXF.js";import"./BasePdfViewer-0LGqUP6o.js";import"./BasePdfViewer.module.css-CKHc8l2m.js";import"./PdfViewerAnnotationLayer-D7NeaZdT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-R8Mzb3hh.js";import"./PdfViewerOutlineSidebar-B5l42gx8.js";import"./PdfViewerSidebarHeader-B3wY-it_.js";import"./useBaseUiId-B4ZR21gm.js";import"./useControlled-CuqfVZxX.js";import"./CompositeRoot-C4ZGEnfk.js";import"./CompositeItem-BPZd139z.js";import"./ToolbarRootContext-C5dbAl4m.js";import"./composite-DMwFPLnT.js";import"./svgIconContainer-Bp5LkjRC.js";import"./PdfViewerSearchBar-lVeLQKoU.js";import"./chevron-up-C8zsWRrD.js";import"./chevron-down-Dwrs1hNu.js";import"./cross-h2O47eJg.js";import"./PdfViewerSidebar-OobbV5uj.js";import"./index-DyTfUGkB.js";import"./index-DDBX-eT9.js";import"./index-20cLn6S1.js";import"./PdfViewerToolbar-CSPdXwHd.js";import"./Button-btye1J53.js";import"./chevron-right-BTGap8OS.js";import"./Input-d_-ySvYA.js";import"./search-D68AVNns.js";import"./spin-i4j-9qcy.js";import"./error-BswP0WVl.js";import"./withOsdkMetrics-C7ktc4nn.js";import"./makeExternalStore-DNiKFXrW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
