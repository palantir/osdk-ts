import{j as r,M as s}from"./iframe-BJw8xZnq.js";import{P as p}from"./pdf-viewer-COrqqRug.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CG20HhFz.js";import"./preload-helper-C2M64jAW.js";import"./PdfViewer-nGxLGuwe.js";import"./index-OZdfTJJN.js";import"./BasePdfViewer-iczFAAVV.js";import"./BasePdfViewer.module.css-sR5wHPUK.js";import"./PdfViewerAnnotationLayer-Dnz7sikT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CoQ5oZU7.js";import"./PdfViewerOutlineSidebar-BdGRavn4.js";import"./PdfViewerSidebarHeader-V2EG_2BP.js";import"./useBaseUiId-DWHIjuQg.js";import"./useControlled-CmyWRfbd.js";import"./CompositeRoot-C59OJ5fp.js";import"./CompositeItem-DURcqFyw.js";import"./ToolbarRootContext-CQeuoYdu.js";import"./composite-BmKPsG7H.js";import"./svgIconContainer-BD36YhX4.js";import"./PdfViewerSearchBar-CDBZdZYV.js";import"./chevron-up-CN2hfoB0.js";import"./chevron-down-DDWnpoJ_.js";import"./cross-ayN7c-y5.js";import"./PdfViewerSidebar-Ck7jlSds.js";import"./index-nvfKD9w9.js";import"./index-HEHrx6Vm.js";import"./index-CIQ7NXi0.js";import"./PdfViewerToolbar-Cg4kOFL2.js";import"./Button-DER1yH7e.js";import"./chevron-right-B3AzHyJl.js";import"./Input-DNqdhRno.js";import"./search-DuV2mZJ_.js";import"./spin-Ca7wpjFy.js";import"./error-DreCvNNp.js";import"./withOsdkMetrics-BnQETS83.js";import"./makeExternalStore-BEcA8UuC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
