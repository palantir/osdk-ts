import{j as r,M as s}from"./iframe-CHlNqADV.js";import{P as p}from"./pdf-viewer-D9E5L1_b.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B4eWmUmM.js";import"./preload-helper-ChuInVZg.js";import"./PdfViewer-CDitf1-P.js";import"./index-Bf2fBgJU.js";import"./BasePdfViewer-Dtipp2ON.js";import"./BasePdfViewer.module.css-B163JqFv.js";import"./PdfViewerAnnotationLayer-C36TF9xT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5bpGcYn.js";import"./PdfViewerOutlineSidebar-JLOs5uHn.js";import"./PdfViewerSidebarHeader-s6yChesl.js";import"./useBaseUiId-DYvtoeJl.js";import"./useControlled-D7wM_LXO.js";import"./CompositeRoot-BKipKAuw.js";import"./CompositeItem-Cfdppx_k.js";import"./ToolbarRootContext-CUs10wim.js";import"./composite-DktMQB3d.js";import"./svgIconContainer-BDP_fhkF.js";import"./PdfViewerSearchBar-CWN9CFSj.js";import"./chevron-up-Cmsy70o1.js";import"./chevron-down-DJ0NZq7q.js";import"./cross-CuFYXv7r.js";import"./PdfViewerSidebar-CrGBNS58.js";import"./index-BCBHNrII.js";import"./index-ChdJCR6a.js";import"./index-A-SGLt67.js";import"./PdfViewerToolbar-J3eqBJWm.js";import"./Button-C2n7qnnT.js";import"./chevron-right-Mnx7BwJ0.js";import"./Input-CRkTA9js.js";import"./search-kgQIq9W2.js";import"./spin-B2CBpnGa.js";import"./error-B_eFesCr.js";import"./withOsdkMetrics-Dhrl7hco.js";import"./makeExternalStore-C006dyrV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
