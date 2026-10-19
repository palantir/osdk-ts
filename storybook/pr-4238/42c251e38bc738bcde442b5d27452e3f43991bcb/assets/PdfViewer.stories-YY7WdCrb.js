import{j as r,M as s}from"./iframe-D2f1Nzwk.js";import{P as p}from"./pdf-viewer-DZPQhisZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C3MpiQlu.js";import"./preload-helper-oV1Eeolq.js";import"./PdfViewer-DJjtILnj.js";import"./index-DLHsiDYZ.js";import"./BasePdfViewer-OrIklri3.js";import"./BasePdfViewer.module.css-CrPJoriQ.js";import"./PdfViewerAnnotationLayer-COOeHCiB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5Fv9oIp.js";import"./PdfViewerOutlineSidebar-Cu49acCY.js";import"./PdfViewerSidebarHeader-D48pyq8v.js";import"./useBaseUiId-C1fFwhw7.js";import"./useControlled-CNjTn84h.js";import"./CompositeRoot-C3WOkFpc.js";import"./CompositeItem-C741riYb.js";import"./ToolbarRootContext-Dx7XJj5N.js";import"./composite-CiG9-8W_.js";import"./svgIconContainer-CmuFo95M.js";import"./PdfViewerSearchBar-gCsSZURr.js";import"./chevron-up-BIBJFJcV.js";import"./chevron-down-DJdsQouz.js";import"./cross-DkwiluwT.js";import"./PdfViewerSidebar-BYt7PKB7.js";import"./index-D02xz1tz.js";import"./index-QYMyWYDY.js";import"./index-BojiIOfH.js";import"./PdfViewerToolbar-DzQpMbfe.js";import"./Button-D6z8871L.js";import"./chevron-right-DVFDenCz.js";import"./Input-DGocKpsh.js";import"./search-Cf99U-Bj.js";import"./spin-BJBnDCGX.js";import"./error-BeTADbMo.js";import"./withOsdkMetrics-BCs1456K.js";import"./makeExternalStore-DTw3LndD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
