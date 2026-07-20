import{j as r,M as s}from"./iframe-DJo2MCHb.js";import{P as p}from"./pdf-viewer-KVGhDZfD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLkWpcTx.js";import"./preload-helper-BhQpgkSD.js";import"./PdfRenderer-VJ55uQYG.js";import"./index-yUhc8QiX.js";import"./PdfViewer-BPUL-44f.js";import"./PdfViewer.module.css-D6z2lZKx.js";import"./PdfViewerAnnotationLayer-BuOxWU4-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Da_01_ye.js";import"./PdfViewerOutlineSidebar-DWQ5n_yW.js";import"./PdfViewerSidebarHeader-BPn3hPce.js";import"./useBaseUiId-CyBb3Nkr.js";import"./useControlled-DORsT8QV.js";import"./CompositeRoot-Cem-X5bk.js";import"./CompositeItem-B7jXrFss.js";import"./ToolbarRootContext-CJzpUse0.js";import"./composite-Cixp0KC7.js";import"./svgIconContainer-Dtbw7CD1.js";import"./PdfViewerSearchBar-BcgiICLZ.js";import"./chevron-up-dF0l0OoV.js";import"./chevron-down-o2eoXyoD.js";import"./cross-DyQlON8o.js";import"./PdfViewerSidebar-BCxE_ihw.js";import"./index-Bmmqp1u6.js";import"./index-DY7_DYP1.js";import"./index-lXriiM9_.js";import"./PdfViewerToolbar-C9xCVXmC.js";import"./Button-B2BrFzwV.js";import"./chevron-right-BWbsdONL.js";import"./Input-CGa0Q2Ds.js";import"./search-BzqLxMDC.js";import"./spin-o_e8WxF6.js";import"./error-D1KI60yM.js";import"./withOsdkMetrics-DhezUvH0.js";import"./makeExternalStore-DhsEMGLC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
