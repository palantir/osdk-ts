import{j as r,M as s}from"./iframe-B88mVS7j.js";import{P as p}from"./pdf-viewer-DsO4LTnp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-pZ_Ly_Ak.js";import"./preload-helper-Uh0wBuM7.js";import"./PdfRenderer-CUHm_sbK.js";import"./index-CHR_FX06.js";import"./PdfViewer-DlVmb1Pj.js";import"./PdfViewer.module.css-zrKrMQlg.js";import"./PdfViewerAnnotationLayer-CYOdXjEy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-A7VN0pH2.js";import"./PdfViewerOutlineSidebar-B0WQmd84.js";import"./PdfViewerSidebarHeader-CSIjCuMC.js";import"./useBaseUiId-B57MJH3J.js";import"./useControlled-DYXt92Xk.js";import"./CompositeRoot-MzAjvjlb.js";import"./CompositeItem-B9Z5xrKg.js";import"./ToolbarRootContext-pC6zktu4.js";import"./composite-CMcpDiPw.js";import"./svgIconContainer-DzGpDek4.js";import"./PdfViewerSearchBar-BeklpyJ8.js";import"./chevron-up-Dmryucn0.js";import"./chevron-down-CgY_yXxx.js";import"./cross-Btk_mk5d.js";import"./PdfViewerSidebar-DluPwpyY.js";import"./index-BEsZpRLK.js";import"./index-CW2oecwS.js";import"./index-kGWOF-P0.js";import"./PdfViewerToolbar-Chphe0k1.js";import"./Button-BdjBpoPj.js";import"./chevron-right-MVyaBOzp.js";import"./Input-CF934myu.js";import"./search-SYzB7163.js";import"./spin-CRmST7_k.js";import"./error-TTEpjfmJ.js";import"./withOsdkMetrics-D0OzWSyM.js";import"./makeExternalStore-Cu3F9xH0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
