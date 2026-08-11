import{j as r,M as s}from"./iframe-DlM6B-FB.js";import{P as p}from"./pdf-viewer-DzGT63Cw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DrlC0GL3.js";import"./preload-helper-u2RLrIGI.js";import"./PdfViewer-BWd9Kfw0.js";import"./index-CYQRwdVV.js";import"./BasePdfViewer-DAppbrys.js";import"./BasePdfViewer.module.css-HwELUI1n.js";import"./PdfViewerAnnotationLayer-IiPstNt8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3P14BQM.js";import"./PdfViewerOutlineSidebar-1rOlrnu4.js";import"./PdfViewerSidebarHeader-DhjVHcsW.js";import"./useBaseUiId-DRE93LYc.js";import"./useControlled-CsLIsW3G.js";import"./CompositeRoot-BIXrPcRL.js";import"./CompositeItem-Btf0WYJg.js";import"./ToolbarRootContext-BiI_JxAm.js";import"./composite-CrTNbjQa.js";import"./svgIconContainer-noCDTri9.js";import"./PdfViewerSearchBar-BEIrLWwV.js";import"./chevron-up-Bsu3HCtJ.js";import"./chevron-down-CsEGKzIn.js";import"./cross-BZZx8k18.js";import"./PdfViewerSidebar-BMcF1Uom.js";import"./index-BDbD87hK.js";import"./index-B0PJMKha.js";import"./index-57kYohf7.js";import"./PdfViewerToolbar-DXxzSPfw.js";import"./Button-A7YjjwPO.js";import"./chevron-right-or05yw_c.js";import"./Input-D_WeNPfg.js";import"./search-BYOBZNp-.js";import"./spin-DIR_fgcY.js";import"./error-DqZBJOa8.js";import"./withOsdkMetrics-CvYqftk7.js";import"./makeExternalStore-0nWRtaCT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
