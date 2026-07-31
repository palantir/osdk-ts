import{j as r,M as s}from"./iframe-CVSzcR9w.js";import{P as p}from"./pdf-viewer-Bk27rN64.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BkvhnAqh.js";import"./preload-helper-BmmGuI8h.js";import"./PdfRenderer-DOTUDnP5.js";import"./index-CoAdBXlo.js";import"./PdfViewer-B_nrA6pO.js";import"./PdfViewer.module.css-B2jj36pi.js";import"./PdfViewerAnnotationLayer-CkRmhsL-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BYfAoHiM.js";import"./PdfViewerOutlineSidebar-CszkvQAO.js";import"./PdfViewerSidebarHeader-CEaZJ91B.js";import"./useBaseUiId-pwNrWxdW.js";import"./useControlled-D5f5j6Pp.js";import"./CompositeRoot-D0qRlxj6.js";import"./CompositeItem-Bp7fB8eh.js";import"./ToolbarRootContext-DvS1wowG.js";import"./composite-C1Itxjsp.js";import"./svgIconContainer-KW-Ldlhm.js";import"./PdfViewerSearchBar-dOx3C1lF.js";import"./chevron-up-DhxQS0kq.js";import"./chevron-down-DgBBMt89.js";import"./cross-V8sJpGew.js";import"./PdfViewerSidebar-CBDbPd9L.js";import"./index-__u3if6D.js";import"./index-7SZNtxet.js";import"./index-qmxryskj.js";import"./PdfViewerToolbar-D0nD_GG9.js";import"./Button-DeOcB25O.js";import"./chevron-right-Drzy4AQP.js";import"./Input-BoTWr8hd.js";import"./search-BnG6tzYG.js";import"./spin-DHM0THfu.js";import"./error-CyOfkgHN.js";import"./withOsdkMetrics-yQOKEog8.js";import"./makeExternalStore-B7Vg_OOg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
