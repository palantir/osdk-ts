import{j as r,M as s}from"./iframe-CtNJDH5G.js";import{P as p}from"./pdf-viewer-CQ5K8RKu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BcJUdpdJ.js";import"./preload-helper-B6Bov_yH.js";import"./PdfRenderer-BeuVHGRP.js";import"./index-z2XYq7ra.js";import"./PdfViewer-DhdDgzcG.js";import"./PdfViewer.module.css-COKFEFd2.js";import"./PdfViewerAnnotationLayer-n8YiDXf0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BPGrP6IH.js";import"./PdfViewerOutlineSidebar-D_OjXDKj.js";import"./PdfViewerSidebarHeader-4Z-_Y2qx.js";import"./useBaseUiId-2S0D4Wex.js";import"./useControlled-CST_0_q3.js";import"./CompositeRoot-DAEMH4c0.js";import"./CompositeItem-rxULTRxY.js";import"./ToolbarRootContext-p83rW4-4.js";import"./composite-B1yphZ5b.js";import"./svgIconContainer-C1uz_o6R.js";import"./PdfViewerSearchBar-BwfH2Hhe.js";import"./chevron-up-DTghNF3y.js";import"./chevron-down-BDWvu0E4.js";import"./cross-BmTxvcx-.js";import"./PdfViewerSidebar-COClSMqu.js";import"./index-BgHP8oNq.js";import"./index-BwJWoqxS.js";import"./index-DpRvis3c.js";import"./PdfViewerToolbar-xG-5ejLy.js";import"./Button-Be9aku2m.js";import"./chevron-right-BT22deU5.js";import"./Input-BTkkuHQL.js";import"./search-JAqzsTe5.js";import"./spin-Bx4G7NJP.js";import"./error-TzMVm4P5.js";import"./withOsdkMetrics-qjYcIJv8.js";import"./makeExternalStore-ZIQANtwN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
