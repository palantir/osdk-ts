import{j as r,M as s}from"./iframe-DA0LK0PO.js";import{P as p}from"./pdf-viewer-BWGiumHp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DklEhwri.js";import"./preload-helper-NpZyLPMJ.js";import"./PdfRenderer-B3GBfMVQ.js";import"./index-BWkayCb_.js";import"./PdfViewer-CtKUVs0h.js";import"./PdfViewer.module.css-Bl1hzvOZ.js";import"./PdfViewerAnnotationLayer-CrrPYwV2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3grprYG.js";import"./PdfViewerOutlineSidebar-y9vDQu6-.js";import"./PdfViewerSidebarHeader-Bbfc0DxU.js";import"./useBaseUiId-Dhz76j27.js";import"./useControlled-DdZqejsA.js";import"./CompositeRoot-BNawdIIM.js";import"./CompositeItem-C1QzPodC.js";import"./ToolbarRootContext-CVq3j2Rc.js";import"./composite-DnxsldG3.js";import"./svgIconContainer-qs29eHlL.js";import"./PdfViewerSearchBar-lQEmHyMN.js";import"./chevron-up-F8cTIVMp.js";import"./chevron-down-BrzTXwEl.js";import"./cross-BFH9F46y.js";import"./PdfViewerSidebar-DMOBhcAI.js";import"./index-D51uC2Zm.js";import"./index-D7KSWWZf.js";import"./index-DmJjh6o3.js";import"./PdfViewerToolbar-CsQvzuJb.js";import"./Button-CQixxqzR.js";import"./chevron-right-CG5bljW2.js";import"./Input-CeBvJaDe.js";import"./search-vMtqOwhS.js";import"./spin-CvLqVPbw.js";import"./error-emH52XYg.js";import"./withOsdkMetrics-BWu_mDRQ.js";import"./makeExternalStore-BAUY6IV_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
