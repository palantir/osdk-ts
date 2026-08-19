import{j as r,M as s}from"./iframe-Wmfq-VZM.js";import{P as p}from"./pdf-viewer-D_rleBfa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DA2qLyTh.js";import"./preload-helper-Du2S85FQ.js";import"./PdfViewer-BRVJsBlN.js";import"./index-CS0Yy-a9.js";import"./BasePdfViewer-DaT1v2rI.js";import"./BasePdfViewer.module.css-BU_DWdeR.js";import"./PdfViewerAnnotationLayer--svousWR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DoASfV0E.js";import"./PdfViewerOutlineSidebar-BSn46ZyO.js";import"./PdfViewerSidebarHeader-DJsfruwT.js";import"./useBaseUiId-BxqdO-OV.js";import"./useControlled-DYwC9uvx.js";import"./CompositeRoot-3eW7kQa4.js";import"./CompositeItem-DfjKuZSp.js";import"./ToolbarRootContext-DDVqMWIS.js";import"./composite-D8Nselg9.js";import"./svgIconContainer-Dr38566j.js";import"./PdfViewerSearchBar-CgC8Naf4.js";import"./chevron-up-CpfQdmC3.js";import"./chevron-down-BMFuph0I.js";import"./cross-DVOMc_IS.js";import"./PdfViewerSidebar-Ckkcx2tN.js";import"./index-BXiERbEc.js";import"./index-BACLQbWX.js";import"./index-Cyb_urLR.js";import"./PdfViewerToolbar-9TntSzp1.js";import"./Button-KnZtOZhW.js";import"./chevron-right-DIFCDrg5.js";import"./Input-64OaWLA3.js";import"./search-DztiYnhe.js";import"./spin-BvgEH76T.js";import"./error-DX3SW9eg.js";import"./withOsdkMetrics-Csx3CAie.js";import"./makeExternalStore-DELeA3LK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
