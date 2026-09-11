import{j as r,M as s}from"./iframe-o2qKykKB.js";import{P as p}from"./pdf-viewer-Ca9GJvWc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-kdmHXVw8.js";import"./preload-helper-C27-ZLGM.js";import"./PdfViewer-CwmP8XFn.js";import"./index-BGljrmTZ.js";import"./BasePdfViewer-JLZ5aQAG.js";import"./BasePdfViewer.module.css-XDXntru3.js";import"./PdfViewerAnnotationLayer-BqmqEl29.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHdo8AqZ.js";import"./PdfViewerOutlineSidebar-CEPsOO84.js";import"./PdfViewerSidebarHeader-CVfEZK8l.js";import"./useBaseUiId-OPidnSdm.js";import"./useControlled-j9Xx4bgV.js";import"./CompositeRoot-BCh-MGen.js";import"./CompositeItem-Kr2j0ah9.js";import"./ToolbarRootContext-CkkOTkz9.js";import"./composite-BLm43g8N.js";import"./svgIconContainer-BhaYgLqs.js";import"./PdfViewerSearchBar-BwEnBoF8.js";import"./chevron-up-DRSSxpGv.js";import"./chevron-down-QYJ-TtLl.js";import"./cross-BTB24VP7.js";import"./PdfViewerSidebar-C4gMXe8L.js";import"./index-D5B8A__1.js";import"./index-DNh70Okq.js";import"./index-CvhnTB6X.js";import"./PdfViewerToolbar-DVN_CShC.js";import"./Button-DlN0yFDg.js";import"./chevron-right-brh_NJ1y.js";import"./Input-3CD54kGq.js";import"./search-C1CYCLwX.js";import"./spin-7h3Q7WYa.js";import"./error-UQwhkZq_.js";import"./withOsdkMetrics-ByPWr5gV.js";import"./makeExternalStore-DBMN3aEP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
