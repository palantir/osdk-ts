import{j as r,M as s}from"./iframe-iYC6vAB_.js";import{P as p}from"./pdf-viewer-00nh2QTR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-b4Ko_yEo.js";import"./preload-helper-Br5mua1v.js";import"./PdfRenderer-B8dT8iUG.js";import"./index-DpOo1606.js";import"./PdfViewer-CwEiBTqd.js";import"./PdfViewer.module.css-CQrAX1PB.js";import"./PdfViewerAnnotationLayer-faZulvkO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bd_gXPtu.js";import"./PdfViewerOutlineSidebar-BprHZVra.js";import"./PdfViewerSidebarHeader-DLtG-R0v.js";import"./useBaseUiId-B9eyS0D0.js";import"./useControlled-C6rc4bi8.js";import"./CompositeRoot-Dhd7GT3u.js";import"./CompositeItem-BMBEvSZ_.js";import"./ToolbarRootContext-DM4XCCSQ.js";import"./composite-v77FsArx.js";import"./svgIconContainer-D-ZasT0L.js";import"./PdfViewerSearchBar-DjZlXUNZ.js";import"./chevron-up-BJ1Slj29.js";import"./chevron-down-BGy8KVlz.js";import"./cross-BrbS3Icp.js";import"./PdfViewerSidebar-r2gHXpVO.js";import"./index-_Y1lHNIx.js";import"./index-QX0Uv_MK.js";import"./index-Dz2p1JfI.js";import"./PdfViewerToolbar-C3d_yEJY.js";import"./Button-CYu6aPyK.js";import"./chevron-right-CrcjA2Vu.js";import"./Input-BWavTvGX.js";import"./search-BDtw4QLY.js";import"./spin-Ds-qY6O-.js";import"./error-D4wx1m5V.js";import"./withOsdkMetrics-qijyDy6X.js";import"./makeExternalStore-Ci4r-VA-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
