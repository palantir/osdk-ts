import{j as r,M as s}from"./iframe-KU9UF-HD.js";import{P as p}from"./pdf-viewer-B6acIuHU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DweG-jw_.js";import"./preload-helper-Dqh0wZ2N.js";import"./PdfRenderer-77inaNlv.js";import"./index-C_Sqgn7G.js";import"./PdfViewer-gLgtTNh7.js";import"./PdfViewer.module.css-DBRoo4kw.js";import"./PdfViewerAnnotationLayer-ByvKcJ5K.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-cnDEYEe0.js";import"./PdfViewerOutlineSidebar-BaubXSQe.js";import"./PdfViewerSidebarHeader-CIrsPsLk.js";import"./useBaseUiId-DoU6rO79.js";import"./useControlled-BFyqY8nn.js";import"./CompositeRoot-B--QxYsL.js";import"./CompositeItem-CUcahBHg.js";import"./ToolbarRootContext-Dxnyr84z.js";import"./composite-CgL8wB-0.js";import"./svgIconContainer-B9-V7dQw.js";import"./PdfViewerSearchBar-CK52YdFZ.js";import"./chevron-up-CFA4jhsr.js";import"./chevron-down-CVXhBImd.js";import"./cross-DKVxU0vG.js";import"./PdfViewerSidebar-DnGjqwEr.js";import"./index-B-ApflCd.js";import"./index-COBeGTh1.js";import"./index-DvccYxK1.js";import"./PdfViewerToolbar-DVv6ucBZ.js";import"./Button-Dx_Hy474.js";import"./chevron-right-Bd5Zzmrd.js";import"./Input-D0hsZPVl.js";import"./search-CM8qjOlV.js";import"./spin-DQ4lcO2R.js";import"./error-6yDwFave.js";import"./withOsdkMetrics-CyPRFmfB.js";import"./makeExternalStore-_neCuudA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
