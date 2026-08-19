import{j as r,M as s}from"./iframe-C0JXh_jt.js";import{P as p}from"./pdf-viewer-Dno_LdPO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CjVng7Qv.js";import"./preload-helper-0Et_7z7-.js";import"./PdfViewer-Gw7yYnhm.js";import"./index-BSrY5iMo.js";import"./BasePdfViewer-kC8PfMIr.js";import"./BasePdfViewer.module.css-3ogM_5-z.js";import"./PdfViewerAnnotationLayer-C-deBzrM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C1Vha9l0.js";import"./PdfViewerOutlineSidebar-CkYPKPE2.js";import"./PdfViewerSidebarHeader-CnDoOVTW.js";import"./useBaseUiId-Bk4impeO.js";import"./useControlled-DeS56r8l.js";import"./CompositeRoot-B_ZxOj_d.js";import"./CompositeItem-CtfPQ2IE.js";import"./ToolbarRootContext-yYdi36hQ.js";import"./composite-nAeWCUEc.js";import"./svgIconContainer-5-WGF7OP.js";import"./PdfViewerSearchBar-DxPU3GJW.js";import"./chevron-up-DV2vcpJy.js";import"./chevron-down-C561UuJZ.js";import"./cross-Bm65njCD.js";import"./PdfViewerSidebar-CRRdiivS.js";import"./index-BH6PEMN3.js";import"./index-Cs47SF-M.js";import"./index-BQYvqJ11.js";import"./PdfViewerToolbar-DBkCVFoO.js";import"./Button-DcuoF34z.js";import"./chevron-right-Cguln2lX.js";import"./Input-DiPNrK96.js";import"./search-BMjichka.js";import"./spin-DNTmvQdh.js";import"./error-DWodFhyG.js";import"./withOsdkMetrics-o4Vui-zi.js";import"./makeExternalStore-DmS2WvLR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
