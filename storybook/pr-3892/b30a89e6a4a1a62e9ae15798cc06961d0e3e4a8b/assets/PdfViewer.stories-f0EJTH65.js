import{j as r,M as s}from"./iframe-B0nz0RxR.js";import{P as p}from"./pdf-viewer-eaD4t2Cd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DZH5SpEU.js";import"./preload-helper-CF-MyLPB.js";import"./PdfViewer-Y87VF9Tb.js";import"./index-DW-ZtONF.js";import"./BasePdfViewer-DJT76WiQ.js";import"./BasePdfViewer.module.css-B00BajQu.js";import"./PdfViewerAnnotationLayer-B3kq1fJ6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DNTVLv9R.js";import"./PdfViewerOutlineSidebar-YcCf0MNf.js";import"./PdfViewerSidebarHeader-w1KGhzWK.js";import"./useBaseUiId-Ghzmj7pG.js";import"./useControlled-DRdL5BBf.js";import"./CompositeRoot-B6rPef1_.js";import"./CompositeItem-gUbeOnNS.js";import"./ToolbarRootContext-C9pMoC1w.js";import"./composite-BzNBSeWl.js";import"./svgIconContainer-BcZsRKUx.js";import"./PdfViewerSearchBar-D18smEc7.js";import"./chevron-up-2h-x2yN6.js";import"./chevron-down-CvQujDzB.js";import"./cross-f1j6tGxU.js";import"./PdfViewerSidebar-VKXe6D-U.js";import"./index-B5Cb_2HF.js";import"./index-BMFV8-ce.js";import"./index-DeqT0Eb7.js";import"./PdfViewerToolbar-BhtgHe4p.js";import"./Button-oaCKos6Q.js";import"./chevron-right-BXX4-Kea.js";import"./Input-D4YoHp_x.js";import"./search-TA_vispt.js";import"./spin-B2GZz0v1.js";import"./error-mP_--TcG.js";import"./withOsdkMetrics-loWoDH6-.js";import"./makeExternalStore-_fQcqJ1G.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
