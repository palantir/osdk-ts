import{j as r,M as s}from"./iframe-DMczly9y.js";import{P as p}from"./pdf-viewer-BuvcUngF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CTMcw00W.js";import"./preload-helper--MTjbHr9.js";import"./PdfRenderer-BN0WwoTZ.js";import"./index-Bkh435fV.js";import"./PdfViewer-VO8sX_d4.js";import"./PdfViewer.module.css-DhPLyH_N.js";import"./PdfViewerAnnotationLayer-CfJVMvee.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DpH2Nhy5.js";import"./PdfViewerOutlineSidebar-BBuORxxH.js";import"./PdfViewerSidebarHeader-t5TXfUJx.js";import"./useBaseUiId-GPSmMHjO.js";import"./useControlled-Dgcw26YK.js";import"./CompositeRoot-Dk7_z6aJ.js";import"./CompositeItem-DFx7eN5O.js";import"./ToolbarRootContext-9muea_6F.js";import"./composite-Da_TEeE3.js";import"./svgIconContainer-B0onUOf2.js";import"./PdfViewerSearchBar-xlSyBRbS.js";import"./chevron-up-EC2qBrmA.js";import"./chevron-down-CD6IwESQ.js";import"./cross-DJDSZb9x.js";import"./PdfViewerSidebar-C0oqUH_s.js";import"./index-FexXw7Td.js";import"./index-BvNyxsvF.js";import"./index-D-g0-3Wt.js";import"./PdfViewerToolbar-BpuHPczf.js";import"./Button-DRWvgaAt.js";import"./chevron-right-CnPyxDgf.js";import"./Input-0vu4-5sX.js";import"./search-CMZ9-Ov6.js";import"./spin-BnVapKwe.js";import"./error-D1elG5xT.js";import"./withOsdkMetrics-DQGwsIbO.js";import"./makeExternalStore-DRTEK6Li.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
