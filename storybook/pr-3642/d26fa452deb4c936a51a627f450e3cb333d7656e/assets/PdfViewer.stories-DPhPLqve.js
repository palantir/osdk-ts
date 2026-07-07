import{j as r,M as s}from"./iframe-lfDwPe1R.js";import{P as p}from"./pdf-viewer-BEhqBGPu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DXCDqbXN.js";import"./preload-helper-C07-se9M.js";import"./PdfRenderer-kLHGklzD.js";import"./index-DwITW8La.js";import"./PdfViewer-uOqfwUlJ.js";import"./PdfViewer.module.css-CkMbpjzx.js";import"./PdfViewerAnnotationLayer-50gLuy-d.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D4SDlbmH.js";import"./PdfViewerOutlineSidebar-uCXtG0Ey.js";import"./PdfViewerSidebarHeader-BcTmjga0.js";import"./useBaseUiId-B5ut6wPO.js";import"./useControlled-BHVA0Lvh.js";import"./CompositeRoot-cjl9d4xg.js";import"./CompositeItem-B_jfHLzk.js";import"./ToolbarRootContext-as9SDGsf.js";import"./composite-DPTAr_Hx.js";import"./svgIconContainer-CfrqUz1g.js";import"./PdfViewerSearchBar-Bgtq0zEl.js";import"./chevron-up-C-39IrMI.js";import"./chevron-down-BxE3vSQT.js";import"./cross-JpU8ZimE.js";import"./PdfViewerSidebar-qgrO7Fsb.js";import"./index-CAOdoGk2.js";import"./index-ZzXxc5x8.js";import"./index-9tsP-8Uz.js";import"./PdfViewerToolbar-DLlLpZgM.js";import"./Button-DGcYA5iG.js";import"./chevron-right-BwCfk_yP.js";import"./Input-Df7RWKG4.js";import"./search-C7XZlnTh.js";import"./spin-DAh-OO9g.js";import"./error-DM8B4lS2.js";import"./withOsdkMetrics-Bv8GEkpY.js";import"./makeExternalStore-D_AztOJB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
