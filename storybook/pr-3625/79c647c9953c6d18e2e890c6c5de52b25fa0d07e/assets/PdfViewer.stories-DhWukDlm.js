import{j as r,M as s}from"./iframe--BTIj_Lo.js";import{P as p}from"./pdf-viewer-DxqBu5oA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BRWeNoSQ.js";import"./preload-helper-CEmb-Q6f.js";import"./PdfRenderer-wvcNzh_X.js";import"./index-5QzPu0zS.js";import"./PdfViewer-BrJ4IiRf.js";import"./PdfViewer.module.css-DsCvr7Vo.js";import"./PdfViewerAnnotationLayer-CeXAUSwU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BvQMagaP.js";import"./PdfViewerOutlineSidebar-CiAUI5Ky.js";import"./PdfViewerSidebarHeader-COlHRVa5.js";import"./useBaseUiId-DSI_fwKo.js";import"./useControlled-CmpAGulH.js";import"./CompositeRoot-BLZHLJxQ.js";import"./CompositeItem-BRO1zZpY.js";import"./ToolbarRootContext-D91fkyhg.js";import"./composite-T6EOkG9k.js";import"./svgIconContainer-C8rvkcgB.js";import"./PdfViewerSearchBar-Dh191Qif.js";import"./chevron-up-Cab7Y0hz.js";import"./chevron-down-BWTwUwIH.js";import"./cross-BVyqMvNZ.js";import"./PdfViewerSidebar-9Prgn1XP.js";import"./index-Dz-4UQu6.js";import"./index-DfEVhqks.js";import"./index-L2eSYA45.js";import"./PdfViewerToolbar-KYDCQXhA.js";import"./Button-BuCVTh2L.js";import"./chevron-right-BKc3pgzy.js";import"./Input-BB8CG86K.js";import"./search-CP4GV30M.js";import"./spin-CPxSG_1l.js";import"./error-BmvmUc1M.js";import"./withOsdkMetrics-DnOZdfps.js";import"./makeExternalStore-DzurZ1Cf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
