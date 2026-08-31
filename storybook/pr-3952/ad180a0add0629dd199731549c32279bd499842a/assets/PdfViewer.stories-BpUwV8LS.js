import{j as r,M as s}from"./iframe-kjaGychq.js";import{P as p}from"./pdf-viewer-C6hS6bpF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cq5ypYaX.js";import"./preload-helper-Bl0HOLga.js";import"./PdfViewer-BMTbDGWA.js";import"./index-DjgQhnBF.js";import"./BasePdfViewer-BINVx2Gt.js";import"./BasePdfViewer.module.css-DTNIsWHh.js";import"./PdfViewerAnnotationLayer-Cwwtwq2-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DSXAR_z3.js";import"./PdfViewerOutlineSidebar-CK9bRoNv.js";import"./PdfViewerSidebarHeader-B9dMT2r_.js";import"./useBaseUiId-TjxpSWOe.js";import"./useControlled-Kf_hbsZS.js";import"./CompositeRoot-D2hjVNpA.js";import"./CompositeItem-HSXuyywu.js";import"./ToolbarRootContext-C2zyjXkq.js";import"./composite-BkSyEkbC.js";import"./svgIconContainer-CspjkWlr.js";import"./PdfViewerSearchBar-DKYl5FWV.js";import"./chevron-up-BERpJ10X.js";import"./chevron-down-CgpyX1i1.js";import"./cross-L2jMPbGH.js";import"./PdfViewerSidebar-DJpp7x0D.js";import"./index-CYDXmlsy.js";import"./index-D7cO7uk3.js";import"./index-6OM5s4An.js";import"./PdfViewerToolbar-s2_jpBJt.js";import"./Button-DXRU1CRA.js";import"./chevron-right-CLgLLIYX.js";import"./Input-DVuwFRa1.js";import"./search-CQrDhBIK.js";import"./spin-YIBZAfT5.js";import"./error-DkyVF_rd.js";import"./withOsdkMetrics-Dj5RKdqB.js";import"./makeExternalStore-DIRQhbnc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
