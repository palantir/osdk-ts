import{j as r,M as s}from"./iframe-Y7AblKoo.js";import{P as p}from"./pdf-viewer-BdkWjhjj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-YyL5vzpC.js";import"./preload-helper-CK7oVkVW.js";import"./PdfViewer-ryeNkaHF.js";import"./index-D2h1-o7T.js";import"./BasePdfViewer-CppR-ryd.js";import"./BasePdfViewer.module.css-CfnpjgC2.js";import"./PdfViewerAnnotationLayer-FYCuPzEE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-G4d8z3q4.js";import"./PdfViewerOutlineSidebar-D2XIjUY8.js";import"./PdfViewerSidebarHeader-iurmSnxT.js";import"./useBaseUiId-BuabQztq.js";import"./useControlled-kT-I11in.js";import"./CompositeRoot-CMgz5cWv.js";import"./CompositeItem-DBKT_2ic.js";import"./ToolbarRootContext-Dcch5f3c.js";import"./composite-DhLfKT7-.js";import"./svgIconContainer-DrxH4qgx.js";import"./PdfViewerSearchBar-L_75o1-m.js";import"./chevron-up-AiwV9X6q.js";import"./chevron-down-CwpvKa_6.js";import"./cross-EOw4MIdf.js";import"./PdfViewerSidebar-DjyAOkwo.js";import"./index-buXngsZU.js";import"./index-BVzBDJE3.js";import"./index-CAOvocee.js";import"./PdfViewerToolbar-DRsIuUoP.js";import"./Button-DCccMYap.js";import"./chevron-right-BY9KU81G.js";import"./Input-CJLZHe4E.js";import"./search-DtmxDMt7.js";import"./spin-Dykwxtka.js";import"./error-G0IfSF5E.js";import"./withOsdkMetrics-DpuFL858.js";import"./makeExternalStore-CPSblPES.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
