import{j as r,M as s}from"./iframe-D1bftbFK.js";import{P as p}from"./pdf-viewer-Bfqm3cZ_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CHo0aPTd.js";import"./preload-helper-CNIzgNg3.js";import"./PdfRenderer-ChF7hBCF.js";import"./index-D1loE7aj.js";import"./PdfViewer-Dpb3vewP.js";import"./PdfViewer.module.css-Dr-HVx6I.js";import"./PdfViewerAnnotationLayer-CydX0C66.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cnm4MYV_.js";import"./PdfViewerOutlineSidebar-B6ThAIMd.js";import"./PdfViewerSidebarHeader-BXVskzNM.js";import"./useBaseUiId-Bvl0vz9p.js";import"./useControlled-BUXx323f.js";import"./CompositeRoot-DJfUzXfB.js";import"./CompositeItem-Bk5dEGxZ.js";import"./ToolbarRootContext-Rh3iVkuL.js";import"./composite-DOqV9ejV.js";import"./svgIconContainer-Dqjbb7fg.js";import"./PdfViewerSearchBar-BiAdbYVE.js";import"./chevron-up-YNwmfyI3.js";import"./chevron-down-rJxkhghQ.js";import"./cross-DzZeKJfj.js";import"./PdfViewerSidebar-COyNWRBC.js";import"./index-C98djebO.js";import"./index-dOf4Grlg.js";import"./index-DlVzaQME.js";import"./PdfViewerToolbar-B0nSJVx1.js";import"./Button-5rYiDiWd.js";import"./chevron-right-CYqWMLSw.js";import"./Input-RPabR7fY.js";import"./search-vcgo5x2D.js";import"./spin-BZfqU-NO.js";import"./error-BwiNsD3B.js";import"./withOsdkMetrics-I5lFWqrI.js";import"./makeExternalStore-BoS1QRtv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
