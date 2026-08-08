import{j as r,M as s}from"./iframe-DwwwCC6C.js";import{P as p}from"./pdf-viewer-D95EhVaj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ueDcvchB.js";import"./preload-helper-CHeXMtL9.js";import"./PdfRenderer-B3nRVvpM.js";import"./index-Bo0Iv6FV.js";import"./PdfViewer-BK4uL0tN.js";import"./PdfViewer.module.css-e1Gcl8mX.js";import"./PdfViewerAnnotationLayer-9KCyeyYy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_y8mk_Y.js";import"./PdfViewerOutlineSidebar-DlRdgX6J.js";import"./PdfViewerSidebarHeader-DpDxG1tk.js";import"./useBaseUiId-CZ9XDqRm.js";import"./useControlled-BcVv-ZTG.js";import"./CompositeRoot-b8knT9KI.js";import"./CompositeItem-DAp3hpF7.js";import"./ToolbarRootContext-CaO_OTwi.js";import"./composite-DfMqq-fG.js";import"./svgIconContainer-CSoVrkYq.js";import"./PdfViewerSearchBar-OYwLaccj.js";import"./chevron-up-DzkN7RrE.js";import"./chevron-down-7IYAudlr.js";import"./cross-DX-af3rE.js";import"./PdfViewerSidebar-Dvz9wG6b.js";import"./index-BxuS-qLp.js";import"./index-BXI3vB4C.js";import"./index-C52ZOjUy.js";import"./PdfViewerToolbar-Dl8CIuMQ.js";import"./Button-BCCIcLrr.js";import"./chevron-right-BKEEYJad.js";import"./Input-BhNFMKKD.js";import"./search-BnyzrUJU.js";import"./spin-y1SFZ8WQ.js";import"./error-B-KG3RMb.js";import"./withOsdkMetrics-CL_C78R_.js";import"./makeExternalStore-Dx2-l_X3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
