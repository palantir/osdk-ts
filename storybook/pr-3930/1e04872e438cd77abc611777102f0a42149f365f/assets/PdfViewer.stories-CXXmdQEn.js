import{j as r,M as s}from"./iframe-PnDOzCid.js";import{P as p}from"./pdf-viewer-BiSjHzZo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-fJF9PkuG.js";import"./preload-helper-BHN2PTV1.js";import"./PdfViewer-uOJtdv6r.js";import"./index-CTuOq2_n.js";import"./BasePdfViewer-DXBv7ZQo.js";import"./BasePdfViewer.module.css-BuKptfMT.js";import"./PdfViewerAnnotationLayer-ds8Dyskj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-9Ruhza2b.js";import"./PdfViewerOutlineSidebar-DKi7n88x.js";import"./PdfViewerSidebarHeader-Crwixt1Z.js";import"./useBaseUiId-Br9Pyha2.js";import"./useControlled-B8PotZCC.js";import"./CompositeRoot-DJyhU9_n.js";import"./CompositeItem-JOSb0DW0.js";import"./ToolbarRootContext-MEy76afQ.js";import"./composite-ssNpx6D9.js";import"./svgIconContainer-DY8hFB-6.js";import"./PdfViewerSearchBar-CuBAVLOi.js";import"./chevron-up--6-Nxd_a.js";import"./chevron-down-B6MD1Z1F.js";import"./cross-CR6LhqMg.js";import"./PdfViewerSidebar-CeslZkJi.js";import"./index-Sp2kgai2.js";import"./index-BBtHZFB8.js";import"./index-BPz2iuz0.js";import"./PdfViewerToolbar-BO1GESBm.js";import"./Button-ClDfXYXt.js";import"./chevron-right-D0iszD9r.js";import"./Input-C2eDGT_k.js";import"./search-C0Gxo9Ly.js";import"./spin-CUSy8xIj.js";import"./error-ChR6Rzxj.js";import"./withOsdkMetrics-CyQcXoDt.js";import"./makeExternalStore-D0koECKe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
