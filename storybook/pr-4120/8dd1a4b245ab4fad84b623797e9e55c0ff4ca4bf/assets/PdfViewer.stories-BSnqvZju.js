import{j as r,M as s}from"./iframe-ixnzYDJA.js";import{P as p}from"./pdf-viewer-91SBaxHv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BycKSqqz.js";import"./preload-helper-DTj6niTD.js";import"./PdfViewer-CHYBD908.js";import"./index-CeyubrU3.js";import"./BasePdfViewer-Bp7e9uk7.js";import"./BasePdfViewer.module.css-Cz8MYcPv.js";import"./PdfViewerAnnotationLayer-Bl1aHtga.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwWNZppk.js";import"./PdfViewerOutlineSidebar-Ca92hFwf.js";import"./PdfViewerSidebarHeader-Brvyzoo1.js";import"./useBaseUiId-DzzMqJTn.js";import"./useControlled-h88iCaOy.js";import"./CompositeRoot-wRlMjC6K.js";import"./CompositeItem-DpqiGqIY.js";import"./ToolbarRootContext-CnuOChH-.js";import"./composite-CG-xrg6X.js";import"./svgIconContainer-CiY4wot1.js";import"./PdfViewerSearchBar-Cakn_uo6.js";import"./chevron-up-ZQaSaw5s.js";import"./chevron-down-BsEexgTp.js";import"./cross-diJiZoAA.js";import"./PdfViewerSidebar-BD6eUUAd.js";import"./index-DmvJAinh.js";import"./index-DDQRM4oh.js";import"./index-Dha3uIo_.js";import"./PdfViewerToolbar-DCqrD60K.js";import"./Button-CvHMYUNQ.js";import"./chevron-right-DfQIckyj.js";import"./Input-DVH5-_db.js";import"./search-BrEKKbX6.js";import"./spin-C2_fnFhB.js";import"./error-BPUNwXPy.js";import"./withOsdkMetrics-6vyCE_R0.js";import"./makeExternalStore-B3h5af1n.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
