import{j as r,M as s}from"./iframe-tk5AUZuQ.js";import{P as p}from"./pdf-viewer-DLkYbq1g.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KX3KEDew.js";import"./preload-helper-CINJU3SU.js";import"./PdfViewer-DZKWuziD.js";import"./index-DuoNBOcE.js";import"./BasePdfViewer-B9gCP63F.js";import"./BasePdfViewer.module.css-2oWc6wjn.js";import"./PdfViewerAnnotationLayer-7wWng9Fq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B8LsotgK.js";import"./PdfViewerOutlineSidebar-BjUUqwOr.js";import"./PdfViewerSidebarHeader-Db7Xa6uk.js";import"./useBaseUiId-DSKlezyU.js";import"./useControlled-BzYqp0YL.js";import"./CompositeRoot-BGFQLHW0.js";import"./CompositeItem-CQdT7qYH.js";import"./ToolbarRootContext-C3aNx3mE.js";import"./composite-LaLb1mLt.js";import"./svgIconContainer-C5eLdvbo.js";import"./PdfViewerSearchBar-A3euOYWk.js";import"./chevron-up-CKyl3VcN.js";import"./chevron-down-D4rOKL_0.js";import"./cross-C-_HClWz.js";import"./PdfViewerSidebar-D4u2eDSv.js";import"./index-iwECcacA.js";import"./index-BoTbZ6Eb.js";import"./index-BCbjIOTn.js";import"./PdfViewerToolbar-CS4tqwZO.js";import"./Button-B5FtVpF4.js";import"./chevron-right-CfkqqtqT.js";import"./Input-CZRpfSVM.js";import"./search-CAMWt4DD.js";import"./spin-BDiLJOe0.js";import"./error-CfTX2H1b.js";import"./withOsdkMetrics-4LSmwfdk.js";import"./makeExternalStore-DFFv7LCN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
