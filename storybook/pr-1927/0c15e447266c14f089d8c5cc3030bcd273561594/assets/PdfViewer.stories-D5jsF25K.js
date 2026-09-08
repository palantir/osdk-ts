import{j as r,M as s}from"./iframe-QQ9Fs_tc.js";import{P as p}from"./pdf-viewer-NAFPOvKH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CeOhACj5.js";import"./preload-helper-B4fYryDC.js";import"./PdfViewer-BOuDXZvG.js";import"./index-DkrQDtS2.js";import"./BasePdfViewer-ChEwKP4K.js";import"./BasePdfViewer.module.css-DTGmDYDW.js";import"./PdfViewerAnnotationLayer-D93FV0Lv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9ISynJZ.js";import"./PdfViewerOutlineSidebar-Cb9x483L.js";import"./PdfViewerSidebarHeader-Bhyoexd7.js";import"./useBaseUiId-1r5VJFrp.js";import"./useControlled-36aB-sGp.js";import"./CompositeRoot-B0X_7QWj.js";import"./CompositeItem-Bl0uQaQG.js";import"./ToolbarRootContext-YsoXVLyq.js";import"./composite-2UwVI9RX.js";import"./svgIconContainer-DTxq_i5h.js";import"./PdfViewerSearchBar-CWWHwluC.js";import"./chevron-up-Dba1kWyK.js";import"./chevron-down-Bgnu4jc9.js";import"./cross-DmvM--6P.js";import"./PdfViewerSidebar-BRBNBbjP.js";import"./index-C32oDOmG.js";import"./index-D63-R6ut.js";import"./index-DsjkNNfA.js";import"./PdfViewerToolbar-RbawhQ5G.js";import"./Button-DJziOx5S.js";import"./chevron-right-Ch9DS3Vq.js";import"./Input-CucLW42P.js";import"./search-BSq4Mlrv.js";import"./spin-B5WqDu4B.js";import"./error-DTTckfDx.js";import"./withOsdkMetrics-MEpQgkcH.js";import"./makeExternalStore-kQ-0-i1V.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
