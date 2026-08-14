import{j as r,M as s}from"./iframe-CJPoXIdZ.js";import{P as p}from"./pdf-viewer-DJiMDZw0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-H9CembYV.js";import"./preload-helper-DGk6rLQG.js";import"./PdfViewer-KQCITZ29.js";import"./index-CXK_NZ43.js";import"./BasePdfViewer-BEO0Dt5G.js";import"./BasePdfViewer.module.css-DSySTHoV.js";import"./PdfViewerAnnotationLayer-ZnL8Tvvy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRamMl4Y.js";import"./PdfViewerOutlineSidebar-gk0fqex-.js";import"./PdfViewerSidebarHeader-Dgom6Kmu.js";import"./useBaseUiId-D6aoT1Vn.js";import"./useControlled-DXtgIEAm.js";import"./CompositeRoot-DH6w-zx0.js";import"./CompositeItem-U-yEQuGu.js";import"./ToolbarRootContext-BqWwwnkb.js";import"./composite-Brnc4VBJ.js";import"./svgIconContainer-B3Dfwo1Q.js";import"./PdfViewerSearchBar-O9jYhYf9.js";import"./chevron-up-DfpWfk06.js";import"./chevron-down-DWXqDmWL.js";import"./cross-Dq-QBGPd.js";import"./PdfViewerSidebar-BVuoHdpz.js";import"./index-DxnFXTkq.js";import"./index-Dy201pDm.js";import"./index-PUf2omP-.js";import"./PdfViewerToolbar-D3wX0e3G.js";import"./Button-CQw5BJQp.js";import"./chevron-right-B_0qMaa9.js";import"./Input-CSVKB_cm.js";import"./search-N923D2wf.js";import"./spin-BQfUVQ3S.js";import"./error-D4yXIjcx.js";import"./withOsdkMetrics-B97C_82M.js";import"./makeExternalStore-N7Z3gQ47.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
