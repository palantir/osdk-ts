import{j as r,M as s}from"./iframe-DZOL1fAY.js";import{P as p}from"./pdf-viewer-BqS4n6RO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-hgfGD5rn.js";import"./preload-helper-3H1iqF3g.js";import"./PdfViewer-B4TOfG7o.js";import"./index-Dn4isnDY.js";import"./BasePdfViewer-Bv2Whehn.js";import"./BasePdfViewer.module.css-CAjhyrFp.js";import"./PdfViewerAnnotationLayer-Co5gs2Bv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DI0JDH7c.js";import"./PdfViewerOutlineSidebar-BejG2kzP.js";import"./PdfViewerSidebarHeader-ATEmPJ8f.js";import"./useBaseUiId-Cvxi0iS7.js";import"./useControlled-DRhy3GQv.js";import"./CompositeRoot-CHI0PE7n.js";import"./CompositeItem-BqTSWS-d.js";import"./ToolbarRootContext-BSvTmWDd.js";import"./composite-T0X3QkXF.js";import"./svgIconContainer-B6vD6Ghc.js";import"./PdfViewerSearchBar-CgCKwjCx.js";import"./chevron-up-CabrtJdC.js";import"./chevron-down-BzBCSFbA.js";import"./cross-86m0rjnN.js";import"./PdfViewerSidebar-BK83a1q6.js";import"./index-COxjItVW.js";import"./index-C11ji0i2.js";import"./index-DZ_Yay9Y.js";import"./PdfViewerToolbar-1mVd4__1.js";import"./Button-DsiRqDn-.js";import"./chevron-right-BTTqfuIS.js";import"./Input-VXijC7GT.js";import"./search-B2NPYcqq.js";import"./spin-CpqDcXoQ.js";import"./error-DjEgQQ85.js";import"./withOsdkMetrics-2IcQnEf1.js";import"./makeExternalStore-BS_yphcb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
