import{j as r,M as s}from"./iframe-BfqPDKql.js";import{P as p}from"./pdf-viewer-BylFrPQL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BivRuxaY.js";import"./preload-helper-CjR-GsqS.js";import"./PdfViewer-Mmkhg56z.js";import"./index-3BLY6arO.js";import"./BasePdfViewer-RGNXO4hU.js";import"./BasePdfViewer.module.css-BiTWg3TW.js";import"./PdfViewerAnnotationLayer-DB09nWlY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-53Izpvvx.js";import"./PdfViewerOutlineSidebar-BZdt-zVe.js";import"./PdfViewerSidebarHeader-Dq6koysl.js";import"./useBaseUiId-C-9mkB40.js";import"./useControlled-1Az1d9DS.js";import"./CompositeRoot-DjhbARAQ.js";import"./CompositeItem-DBfMuqlH.js";import"./ToolbarRootContext-DxevvPzB.js";import"./composite-C5EU-6hJ.js";import"./svgIconContainer-Bvpn0iJ8.js";import"./PdfViewerSearchBar-CMIq8wf4.js";import"./chevron-up-DPmw-yZK.js";import"./chevron-down-CONoZixg.js";import"./cross-C4uG_0m-.js";import"./PdfViewerSidebar-BbF6RxcK.js";import"./index-Cg3apMKp.js";import"./index-CCUvb36V.js";import"./index-CdNizhnG.js";import"./PdfViewerToolbar-CUl1u3dO.js";import"./Button-jRfE62iM.js";import"./chevron-right-URti85mz.js";import"./Input-BwQuq_Q1.js";import"./search-DVeWM__c.js";import"./spin-B0tBCuMK.js";import"./error-BqCEo41c.js";import"./withOsdkMetrics-B6N8SPwA.js";import"./makeExternalStore-D6RKhZ7b.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
