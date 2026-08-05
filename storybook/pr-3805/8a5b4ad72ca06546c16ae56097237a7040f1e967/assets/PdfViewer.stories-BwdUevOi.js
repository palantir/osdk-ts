import{j as r,M as s}from"./iframe-BKT26ECK.js";import{P as p}from"./pdf-viewer-BlH1wIHZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Y_7GJ3M2.js";import"./preload-helper-fzvI_Owm.js";import"./PdfRenderer-BaZwbUQe.js";import"./index-BJVY7skd.js";import"./PdfViewer-BODpKVD-.js";import"./PdfViewer.module.css-_oZfXfq9.js";import"./PdfViewerAnnotationLayer-BmkDir_j.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_gxTBpm.js";import"./PdfViewerOutlineSidebar-DVAAR1IB.js";import"./PdfViewerSidebarHeader-B-7iWner.js";import"./useBaseUiId-CkXejorF.js";import"./useControlled-XWGO9wxj.js";import"./CompositeRoot-D0isgNre.js";import"./CompositeItem-DcxV0Jb0.js";import"./ToolbarRootContext-DwHWuq0m.js";import"./composite-B4I_gF8q.js";import"./svgIconContainer-JLeCzNrF.js";import"./PdfViewerSearchBar-DrV32HQi.js";import"./chevron-up-ZzwrgkYK.js";import"./chevron-down-Bndan05g.js";import"./cross-BSfVnQTo.js";import"./PdfViewerSidebar-BriVwaZi.js";import"./index-e8V1myKy.js";import"./index-t7JpEJ0Y.js";import"./index-B88WqkHq.js";import"./PdfViewerToolbar-BrPLhjSc.js";import"./Button-CoUSpzUJ.js";import"./chevron-right-CzH9aIS-.js";import"./Input-CRHPegXc.js";import"./search-Bf-ECdYs.js";import"./spin-BenkXuD6.js";import"./error-CRxd3DRb.js";import"./withOsdkMetrics-c0sdVgaD.js";import"./makeExternalStore-CIXu0gOP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
