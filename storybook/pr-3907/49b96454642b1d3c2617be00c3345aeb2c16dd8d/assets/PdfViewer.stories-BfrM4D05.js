import{j as r,M as s}from"./iframe-DYBY68Q5.js";import{P as p}from"./pdf-viewer-BaqcokR-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DxYEG7qE.js";import"./preload-helper-6jdikgud.js";import"./PdfViewer-DEqNbeac.js";import"./index-DYr8tZfC.js";import"./BasePdfViewer-CWNIB8qj.js";import"./BasePdfViewer.module.css-oCuDpFUL.js";import"./PdfViewerAnnotationLayer-QYwV6D1t.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BQezbJzI.js";import"./PdfViewerOutlineSidebar-Wztj7YPa.js";import"./PdfViewerSidebarHeader-BhTfiT08.js";import"./useBaseUiId-BCwirq_0.js";import"./useControlled-DGyihqNn.js";import"./CompositeRoot-CAkyVDu5.js";import"./CompositeItem-C1KECpIa.js";import"./ToolbarRootContext-sggHk5XS.js";import"./composite-DPIoPlux.js";import"./svgIconContainer-DVOm9YM-.js";import"./PdfViewerSearchBar-Bb5PfDQk.js";import"./chevron-up-DgpLTP_Y.js";import"./chevron-down-DsJHih2n.js";import"./cross-D1pY89Tf.js";import"./PdfViewerSidebar-0wcLDj-p.js";import"./index-Cn62hcUq.js";import"./index-DC69q5Jt.js";import"./index-wVZvTCZs.js";import"./PdfViewerToolbar-DFwZkTHT.js";import"./Button-Ckf62jzo.js";import"./chevron-right-D_jOZCVC.js";import"./Input-CeNaPmq7.js";import"./search-BT_TSpdS.js";import"./spin-CIkh6pUU.js";import"./error-CiemvQ24.js";import"./withOsdkMetrics-BwDH-iYP.js";import"./makeExternalStore-B1pouQLK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
