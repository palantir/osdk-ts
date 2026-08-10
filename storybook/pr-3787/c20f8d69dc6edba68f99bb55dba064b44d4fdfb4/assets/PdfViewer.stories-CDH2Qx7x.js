import{j as r,M as s}from"./iframe-DBDiaCFH.js";import{P as p}from"./pdf-viewer-cwsVWnpn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DPr8oXcr.js";import"./preload-helper-CWzIkJz_.js";import"./PdfRenderer-C2gZYpjm.js";import"./index-D_Q-x2L7.js";import"./PdfViewer-BAUcbEBd.js";import"./PdfViewer.module.css-C50pikOj.js";import"./PdfViewerAnnotationLayer-LMUVdOql.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQNLjrTc.js";import"./PdfViewerOutlineSidebar-B_Bv0vaY.js";import"./PdfViewerSidebarHeader-OSlr5r3c.js";import"./useBaseUiId-DgDIOl-3.js";import"./useControlled-BpXAkJvi.js";import"./CompositeRoot-CAwEWW0m.js";import"./CompositeItem-B5nUuPn8.js";import"./ToolbarRootContext-A98l2Fo-.js";import"./composite-CjFrvZji.js";import"./svgIconContainer-6ctrVKh_.js";import"./PdfViewerSearchBar-B8I5Mdh4.js";import"./chevron-up-DBipe1n5.js";import"./chevron-down-Ce9XSsNp.js";import"./cross-CgXQH7_j.js";import"./PdfViewerSidebar-C7Tc0_7f.js";import"./index-Dfh84t6i.js";import"./index-BMfgUa25.js";import"./index-B5wN7D3f.js";import"./PdfViewerToolbar-LeEpJky_.js";import"./Button-pSxneB8s.js";import"./chevron-right-CPl7VnSR.js";import"./Input-DKUt-MlO.js";import"./search-CyOIbSz8.js";import"./spin-D2CZBoiQ.js";import"./error-CW5BzoP2.js";import"./withOsdkMetrics-CD41Q7Nf.js";import"./makeExternalStore-BzqUGqFb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
