import{j as r,M as s}from"./iframe-uTXwVL4F.js";import{P as p}from"./pdf-viewer-BDw5ARr0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DajvcqvH.js";import"./preload-helper-BL2Rlz3w.js";import"./PdfRenderer-CrEXthrv.js";import"./index-CedNq3PH.js";import"./PdfViewer-B1Ntd2OL.js";import"./PdfViewer.module.css-BOTtm3gx.js";import"./PdfViewerAnnotationLayer-CoQoRDMK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CzghCiED.js";import"./PdfViewerOutlineSidebar-BFaOjJqx.js";import"./PdfViewerSidebarHeader-BCuhywCD.js";import"./useBaseUiId-kneBe7Np.js";import"./useControlled-C-sFKJDs.js";import"./CompositeRoot-DES80RKr.js";import"./CompositeItem-CVK_sYIm.js";import"./ToolbarRootContext-CstOX0ey.js";import"./composite-DGATLN9V.js";import"./svgIconContainer-Cygaw58B.js";import"./PdfViewerSearchBar-CdYz65c7.js";import"./chevron-up-BJ1xv9xs.js";import"./chevron-down-dkj0UCKy.js";import"./cross-BiHialsl.js";import"./PdfViewerSidebar-DI6O-Vmr.js";import"./index-CNJYjch8.js";import"./index-HeZ0ZZML.js";import"./index-CKWuL0RK.js";import"./PdfViewerToolbar-DWYsCz7h.js";import"./Button-B7QYvEdy.js";import"./chevron-right-BeXuO9U-.js";import"./Input-lAt0QBYx.js";import"./search-DACJTo3N.js";import"./spin-1QnDRdMr.js";import"./error-B6vwRxa-.js";import"./withOsdkMetrics-C7DoBq42.js";import"./makeExternalStore-c8aY4eVN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
