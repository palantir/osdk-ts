import{j as r,M as s}from"./iframe-CujHdoKl.js";import{P as p}from"./pdf-viewer-BCXQ7dpF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B2-rQhWF.js";import"./preload-helper-DUcMUNOo.js";import"./PdfViewer-BMfzkCew.js";import"./index-aOGJb9q1.js";import"./BasePdfViewer-CuZPt6QC.js";import"./BasePdfViewer.module.css-D0dTtF8O.js";import"./PdfViewerAnnotationLayer-cYCnPgC2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C3XzbGW1.js";import"./PdfViewerOutlineSidebar-DzM8GMYh.js";import"./PdfViewerSidebarHeader-Cr7OwAwY.js";import"./useBaseUiId-BHrXH9vn.js";import"./useControlled-BiZE5Ppy.js";import"./CompositeRoot-Cb-TEfAj.js";import"./CompositeItem-D0zI7JSM.js";import"./ToolbarRootContext-wL6J-yBR.js";import"./composite-DHm2bjTW.js";import"./svgIconContainer-D9IeJ3ww.js";import"./PdfViewerSearchBar-Va6OYlOT.js";import"./chevron-up-CggkAp_y.js";import"./chevron-down-BJYoVZT-.js";import"./cross-BwDPZyT4.js";import"./PdfViewerSidebar-bkxJncG6.js";import"./index-Be1gSIYV.js";import"./index-_eiMg_S8.js";import"./index-CDyeI7sk.js";import"./PdfViewerToolbar-BiOwFBxc.js";import"./Button-C0UeLBcI.js";import"./chevron-right-LyxxBIe3.js";import"./Input-CJ3jjDAP.js";import"./search-DMHXQU1s.js";import"./spin-BTcT5Nsk.js";import"./error-DMVxncVX.js";import"./withOsdkMetrics-DEAu1aG0.js";import"./makeExternalStore-D0Tfgzjd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
