import{j as r,M as s}from"./iframe-BJHh5Vyz.js";import{P as p}from"./pdf-viewer-FYGlAQHL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-5pqnWPis.js";import"./preload-helper-BEOBDvBb.js";import"./PdfViewer-DuHaafwM.js";import"./index-C19RBoJu.js";import"./BasePdfViewer-coSN94t1.js";import"./BasePdfViewer.module.css-BWhhueWU.js";import"./PdfViewerAnnotationLayer-L39He8Zf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ql8k9uN-.js";import"./PdfViewerOutlineSidebar-DubKxd9j.js";import"./PdfViewerSidebarHeader-DWpAAMO-.js";import"./useBaseUiId-eHvFwl9q.js";import"./useControlled-DRblTyuY.js";import"./CompositeRoot-B6V7gv9d.js";import"./CompositeItem-6AqsuMkJ.js";import"./ToolbarRootContext-CNIddhOS.js";import"./composite-CQHPO_Bw.js";import"./svgIconContainer-Oo_WGWgj.js";import"./PdfViewerSearchBar-B0a0S42H.js";import"./chevron-up-DCmetB5B.js";import"./chevron-down-g5IBPJxD.js";import"./cross-BcEML_Ki.js";import"./PdfViewerSidebar-nXOtl4Qy.js";import"./index-DB7oCP_Q.js";import"./index-FPDQ-3J4.js";import"./index-DuAaKh8Z.js";import"./PdfViewerToolbar-OsX2KoIS.js";import"./Button-XY8oXyEd.js";import"./chevron-right-Dn_neXyb.js";import"./Input-DhkgM9Ni.js";import"./search-CygATN7t.js";import"./spin-4Bpgk6Uk.js";import"./error-D2VhnADa.js";import"./withOsdkMetrics-DZ9Y5lOn.js";import"./makeExternalStore-nf7wa3ij.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
