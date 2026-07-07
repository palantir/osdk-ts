import{j as r,M as s}from"./iframe-dALU4AfQ.js";import{P as p}from"./pdf-viewer-DOExn_cR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-GrSdwIKp.js";import"./preload-helper-DpS_MLUE.js";import"./PdfRenderer-01dUwIPl.js";import"./index-CU3JgPIC.js";import"./PdfViewer-0Qmw_VSI.js";import"./PdfViewer.module.css-BAJVzU1T.js";import"./PdfViewerAnnotationLayer-BuQ3J8AP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkbjUBK3.js";import"./PdfViewerOutlineSidebar-XrhYqhg_.js";import"./PdfViewerSidebarHeader-B2bR2tAv.js";import"./useBaseUiId-CxSApDEB.js";import"./useControlled-DivsrGF3.js";import"./CompositeRoot-D-WiEllq.js";import"./CompositeItem-BipMqJf_.js";import"./ToolbarRootContext-DIs6dBXc.js";import"./composite-BljTWkKn.js";import"./svgIconContainer-Ddk9fv3a.js";import"./PdfViewerSearchBar-By9s6BeC.js";import"./chevron-up-Bn1CaKyG.js";import"./chevron-down-cBiwYKBC.js";import"./cross-BiLh0a3j.js";import"./PdfViewerSidebar-CSSE9S9u.js";import"./index-C23YgWvJ.js";import"./index-C47uLrCj.js";import"./index-CRIU7bSD.js";import"./PdfViewerToolbar-BmgjjUkx.js";import"./Button-CMB_eZJW.js";import"./chevron-right-D-8Q4jah.js";import"./Input-2LvR1YSj.js";import"./search-DgiNbGHJ.js";import"./spin-D14dO2wl.js";import"./error-Chw1qKWQ.js";import"./withOsdkMetrics-AFJE7SfI.js";import"./makeExternalStore-CbuvJbvB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
