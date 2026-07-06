import{j as r,M as s}from"./iframe-DAPgzWjn.js";import{P as p}from"./pdf-viewer-ChSmviDi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BgwcT1Il.js";import"./preload-helper-BEd-4Gka.js";import"./PdfRenderer-BuOmCwUa.js";import"./index-B2ogQsi-.js";import"./PdfViewer-sb1_5FXR.js";import"./PdfViewer.module.css-BhapFQi6.js";import"./PdfViewerAnnotationLayer-b0RvyYyl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2Zg_tAi.js";import"./PdfViewerOutlineSidebar-CYj4yMCn.js";import"./PdfViewerSidebarHeader-CeWRPGzC.js";import"./useBaseUiId-BUnrxJyu.js";import"./useControlled-DXipzcSB.js";import"./CompositeRoot-C7ez13pL.js";import"./CompositeItem-7K2HqypZ.js";import"./ToolbarRootContext-Vn1EeKf6.js";import"./composite-B-nrRoLl.js";import"./svgIconContainer-wLpyQ5j_.js";import"./PdfViewerSearchBar-CpiGSxbz.js";import"./chevron-up-DWMP9W-U.js";import"./chevron-down-B3DiJH7z.js";import"./cross-Gte2Vid0.js";import"./PdfViewerSidebar-BCtvRqeV.js";import"./index-DeazCBtH.js";import"./index-DDnCWxjC.js";import"./index-CxN7QWX0.js";import"./PdfViewerToolbar-B6fzlE-a.js";import"./Button-BLk5IMLy.js";import"./chevron-right-DZGQddrF.js";import"./Input-CnjW5aH-.js";import"./search-DuQ8pGMe.js";import"./spin-B4ZBapxY.js";import"./error-Jqea99yo.js";import"./withOsdkMetrics-rekkd109.js";import"./makeExternalStore-Ifw53jXv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
