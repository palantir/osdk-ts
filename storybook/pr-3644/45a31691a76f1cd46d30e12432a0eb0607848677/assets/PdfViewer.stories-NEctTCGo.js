import{j as r,M as s}from"./iframe-DxJeula4.js";import{P as p}from"./pdf-viewer-CZb-zYFb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D6K_f4Y0.js";import"./preload-helper-Bex38Dbe.js";import"./PdfRenderer-jVcehEd7.js";import"./index-B9mL7-OE.js";import"./PdfViewer-BBgPKEBo.js";import"./PdfViewer.module.css-D4VUzF2N.js";import"./PdfViewerAnnotationLayer-CRkRCEAK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-PaNR3WR1.js";import"./PdfViewerOutlineSidebar-D9F2UqVE.js";import"./PdfViewerSidebarHeader-bWnFRKah.js";import"./useBaseUiId-Bj9j4N3u.js";import"./useControlled-C0VKQlkZ.js";import"./CompositeRoot-DQnV7h6e.js";import"./CompositeItem-D_vZmQ8j.js";import"./ToolbarRootContext-B8UPYXOB.js";import"./composite-CgXRmyLY.js";import"./svgIconContainer-CdQm-4ln.js";import"./PdfViewerSearchBar-B4vf1AS9.js";import"./chevron-up-Cu7_KBbm.js";import"./chevron-down-Cj6YIXkn.js";import"./cross-29GlH8F4.js";import"./PdfViewerSidebar-NvQpyARS.js";import"./index-ca5R2I__.js";import"./index-CXYfuw6V.js";import"./index-DPz1_94q.js";import"./PdfViewerToolbar-CLTsM_y_.js";import"./Button-DWVF-Ogj.js";import"./chevron-right-yNcA5B0o.js";import"./Input-BvgM9Kwf.js";import"./search-D5t2DZQ7.js";import"./spin-CktzugRq.js";import"./error-DXjqFz8_.js";import"./withOsdkMetrics-Cx4WeBFP.js";import"./makeExternalStore-DP3Eneq0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
