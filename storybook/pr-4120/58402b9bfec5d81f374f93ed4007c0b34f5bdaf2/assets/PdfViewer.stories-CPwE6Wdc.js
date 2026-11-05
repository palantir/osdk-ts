import{j as r,M as s}from"./iframe-BNVJywF1.js";import{P as p}from"./pdf-viewer-k9QUz4gT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BNL8eC8J.js";import"./preload-helper-DWuXY-GF.js";import"./PdfViewer-Dwk73wtQ.js";import"./index-C4EkKaF7.js";import"./BasePdfViewer-D4LBxlyo.js";import"./BasePdfViewer.module.css-D3K4xG7E.js";import"./PdfViewerAnnotationLayer-BxAxelBq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-nCWY3AJc.js";import"./PdfViewerOutlineSidebar-Cwml6HJV.js";import"./PdfViewerSidebarHeader-Bvsy9xM1.js";import"./useBaseUiId-Bpu1Oowx.js";import"./useControlled-B2RztQtr.js";import"./CompositeRoot-7lir25TR.js";import"./CompositeItem-BXGINh9c.js";import"./ToolbarRootContext-D79zfuWP.js";import"./composite-DiO_GxNw.js";import"./svgIconContainer-BcZCykGH.js";import"./PdfViewerSearchBar-Cf9ifctA.js";import"./chevron-up-7CzGWdJA.js";import"./chevron-down-D9ALcooV.js";import"./cross-CyiMpI_1.js";import"./PdfViewerSidebar-BubHKBt3.js";import"./index-BNfW4Vjp.js";import"./index-LJRfcAtw.js";import"./index-BQqTqN1m.js";import"./PdfViewerToolbar-B1LGs9SI.js";import"./Button-DMlU0zK6.js";import"./chevron-right-CU1M93dR.js";import"./Input-Da27pVQq.js";import"./search-C7WqGDQC.js";import"./spin-B6vBAqHo.js";import"./error-Kq-QRHM8.js";import"./withOsdkMetrics-BZA_bd9Y.js";import"./makeExternalStore-DfPTVVvN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
