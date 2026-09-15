import{j as r,M as s}from"./iframe-BlKCTUed.js";import{P as p}from"./pdf-viewer-BhBy-BoF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CfgWBH-C.js";import"./preload-helper-BUGYiWCP.js";import"./PdfViewer-CmncbZCS.js";import"./index-CI0skb4B.js";import"./BasePdfViewer-DWTmTDNO.js";import"./BasePdfViewer.module.css-BPCnBBoN.js";import"./PdfViewerAnnotationLayer-CehjDM1c.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2T79Y5t.js";import"./PdfViewerOutlineSidebar-BOpOMxLQ.js";import"./PdfViewerSidebarHeader-BYkEST8M.js";import"./useBaseUiId-DkP_imTM.js";import"./useControlled-7Fk4n3DI.js";import"./CompositeRoot-CHoCXPs8.js";import"./CompositeItem-CV5UwX2b.js";import"./ToolbarRootContext-BHdJXOoh.js";import"./composite-DiiB6odo.js";import"./svgIconContainer-1UB6FZGc.js";import"./PdfViewerSearchBar-BgV2oTjG.js";import"./chevron-up-CgpGYa5r.js";import"./chevron-down-FWs3P9jd.js";import"./cross-CqaO5DBE.js";import"./PdfViewerSidebar-1ulrz3TU.js";import"./index-Cg0fRxTo.js";import"./index-DxXrW0wp.js";import"./index-DDp_OGDu.js";import"./PdfViewerToolbar-DTsn6SOR.js";import"./Button-3Efar3GG.js";import"./chevron-right-Cfa0ujWn.js";import"./Input-B33yNZZn.js";import"./search-CVcVTR0T.js";import"./spin-ews_yTqW.js";import"./error-D-1ezCIE.js";import"./withOsdkMetrics-ClE-4wO4.js";import"./makeExternalStore-D5c3nlfz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
