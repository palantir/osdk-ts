import{j as r,M as s}from"./iframe-BMtSmCiC.js";import{P as p}from"./pdf-viewer-B6quVEwj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D9LJb7K2.js";import"./preload-helper-NIBkOjBn.js";import"./PdfRenderer-C2EzsoDw.js";import"./index-py39XDsr.js";import"./PdfViewer-Dofa9eV2.js";import"./PdfViewer.module.css-vp7kDXip.js";import"./PdfViewerAnnotationLayer-V9SoQSMN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjQ3TVXA.js";import"./PdfViewerOutlineSidebar-DaReAC8v.js";import"./PdfViewerSidebarHeader-BfgSK1gx.js";import"./useBaseUiId-CTbwHvzT.js";import"./useControlled-j6tOUI6l.js";import"./CompositeRoot-BUEkPNKs.js";import"./CompositeItem-D_37PXYX.js";import"./ToolbarRootContext-DfNgwKSk.js";import"./composite-pXZ88G6n.js";import"./svgIconContainer-BEirRmCI.js";import"./PdfViewerSearchBar-DNqLHRvW.js";import"./chevron-up-ThWZsxpm.js";import"./chevron-down-BBkZ12vx.js";import"./cross-CC3kqzKg.js";import"./PdfViewerSidebar-CSE55sk4.js";import"./index-5sH2ARV_.js";import"./index-C5W6Kzqo.js";import"./index-DgH8S27r.js";import"./PdfViewerToolbar-D0cFitkz.js";import"./Button-BYUzSZ09.js";import"./chevron-right-DNcQUUkF.js";import"./Input-DKQqZn4l.js";import"./search-DtaouECH.js";import"./spin-C_GF-G_N.js";import"./error-osbVx-Bf.js";import"./withOsdkMetrics-Az6IiGLG.js";import"./makeExternalStore-D6p4PJo6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
