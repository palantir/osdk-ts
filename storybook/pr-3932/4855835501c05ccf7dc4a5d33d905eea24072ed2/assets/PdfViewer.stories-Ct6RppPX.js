import{j as r,M as s}from"./iframe-bK06rSfy.js";import{P as p}from"./pdf-viewer-CURpduos.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-vEPtkjYQ.js";import"./preload-helper-K-1boSMk.js";import"./PdfViewer-CRMiYf_Z.js";import"./index-Bk-vtYHe.js";import"./BasePdfViewer-CYNyJUF1.js";import"./BasePdfViewer.module.css-Ca6rEYh6.js";import"./PdfViewerAnnotationLayer-NjRRDGuA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-sUwkz3QW.js";import"./PdfViewerOutlineSidebar-o0PHd-_9.js";import"./PdfViewerSidebarHeader-Wti8Ly1n.js";import"./useBaseUiId-CPLmGW2i.js";import"./useControlled-CZQizdlE.js";import"./CompositeRoot-akkniNat.js";import"./CompositeItem-ty0K8CzQ.js";import"./ToolbarRootContext-DZ3HHK_z.js";import"./composite-0P-Pw-2Q.js";import"./svgIconContainer-C_mLXjp3.js";import"./PdfViewerSearchBar-BR2vnUXy.js";import"./chevron-up-uXV28vNo.js";import"./chevron-down-DULzUbtR.js";import"./cross-DGM8nzKR.js";import"./PdfViewerSidebar-BdlHagNV.js";import"./index-DjjhcTLl.js";import"./index-BduD8wzE.js";import"./index-0oJri5g1.js";import"./PdfViewerToolbar-BEFu7TYF.js";import"./Button-C5Cur8G2.js";import"./chevron-right-DiVYJVAQ.js";import"./Input-6uol7Ijj.js";import"./search-C40Ggweq.js";import"./spin-BgR5tXjy.js";import"./error-Cj1EJ7Ed.js";import"./withOsdkMetrics-CEyQ3Kvz.js";import"./makeExternalStore-By3lhuiJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
