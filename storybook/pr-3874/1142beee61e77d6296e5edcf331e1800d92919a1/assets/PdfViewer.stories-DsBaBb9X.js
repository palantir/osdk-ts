import{j as r,M as s}from"./iframe-BqWWYvNh.js";import{P as p}from"./pdf-viewer-CTYA9wSi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CralRrsX.js";import"./preload-helper-xbJFiFoV.js";import"./PdfViewer-Co1OAaKH.js";import"./index-CHmc-CZF.js";import"./BasePdfViewer-CEnYbw8B.js";import"./BasePdfViewer.module.css-C54tHR7J.js";import"./PdfViewerAnnotationLayer-Dlu_pXE2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yzJflWJT.js";import"./PdfViewerOutlineSidebar-4qtSQs5f.js";import"./PdfViewerSidebarHeader-b_8SiY6Z.js";import"./useBaseUiId-L7xZvVKI.js";import"./useControlled-3vqQ5CZv.js";import"./CompositeRoot-DIo4NwQ_.js";import"./CompositeItem-CC_bbvNo.js";import"./ToolbarRootContext-DXJ8TGiF.js";import"./composite-B43hsjOr.js";import"./svgIconContainer-D7PWuspg.js";import"./PdfViewerSearchBar-D59xcJ-P.js";import"./chevron-up-Cm6NdGjb.js";import"./chevron-down-DlgsXnWQ.js";import"./cross-BaCDbzQm.js";import"./PdfViewerSidebar-DoEkseuw.js";import"./index-i_nBIU9X.js";import"./index-CJAJ6Hem.js";import"./index-UQo3BLiH.js";import"./PdfViewerToolbar-BvkDb8s2.js";import"./Button-Drs29Umo.js";import"./chevron-right-0jp2z6PW.js";import"./Input-CFZ5X7h6.js";import"./search-BZ-aP0AE.js";import"./spin-BzCwgLzs.js";import"./error-B_VRdTx7.js";import"./withOsdkMetrics-BbVO6-6g.js";import"./makeExternalStore-Brum0TCo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
