import{j as r,M as s}from"./iframe-YLVYuxq8.js";import{P as p}from"./pdf-viewer-Dqzk1asV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CulKZlxQ.js";import"./preload-helper-CZYe282M.js";import"./PdfRenderer-CEKHq_6r.js";import"./index-DY_dJJUl.js";import"./PdfViewer-aS0lbASE.js";import"./PdfViewer.module.css-BS0LWSj_.js";import"./PdfViewerAnnotationLayer-4dIWmFgL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-iLexTN0Z.js";import"./PdfViewerOutlineSidebar-AxLaBwH0.js";import"./PdfViewerSidebarHeader-PYSwgqeM.js";import"./useBaseUiId-3iJUSLaS.js";import"./useControlled-DBv4Redr.js";import"./CompositeRoot-Dlfl2S5f.js";import"./CompositeItem-YtlzwsY_.js";import"./ToolbarRootContext-M6GN99cc.js";import"./composite-BMtoOrB4.js";import"./svgIconContainer-DXsK1PD8.js";import"./PdfViewerSearchBar-V05obEw5.js";import"./chevron-up-1cXGlRzy.js";import"./chevron-down-BRPm4oUM.js";import"./cross-Cy_GZ1mj.js";import"./PdfViewerSidebar-CJ_AUBpG.js";import"./index-C9YxjGxI.js";import"./index-CJ0167O5.js";import"./index-DXgeTFVX.js";import"./PdfViewerToolbar-DcHRqbjh.js";import"./Button-Hm75H09p.js";import"./chevron-right-v94TSb1O.js";import"./Input-BInpNgkE.js";import"./search-CWtYIIQK.js";import"./spin-DRMqETnO.js";import"./error-JbD-MfdK.js";import"./withOsdkMetrics-jluIddj1.js";import"./makeExternalStore-CD3PSPFW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
