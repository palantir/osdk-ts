import{j as r,M as s}from"./iframe-BwUhzK2k.js";import{P as p}from"./pdf-viewer-BL8cnDuo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CXcvSGCB.js";import"./preload-helper-uUx3RRbN.js";import"./PdfRenderer-Dz2PcOda.js";import"./index-Ba16A1za.js";import"./PdfViewer-BCFlBZPP.js";import"./PdfViewer.module.css-DMkNump4.js";import"./PdfViewerAnnotationLayer-CFzZVbWE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2bpFiI-.js";import"./PdfViewerOutlineSidebar-l2QA_0xN.js";import"./PdfViewerSidebarHeader-DbMar1Ie.js";import"./useBaseUiId-DineJbLN.js";import"./useControlled-45iVGC9D.js";import"./CompositeRoot-Cqq9Fe2_.js";import"./CompositeItem-elb8_lc7.js";import"./ToolbarRootContext-rNb_ILvC.js";import"./composite-S9q_D-rs.js";import"./svgIconContainer-VI87NXz9.js";import"./PdfViewerSearchBar-DXtR5UuU.js";import"./chevron-up-CeWZpVju.js";import"./chevron-down-pY0ux560.js";import"./cross-CBynaPz7.js";import"./PdfViewerSidebar-Cy7Ssqln.js";import"./index-Bikbo-cd.js";import"./index-CQks9Ta9.js";import"./index-CoqzvABQ.js";import"./PdfViewerToolbar-CGFl98wy.js";import"./Button-DwfxyI9K.js";import"./chevron-right-j9BILojw.js";import"./Input-DP59Qchy.js";import"./search-BYjYe9mk.js";import"./spin-Bh2C6VtD.js";import"./error-Cb3O1HD7.js";import"./withOsdkMetrics-DQFQSEx0.js";import"./makeExternalStore-YPGJ8BYC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
