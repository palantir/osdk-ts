import{j as r,M as s}from"./iframe-Dhbwn5Pb.js";import{P as p}from"./pdf-viewer-i623n1XJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CsCakFmi.js";import"./preload-helper-bx9mJ_N7.js";import"./PdfViewer-CzVDgvQs.js";import"./index-beyiGhUz.js";import"./BasePdfViewer-uBlvf6Fj.js";import"./BasePdfViewer.module.css-DGyZU-AS.js";import"./PdfViewerAnnotationLayer-C4qrntZ3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ryBwvXb2.js";import"./PdfViewerOutlineSidebar-BBMjAVrQ.js";import"./PdfViewerSidebarHeader-CLG7Wz3G.js";import"./useBaseUiId-B8Sr3cV5.js";import"./useControlled-C4j_XYHH.js";import"./CompositeRoot-CM80abuj.js";import"./CompositeItem-BvS25tKG.js";import"./ToolbarRootContext-DI7_yhQw.js";import"./composite-DZfjqgHR.js";import"./svgIconContainer-DQD_ILj4.js";import"./PdfViewerSearchBar-DcqyFdZU.js";import"./chevron-up-CqUnDnhf.js";import"./chevron-down-D6HRZEJG.js";import"./cross-Oe6Btsjt.js";import"./PdfViewerSidebar-BnKkxbmW.js";import"./index-CSnnu_0b.js";import"./index-BVg28YTW.js";import"./index-DujXq81U.js";import"./PdfViewerToolbar-BzHC9EyL.js";import"./Button-BRPJGwxW.js";import"./chevron-right-B3o_6QNi.js";import"./Input-CbPVVR1a.js";import"./search-1Sqhs6Wh.js";import"./spin-DJ8R2liG.js";import"./error-DfBoM4j6.js";import"./withOsdkMetrics-ptN3vt6M.js";import"./makeExternalStore-BGED5qiE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
