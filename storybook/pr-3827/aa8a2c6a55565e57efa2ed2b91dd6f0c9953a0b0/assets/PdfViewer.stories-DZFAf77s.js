import{j as r,M as s}from"./iframe-BB2E5Jix.js";import{P as p}from"./pdf-viewer-DLualmkh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bnxu960_.js";import"./preload-helper-XstBZj0v.js";import"./PdfRenderer-COAkDBea.js";import"./index-zGb1pbmH.js";import"./PdfViewer-Cp0kc8ei.js";import"./PdfViewer.module.css-Cj-0TMsM.js";import"./PdfViewerAnnotationLayer-BCe6fkvP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_Mtmy39N.js";import"./PdfViewerOutlineSidebar-ETHLRaq3.js";import"./PdfViewerSidebarHeader-D_9vFV4-.js";import"./useBaseUiId-T8MHyWrJ.js";import"./useControlled-4jwl_yb5.js";import"./CompositeRoot-C8juehEl.js";import"./CompositeItem-Cc57-add.js";import"./ToolbarRootContext-VydJXhkq.js";import"./composite-DQwmFGUd.js";import"./svgIconContainer-CXjFTKQc.js";import"./PdfViewerSearchBar-DRkOIkT4.js";import"./chevron-up-DRemdPcV.js";import"./chevron-down-C_RItkCu.js";import"./cross-B8YgiCYl.js";import"./PdfViewerSidebar-9kbOfVZM.js";import"./index-D-e5E8TN.js";import"./index-Cft78AYh.js";import"./index-CLogktU3.js";import"./PdfViewerToolbar-B6G-aQ2Z.js";import"./Button-JlhJjdd0.js";import"./chevron-right-DqJAddDF.js";import"./Input-vhcxgD7F.js";import"./search-DPNy6EUf.js";import"./spin-Ba7PTCQG.js";import"./error-DMB-1Uz3.js";import"./withOsdkMetrics-D-4z6JPU.js";import"./makeExternalStore-D2tsWs0v.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
