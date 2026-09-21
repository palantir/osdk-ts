import{j as r,M as s}from"./iframe-BCFKBwNO.js";import{P as p}from"./pdf-viewer-CAFqT7tQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DYDkiKr1.js";import"./preload-helper-Brv957vn.js";import"./PdfViewer-YoeWp9YK.js";import"./index-D-Y-JsBx.js";import"./BasePdfViewer-wWHosDXG.js";import"./BasePdfViewer.module.css-6CYRExjT.js";import"./PdfViewerAnnotationLayer-BPVulGf2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3FO-MqQ.js";import"./PdfViewerOutlineSidebar-BLDmX6RZ.js";import"./PdfViewerSidebarHeader-BM0uKTxH.js";import"./useBaseUiId-DhWedzoZ.js";import"./useControlled-BM_Yur5U.js";import"./CompositeRoot-MsMElb_O.js";import"./CompositeItem-DrKg3RCP.js";import"./ToolbarRootContext-BgwM3bO2.js";import"./composite-r28fX4bz.js";import"./svgIconContainer-DJ-tdzCi.js";import"./PdfViewerSearchBar-DKzqhuCY.js";import"./chevron-up-Dt8EL83b.js";import"./chevron-down-815YMHZK.js";import"./cross-COb2-6gb.js";import"./PdfViewerSidebar-DMi3twEt.js";import"./index-DJgWECAA.js";import"./index-RhQjfChg.js";import"./index-CI-GDb84.js";import"./PdfViewerToolbar-BSL8qXIt.js";import"./Button-DgFFjm2U.js";import"./chevron-right-CYO-Lj3c.js";import"./Input-DblIYKZB.js";import"./search-cuvXpLTw.js";import"./spin-BOANWyXx.js";import"./error-DLaayWkN.js";import"./withOsdkMetrics-DwU6v8eQ.js";import"./makeExternalStore-Bhr-T-us.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
