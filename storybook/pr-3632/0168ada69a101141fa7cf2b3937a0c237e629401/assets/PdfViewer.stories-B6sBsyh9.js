import{j as r,M as s}from"./iframe-S-S35fcE.js";import{P as p}from"./pdf-viewer-UkhCN152.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-3VEvAYZS.js";import"./preload-helper-CT1kVNSx.js";import"./PdfRenderer-BVeqKvQI.js";import"./index-DUrVKU7m.js";import"./PdfViewer-CLfRv3fY.js";import"./PdfViewer.module.css-B1o2cGpx.js";import"./PdfViewerAnnotationLayer-DycYYsfn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cu4Q3czX.js";import"./PdfViewerOutlineSidebar-7Mvpfb1T.js";import"./PdfViewerSidebarHeader-BgHo3jCw.js";import"./useBaseUiId-BKTBBGoR.js";import"./useControlled-dgRJ7b5E.js";import"./CompositeRoot-TDBycN7_.js";import"./CompositeItem-AhBoEDd7.js";import"./ToolbarRootContext-QWi51hJp.js";import"./composite-CQ8R1KzH.js";import"./svgIconContainer-BKSkLAbU.js";import"./PdfViewerSearchBar-DN8Dy8jy.js";import"./chevron-up-Bj17HmV7.js";import"./chevron-down-BoduqA9e.js";import"./cross-DaNvVRMx.js";import"./PdfViewerSidebar-BjAWEq0W.js";import"./index-CEtPANoY.js";import"./index-D5szr8JT.js";import"./index-BCD83pAH.js";import"./PdfViewerToolbar-BhrHNm7o.js";import"./Button-ITY-d-__.js";import"./chevron-right-C0lIOp9q.js";import"./Input-CkIrXkc4.js";import"./search-D-lJ1XmY.js";import"./spin-DJQuMHSd.js";import"./error-CtKC4NLO.js";import"./withOsdkMetrics-Cvrism1A.js";import"./makeExternalStore-BzbsKIu-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
