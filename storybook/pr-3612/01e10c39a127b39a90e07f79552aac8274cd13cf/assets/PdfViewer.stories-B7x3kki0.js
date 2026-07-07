import{j as r,M as s}from"./iframe-C01JP_yt.js";import{P as p}from"./pdf-viewer-CX-3wKPX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DyeHu-km.js";import"./preload-helper-CwGZKdoG.js";import"./PdfRenderer-C48QG0kn.js";import"./index-DEw4js2-.js";import"./PdfViewer-BfdcjDAc.js";import"./PdfViewer.module.css-b8G711d9.js";import"./PdfViewerAnnotationLayer-DNdf04T6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qsBlozhC.js";import"./PdfViewerOutlineSidebar-BboFA9eK.js";import"./PdfViewerSidebarHeader-WfmyCiaP.js";import"./useBaseUiId-eTwxnD3s.js";import"./useControlled-CbN_0GNe.js";import"./CompositeRoot-k9zRCC-3.js";import"./CompositeItem-km0GaIC7.js";import"./ToolbarRootContext-BarR88R7.js";import"./composite-BplbcpZv.js";import"./svgIconContainer-CBpfF-IK.js";import"./PdfViewerSearchBar-cTQ3dFC5.js";import"./chevron-up-PGOBBZ5y.js";import"./chevron-down-BmWa3ECC.js";import"./cross-C_Hv8g3v.js";import"./PdfViewerSidebar-Dvj1H4WM.js";import"./index-D17txN35.js";import"./index-9lwlolfN.js";import"./index-DCJdbfgx.js";import"./PdfViewerToolbar-BRPBkOB1.js";import"./Button-CW9k7a6R.js";import"./chevron-right-zyJR6lKm.js";import"./Input-DPWFKMGE.js";import"./search--YnO-TcT.js";import"./spin-TH6-7Gmw.js";import"./error-BkRUIjkS.js";import"./withOsdkMetrics-4zliOXho.js";import"./makeExternalStore-CrEELGEd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
