import{j as r,M as s}from"./iframe-2J5FrKrg.js";import{P as p}from"./pdf-viewer-DgLm2ZzW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLsDC55e.js";import"./preload-helper-1KHcGwA2.js";import"./PdfViewer-CS9r9dmg.js";import"./index-DdQFZN0A.js";import"./BasePdfViewer-nFvo0P96.js";import"./BasePdfViewer.module.css-lz0uV5Qv.js";import"./PdfViewerAnnotationLayer-qd-IQhHh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DIbSk2i-.js";import"./PdfViewerOutlineSidebar-Brx5DAdt.js";import"./PdfViewerSidebarHeader-BhTG0376.js";import"./useBaseUiId-BvE4vbB0.js";import"./useControlled-BRuPwTnE.js";import"./CompositeRoot-CMzz373t.js";import"./CompositeItem-yS3I_oZm.js";import"./ToolbarRootContext-CzvAPQX5.js";import"./composite-BbUTZOvt.js";import"./svgIconContainer-C5u_HnP9.js";import"./PdfViewerSearchBar-Bw7VSx7Z.js";import"./chevron-up-BU8kh7eR.js";import"./chevron-down-DfTNwrQT.js";import"./cross-C3qjpKNn.js";import"./PdfViewerSidebar-DKDlofki.js";import"./index-CXuKETzB.js";import"./index-CoGmcCzI.js";import"./index-bAdLuKNp.js";import"./PdfViewerToolbar-DP5uPdBw.js";import"./Button-CtoNW8MW.js";import"./chevron-right-f0C589as.js";import"./Input-BEKgo6O6.js";import"./search-fHZBvfeM.js";import"./spin-CX9c61aD.js";import"./error-55u3yHQS.js";import"./withOsdkMetrics-4gfK0oWP.js";import"./makeExternalStore-B7uL5LnD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
