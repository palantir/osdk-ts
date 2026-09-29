import{j as r,M as s}from"./iframe-CZutwAHo.js";import{P as p}from"./pdf-viewer-Dqag8crj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BU36pOBe.js";import"./preload-helper-Cn3SJHww.js";import"./PdfViewer-CDu7EKjW.js";import"./index-CppgNV0M.js";import"./BasePdfViewer-CJ5mTbmg.js";import"./BasePdfViewer.module.css-QoniOcjE.js";import"./PdfViewerAnnotationLayer-D7ks1G5v.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFH1kdNg.js";import"./PdfViewerOutlineSidebar-DQtFlS8I.js";import"./PdfViewerSidebarHeader-Du4QaCj4.js";import"./useBaseUiId-CtEICjky.js";import"./useControlled-DwVRdNhF.js";import"./CompositeRoot-C8u2mIP6.js";import"./CompositeItem-DdZNAqnt.js";import"./ToolbarRootContext-FQPAQT5c.js";import"./composite-mcUSxhXz.js";import"./svgIconContainer-CmX1H1mx.js";import"./PdfViewerSearchBar-BOajyowB.js";import"./chevron-up-Do7i4imw.js";import"./chevron-down--5qYG9Xz.js";import"./cross-D02obdgD.js";import"./PdfViewerSidebar-CBOw9D8T.js";import"./index-io1wfiP6.js";import"./index-B50GZKUg.js";import"./index-2k1Tvx5C.js";import"./PdfViewerToolbar-D6bwXwRz.js";import"./Button-sSK8eFI-.js";import"./chevron-right-ZQQVd5_L.js";import"./Input-oDj_0Z0d.js";import"./search-C59PF3w9.js";import"./spin-DsPd2PjO.js";import"./error-CZtG4Hsy.js";import"./withOsdkMetrics-Bw7lmz7K.js";import"./makeExternalStore-CCR0CM05.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
