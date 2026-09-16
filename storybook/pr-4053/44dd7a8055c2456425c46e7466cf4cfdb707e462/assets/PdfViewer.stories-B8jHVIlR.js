import{j as r,M as s}from"./iframe-B151MY39.js";import{P as p}from"./pdf-viewer-BtkdpbQS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C3qWxRXE.js";import"./preload-helper-DjBvu03A.js";import"./PdfViewer-DkdlC48y.js";import"./index-D4Ktja5K.js";import"./BasePdfViewer-Dtz6czZ4.js";import"./BasePdfViewer.module.css-DdltRW5I.js";import"./PdfViewerAnnotationLayer-BWJR5KZy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-VzJlRO.js";import"./PdfViewerOutlineSidebar-C2VuTpmc.js";import"./PdfViewerSidebarHeader-DIqwdi81.js";import"./useBaseUiId-B-w6rIot.js";import"./useControlled-hVx5IBvW.js";import"./CompositeRoot-ECSxg4XD.js";import"./CompositeItem-DsqHLl_J.js";import"./ToolbarRootContext-CRksDvpW.js";import"./composite-DsqMStnD.js";import"./svgIconContainer-BLEuJ5z1.js";import"./PdfViewerSearchBar-wMeRoils.js";import"./chevron-up-C-piif9x.js";import"./chevron-down-C7ZT7QCO.js";import"./cross-DQu9BvYN.js";import"./PdfViewerSidebar-luQeYphb.js";import"./index-BUZnamy4.js";import"./index-_YRtSbhr.js";import"./index-K9vP9MSb.js";import"./PdfViewerToolbar-C6CXQnM2.js";import"./Button-D77_sTH4.js";import"./chevron-right-C-5jBIAT.js";import"./Input-BdL2sxgE.js";import"./search-Cy5Pb8DF.js";import"./spin-DBGrFN1g.js";import"./error-BXj6iPTB.js";import"./withOsdkMetrics-Bw9JRCxa.js";import"./makeExternalStore-DSGfAMdD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
