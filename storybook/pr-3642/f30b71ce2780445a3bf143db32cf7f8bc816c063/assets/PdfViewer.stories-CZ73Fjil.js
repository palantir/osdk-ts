import{j as r,M as s}from"./iframe-PR70Nfar.js";import{P as p}from"./pdf-viewer-DdtCTPH7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-wXCrBjIk.js";import"./preload-helper-1wD2feua.js";import"./PdfRenderer-hLi-0kdR.js";import"./index-Cy9aqFKo.js";import"./PdfViewer-DTUGjTP8.js";import"./PdfViewer.module.css-BTI39ZQF.js";import"./PdfViewerAnnotationLayer-BOv41rD1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ClP6QS8Q.js";import"./PdfViewerOutlineSidebar-B9k-lqoj.js";import"./PdfViewerSidebarHeader-NtiW8bJp.js";import"./useBaseUiId-F1N6rQmT.js";import"./useControlled-Bc9n7-zI.js";import"./CompositeRoot-KLtBgmGd.js";import"./CompositeItem-DSDXjTJN.js";import"./ToolbarRootContext-B02N7MTi.js";import"./composite-EvjKCf2c.js";import"./svgIconContainer-DKlv6AER.js";import"./PdfViewerSearchBar-IEDow3EQ.js";import"./chevron-up-DAHrK3-h.js";import"./chevron-down-VPL4wmWd.js";import"./cross-DxOZXdcd.js";import"./PdfViewerSidebar-l0MpKBCx.js";import"./index-BBVVzuz8.js";import"./index-Bj2z0IRA.js";import"./index-CWco9Po_.js";import"./PdfViewerToolbar-ULyD694s.js";import"./Button-UA7F1wyp.js";import"./chevron-right-Ux4oz5Mf.js";import"./Input-C4A_k7Mc.js";import"./search-CHBS7e9v.js";import"./spin-DAvFjGyX.js";import"./error-3hbxlX1d.js";import"./withOsdkMetrics-GqCxNbCK.js";import"./makeExternalStore-BWwdQGLN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
