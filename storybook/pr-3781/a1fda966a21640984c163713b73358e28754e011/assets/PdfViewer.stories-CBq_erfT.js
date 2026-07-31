import{j as r,M as s}from"./iframe-k4q2yqwB.js";import{P as p}from"./pdf-viewer-CRDNX32T.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DVJ3BLE6.js";import"./preload-helper-CcFy7ru6.js";import"./PdfRenderer-DPpbrGvi.js";import"./index-BoJiE0EV.js";import"./PdfViewer-DmkE7-aS.js";import"./PdfViewer.module.css-CD-AYk7H.js";import"./PdfViewerAnnotationLayer-DGsma5VY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBt6VCqD.js";import"./PdfViewerOutlineSidebar-YxiedpCv.js";import"./PdfViewerSidebarHeader-DUZlk1np.js";import"./useBaseUiId-C7Hv9Tzg.js";import"./useControlled-BecCn6K2.js";import"./CompositeRoot-BJSMujTj.js";import"./CompositeItem-ChG7XBVE.js";import"./ToolbarRootContext-B_DA6t17.js";import"./composite-Bm-k795N.js";import"./svgIconContainer-G2Q9WiIr.js";import"./PdfViewerSearchBar-CwUyb2lw.js";import"./chevron-up-DT13lJVF.js";import"./chevron-down-pLPxEt1n.js";import"./cross-BSjrA-hj.js";import"./PdfViewerSidebar-laSYg_Fn.js";import"./index-C9wyccr-.js";import"./index-fgdVt0KH.js";import"./index-Dm0Rhw7E.js";import"./PdfViewerToolbar-BSsWzobG.js";import"./Button-CnDoyZ08.js";import"./chevron-right-BpJ_WC-0.js";import"./Input-D1rCohyt.js";import"./search-29u5dNu1.js";import"./spin-D6l1B1nW.js";import"./error-ClYvRrnM.js";import"./withOsdkMetrics-qyQgOFT1.js";import"./makeExternalStore-Ck9Fwx-s.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
