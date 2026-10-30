import{j as r,M as s}from"./iframe-D3mBTfqd.js";import{P as p}from"./pdf-viewer-bAHwzymk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cb0pmeHV.js";import"./preload-helper-RhNKQ2Pa.js";import"./PdfViewer-BwMpMzhb.js";import"./index-DCS7OdDx.js";import"./BasePdfViewer-BYC9-gMr.js";import"./BasePdfViewer.module.css-wqOOar1o.js";import"./PdfViewerAnnotationLayer-oAP-rAhi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dtj-KH7K.js";import"./PdfViewerOutlineSidebar-CijpWv0O.js";import"./PdfViewerSidebarHeader-Di24vlIG.js";import"./useBaseUiId-hynuT-IP.js";import"./useControlled-k1vl1-pB.js";import"./CompositeRoot-Bj57iOM5.js";import"./CompositeItem-20RMszAx.js";import"./ToolbarRootContext-DKBBgUjn.js";import"./composite-BE_H9BAX.js";import"./svgIconContainer-CwmlAS-2.js";import"./PdfViewerSearchBar-CJjdQDTY.js";import"./chevron-up-Cb_MMUkk.js";import"./chevron-down-CTo4p9pl.js";import"./cross-Cs7mtZ7v.js";import"./PdfViewerSidebar-D43YwBqd.js";import"./index-BL026QrW.js";import"./index-YNTwsynL.js";import"./index-Ch5DNylK.js";import"./PdfViewerToolbar-xlz1_Cy2.js";import"./Button-B0c6HnvU.js";import"./chevron-right-kge-ua3B.js";import"./Input-eLGPTS9w.js";import"./search-CxMCC1Wj.js";import"./spin-DUrYft9R.js";import"./error-ifBqoXQc.js";import"./withOsdkMetrics-Crg_ITzK.js";import"./makeExternalStore-D3BDuZOH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
