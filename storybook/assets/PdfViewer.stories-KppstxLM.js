import{j as r,M as s}from"./iframe-DnkZBU_s.js";import{P as p}from"./pdf-viewer-DemWOCWN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BM7jKQdA.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-Dn6NXKVY.js";import"./index-Twl2Yec2.js";import"./BasePdfViewer-fk6NNtMn.js";import"./BasePdfViewer.module.css-9Nd3KkWV.js";import"./PdfViewerAnnotationLayer-BkjiXlAn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CWtBX8qR.js";import"./PdfViewerOutlineSidebar-p02tRckR.js";import"./PdfViewerSidebarHeader-Dq4g6SL3.js";import"./useBaseUiId-zN2OIme-.js";import"./useControlled-Bf8g-fcX.js";import"./CompositeRoot-CuE3nohy.js";import"./CompositeItem-CnMbPbIm.js";import"./ToolbarRootContext-C8MimhOM.js";import"./composite-C8UkqdZX.js";import"./svgIconContainer-Q5pL_kyU.js";import"./PdfViewerSearchBar-DqdrZc5y.js";import"./chevron-up-BCmmAHWh.js";import"./chevron-down-0w-qoQFW.js";import"./cross-VJ1Xhfzd.js";import"./PdfViewerSidebar-UO07ghV-.js";import"./index-DxCMtj6T.js";import"./index-e48OPfBl.js";import"./index-B-feRM5a.js";import"./PdfViewerToolbar-BWkxodB6.js";import"./Button-DhKykdrC.js";import"./chevron-right-fo405Fmj.js";import"./Input-kebRx2SD.js";import"./search-Dr69VxcO.js";import"./spin-C5_OFnNc.js";import"./error-DnS223r_.js";import"./withOsdkMetrics-CS0c_ats.js";import"./makeExternalStore-C3h3EPrK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
