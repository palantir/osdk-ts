import{j as r,M as s}from"./iframe-Z2aXJPdd.js";import{P as p}from"./pdf-viewer-BySgAQf5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cxo0hcN7.js";import"./preload-helper-HH98OTG_.js";import"./PdfRenderer-Cv1Y5xgC.js";import"./index-BDwbbs7g.js";import"./PdfViewer-BTvA9YU5.js";import"./PdfViewer.module.css-BpHgeH5v.js";import"./PdfViewerAnnotationLayer-CUxBbvv8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5kCCeMs.js";import"./PdfViewerOutlineSidebar-DdrQqoG3.js";import"./PdfViewerSidebarHeader-CGNUHePS.js";import"./useBaseUiId-DsRLOs7K.js";import"./useControlled-CwIh3vpr.js";import"./CompositeRoot-wDdenUGR.js";import"./CompositeItem-yg9xry01.js";import"./ToolbarRootContext-By8aQOR7.js";import"./composite-D_ju5rZt.js";import"./svgIconContainer-6r4Cq3if.js";import"./PdfViewerSearchBar-D7gRBkmy.js";import"./chevron-up-Cywj59eK.js";import"./chevron-down-DdKTBYWI.js";import"./cross-BUXL1pRc.js";import"./PdfViewerSidebar-B7iAbGJZ.js";import"./index-r54kb4_d.js";import"./index-wmvnWSa4.js";import"./index-CMHsxFJx.js";import"./PdfViewerToolbar-CBNRQku3.js";import"./Button-SBHQNUwv.js";import"./chevron-right-s0fSMf9W.js";import"./Input-Cnfz6hBh.js";import"./search-CnOrU0Lt.js";import"./spin-BEH_ZvIz.js";import"./error-lpxbkNMO.js";import"./withOsdkMetrics-YL2Lw-aJ.js";import"./makeExternalStore-tnX_KQS7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
