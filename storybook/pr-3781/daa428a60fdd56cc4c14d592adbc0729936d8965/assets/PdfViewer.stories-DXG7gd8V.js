import{j as r,M as s}from"./iframe-CdXRgAZ5.js";import{P as p}from"./pdf-viewer-DB3794bW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DmdsKuZY.js";import"./preload-helper-CitRRdiQ.js";import"./PdfViewer-AOchmxnJ.js";import"./index-D9vry920.js";import"./BasePdfViewer-D7X0LH_j.js";import"./BasePdfViewer.module.css-DCWh751O.js";import"./PdfViewerAnnotationLayer-DENoeKhC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Lg5KddqB.js";import"./PdfViewerOutlineSidebar-CFAjjnoD.js";import"./PdfViewerSidebarHeader-CPSWowf8.js";import"./useBaseUiId-C4Byj8B0.js";import"./useControlled-DSrBRiZ_.js";import"./CompositeRoot-DZX0Jji2.js";import"./CompositeItem-DuqUtFNG.js";import"./ToolbarRootContext-D-BSwljH.js";import"./composite-in5-wL5z.js";import"./svgIconContainer-DDpGR0K9.js";import"./PdfViewerSearchBar-jOek5ODj.js";import"./chevron-up-CxKtBBt3.js";import"./chevron-down-BymEN6Iw.js";import"./cross-BSpE7ik9.js";import"./PdfViewerSidebar-DTK51wYI.js";import"./index-B4exONM0.js";import"./index-EqByydDb.js";import"./index-ltWxUmJy.js";import"./PdfViewerToolbar-CgdeEnHj.js";import"./Button-vMf8G5_Y.js";import"./chevron-right-9A09H4VR.js";import"./Input-CSHvQsfp.js";import"./search-CBule6p8.js";import"./spin-GE-bpMya.js";import"./error-DZGmcMd6.js";import"./withOsdkMetrics-DQE_UW0r.js";import"./makeExternalStore-D0rHK4H4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
