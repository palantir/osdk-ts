import{j as r,M as s}from"./iframe-Cvg6LRXh.js";import{P as p}from"./pdf-viewer-B1wBZJjX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CTpBuGqQ.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-hg-UpCex.js";import"./index-DARPzGxW.js";import"./PdfViewer-D0pAnING.js";import"./PdfViewer.module.css-wEbVorgh.js";import"./PdfViewerAnnotationLayer-2M_59AbX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEnIPzuo.js";import"./PdfViewerOutlineSidebar-L6tmKNAZ.js";import"./PdfViewerSidebarHeader-DTvxSCIh.js";import"./useBaseUiId-C7RD8Ihy.js";import"./useControlled-7IKMGCQs.js";import"./CompositeRoot-CCdw8ZUN.js";import"./CompositeItem-qB-4NmJE.js";import"./ToolbarRootContext-D_XKc6C6.js";import"./composite-BzX0_1DB.js";import"./svgIconContainer-CgKmJVnh.js";import"./PdfViewerSearchBar-DNN-IBGi.js";import"./chevron-up-GrKPH-ge.js";import"./chevron-down-WYp2EVPB.js";import"./cross-CJGOyWpT.js";import"./PdfViewerSidebar-B4jxgGRm.js";import"./index-OAow_yCT.js";import"./index-BqjDhDmH.js";import"./index-RfSINhas.js";import"./PdfViewerToolbar-0t-AtKVc.js";import"./Button-BlXLwZvR.js";import"./chevron-right-CH11jiO7.js";import"./Input-Cu6l6kGv.js";import"./search-tQ6-x_y1.js";import"./spin-CqtOwowK.js";import"./error-6NhAXwuF.js";import"./withOsdkMetrics-2AjlXW01.js";import"./makeExternalStore-BJ7Sss0m.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
