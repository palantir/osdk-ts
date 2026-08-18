import{j as r,M as s}from"./iframe-ZXzoHhiH.js";import{P as p}from"./pdf-viewer-BP_Gwk9g.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-9qUsAP3s.js";import"./preload-helper-DhsFpWsY.js";import"./PdfViewer-C67MQsBW.js";import"./index-D6JbpjtM.js";import"./BasePdfViewer-jMby5jFx.js";import"./BasePdfViewer.module.css-CRC0kVr_.js";import"./PdfViewerAnnotationLayer-DYzcA8OH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BeRtAscO.js";import"./PdfViewerOutlineSidebar-C54ntD7d.js";import"./PdfViewerSidebarHeader-DFfP1OhL.js";import"./useBaseUiId-BEvQDTwS.js";import"./useControlled-BJAlfQKj.js";import"./CompositeRoot-DmzpSx4Z.js";import"./CompositeItem-SvjwkO0W.js";import"./ToolbarRootContext-BChHSQ55.js";import"./composite-DpxxpdsF.js";import"./svgIconContainer-CyxxRlZb.js";import"./PdfViewerSearchBar-CvP1bpNR.js";import"./chevron-up-CmCzvOq0.js";import"./chevron-down-CRmz9PAw.js";import"./cross-BDa3Cqh0.js";import"./PdfViewerSidebar-BkrsBfjc.js";import"./index-BgW_HH62.js";import"./index-C4EsRBVV.js";import"./index-MwZjXXYU.js";import"./PdfViewerToolbar-DMuEJqpe.js";import"./Button-DhRAKbLo.js";import"./chevron-right-CMl9557n.js";import"./Input-CwIgSFvy.js";import"./search-DoYXdjWJ.js";import"./spin-CUyQYWMF.js";import"./error-CcJwbQNy.js";import"./withOsdkMetrics-rJG37D1j.js";import"./makeExternalStore-BvyDSClC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
